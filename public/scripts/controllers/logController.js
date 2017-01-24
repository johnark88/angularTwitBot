myApp.controller('logController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    console.log('log controller');
    idToken = sessionStorage.userAuth;
    sessionStorage.userLVL = $scope.userSecLvl;
    console.log($scope.userSecLvl, 'sec level');

    
}]);
