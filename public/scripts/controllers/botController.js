myApp.controller('botController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    console.log('bot Controller');

    var idToken = sessionStorage.getItem('userAuth');
    $scope.bot = [];
    $scope.favBot = [];

    $interval(function() {

        $http({
            method: 'GET',
            url: '/bot',
            headers: {
                id_token: idToken
            }
        }).then(function(response) {
            console.log('response', response);
            $scope.bot = response.data;
            console.log($scope.bot);
        });

        $http({
            method: 'GET',
            url: '/favBot',
            headers: {
                id_token: idToken
            }
        }).then(function(response) {
            console.log('favBot Response', response);
            $scope.favBot = response.data;
        });
    }, 3600000);
}]);

//1000 3600000
