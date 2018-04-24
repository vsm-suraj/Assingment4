myApp.controller('myAppCtrl', function ($scope, emotionDataService, instantaniusDataService) {
    
    /* for getting data from json file */
    emotionDataService.data().then(function (data) {
        $scope.emotionData = data;
    });

    instantaniusDataService.data().then(function (data) {
        $scope.instantaniusData = data;
    });
});