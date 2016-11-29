var appServices = angular.module('appServices', []);

appServices.factory('orderService', function($http) {
    return {
        getOrders: function() {
            return $http.get('http://deployd.zpw.loc/orders/');
        },
        data : []
    };
});

appServices.factory('productService', function($http) {
    return {
        getProducts: function() {
            return $http.get('http://deployd.zpw.loc/products/');
        },
        addProduct: function(product) {
            return $http.post('http://deployd.zpw.loc/products/', product);
        },
        editProduct: function(productId, product) {
            return $http.put('http://deployd.zpw.loc/products/' + productId, product);
        },
        removeProduct: function(productId) {
            return $http.delete('http://deployd.zpw.loc/products/' + productId);
        },
        data : []
    };
});
