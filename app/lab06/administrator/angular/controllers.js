var appControllers = angular.module('appControllers',[]);

appControllers.controller('mainCtrl', function($scope) {
    $scope.assetsVersion = Math.random();
});

appControllers.controller("loginCtrl", function($scope, $http, $location) {
    $scope.authenticate = function () {
        if ($scope.user != undefined) {
            $http.post('http://api.zpw.loc/users/login', {
                username: $scope.user.name,
                password: $scope.user.password
                },{
                    withCredentials: true
                }).success(function (data) {
                    $location.path("/dashboard");
                }).error(function (error) {
                    $scope.authenticationError = error;
            });
        } else {
            $scope.authenticationError = true;
        }
    }
});

appControllers.controller('dashboardCtrl', function($scope) {

});
