var appFilters = angular.module('appFilters', []);

appFilters.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});

appFilters.filter('categoryFilter', function() {
    return function(input, category) {
        var result = [];
        if (category.id == 0) {
            return input;
        }
        angular.forEach(input, function(product, key) {
            if (product.categoryId == category.id) {
                result.push(product);
            }
        });

        return result;
    }
});

appFilters.filter('priceRangeFilter', function() {
    return function(input, from, to) {
        var result = [];
        if (from != undefined && to != undefined) {
            angular.forEach(input, function(product, key) {
                if (product.price <= to && product.price >= from) {
                    result.push(product);
                }
            });
            input = result;
        }

        return input;
    }
});
