var appControllers = angular.module('appControllers',[]);

appControllers.controller('mainCtrl', function($scope, $http) {
    $scope.assetsVersion = Math.random();
});

appControllers.controller('purchaseFormCtrl', function($scope, purchaseListService) {

    $scope.addPurchase = function() {
        var purchase = $scope.purchase;

        purchaseListService.data.push({
            id: purchaseListService.data.length + 1,
            archive: false,
            username: purchase.username,
            productName: purchase.productName,
            date: purchase.date
        });
    }


});

appControllers.controller('purchaseListCtrl', function($scope, purchaseListService) {
    $scope.purchases = purchaseListService.data;
    $scope.currentPage = 0;
    $scope.pageSize = 8;

    $scope.numberOfPages=function(){
        return Math.ceil($scope.getDisplayedPurchasesCount()/$scope.pageSize);
    }

    $scope.archive = function(purchaseId) {
        angular.forEach(purchaseListService.data, function(purchase, key) {
            if (purchase.id == purchaseId) {
                purchase.archive = true;
                purchase.restoreArchive = false;
            }
        });
    }

    $scope.unarchive = function(purchaseId) {
        angular.forEach(purchaseListService.data, function(purchase, key) {
            if (purchase.id == purchaseId) {
                purchase.archive = false;
                purchase.restoreArchive = false;
            }
        });
    }

    $scope.restoreArchive = function() {
        angular.forEach(purchaseListService.data, function(purchase, key) {
            if (purchase.archive) {
                purchase.restoreArchive = true;
            }
        });
    }

    $scope.getPurchaseCountByArchiveStatus = function(archive) {
        var count = 0;

        angular.forEach(purchaseListService.data, function(purchase, key) {
            if (purchase.archive == archive) {
                count++;
            }
        });

        return count;
    }

    $scope.getDisplayedPurchasesCount = function() {
        var count = 0;

        angular.forEach(purchaseListService.data, function(purchase, key) {
            if (!purchase.archive || (purchase.archive && purchase.restoreArchive)) {
                count++;
            }
        });

        return count;
    }

});
