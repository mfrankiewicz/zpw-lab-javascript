var appControllers = angular.module('appControllers',[]);

appControllers.controller('mainCtrl', function($scope, $http) {
    $scope.assetsVersion = Math.random();
});

appControllers.controller('mixedTasksCtrl', function($scope) {
    $scope.currentDate = new Date();
    $scope.dateTwoDays = (new Date()).setDate($scope.currentDate.getDate() + 2);

    $scope.reverseString = function(string){
        var newString = ''
        if (string == undefined) {
            return '';
        }

        for(i=string.length - 1; i >= 0; i--) {
            newString += string[i];
        }

        return newString;
    };
});

appControllers.controller('shopCtrl', function($scope, $filter, cartService) {

    $scope.categories = [
        {
            id: 0,
            name: 'wybierz'
        },
        {
            id: 1,
            name: 'narzędzia'
        },
        {
            id: 2,
            name: 'AGD'
        },
        {
            id: 3,
            name: 'elektronika'
        }
    ];
    $scope.products = [
        {
            id: 1,
            name: 'Młotek',
            price: 20.11,
            categoryId: 1
        },
        {
            id: 2,
            name: 'Odtwarzacz MP3',
            price: 99.99,
            categoryId: 3
        },
        {
            id: 3,
            name: 'Toster',
            price: 25.30,
            categoryId: 2
        },
        {
            id: 4,
            name: 'Monitor',
            price: 999.99,
            categoryId: 3
        },
        {
            id: 5,
            name: 'Śrubokręt',
            price: 5.32,
            categoryId: 1
        },
        {
            id: 6,
            name: 'Gofrownica',
            price: 75.49,
            categoryId: 2
        }
    ];
    $scope.currentPage = 0;
    $scope.pageSize = 3;
    $scope.selectedCategory = $scope.categories[0];
    $scope.product = { category: $scope.categories[0] };

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
                id: products[0].id,
                name: products[0].name,
                price: products[0].price,
                category: $scope.getCategoryName(products[0].categoryId)
            });
        }
    }
});

appControllers.controller('cartCtrl', function($scope, cartService) {

    $scope.cart = cartService.data;



});
