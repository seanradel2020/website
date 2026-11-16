export const MAP_WIDTH = 960;
export const MAP_HEIGHT = 480;
export const MIN_WIDTH = 16;
export const WORLD_VIEW = {x: 0, y: 0, width: MAP_WIDTH, height: MAP_HEIGHT};

export function project(lon, lat) {
  return [(lon + 180) * MAP_WIDTH / 360, (90 - lat) * MAP_HEIGHT / 180];
}

export function constrainView(view) {
  const width = Math.max(MIN_WIDTH, Math.min(MAP_WIDTH, view.width));
  const height = width * MAP_HEIGHT / MAP_WIDTH;
  return {
    x: Math.max(0, Math.min(MAP_WIDTH - width, view.x)),
    y: Math.max(0, Math.min(MAP_HEIGHT - height, view.y)),
    width,
    height,
  };
}

export function zoomView(view, factor) {
  const width = Math.max(MIN_WIDTH, Math.min(MAP_WIDTH, view.width / factor));
  const height = width * MAP_HEIGHT / MAP_WIDTH;
  return constrainView({x: view.x + (view.width - width) / 2, y: view.y + (view.height - height) / 2, width});
}

export function focusView(lon, lat, width = 32) {
  const [x, y] = project(lon, lat);
  return constrainView({x: x - width / 2, y: y - width / 4, width});
}

function fitBounds(west, south, east, north) {
  const [left, top] = project(west, north);
  const [right, bottom] = project(east, south);
  const width = Math.max(right - left, (bottom - top) * 2);
  return constrainView({x: (left + right - width) / 2, y: (top + bottom - width / 2) / 2, width});
}

export const regions = [
  {id: 'world', name: 'World', view: WORLD_VIEW},
  {id: 'north-america', name: 'North America', view: fitBounds(-130, 23, -55, 56)},
  {id: 'northeast', name: 'Northeastern US', view: fitBounds(-80, 36, -65, 47)},
  {id: 'europe', name: 'Europe', view: fitBounds(-14, 49, 33, 63)},
  {id: 'vietnam', name: 'Vietnam', view: fitBounds(101, 7, 110, 24)},
];
