myApp.controller('logController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    console.log('log controller');

    //get id token from session storeage
    idToken = sessionStorage.userAuth;

    //not allowed or restriced set to on page load
    $scope.allowed = false;
    $scope.restricted = true;

    //get user security level from session storeage
    $scope.userLvl = sessionStorage.userLVL;
    console.log($scope.userLvl, 'sec level');

    //if security level is greater than 2 allow the showing of data else show restricted msg
    if ($scope.userLvl > 2) {
        $scope.allowed = true;
        $scope.restricted = false;
    } else {
        $scope.allowed = false;
        $scope.restricted = true;
    }
}]);
