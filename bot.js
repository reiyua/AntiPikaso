// Import the necessary libraries
const Twit = require('twit');

// Create a new instance of the Twitter API client
const T = new Twit({
    consumer_key: 'YOUR_CONSUMER_KEY',
    consumer_secret: 'YOUR_CONSUMER_SECRET',
    access_token: 'YOUR_ACCESS_TOKEN',
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET',
});

// Set up a stream to listen for tweets
const stream = T.stream('statuses/filter', { track: '@pikaso_me screenshot this' });

// Event handler for incoming tweets
stream.on('tweet', (tweet) => {
    // Extract the tweet text
    const tweetText = tweet.text.toLowerCase();

    // Check if the tweet contains the required phrase
    if (tweetText.includes('@pikaso_me screenshot this')) {
        // Reply to the tweet with a link on how to take a screenshot
        const replyText = `Sure! Here's a link on how to take a screenshot: https://www.wikihow.com/Take-a-Screen-Shot-(Screen-Capture)`;
        T.post('statuses/update', { status: replyText, in_reply_to_status_id: tweet.id_str });
    }
});
