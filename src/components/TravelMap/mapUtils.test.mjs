import test from 'node:test';
import assert from 'node:assert/strict';
import {MAP_WIDTH, MAP_HEIGHT, MIN_WIDTH, WORLD_VIEW, constrainView, focusView, project, regions, zoomView} from './mapUtils.mjs';
import {places} from './places.mjs';

function withinWorld(view) {
  assert.ok(view.x >= 0 && view.y >= 0);
  assert.ok(view.x + view.width <= MAP_WIDTH + 1e-9);
  assert.ok(view.y + view.height <= MAP_HEIGHT + 1e-9);
  assert.equal(view.height, view.width / 2);
}

test('the itinerary includes every supplied destination exactly once', () => {
  const expected = [
    'loudoun-county', 'washington-dc', 'boston', 'portland', 'denver',
    'san-francisco', 'los-angeles', 'finger-lakes', 'montreal', 'new-york-city',
    'nashville', 'dallas', 'hanoi', 'ho-chi-minh-city', 'dublin', 'athlone',
    'galway', 'helsinki', 'tallinn', 'riga',
  ];
  assert.deepEqual(places.map(place => place.id).sort(), expected.sort());
  assert.equal(new Set(places.map(place => place.id)).size, 20);
  assert.equal(new Set(places.map(place => place.code)).size, 7);
  for (const place of places) {
    assert.ok(place.lon >= -180 && place.lon <= 180);
    assert.ok(place.lat >= -90 && place.lat <= 90);
  }
});

test('coordinates align to the country outline projection', () => {
  assert.deepEqual(project(0, 0), [480, 240]);
  assert.deepEqual(project(-180, 90), [0, 0]);
  assert.deepEqual(project(180, -90), [960, 480]);
});

test('zooming and panning never expose space outside the world', () => {
  for (const width of [1, 16, 300, 960, 3000]) {
    for (const x of [-1000, 200, 2000]) {
      const view = constrainView({x, y: x, width});
      withinWorld(view);
      assert.ok(view.width >= MIN_WIDTH && view.width <= MAP_WIDTH);
    }
  }
  let view = WORLD_VIEW;
  for (let index = 0; index < 20; index++) view = zoomView(view, 2);
  assert.equal(view.width, MIN_WIDTH);
  withinWorld(view);
  for (let index = 0; index < 20; index++) view = zoomView(view, .5);
  assert.deepEqual(view, WORLD_VIEW);
});

test('every place can be brought into view from its destination button', () => {
  for (const place of places) {
    const view = focusView(place.lon, place.lat);
    const [x, y] = project(place.lon, place.lat);
    withinWorld(view);
    assert.ok(x >= view.x && x <= view.x + view.width, place.name);
    assert.ok(y >= view.y && y <= view.y + view.height, place.name);
  }
});

test('regional presets contain their destinations', () => {
  const groups = {
    'north-america': places.filter(place => ['USA', 'CAN'].includes(place.code)),
    northeast: places.filter(place => ['USA', 'CAN'].includes(place.code) && place.lon >= -80 && place.lat >= 36),
    europe: places.filter(place => ['IRL', 'FIN', 'EST', 'LVA'].includes(place.code)),
    vietnam: places.filter(place => place.code === 'VNM'),
  };
  for (const {id, view} of regions) {
    withinWorld(view);
    for (const place of groups[id] || places) {
      const [x, y] = project(place.lon, place.lat);
      assert.ok(x >= view.x && x <= view.x + view.width && y >= view.y && y <= view.y + view.height, `${id}: ${place.name}`);
    }
  }
});
