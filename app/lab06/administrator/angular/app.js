var adminApp = angular.module('adminApp', [
    'ngRoute',
    'appControllers'
]);

adminApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/login', { templateUrl: 'views/login.html', controller: 'loginCtrl' })
        .when('/dashboard', { templateUrl: 'views/dashboard.html', controller: 'dashboardCtrl' })
        //.when('/order/list', { templateUrl: 'views/list-order.html', controller: 'orderListCtrl' })
        .otherwise({ redirectTo: '/login' });
}]);
