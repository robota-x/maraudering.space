var PubNub = require('pubnub')
var geolib = require('geolib');

var pubnub = new PubNub({
    subscribeKey: "sub-c-6d62ed1e-b978-11e6-b490-02ee2ddab7fe",
    publishKey: "pub-c-04cd03f7-3663-49f9-86dd-c51f7f52dd57",
    ssl: true
});

var HOTSPOTS = [{
  latitude: 51.5443569,
  longitude: -0.0222026,
  id: 142
},{
  latitude: 51.5443569,
  longitude: -0.0222026,
  id: 142
}]

pubnub.addListener({
  message: function(msg) {
    if(msg.channel === 'location') {
      processPosition(msg);
    }

  }
});

function geodeDistance(pointA, pointB) {
  return geolib.getDistance(pointA, pointB, 1);
}

function processPosition(msg) {
  var userPosition = msg.message.position;
  var userChannel = msg.message.channel;
  console.log('user is at ' + userPosition + ' and callback channel is' + userChannel);
  if (geodeDistance(userPosition, HOTSPOTS[0]) < 50 ) {};
}

console.log(geodeDistance(HOTSPOTS[0],HOTSPOTS[1]));


// pubnub.subscribe({
//     channels: ['mainChannel'],
//     withPresence: true // also subscribe to presence instances.
// })
//
// console.log('Map listener');
