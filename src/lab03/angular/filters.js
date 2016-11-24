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
