myApp.controller('botController', ['$scope', '$http', function($scope, $http) {
    console.log('bot Controller');

    var idToken = sessionStorage.getItem('userAuth');
    $scope.bot = [];

    $scope.getBot = function() {
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
    };

}]);
