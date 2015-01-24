'use strict';

/**
 * @ngdoc function
 * @name ohellawApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ohellawApp
 */
angular.module('ohellawApp')
  .controller('MainCtrl', function ($scope, $rootScope, $state) {
  	$rootScope.$state = $state;
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
