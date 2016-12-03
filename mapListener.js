var PubNub = require('pubnub')

var pubnub = new PubNub({
    subscribeKey: "sub-c-6d62ed1e-b978-11e6-b490-02ee2ddab7fe",
    publishKey: "pub-c-04cd03f7-3663-49f9-86dd-c51f7f52dd57",
    ssl: true
});


pubnub.addListener({
  message: function(msg) {
    if(msg.channel === 'location') {
      processPosition(msg);
    }

  }
});


function processPosition(msg) {
  var userPosition = msg.message.position;
  var userChannel = msg.message.channel;
  console.log('user is at ' + userPosition + ' and callback channel is' + userChannel);
}

// pubnub.addListener({
//     message: function(m) {
//         // handle message
//         var channelName = m.channel; // The channel for which the message belongs
//         var channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
//         var pubTT = m.timetoken; // Publish timetoken
//         var msg = m.message; // The Payload
//         console.log('listener here: a msg has been sent', channelName, channelGroup, pubTT, msg);
//     },
// })

pubnub.subscribe({
    channels: ['mainChannel'],
    withPresence: true // also subscribe to presence instances.
})

console.log('Map listener');
