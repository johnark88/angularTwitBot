myApp.controller('loginController', ['$scope', '$http','$firebaseAuth', function($scope, $http, $firebaseAuth) {
    console.log('Log in Controller');
      var auth = $firebaseAuth();
    //login button click
    $scope.logIn = function() {
        console.log('logging in');

        auth.$signInWithPopup("google").then(function(firebaseUser) {
      console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
    }).catch(function(error) {
      console.log("Authentication failed: ", error);
    });
  };


}]);
