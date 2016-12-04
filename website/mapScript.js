function initMap() {

  var mapCenter = {lat: 51.544360, lng: -0.020020};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: mapCenter
  });

  var playerMarkers = {};

  centerMapOnPlayer(map);
}

function centerMapOnPlayer(map) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter({lat: pos.coords.latitude, lng: pos.coords.longitude});
    });
  }
}
