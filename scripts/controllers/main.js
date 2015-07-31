'use strict';

angular.module('testApp')
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

        var $uri ='https://api.typeform.com/v0/form/E9Tz2g?key=9558ca6453cfd4e8f49ceed4bca5b11aeab62cf0&completed=true';

        $scope.doSearch = function() {

            $http({
                method : 'GET',
                url : $uri
            }).success(function(data, status, headers, config) {
                $scope.results = data.responses;
                console.log(status);
                console.log(data);
            }).error(function(data, status, headers, config) {
                console.log(status);
            });
        };

    }]);
