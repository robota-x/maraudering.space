var playerMarkers = {};  // global var? what could possibly go wrong?
var map;
function initMap() {
  var mapCenter = {lat: 51.544360, lng: -0.020020};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: mapCenter
  });

  centerMapOnPlayer();
  // setMarker(mapCenter);
}

function centerMapOnPlayer() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      map.setCenter({lat: pos.coords.latitude, lng: pos.coords.longitude});
    });
  }
}

function setMarker(mark) {
  // console.log('marker set', mark);
  if (mark.id in playerMarkers) {

  } else {
    playerMarkers[mark.playerID] =
      new google.maps.Marker({
        position: {lat: mark.latitude, lng: mark.longitude},
        map: map
      });
  }
}

// pubnub polling and more global polluting.

pubnub = PUBNUB({
        subscribe_key : 'sub-c-6d62ed1e-b978-11e6-b490-02ee2ddab7fe'
    })

pubnub.subscribe({
    channel : "location",
    message : function (message) {
      console.log('got message', message);
        if (message.latitude && message.longitude && message.playerID) {    // some quick validation to avoid nuking the map with bad data
          setMarker(message);
        }
    },
})
