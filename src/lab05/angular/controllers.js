var appControllers = angular.module('appControllers',[]);

appControllers.controller('mainCtrl', function($scope, $http) {
    $scope.assetsVersion = Math.random();
});

appControllers.controller('mixedTasksCtrl', function($scope) {
    $scope.currentDate = new Date();
    $scope.dateTwoDays = (new Date()).setDate($scope.currentDate.getDate() + 2);

    $scope.reverseString = function(string){
        var newString = ''
        if (string == undefined) {
            return '';
        }

        for(i=string.length - 1; i >= 0; i--) {
            newString += string[i];
        }

        return newString;
    };
});

appControllers.controller('shopCtrl', function($scope) {




});

appControllers.controller('cartCtrl', function($scope) {




});
