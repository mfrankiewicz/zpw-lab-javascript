var appServices = angular.module('appServices',['ngResource']);

appServices.factory('Gallery', ['$resource', function($resource){
    return $resource('/json/:galleryId.json', {}, {
        query: {
            method: 'GET',
            params: {
                galleryId:'galleries'
            },
            isArray:true
        }
    });
}]);
