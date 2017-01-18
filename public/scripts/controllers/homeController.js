myApp.controller('homeController', ['$scope', '$http', '$firebaseAuth', function($scope, $http, $firebaseAuth) {
    console.log('home Controller');
    var auth = $firebaseAuth();
    $scope.loggedIn = false;
    $scope.loggedOut = true;

    $scope.secret = [];
    $scope.batman= "batman";
    //login button click
    $scope.logIn = function() {
        console.log('logging in');

        auth.$signInWithPopup("google").then(function(firebaseUser) {
            console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
        }).catch(function(error) {
            console.log("Authentication failed: ", error);
        });
    };

    auth.$onAuthStateChanged(function(firebaseUser){
    // firebaseUser will be null if not logged in
    if(firebaseUser) {
      // This is where we make our call to our server
      firebaseUser.getToken().then(function(idToken){
        $http({
          method: 'GET',
          url: '/login',
          headers: {
            id_token: idToken
          }
        }).then(function(response){
          console.log(response.data, 'response');
          $scope.secret = response.data;
          console.log($scope.secret.name);
          $scope.ifFirebaseUser(firebaseUser);
        });
      });
    } else {
      console.log('Not logged in or not authorized.');
      $scope.secretData = "Log in to get some secret data.";
    }

  });

  $scope.ifFirebaseUser = function(fbu) {
        if (fbu) {
            $scope.loggedIn = true;
            $scope.loggedOut = false;
        } else {
            $scope.loggedIn = false;
            $scope.loggedOut = true;
            $location.reload();
        }
    };

  // This code runs when the user logs out
  $scope.logOut = function(){
    auth.$signOut().then(function(){
      console.log('Logging the user out!');
      $scope.ifFirebaseUser();
    });
  };


}]);