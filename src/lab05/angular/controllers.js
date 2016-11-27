var appControllers = angular.module('appControllers',[]);

appControllers.controller('mainCtrl', function($scope, $http) {
    $scope.assetsVersion = Math.random();
});

appControllers.controller('mixedTasksCtrl', function($scope, purchaseListService) {




});

appControllers.controller('shopCtrl', function($scope, purchaseListService) {




});

appControllers.controller('cartCtrl', function($scope, purchaseListService) {




});
