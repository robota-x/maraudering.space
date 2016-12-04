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
  if (mark.playerID in playerMarkers) {
    playerMarkers[mark.playerID].setPosition({lat: mark.latitude, lng: mark.longitude});
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
        subscribe_key : 'api key'
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
