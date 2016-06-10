function initMap() {

    //This variable is where the map will be centered. 
    var LatLng = new google.maps.LatLng(33.914323, -84.227101);

    //Setting up a variable where the map will be centered, the zoom level and turning scroll wheel off.
    var mapOptions = {
      center: LatLng,
      zoom: 8,
      scrollwheel: false
    };

    //Creating a sincle map object name map. It will be placed on the page where the id map is found.
    //Two parameters are passed in. 
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var county = createOverlay;
        county.setMap(map);

}

//function to create overlay
function createOverlay(){

  var overlayCoords = new Array();

  //go through data to split it into an array based on semicolon 
  var processData = data.split(";");

  for (var i=0; i < processData.length; i++){
    var xyCoords = processData[i].splitt(",");
    overlayCoords.push(new google.maps.LatLng(xyCoords[0], xyCoords[1]));
  }

  var myOverlay = new google.maps.Polygon({
    //list of google maps lat long objects
    paths: overlayCoords,
    //how the overlay will actually look
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillFolor: "#FF0000",
    fillOpacity: 0.35
  });

  return myOverlay;
}


























