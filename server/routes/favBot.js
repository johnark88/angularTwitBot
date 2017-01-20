var express = require('express');
var router = express.Router();
var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
require('dotenv').config(); // Imports all .env values
console.log('favBot');



router.get('/', function(req, res){
//favorite Bot ===============================================
//find random tweet and favorite it
var favoriteTweet = function() {
    var params = {
        q: '#node, #nodejs',
        result_type: 'recent',
        lang: 'en'
    };
    //Find the tweet
    Twitter.get('search/tweets', params, function(err, data) {
        //find tweet
        var tweet = data.statuses;
        //pick random tweet
        var randomTweet = ranDom(tweet);
        //if random tweet exists
        if (typeof randomTweet != 'undefined') {
            Twitter.post('favorites/create', {
                id: randomTweet.id_str
            }, function(err, response) {
                if (err) {
                    console.log('Can not be favorite');
                    res.send('Can not be favorited');
                } else {
                    console.log('Favorited -- Success!');
                    res.send('Favorited Success!');
                }
            });
        }
    });
};


//grab and favorite as program starts
favoriteTweet();
//favorite a tweet every 60 minutes
setInterval(favoriteTweet, 3600000);
});

//function to generate a random tweet tweet
function ranDom(arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

module.exports = router;
