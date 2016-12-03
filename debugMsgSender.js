var PubNub = require('pubnub')

var pubnub = new PubNub({
    subscribeKey: "sub-c-6d62ed1e-b978-11e6-b490-02ee2ddab7fe",
    publishKey: "pub-c-04cd03f7-3663-49f9-86dd-c51f7f52dd57",
    ssl: true
});


pubnub.publish(
    {
        message: {
          position: {
            latitude: 51.5443569,
            longitude: -0.0222026
          },
          playerID: 1
        },
        channel: 'location',
        sendByPost: true, // true to send via post
        storeInHistory: false, //override default storage options
    },
    function (status, response) {
        console.log('message sent', status, response);
    }
);

console.log('msg sender run');
