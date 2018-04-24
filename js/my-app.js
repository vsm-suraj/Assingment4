var myApp = angular.module('myApp', ['ngResource']);

myApp.config(function ($routeProvider) {
    var url = 'templates/';
    var annotationFileName = 'annotations.html';
    var toneAnalysisFileName = 'tone-analysis.html';
    var videosFileName = 'videos.html';

    $routeProvider.when('/annotations', {
        templateUrl: url + annotationFileName
    }).when('/tone-analysis', {
        templateUrl: url + toneAnalysisFileName
    }).when('/pins', {
        templateUrl: url + videosFileName
    }).otherwise({
        templateUrl: url + toneAnalysisFileName
    });
}); 