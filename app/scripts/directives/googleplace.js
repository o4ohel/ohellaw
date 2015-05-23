'use strict';

angular.module('ohellawApp').directive('googleplace', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: [],
                componentRestrictions: {}
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addDomListener(element[0], 'keydown', function(e) { 
                if (e.keyCode === 13) { 
                    e.preventDefault(); 
                }
            }); 

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
                // console.log(arguments);
                scope.$apply(function() {
                    model.$setViewValue(element.val());                
                });
            });
        }
    };
});