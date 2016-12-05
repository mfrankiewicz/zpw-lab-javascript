var appControllers = angular.module('appControllers',[]);

appControllers.controller('mainCtrl', function($scope) {
    $scope.assetsVersion = Math.random();
});

appControllers.controller("loginCtrl", function($scope, $http, $location) {
    $scope.authenticate = function () {
        if ($scope.user != undefined) {
            $http.post('http://deployd.zpw.loc/users/login', {
                username: $scope.user.name,
                password: $scope.user.password
                },{
                    withCredentials: true
                }).success(function (data) {
                    $location.path("/dashboard");
                }).error(function (error) {
                    $scope.authenticationError = error;
            });
        } else {
            $scope.authenticationError = true;
        }
    }
});

appControllers.controller('dashboardCtrl', function($scope) {

});

appControllers.controller('orderListCtrl', function($scope, orderService, productService) {

    $scope.getOrders = function() {
        productService.getProducts().success(function(response){
            $scope.products = response;
            orderService.getOrders().success(function(response){
                $scope.orders = response.reverse();
                angular.forEach($scope.orders, function(order, key) {
                    order.totalPrice = 0;
                    order.productsSummaryTemp = [];
                    angular.forEach(order.products, function(productId, key) {
                        angular.forEach($scope.products, function(product, key) {
                            if (product.id == productId) {
                                order.totalPrice += product.price;
                                order.productsSummaryTemp[productId] = product;

                                if (order.productsSummaryTemp[productId].quantity == undefined) {
                                    order.productsSummaryTemp[productId].quantity = 0;
                                }

                                order.productsSummaryTemp[productId].quantity++;
                            }

                        });
                    });
                });
                angular.forEach($scope.orders, function(order, key) {
                    productsSummary= [];
                    angular.forEach(Object.keys(order.productsSummaryTemp), function(objKey, key) {
                        productsSummary.push({
                            name: order.productsSummaryTemp[objKey].name,
                            price: order.productsSummaryTemp[objKey].price,
                            quantity: order.productsSummaryTemp[objKey].quantity
                        });
                    });
                    order.productsSummary = productsSummary;
                });
            });
        });
    }

    $scope.getOrders();
});

appControllers.controller('addProductCtrl', function($scope, $http, productService) {

    $scope.getProducts = function() {
        productService.getProducts().success(function(response){
            $scope.products = response.reverse();
        });
    }

    $scope.addProduct = function(){

        product = {
            name: $scope.product.name,
            price: $scope.product.price,
            categoryId: $scope.product.category.id
        };

        productService.addProduct(product).then(function(){
            $scope.getProducts();
        });
    }

    $scope.editProduct = function(productId){
        angular.forEach($scope.products, function(product, key) {
            product.editing = false;
            if (product.id == productId) {
                product.editing = true;
                $scope.productEditing = {
                    name: product.name,
                    price: product.price,
                    category: $scope.getCategoryById(product.categoryId)
                };
            }
        });
    }

    $scope.saveProduct = function(productId) {
        angular.forEach($scope.products, function(product, key) {
            product.editing = false;
        });

        product = {
            name: $scope.productEditing.name,
            price: $scope.productEditing.price,
            categoryId: $scope.productEditing.category.id
        }
        productService.editProduct(productId, product).then(function(){
            $scope.getProducts();
        });
    }

    $scope.removeProduct = function(productId) {
        productService.removeProduct(productId).then(function(){
            $scope.getProducts();
        });
    }

    $scope.getProducts();

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

    $scope.getCategoryName = function(categoryId) {
        var result = '';
        angular.forEach($scope.categories, function(category, key) {
            if (category.id == categoryId) {
                result = category.name;
            }
        });

        return result;
    };

    $scope.getCategoryById = function(categoryId) {
        var result = '';
        angular.forEach($scope.categories, function(category, key) {
            if (category.id == categoryId) {
                result = category;
            }
        });

        return result;
    }
});
