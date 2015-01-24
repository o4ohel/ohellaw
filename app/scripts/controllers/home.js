'use strict';

/**
 * @ngdoc function
 * @name ohellawApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the ohellawApp
 */
angular.module('ohellawApp')
  .controller('HomeCtrl', function ($scope, $http) {
  	$scope.slideInterval = 3000;
  	$scope.slides = [];
    $http.get('data/testimonials.json').success(function(data) {
      $scope.slides = data.testimonials;
    });
  	// $scope.addSlide = function() {
   //  	var newWidth = 600 + slides.length + 1;
	  //   slides.push({
	  //     image: 'http://placekitten.com/' + newWidth + '/300',
	  //     text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
	  //       ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
	  //   });
  	// };
	  // for (var i=0; i<4; i++) {
	  //   $scope.addSlide();
	  // }

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
