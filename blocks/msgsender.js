var PubNub = require('pubnub')

var pubnub = new PubNub({
    subscribeKey: "sub-c-6d62ed1e-b978-11e6-b490-02ee2ddab7fe",
    publishKey: "pub-c-04cd03f7-3663-49f9-86dd-c51f7f52dd57",
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
