var appServices = angular.module('appServices', []);

appServices.factory('cartService', function() {
    return {
        data : [
            {
                id: 1,
                archive: false,
                username: "Użytkownik 1",
                productName: "Produkt 1",
                date: new Date(Date.UTC(2016, 10, 14, 11, 17, 0))
            },
            {
                id: 2,
                archive: false,
                username: "Użytkownik 2",
                productName: "Produkt 2",
                date: new Date(Date.UTC(2016, 10, 18, 16, 22, 0))
            },
            {
                id: 3,
                archive: false,
                username: "Użytkownik 3",
                productName: "Produkt 3",
                date: new Date(Date.UTC(2016, 10, 19, 8, 52, 0))
            }
        ]
    };
});
