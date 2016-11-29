var app = angular.module('app', [
    'ngRoute',
    'appControllers',
    'appServices',
    'appFilters'
]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/shop', { templateUrl: 'views/shop.html', controller: 'shopCtrl' })
        .when('/shop/add-product', { templateUrl: 'views/add-product.html', controller: 'shopCtrl' })
        .when('/shop/cart', { templateUrl: 'views/cart.html', controller: 'cartCtrl' })
        .when('/order/add', { templateUrl: 'views/add-order.html', controller: 'orderCtrl' })
        .otherwise({ redirectTo: '/shop' });
}]);
