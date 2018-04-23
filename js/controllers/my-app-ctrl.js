myApp.controller('myAppCtrl', function ($scope, emotionDataService) {
    emotionDataService.data().then( function (data) {
        $scope.emotionData = data;
        console.log(data);
    });
});