var appControllers = angular.module('appControllers',[]);

appControllers.controller('mainCtrl', function($scope, socket) {
    $scope.assetsVersion = Math.random();

    socket.on('message', function (notification) {
        $scope.notification = notification;
        $("#notificationModal").modal('show');
    });
});

appControllers.controller('shopCtrl', function($scope, $filter, $http, cartService) {

    $http.get('http://api.zpw.loc/products/').then(
        function(response) {
            $scope.products = response.data;
        },
        function(errResponse) {
            $scope.errorMessage = "Błąd pobierania danych!";
        }
    );

    $http.get('http://api.zpw.loc/product-categories/').then(
        function(response) {
            $scope.categories = [{id:0, name: 'wybierz'}].concat(response.data);
            $scope.selectedCategory = $scope.categories[0];
            $scope.product = { category: $scope.categories[0] };
        },
        function(errResponse) {
            $scope.errorMessage = "Błąd pobierania danych!";
        }
    );

    $scope.currentPage = 0;
    $scope.pageSize = 10;


    $scope.addProduct = function(){
        $scope.products.push({
            id: $scope.products.length + 1,
            name: $scope.product.name,
            price: $scope.product.price,
            categoryId: $scope.product.category.id
        });
    }

    $scope.numberOfPages = function(){
        return Math.ceil($scope.getProductCountByCategoryId($scope.selectedCategory.id)/$scope.pageSize);
    }

    $scope.getCategoryName = function(categoryId) {
        var result = '';
        angular.forEach($scope.categories, function(category, key) {
            if (category.id == categoryId) {
                result = category.name;
            }
        });

        return result;
    };

    $scope.getProductCountByCategoryId = function(categoryId) {
        var count = 0;
        if (!categoryId) {
            return $scope.products.length;
        }

        angular.forEach($scope.products, function(product, key) {
            if (product.categoryId == categoryId) {
                count++;
            }
        });

        return count;
    };

    $scope.addToCart = function(productId) {
        var products = $filter('filter')($scope.products, {id: productId}, true);

        if (products.length) {
            cartService.data.push({
                id: cartService.data.length + 1,
                productId: products[0].id,
                name: products[0].name,
                price: products[0].price,
                category: $scope.getCategoryName(products[0].categoryId)
            });
        }
    }
});

appControllers.controller('cartCtrl', function($scope, cartService) {

    $scope.cart = cartService.data;

    $scope.removeFromCart = function(cartItemId) {
        angular.forEach($scope.cart, function(cartItem, key) {
            if (cartItem.id == cartItemId) {
                $scope.cart.splice(key, 1);
            }
        });
    }
});

appControllers.controller('orderCtrl', function($scope, $http, cartService) {
    $scope.order = {
        name: '',
        street: ''
    };

    $scope.addOrder = function() {
        var order = {
            name: $scope.order.name,
            street: $scope.order.street,
            products: []
        };

        angular.forEach(cartService.data, function(cartItem, key) {
            order.products.push(cartItem.productId);
        });

        $http.post('http://api.zpw.loc/orders/', order).then(

            function(response) {
                $scope.products = response.data;
                $scope.errorMessages = null;
                $scope.success = true;
            },
            function(errResponse) {
                $scope.errorMessages = errResponse.data.errors;
                $scope.success = false;
            }
        );
    }
});
