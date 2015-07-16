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
  });
