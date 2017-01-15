var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert("./firebase-service-account.json"),
  databaseURL: "https://twit-77251.firebaseio.com"
});
