myApp.controller('loginController', ['$scope', '$http', function($scope, $http) {
    console.log('Log in Controller');

    //login button click
    $scope.logIn = function() {
        console.log('logging in');
    };

}]);
