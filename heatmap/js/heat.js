// This example uses the Google Maps JavaScript API's Data layer
// to create a rectangular polygon with 2 holes in it.

// function initMap() {


//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: {lat: 33.960, lng: -84.022},
//   });

//   // Define the LatLng coordinates for the outer path.
//   var outerCoords = [
//     {lat: 33.7615, lng: -84.0285}, // north west
//     {lat: 33.9327, lng: -83.8124}, // south west
//     {lat: 34.0006, lng: -83.8774}, // south east
//     {lat: 34.1141, lng: -83.8308},
//     {lat: 34.0965, lng: -83.8802},
//     {lat: 34.1421, lng: -84.0624},
//     {lat: 33.9139, lng: -84.2290}  // north east
//   ];

//   //alert(outerCoords[6].lat + " " + outerCoords[6].lng);


//   //This will set the background color for the polygon which will be placed on the map. 
//   map.data.setStyle({
//       fillColor: 'blue',
//       strokeWeight: 1
//   });



//   map.data.add({geometry: new google.maps.Data.Polygon([outerCoords])})
// }

//////////////////  USING GEOSON DATA. /////////////////

// var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: {lat: -28, lng: 137}
//   });

// map.data.setStyle({
//   fillColor: 'red',
//   strokeWeight: 1
// });

// // NOTE: This uses cross-domain XHR, and may not work on older browsers.
// //This loads the data. On my learnmap file, addGeoJson is called. 
// map.data.loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');

// }


////////   EARTH QAUKE DATA

var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 20, lng: -160 },
    zoom: 2
  });

  // Get the earthquake data (JSONP format)
  // This feed is a copy from the USGS feed, you can find the originals here:
  //   http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
  var script = document.createElement('script');
  script.setAttribute('src',
      'https://storage.googleapis.com/maps-devrel/quakes.geo.json');
  document.getElementsByTagName('head')[0].appendChild(script);

  // Add a basic style.
  map.data.setStyle(function(feature) {
    var mag = Math.exp(parseFloat(feature.getProperty('mag'))) * 0.1;
    return /** @type {google.maps.Data.StyleOptions} */({
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: mag,
        fillColor: '#f00',
        fillOpacity: 0.35,
        strokeWeight: 0
      }
    });
  });
}

// Defines the callback function referenced in the jsonp file.
function eqfeed_callback(data) {
  map.data.addGeoJson(data);
}



///////////// GETTING A SIMPLE MAP ON THE SCREEN /////////////

// function initMap() {

//     var LatLng = new google.maps.LatLng(34.089791, -83.968060);

//     //Setting up where the map will be centered, the zoom level and turning scroll wheel off.
//     var mapOptions = {
//       center: LatLng,
//       zoom: 12,
//       scrollwheel: false
//     };

//     //Creating a sincle map object name map. It will be placed on the page where the id map is found.
//     map = new google.maps.Map(document.getElementById('map'), mapOptions);

//     var message = "My House"

//     //Creating an info window for when a user clicks on to the map. 
//     var infowindow = new google.maps.InfoWindow({
//       content: message
//     });

//     var marker = new google.maps.Marker({
//       position: LatLng,
//       map: map,
//     })

//     marker.addListener('click', function() {
//       infowindow.open(map, marker);
//     });

// }