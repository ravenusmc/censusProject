function initMap() {

    //Setting up where the map will be centered, the zoom level and turning scroll wheel off.
    var mapOptions = {
      center: {lat: 38.91732, lng: -77.2211},
      zoom: 8,
      scrollwheel: false
    };

    //Creating a sincle map object name map. It will be placed on the page where the id map is found.
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    
}
