function initMap() {

    var LatLng = new google.maps.LatLng(34.089791, -83.968060);

    //Setting up where the map will be centered, the zoom level and turning scroll wheel off.
    var mapOptions = {
      center: LatLng,
      zoom: 12,
      scrollwheel: false
    };

    //Creating a sincle map object name map. It will be placed on the page where the id map is found.
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var message = "My House"

    //Creating an info window for when a user clicks on to the map. 
    var infowindow = new google.maps.InfoWindow({
      content: message
    });

    var marker = new google.maps.Marker({
      position: LatLng,
      map: map,
    })

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

}


// google.maps.event.addDomListener(window, 'load', initialize);


//////// Pop Up From Google maps documentation ////////////

// function initMap() {
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });

//   var contentString = 
//       '<p><b>Uluru</b></p>';

//   var infowindow = new google.maps.InfoWindow({
//     content: contentString
//   });

//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map,
//     title: 'U'
//   });
//   marker.addListener('click', function() {
//     infowindow.open(map, marker);
//   });
// }