'use strict';

angular.module('ohellawApp').directive('googleplace', function() {
    return {
        require: 'ngModel',
        scope: {
            ngModel: '=',
            details: '=?'
        },
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
                // console.log(scope.gPlace);
                scope.$apply(function() {
                    scope.details = scope.gPlace.getPlace();
                    var addressWithZip = '';
                    /* jshint ignore:start */
                    addressWithZip = scope.details.formatted_address;
                    /* jshint ignore:end */
                    // model.$setViewValue(element.val());    
                    model.$setViewValue(addressWithZip);          
                });
            });
        }
    };
});