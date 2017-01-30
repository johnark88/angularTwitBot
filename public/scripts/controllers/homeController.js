myApp.controller('homeController', ['$scope', '$http', '$firebaseAuth', function($scope, $http, $firebaseAuth) {
    console.log('home Controller');
     auth = $firebaseAuth();
    $scope.loggedIn = false;
    $scope.loggedOut = true;

    $scope.secret = [];
    $scope.userLVL = 1;
    console.log($scope.userLVL);
    //login button click
    $scope.logIn = function() {
        console.log('logging in');

        auth.$signInWithPopup("google").then(function(firebaseUser) {
            console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
        }).catch(function(error) {
            console.log("Authentication failed: ", error);
        });
    };

    auth.$onAuthStateChanged(function(firebaseUser) {
        // firebaseUser will be null if not logged in
        if (firebaseUser) {
            // This is where we make our call to our server
            firebaseUser.getToken().then(function(idToken) {
                $http({
                    method: 'GET',
                    url: '/login',
                    headers: {
                        id_token: idToken
                    }
                }).then(function(response) {
                  //pull secruity level from response.data
                  response.data.forEach(function(a){
                      console.log(a.secrecy_level);
                      $scope.userLVL = a.secrecy_level;
                    });
                    console.log($scope.userLVL, 'user sec level ');
                    //contains user secruity level
                    sessionStorage.userLVL = $scope.userLVL;
                    //holds secruity token
                    sessionStorage.userAuth = idToken;
                    //holds user google name
                    sessionStorage.userName = firebaseUser.displayName;
                    //holds user google picture
                    sessionStorage.userPic = firebaseUser.photoURL;
                    $scope.ifFirebaseUser(firebaseUser);
                });
            });
        } else {
            console.log('Not logged in or not authorized.');
            $scope.nope = "Not logged in or not authorized";
        }

    });
    //pull user info from session storage
    $scope.userName = sessionStorage.userName;
    $scope.userPic = sessionStorage.userPic;

    //if user logged in show / don't show these items
    $scope.ifFirebaseUser = function(fbu) {
        if (fbu) {
            $scope.loggedIn = true;
            $scope.loggedOut = false;
        } else {
            $scope.loggedIn = false;
            $scope.loggedOut = true;
            // $location.reload();
        }
    };

    // This code runs when the user logs out
    $scope.logOut = function() {
        auth.$signOut().then(function() {
            console.log('Logging the user out!');
            $scope.ifFirebaseUser();
            sessionStorage.clear();
        });
    };


}]);
