var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert("server/firebase-service-account.json"),
    databaseURL: "https://twit-77251.firebaseio.com"
});

var tokenDecoder = function(req, res, next) {
    if (req.headers.id_token) {
        admin.auth().verifyIdToken(req.headers.id_token).then(function(decodedToken) {
                // Adding the decodedToken to the request so that downstream processes can use it
                req.decodedToken = decodedToken;
                next();
            })
            .catch(function(error) {
                // If the id_token isn't right, you end up in this callback function
                // Here we are returning a forbidden error
                console.log('User token could not be verified');
                res.sendStatus(403);
            });
    } else {
        // Seems to be hit when chrome makes request for map files
        // Will also be hit when user does not send back an idToken in the header
        res.sendStatus(403);
        console.log('403, decoder');
    }
};

module.exports = {
    token: tokenDecoder
};
