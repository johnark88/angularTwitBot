var dotenv = require('dotenv');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
//decode token
var decoder = require('./routes/decoder');
//verify decoded token
var login = require('./routes/login');

//these route serves the twitter bot
var bot = require('./routes/bot');
var favBot = require('./routes/favBot');


//this route serves the index
app.get('/', function(req, res){
  res.sendFile(path.resolve('./public/index.html'));
});

//use public folder
app.use(express.static('public'));

//use this to decode token
app.use(decoder.token);

app.use(bodyParser.json());

app.use("/login", login);
app.use("/bot", bot);
app.use("/favBot", favBot);

// Imports all .env values
dotenv.load();

// display the error and stacktrace accordingly.
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err);
});

app.listen(process.env.PORT, function() {
    console.log('I am listening on ', process.env.PORT);
});
