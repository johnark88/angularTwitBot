var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/johnA';
console.log('bot');

router.post('/', function(req,res){
  console.log('put route');
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
