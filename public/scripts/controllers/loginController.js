myApp.controller('loginController', ['$scope', '$http', function($scope, $http) {
  console.log('Log in Controller');
  $scope.logIn = function() {
    console.log('logging in');
  };
}]);
