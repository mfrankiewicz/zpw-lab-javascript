var appDirectives = angular.module('appDirectives',[]);


appDirectives.directive('yWidget', function() {
    return {
        link: function  ($scope, $element, $attrs) {
            $element.replaceWith('Hello Angular');
        }
    };
});

appDirectives.directive('myWidget', function() {
    return {
         link: function($scope, $element, $attrs) {
             $element.text($attrs.myWidget);
         }
    };
});

appDirectives.directive('ngRepeats', function() {
    return {
         link: function($scope, $element, $attrs) {
             var newHtmlContent = '';
             for(i=1; i <= $attrs.ngRepeats; i++) {
                 newHtmlContent += $element.html();
             }
             $element.html(newHtmlContent);
         }
    };
});
