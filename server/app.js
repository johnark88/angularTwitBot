var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var portDecision = process.env.PORT|| 9002;

app.use(bodyParser.json());

//port decision for heroku and local use
app.listen(portDecision, function(){
  console.log('I am listening on ', portDecision);
});

//this route serves the index
var index = require('./routes/index');

//this route serves the twitter bot
// var bot = require('./routes/bot');

//use public folder
app.use(express.static('public'));
