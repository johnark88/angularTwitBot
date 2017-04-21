var express = require('express');
var router = express.Router();
var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
require('dotenv').config(); // Imports all .env values
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/johnA';
// console.log('bot');

var retweetRes = [];
var favRes = [];
let hashtag = '#github, #angular';

router.get('/', function(req, res){
//find latest tweets based on query(q)
//result_type sets to search for latest tweets since it started or made the last retweet
var retweet = function() {
    var params = {
        q: hashtag,
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
                    res.send('Retweeted');
                }
                if (err) {
                    //error while tweeting
                    console.log('Something Went Wrong with retweet ');

                }
            });
        } else {
            //if unable to search a tweet
            console.log('Something Went wrong while searching');
            res.send('Something went wrong whihle searching');
        }
    });
};
//grab & retweet as soon as program is running
retweet();
//retweet in every 50 minutes
setInterval(retweet, 3600000);
});



//function to generate a random tweet tweet
function ranDom(arr) {
    var index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

module.exports = router;
