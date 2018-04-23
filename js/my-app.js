var myApp = angular.module('myApp', ['ngResource']);

myApp.config(function ($routeProvider) {
    $routeProvider.when('/annotations', {
        templateUrl: 'templates/annotations.html'
    }).when('/tone-analysis', {
        templateUrl: 'templates/tone-analysis.html'
    });
}); 