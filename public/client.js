console.log('sourced');

var myApp = angular.module('myApp', ['ngRoute']);




myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
  when("/login", {
    templateUrl: "/views/logIn.html",
    controller: "loginController"
  }).
  otherwise({
       redirectTo: "/"
   });
}]);

myApp.controller('home',['$scope', function($scope){
  console.log('Angular');
}]);
