var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log(req.decodedToken, req.decodedToken.picture); // Here you can see the information firebase gives you about the user
  res.send(req.decodedToken);
});

module.exports = router;
