var appControllers = angular.module('appControllers',[]);

appControllers.controller('mainCtrl', function($scope, $http) {
    $scope.laboratories = [
        {
            description: 'Laboratorium nr 3',
            url: 'http://lab03.zpw.loc/'
        },
        {
            description: 'Laboratorium nr 4',
            url: 'http://lab04.zpw.loc/'
        },
        {
            description: 'Laboratorium nr 5',
            url: 'http://lab05.zpw.loc/'
        },
        {
            description: 'Laboratorium nr 6',
            url: 'http://lab06.zpw.loc/'
        },
        {
            description: 'Laboratorium nr 7',
            url: 'http://lab07.zpw.loc/'
        }
    ]
});
