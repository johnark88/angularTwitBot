var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/johnA';
// console.log('test');

router.put('/',function(req,res){
  console.log('/test here');
  console.log(req.headers.id_token, 'token');
  console.log(req.body, 'req');
});


// router.get("/", urlencodedParser, function(req, res){
//   pg.connect(connectionString, function(err, client, done){
//     var userEmail = req.decodedToken.email;
//     console.log(req.body.hash, 'reqqqqqqqq');
//     // Check the user's level of permision based on their email
//     client.query('SELECT clearance_level FROM users WHERE email=$1', [userEmail], function(err, clearanceLevelQueryResult){
//       done();
//       if(err){
//         console.log('Error COMPLETING clearance_level query task', err);
//         res.sendStatus(500);
//       }else{
//         pg.connect(connectionString, function(err, client, done){
//           if(clearanceLevelQueryResult.rowCount === 0) {
//             // If the user is not in the database, return a forbidden error status
//             console.log('No user found with that email. Have you added this person to the database? Email: ', req.decodedToken.email);
//             res.sendStatus(403);
//             console.log('403 test');
//           }
//           done();
//         });
//       }
//     });
//   });
// });
module.exports = router;
