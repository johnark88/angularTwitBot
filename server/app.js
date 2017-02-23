var dotenv = require('dotenv');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
//decode token
var decoder = require('./routes/decoder');
// Imports all .env values
dotenv.load();
var portDecision = process.env.PORT || 5000;

//this route serves the index
app.get('/', function(req, res){
  res.sendFile(path.resolve('./public/index.html'));
});
//use public folder
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(decoder.token);

var login = require('./routes/login');
app.use("/login", login);
var bot = require('./routes/bot');
app.use("/bot", bot);
var favBot = require('./routes/favBot');
app.use("/favBot", favBot);
var test = require('./routes/test');
app.use("/test", test);

app.listen(portDecision, function() {
    console.log('I am listening on ', portDecision);
});
