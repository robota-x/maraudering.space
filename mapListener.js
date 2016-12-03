var PubNub = require('pubnub')
var geolib = require('geolib');
const util = require('util')


var pubnub = new PubNub({
    subscribeKey: "sub-c-6d62ed1e-b978-11e6-b490-02ee2ddab7fe",
    publishKey: "pub-c-04cd03f7-3663-49f9-86dd-c51f7f52dd57",
    ssl: true
});

var HOTSPOTS = [{   // copper box arena
  latitude: 51.5443569,
  longitude: -0.0222026,
  id: 142
}]

pubnub.addListener({
  message: function(msg) {
    if(msg.channel === 'location') {
      processPosition(msg.message);
    }
  }
});

function geodeDistance(pointA, pointB) {
  console.log('distance:', geolib.getDistance(pointA, pointB, 1));
  return geolib.getDistance(pointA, pointB, 1);  // return distance with 1mt accuracy
}

function processPosition(data) {
  // console.log(util.inspect(data, false, null));
  var userPosition = data.position;
  var userChannel = data.playerID;
  // console.log('user is at ' + userPosition + ' and callback channel is' + userChannel);
  if (geodeDistance(userPosition, HOTSPOTS[0]) < 50 ) {
      sendMessage(userChannel, 'startEncounter');
  }
}

function sendMessage(channel, message) {
  pubnub.publish({
        message: message,
        channel: channel,
        sendByPost: true, // true to send via post
        storeInHistory: false, //override default storage options
    })
}

pubnub.subscribe({
    channels: ['location'],
    withPresence: true // also subscribe to presence instances.
})

console.log('Map listener');
