var appServices = angular.module('appServices', []);

appServices.factory('orderService', function($http) {
    return {
        getOrders: function() {
            return $http.get('http://api.zpw.loc/orders/');
        },
        data : []
    };
});

appServices.factory('productService', function($http) {
    return {
        getProducts: function() {
            return $http.get('http://api.zpw.loc/products/');
        },
        addProduct: function(product) {
            return $http.post('http://api.zpw.loc/products/', product);
        },
        editProduct: function(productId, product) {
            return $http.put('http://api.zpw.loc/products/' + productId, product);
        },
        removeProduct: function(productId) {
            return $http.delete('http://api.zpw.loc/products/' + productId);
        },
        data : []
    };
});
