var app = angular.module('app', [
    'ngRoute',
    'appControllers',
    'appServices',
    'appFilters'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'views/main.html' })
        .when('/mixed-tasks', {templateUrl: 'views/mixed-tasks.html', controller: 'MixedTasksCtrl' })
        .when('/shop', { templateUrl: 'views/shop.html', controller: 'ShopCtrl' })
        .when('/shop/cart', { templateUrl: 'views/cart.html', controller: 'CartCtrl' })
        .otherwise({ redirectTo: '/' });
}]);
