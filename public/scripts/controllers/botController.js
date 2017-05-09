myApp.controller('botController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    console.log('bot Controller');

    var idToken = sessionStorage.getItem('userAuth');
    $scope.bot;
    $scope.favBot;

    //interval timer to start the twitter bot
    // $interval(function() {
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
        //this is 60min interval in ms 3600000
        //this is a 10min interval in ms 600000
        //this is a 1min interval in ms 60000
    // }, 60000);

    $scope.updateBot = function() {
        console.log('updateBot');

        var objectToSend = {
            hashtag: $scope.rtHashtag
        };

        console.log(objectToSend, 'new hashtag');
        $http({
            method: 'PUT',
            url: '/test',
            data: objectToSend,
            headers: {
                id_tokens: idToken
            }
        }).then(function(response) {
            console.log(response, 'response');
        });
    };
}]);
