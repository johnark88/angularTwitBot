myApp.controller('botController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    console.log('bot Controller');

    var idToken = sessionStorage.getItem('userAuth');
    $scope.bot;
    $scope.favBot;

    //interval timer to start the twitter bot
    $interval(function() {
        //retweet bot
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
        // favorite bot
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
        //this is 60min interval timer
    }, 3600000);
}]);
