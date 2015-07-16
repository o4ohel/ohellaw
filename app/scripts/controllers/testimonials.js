'use strict';

/**
 * @ngdoc function
 * @name ohellawApp.controller:TestimonialsCtrl
 * @description
 * # TestimonialsCtrl
 * Controller of the ohellawApp
 */
angular.module('ohellawApp').controller('TestimonialsCtrl', function ($scope, $http) {
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	  	randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
  }

  $scope.testimonials = [];
  $http.get('data/testimonials.json').success(function(data) {
    $scope.testimonials = shuffle(data.testimonials);
  });
});
