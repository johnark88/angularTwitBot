var dotenv = require('dotenv');
var firebase = require("firebase");
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var decoder = require('./routes/decoder');
var login = require('./routes/login');



app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());

// Imports all .env values
dotenv.load();


//this route serves the index
var index = require('./routes/index');

//this route serves the twitter bot
// var bot = require('./routes/bot');


app.use("/login", login);


// display the error and stacktrace accordingly.
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err);
});

app.listen(process.env.PORT, function() {
    console.log('I am listening on ', process.env.PORT);
});

//use public folder
app.use(express.static('public'));
