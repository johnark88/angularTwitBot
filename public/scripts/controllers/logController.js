myApp.controller('logController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    console.log('log controller');
    idToken = sessionStorage.userAuth;
     $scope.userLvl = sessionStorage.userLVL;
    console.log($scope.userSecLvl, 'sec level');


}]);
