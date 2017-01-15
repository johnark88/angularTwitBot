console.log('sourced');

var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
    when("/login", {
        templateUrl: "/views/logIn.html",
        controller: "loginController"
    }).
    when("/home",{
      templateUrl: "/views/home.html"
    }).
    otherwise({
        redirectTo: "/login"
    });
}]);

myApp.controller('home', ['$scope', function($scope) {
    console.log('Angular');
}]);
