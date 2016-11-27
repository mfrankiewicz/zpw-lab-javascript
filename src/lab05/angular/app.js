var app = angular.module('app', [
    'ngRoute',
    'appControllers',
    'appDirectives',
    'appServices',
    'appFilters'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'views/main.html' })
        .when('/mixed-tasks', {templateUrl: 'views/mixed-tasks.html', controller: 'mixedTasksCtrl' })
        .when('/shop', { templateUrl: 'views/shop.html', controller: 'shopCtrl' })
        .when('/shop/cart', { templateUrl: 'views/cart.html', controller: 'cartCtrl' })
        .otherwise({ redirectTo: '/' });
}]);
