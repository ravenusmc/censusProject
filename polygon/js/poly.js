// This example creates a simple polygon representing the Bermuda Triangle.

function initMap() {
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 13,
  center: {lat: 33.963, lng: -84.067},
  mapTypeId: 'terrain'
});

// Define the LatLng coordinates for the polygon's path.
var triangleCoords = [
  {lat: 33.965, lng: -84.085},
  {lat: 33.949, lng: -84.049},
  {lat: 33.977, lng: -84.039},
  {lat: 33.983, lng: -84.074}
];


// Construct the polygon.
var bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  bermudaTriangle.setMap(map);
}
