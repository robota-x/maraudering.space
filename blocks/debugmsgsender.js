var PubNub = require('pubnub')

var pubnub = new PubNub({
    subscribeKey: "api keys",
    publishKey: "api keys",
    ssl: true
});

pubnub.publish(
    {
        message: { such: 'this is message one', sencodKey: 'hi' },
        channel: 'location',
        sendByPost: true, // true to send via post
        storeInHistory: false, //override default storage options
        meta: { "cool": "meta" } // publish extra meta with the request
    },
    function (status, response) {
        console.log('message sent', status, response);
    }
);

console.log('msg sender run');
