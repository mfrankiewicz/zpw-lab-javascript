var appServices = angular.module('appServices', []);

appServices.factory('purchaseListService', function() {
    return {
        data : [
            {
                id: 1,
                archive: false,
                username: "Użytkownik 1",
                productName: "Produkt 1",
                date: "14.11.2016 11:17"
            },
            {
                id: 2,
                archive: false,
                username: "Użytkownik 2",
                productName: "Produkt 2",
                date: "18.11.2016 16:22"
            },
            {
                id: 3,
                archive: false,
                username: "Użytkownik 3",
                productName: "Produkt 3",
                date: "19.11.2016 08:51"
            }
        ]
    };
});
