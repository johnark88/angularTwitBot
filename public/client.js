console.log('sourced');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller('home',['$scope', function($scope){
  console.log('Angular');
  
}]);
