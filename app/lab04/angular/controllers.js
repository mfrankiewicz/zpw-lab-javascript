var appControllers = angular.module('appControllers',[]);

appControllers.controller('GalleryDetailCtrl', function($scope, $http, $routeParams, Gallery) {

    // $http.get('/json/'+ $routeParams.galleryId +'.json').then(
    //     function(response) {
    //         $scope.gallery=response.data;
    //         $scope.mainPhotoUrl = $scope.gallery.photos[0].photoUrl;
    //     },
    //     function(errResponse) {
    //         console.log("Something goes wrong: ", errResponse);
    //     }
    // );

    $scope.gallery = Gallery.get(
        {
            galleryId: $routeParams.galleryId
        },
        function(gallery) {
            $scope.mainPhotoUrl = gallery.photos[0].photoUrl;
        }
    );

    $scope.setPhoto = function(photo) {
        $scope.mainPhotoUrl = photo.photoUrl;
    };
});

appControllers.controller('GalleryListCtrl', function($scope, $http, Gallery) {

    $scope.assetsVersion = Math.random();
    $scope.locale = "pl-pl";
    $scope.sectionTitle = "Galeria podróży";
    $scope.galleries = Gallery.query();
    // $http.get('/json/galleries.json').then(
    //     function(response) {
    //         $scope.galleries=response.data;
    //     },
    //     function(errResponse) {
    //         console.log("Something goes wrong: ", errResponse);
    //     }
    // );
    $http.get('/json/galleries-sorting.json').then(
        function(response) {
            $scope.sortList=response.data;
            $scope.order = $scope.sortList[1];
        },
        function(errResponse) {
            console.log("Something goes wrong: ", errResponse);
        }
    );
});
