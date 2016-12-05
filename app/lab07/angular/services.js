var appServices = angular.module('appServices', []);

appServices.factory('cartService', function() {
    return {
        data : []
    };
});

appServices.factory('socket', ['$rootScope', function ($rootScope) {
    var socket = io.connect('http://api.zpw.loc');

    return {
        on: function (eventName, callback) {
            function wrapper() {
            var args = arguments;
                $rootScope.$apply(function () {
                    callback.apply(socket, args);
                });
            }

            socket.on(eventName, wrapper);

            return function () {
            socket.removeListener(eventName, wrapper);
            };
        },
        emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                    if(callback) {
                        callback.apply(socket, args);
                    }
                });
            });
        }
    };
}]);
