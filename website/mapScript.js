var playerMarkers = {};  // global var? what could possibly go wrong?

function initMap() {
  var mapCenter = {lat: 51.544360, lng: -0.020020};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: mapCenter
  });

  centerMapOnPlayer(map);
  setMarker(mapCenter, map);
}

function centerMapOnPlayer(map) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter({lat: pos.coords.latitude, lng: pos.coords.longitude});
    });
  }
}

function setMarker(mark, map) {
  if (mark.id in playerMarkers) {

  } else {
    playerMarkers[mark.id] =
      new google.maps.Marker({
        position: {lat: mark.lat, lng: mark.lng},
        map: map
      });
  }
}
