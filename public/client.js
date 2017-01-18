console.log('sourced');

var myApp = angular.module('myApp', ['ngRoute','firebase']);


myApp.config(["$routeProvider", function($routeProvider) {
    $routeProvider.
    when("/", {
        templateUrl: "/views/home.html",
    }).
    when("/bot",{
      templateUrl: "/views/bot.html",
      controller: "botController"
    }).
    otherwise({
        redirectTo: "/"
    });
}]);

myApp.controller('home', ['$scope', function($scope) {
    console.log('Angular');

}]);
