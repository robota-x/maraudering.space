var PubNub = require('pubnub')
var players = [{latitude: 51.544360, longitude: -0.020020, playerID: 1},
{latitude: 51.545360, longitude: -0.020320, playerID: 2},
{latitude: 51.546360, longitude: -0.021020, playerID: 3},
{latitude: 51.543360, longitude: -0.020520, playerID: 4},
{latitude: 51.544360, longitude: -0.020020, playerID: 5},
{latitude: 51.544360, longitude: -0.019020, playerID: 6},
{latitude: 51.544360, longitude: -0.020120, playerID: 7}]

var pubnub = new PubNub({
    subscribeKey: "sub-c-6d62ed1e-b978-11e6-b490-02ee2ddab7fe",
    publishKey: "pub-c-04cd03f7-3663-49f9-86dd-c51f7f52dd57",
    ssl: true
});

function publishDummyUser(user) {
  pubnub.publish(
      {
          message: user,
          channel: 'location',
          sendByPost: true, // true to send via post
          storeInHistory: false, //override default storage options
      }
  );
}

players.forEach(player => publishDummyUser(player));

console.log('msg sender run');
