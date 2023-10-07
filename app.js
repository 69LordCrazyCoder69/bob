const map = L.map('map', {
  center: [0, 0],  // Initial center of the map
  zoom: 1,         // Initial zoom level
  maxZoom: 3,      // Adjust maximum zoom level based on the number of zoom levels generated
  minZoom: 1       // Lock the minimum zoom level
  
});

// Add tile layer using the generated tiles
L.tileLayer('tiles/{z}/{x}_{y}.png', {
  tileSize: 256,
  noWrap: true,
}).addTo(map);

// Set the bounds for vertical panning
const maxNorth = 85;  // Adjust as needed for your map's latitude range
const maxSouth = -85; // Adjust as needed for your map's latitude range

map.setMaxBounds([[maxSouth, -180], [maxNorth, 180]]);

// Make the map draggable
map.dragging.enable();

// Event listener for drag
map.on('drag', function (e) {
  const zoom = map.getZoom();
  if (zoom <= 1) {
    // Lock vertical drag when zoomed out
    const center = map.getCenter();
    const newCenter = L.latLng(
      Math.max(maxSouth, Math.min(maxNorth, center.lat)), 
      center.lng
    );
    map.setView(newCenter, zoom, { animate: false });
  }
});

// Create a marker with an initial position
const a4Capital = L.marker([58, -75).addTo(map);
