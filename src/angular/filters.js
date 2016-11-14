var appFilters = angular.module('appFilters',[]);

appFilters.filter('monthName', function() {
        return function(monthNumber) {
            var monthNames = [
                'stycznia',
                'lutego',
                'marca',
                'kwietnia',
                'maja',
                'czerwca',
                'lipca',
                'sierpnia',
                'września',
                'października',
                'listopada',
                'grudnia'
            ];
            return monthNames[monthNumber - 1];
        };
    });

appFilters.filter('dayOfTheWeek', function() {
        return function(dayName) {
            var dayMapper = {
                'Monday': 'Poniedziałek',
                'Tuesday': 'Wtorek',
                'Wednesday': 'Środa',
                'Thursday': 'Czwartek',
                'Friday': 'Piątek',
                'Saturday': 'Sobota',
                'Sunday': 'Niedziela'
            };
            return dayMapper[dayName];
        };
    });
