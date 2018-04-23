myApp.service('instantaniusDataService', function ($http, $q) {
    this.data = function () {
        var deferred = $q.defer();
        var url = 'json/';
        var fileName = 'instantanius-data.json';

        $http({
            method: 'GET',
            url: url + fileName,
        }).success(function (data) {
            deferred.resolve(data);
        }).error(function (data, status) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
});