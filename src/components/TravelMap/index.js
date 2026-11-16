import React, {memo, useId, useRef, useState} from 'react';
import worldData from './countries.json';
import {places, placeLabel} from './places.mjs';
import {MAP_WIDTH, MIN_WIDTH, WORLD_VIEW, constrainView, focusView, project, regions, zoomView} from './mapUtils.mjs';
import styles from './styles.module.css';

const {countries} = worldData;
const visitedCountries = new Set(places.map(place => place.code));
const countryGroups = [...new Set(places.map(place => place.country))]
  .sort((a, b) => a === 'United States' ? -1 : b === 'United States' ? 1 : a.localeCompare(b))
  .map(name => ({name, destinations: places.filter(place => place.country === name)}));

const CountryLayer = memo(function CountryLayer() {
  return (
    <g aria-hidden="true" className={styles.countries}>
      {countries.map(country => (
        <path key={country.code} d={country.path}
          className={visitedCountries.has(country.code) ? styles.visitedCountry : undefined}
          vectorEffect="non-scaling-stroke">
          <title>{country.name}{visitedCountries.has(country.code) ? ' — visited' : ''}</title>
        </path>
      ))}
    </g>
  );
});

export default function TravelMap() {
  const titleId = useId();
  const hintId = useId();
  const [view, setView] = useState(WORLD_VIEW);
  const [region, setRegion] = useState('world');
  const [selectedId, setSelectedId] = useState(null);
  const panel = useRef(null);
  const drag = useRef(null);
  const [dragging, setDragging] = useState(false);
  const selected = places.find(place => place.id === selectedId);
  const scale = MAP_WIDTH / view.width;
  const radius = 6 / scale;

  function changeRegion(id) {
    setView(regions.find(item => item.id === id).view);
    setRegion(id);
  }

  function selectPlace(place, focus = false) {
    setSelectedId(place.id);
    if (focus) {
      setView(focusView(place.lon, place.lat));
      setRegion('');
      panel.current?.scrollIntoView({block: 'start', behavior: 'auto'});
    }
  }

  function zoom(factor) {
    setView(current => zoomView(current, factor));
    setRegion('');
  }

  function startPan(event) {
    if (event.target.closest('[data-place]') || event.button !== 0 || !event.isPrimary) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    drag.current = {pointerId: event.pointerId, clientX: event.clientX, clientY: event.clientY, view, bounds};
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  }

  function pan(event) {
    const start = drag.current;
    if (!start || start.pointerId !== event.pointerId) return;
    const x = start.view.x - (event.clientX - start.clientX) * start.view.width / start.bounds.width;
    const y = start.view.y - (event.clientY - start.clientY) * start.view.height / start.bounds.height;
    setView(constrainView({...start.view, x, y}));
    setRegion('');
  }

  function endPan() {
    drag.current = null;
    setDragging(false);
  }

  function keyboardPan(event) {
    const directions = {ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1]};
    const direction = directions[event.key];
    if (!direction) return;
    event.preventDefault();
    setView(current => constrainView({...current, x: current.x + direction[0] * current.width * .15, y: current.y + direction[1] * current.height * .15}));
    setRegion('');
  }

  return (
    <div className={styles.travel}>
      <p className={styles.intro}>These are a few places I’ve enjoyed exploring.</p>
      <ul className={styles.stats} aria-label="Travel at a glance">
        <li><strong>{places.length}</strong><span>travel destinations</span></li>
        <li><strong>{countryGroups.length}</strong><span>countries explored</span></li>
      </ul>

      <div className={styles.mapPanel} ref={panel}>
        <div className={styles.toolbar}>
          <label>View
            <select value={region} onChange={event => changeRegion(event.target.value)}>
              <option value="" disabled>Custom view</option>
              {regions.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </label>
          <div className={styles.zoomControls} role="group" aria-label="Map zoom controls">
            <button type="button" aria-label="Zoom out" disabled={view.width >= MAP_WIDTH} onClick={() => zoom(.5)}>−</button>
            <button type="button" aria-label="Zoom in" disabled={view.width <= MIN_WIDTH} onClick={() => zoom(2)}>+</button>
            <button type="button" onClick={() => changeRegion('world')}>Reset</button>
          </div>
        </div>

        <svg className={`${styles.map} ${dragging ? styles.dragging : ''}`}
          viewBox={`${view.x} ${view.y} ${view.width} ${view.height}`} width="960" height="480"
          role="group" aria-labelledby={titleId} aria-describedby={hintId} tabIndex={0}
          onPointerDown={startPan} onPointerMove={pan} onPointerUp={endPan}
          onPointerCancel={endPan} onLostPointerCapture={endPan} onKeyDown={keyboardPan}>
          <title id={titleId}>Places I’ve traveled around the world</title>
          <g className={styles.grid} aria-hidden="true">
            {[-120, -60, 0, 60, 120].map(lon => <line key={`lon-${lon}`} x1={project(lon, 0)[0]} y1="0" x2={project(lon, 0)[0]} y2="480" vectorEffect="non-scaling-stroke" />)}
            {[-60, -30, 0, 30, 60].map(lat => <line key={`lat-${lat}`} x1="0" y1={project(0, lat)[1]} x2="960" y2={project(0, lat)[1]} vectorEffect="non-scaling-stroke" />)}
          </g>
          <CountryLayer />
          {[...places.filter(place => place.id !== selectedId), ...places.filter(place => place.id === selectedId)].map(place => {
            const [x, y] = project(place.lon, place.lat);
            const active = selectedId === place.id;
            return (
              <g key={place.id} data-place={place.id} transform={`translate(${x} ${y})`}
                className={styles.marker}
                role="button" tabIndex={x >= view.x && x <= view.x + view.width && y >= view.y && y <= view.y + view.height ? 0 : -1}
                aria-label={placeLabel(place)} aria-pressed={active}
                onClick={() => selectPlace(place)}
                onKeyDown={event => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    event.stopPropagation();
                    selectPlace(place);
                  }
                }}>
                <title>{placeLabel(place)}</title>
                <circle r={16 / scale} className={styles.hitArea} />
                {active && <circle r={11 / scale} className={styles.selectedHalo} vectorEffect="non-scaling-stroke" />}
                <circle className={styles.dot} r={radius} vectorEffect="non-scaling-stroke" />
              </g>
            );
          })}
        </svg>
        <p className={styles.hint} id={hintId}>Select a marker or a place below. Drag to pan, use + / − to zoom, or focus the map and use arrow keys.</p>
        <div className={styles.selection} aria-live="polite" aria-atomic="true">
          {selected ? <>
            <span className={styles.selectionType}>A travel destination</span>
            <strong>{selected.name}</strong>
            <span>{[selected.region, selected.country].filter(Boolean).join(', ')}</span>
          </> : <span>Choose a place to take a closer look. The regional views help separate nearby destinations.</span>}
        </div>
      </div>

      <h2>Where I’ve been</h2>
      <div className={styles.countryGrid}>
        {countryGroups.map(({name, destinations}) => (
          <section key={name} className={`${styles.countryCard} ${name === 'United States' ? styles.wideCountry : ''}`} aria-label={name}>
            <h3>{name}<span>{destinations.length} {destinations.length === 1 ? 'destination' : 'destinations'}</span></h3>
            <ul className={styles.destinationChips}>
              {destinations.map(place => (
                <li key={place.id}>
                  <button type="button" title={placeLabel(place)} aria-label={placeLabel(place)} aria-pressed={selectedId === place.id} onClick={() => selectPlace(place, true)}>
                    {place.name}{place.region === 'Maine' ? ', ME' : ''}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className={styles.attribution}>Country outlines: <a href="https://www.naturalearthdata.com/about/terms-of-use/" target="_blank" rel="noreferrer">Natural Earth</a>. Locations are approximate; regional markers represent the Finger Lakes and Loudoun County.</p>
    </div>
  );
}
