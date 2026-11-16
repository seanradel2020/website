# Travel map

The Travel page under Life uses this React/SVG component without a map service or additional runtime dependencies. Destinations are grouped by country beneath the map.

- Update [places.mjs](./places.mjs) to add or edit a city or trip destination. Coordinates use longitude, then latitude. City centers and the Finger Lakes region point are approximate.
- [mapUtils.mjs](./mapUtils.mjs) contains the equirectangular projection, bounded pan/zoom functions, and regional views.
- [countries.json](./countries.json) contains projected country paths derived from [Natural Earth's 1:110m Admin 0 Countries GeoJSON](https://github.com/nvkelso/natural-earth-vector/blob/master/geojson/ne_110m_admin_0_countries.geojson). Antarctica is omitted. Coordinates are projected to a 960 × 480 world and rounded to one decimal place.
- Natural Earth data is [public domain](https://www.naturalearthdata.com/about/terms-of-use/). The component includes visible source attribution.

Run the geometry and itinerary checks with:

```sh
node --test src/components/TravelMap/mapUtils.test.mjs
```
