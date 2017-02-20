var dotenv = require('dotenv');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var portDecision = process.env.PORT || 5000;
//decode token
var decoder = require('./routes/decoder');
//verify decoded token
var login = require('./routes/login');

//these route serves the twitter bot
var bot = require('./routes/bot');
var favBot = require('./routes/favBot');
var test = require('./routes/test');

//this route serves the index
app.get('/', function(req, res){
  res.sendFile(path.resolve('./public/index.html'));
});

//use public folder
app.use(express.static('public'));

//use this to decode token
app.use(decoder.token);

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use("/login", login);
app.use("/bot", bot);
app.use("/favBot", favBot);
app.use("/test", test);

// Imports all .env values
dotenv.load();

app.listen(portDecision, function() {
    console.log('I am listening on ', portDecision);
});
