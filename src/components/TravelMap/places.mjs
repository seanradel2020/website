// Approximate city centers and representative points for travel regions.
export const places = [
  {id: 'loudoun-county', name: 'Loudoun County', region: 'Virginia', country: 'United States', code: 'USA', lon: -77.64, lat: 39.08},
  {id: 'washington-dc', name: 'Washington, DC', country: 'United States', code: 'USA', lon: -77.0369, lat: 38.9072},
  {id: 'boston', name: 'Boston', region: 'Massachusetts', country: 'United States', code: 'USA', lon: -71.0589, lat: 42.3601},
  {id: 'portland', name: 'Portland', region: 'Maine', country: 'United States', code: 'USA', lon: -70.2568, lat: 43.6591},
  {id: 'denver', name: 'Denver', region: 'Colorado', country: 'United States', code: 'USA', lon: -104.9903, lat: 39.7392},
  {id: 'san-francisco', name: 'San Francisco', region: 'California', country: 'United States', code: 'USA', lon: -122.4194, lat: 37.7749},
  {id: 'los-angeles', name: 'Los Angeles', region: 'California', country: 'United States', code: 'USA', lon: -118.2437, lat: 34.0522},
  {id: 'finger-lakes', name: 'Finger Lakes', region: 'New York', country: 'United States', code: 'USA', lon: -76.9, lat: 42.75},
  {id: 'montreal', name: 'Montreal', region: 'Quebec', country: 'Canada', code: 'CAN', lon: -73.5674, lat: 45.5019},
  {id: 'new-york-city', name: 'New York City', region: 'New York', country: 'United States', code: 'USA', lon: -74.006, lat: 40.7128},
  {id: 'nashville', name: 'Nashville', region: 'Tennessee', country: 'United States', code: 'USA', lon: -86.7816, lat: 36.1627},
  {id: 'dallas', name: 'Dallas', region: 'Texas', country: 'United States', code: 'USA', lon: -96.797, lat: 32.7767},
  {id: 'hanoi', name: 'Hanoi', country: 'Vietnam', code: 'VNM', lon: 105.8542, lat: 21.0285},
  {id: 'ho-chi-minh-city', name: 'Ho Chi Minh City', country: 'Vietnam', code: 'VNM', lon: 106.6297, lat: 10.8231},
  {id: 'dublin', name: 'Dublin', country: 'Ireland', code: 'IRL', lon: -6.2603, lat: 53.3498},
  {id: 'athlone', name: 'Athlone', country: 'Ireland', code: 'IRL', lon: -7.9407, lat: 53.4239},
  {id: 'galway', name: 'Galway', country: 'Ireland', code: 'IRL', lon: -9.0568, lat: 53.2707},
  {id: 'helsinki', name: 'Helsinki', country: 'Finland', code: 'FIN', lon: 24.9384, lat: 60.1699},
  {id: 'tallinn', name: 'Tallinn', country: 'Estonia', code: 'EST', lon: 24.7536, lat: 59.437},
  {id: 'riga', name: 'Riga', country: 'Latvia', code: 'LVA', lon: 24.1052, lat: 56.9496},
];

export const placeLabel = (place) => [place.name, place.region, place.country].filter(Boolean).join(', ');
