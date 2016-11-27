var app = angular.module('app', [
    'ngRoute',
    'appControllers',
    'appServices',
    'appFilters'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/shop', { templateUrl: 'views/shop.html', controller: 'shopCtrl' })
        .when('/shop/cart', { templateUrl: 'views/cart.html', controller: 'cartCtrl' })
        .otherwise({ redirectTo: '/shop' });
}]);
