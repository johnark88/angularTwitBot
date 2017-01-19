myApp.controller('botController', ['$scope', '$http', function($scope, $httpx) {
    console.log('bot Controller');


      $scope.init = function(){
        $http({
          method: 'GET',
          url: '/bot',
          headers: {
            id_token: idToken
          }
      )}.then(function(response){
        console.log('response',response);
      }
  }]);
