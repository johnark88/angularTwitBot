var twit = require('twit');
var config = require('./config.js');
var Twitter = new twit(config);
console.log('bot');

//find latest tweets based on query(q)
//result_type sets to search for latest tweets since it started or made the last retweet
var retweet = function(){
  var params = {
    q: '#javascript, #JS',
    result_type: 'recent',
    lang: 'en'
  };


//Retweet Bot =====================================================
Twitter.get('search/tweets', params, function(err,data){
  if(!err){
    //get id of tweet to retweet
    var retweetId = data.statuses[0].id_str;
    //tell twitter to repost
    Twitter.post('statuses/retweet/:id',{
      id: retweetId
    },function(err,response){
      if(response){
        console.log('Retweeted ', response);
      }
      if(err){
        //error while tweeting
        console.log('Something Went Wrong with twitterbot ', err);
      }
    });
  } else {
    //if unable to search a tweet
    console.log('Something Went wrong while searching twitterbot');
  }
});
};

//grab & retweet as soon as program is running
retweet();
//retweet in every 50 minutes
setInterval(retweet, 3000000);

//favorite Bot ===============================================
//find random tweet and favorite it
var favoriteTweet = function(){
  var params ={
    q: '#javascript, #js',
    result_type: 'recent',
    lang: 'en'
  };
  //Find the tweet
  Twitter.get('search/tweets', params, function(err,data){
    //find tweet
    var tweet = data.statuses;
    //pick random tweet
    var randomTweet = ranDom(tweet);
    //if random tweet exists
    if(typeof randomTweet != 'undefined'){
      Twitter.post('favorites/create', {id: randomTweet.id_str},function(err,response){
        if(err){
          console.log('Can not be favorite--Error twitterbot');
        }else{
          console.log('Favorited -- Success!', data);
        }
      });
    }
  });
};
//grab and favorite as program starts
favoriteTweet();
//favorite a tweet every 60 minutes
setInterval(favoriteTweet, 3600000);

//function to generate a random tweet tweet
function ranDom(arr){
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
}
