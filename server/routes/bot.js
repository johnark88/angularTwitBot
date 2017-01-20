var express = require('express');
var router = express.Router();
var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
require('dotenv').config(); // Imports all .env values
console.log('bot');

var retweetRes = [];
var favRes = [];

//find latest tweets based on query(q)
//result_type sets to search for latest tweets since it started or made the last retweet
var retweet = function() {
    var params = {
        q: '#node, #nodejs',
        result_type: 'recent',
        lang: 'en'
    };


    //Retweet Bot =====================================================
    Twitter.get('search/tweets', params, function(err, data) {
        if (!err) {
            //get id of tweet to retweet
            var retweetId = data.statuses[0].id_str;
            //tell twitter to repost
            Twitter.post('statuses/retweet/:id', {
                id: retweetId
            }, function(err, response) {
                if (response) {
                    console.log('Retweeted');
                    var retweetRes = 'Retweeted';
                }
                if (err) {
                    //error while tweeting
                    console.log('Something Went Wrong with retweet ');
                    var retweetRes = 'Something Went Wrong with retweet';
                }
            });
        } else {
            //if unable to search a tweet
            console.log('Something Went wrong while searching');
        }
    });
};

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
                    var favRes = 'Can not be favorited';
                } else {
                    console.log('Favorited -- Success!');
                    var favRes = 'Favorited Success!';
                }
            });
        }
    });
};

//grab and favorite as program starts
favoriteTweet();
//favorite a tweet every 60 minutes
setInterval(favoriteTweet, 3600000);
//grab & retweet as soon as program is running
retweet();
//retweet in every 50 minutes
setInterval(retweet, 3600000);

//function to generate a random tweet tweet
function ranDom(arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

var objectToSend = {
  response: favRes,
  response1: retweetRes
};

console.log(objectToSend, 'objectTOSENDDDDDDDDDDDDDD');
router.get('/', function(req, res){
    console.log('router');
    console.log(retweetRes, 'response to send');
    return res.send(JSON.stringify(favRes));
});


module.exports = router;
