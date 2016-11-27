var appFilters = angular.module('appFilters', []);

appFilters.filter('startFrom', function() {
    return function(input, start) {
        var result = [];
        angular.forEach(input, function(purchase, key) {
            if (!purchase.archive || purchase.restoreArchive) {
                result.push(purchase);
            }
        });
        start = +start;
        return result.slice(start);
    }
});

appFilters.filter('dateRangeFilter', function() {
    return function(input, from, to) {
        var result = [];
        if (from != undefined && to != undefined) {
            angular.forEach(input, function(purchase, key) {
                if (purchase.date <= to && purchase.date >= from) {
                    result.push(purchase);
                }
            });
            input = result;
        }

        return input;
    }
});
