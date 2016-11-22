var appDirectives = angular.module('appDirectives',[]);

appDirectives.directive('imageSourceChange', function($timeout){
    return {
        restrict: 'A',
        link: function($scope, $element, $attrs){
            $element.addClass("ng-hide-remove");
            $attrs.$observe("src", function () {
                $element.removeClass("ng-hide-add");
            });
            $element.on('load', function(){
                setTimeout(function(){
                    $element.addClass("ng-hide-add")
                }, 800);
            });
        }
    };
})
