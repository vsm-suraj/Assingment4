myApp.controller('myAppCtrl', function ($scope, emotionDataService, instantaniusDataService) {
    emotionDataService.data().then( function (data) {
        $scope.emotionData = data;
    });

    instantaniusDataService.data().then(function (data) {
        $scope.instantaniusData = data;
    });
});