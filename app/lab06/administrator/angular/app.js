var adminApp = angular.module('adminApp', [
    'ngRoute',
    'appControllers',
    'appServices'
]);

adminApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/login', { templateUrl: 'views/login.html', controller: 'loginCtrl' })
        .when('/dashboard', { templateUrl: 'views/dashboard.html', controller: 'dashboardCtrl' })
        .when('/order/list', { templateUrl: 'views/list-order.html', controller: 'orderListCtrl' })
        .when('/product/add', { templateUrl: 'views/add-product.html', controller: 'addProductCtrl' })
        .otherwise({ redirectTo: '/login' });
}]);

adminApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider
        .defaults.withCredentials = true;
}]);
