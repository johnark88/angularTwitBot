var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/johnA';
console.log('test');


router.post('/', urlencodedParser, function(req,res){
  console.log('post route');
  console.log(req.body);
  if (err) {
    console.log(err)
    res.sendStatus(500);
  } else {
  console.log('connected to DB');
  res.send('testResults');
}
});

module.exports = router;
