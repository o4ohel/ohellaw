'use strict';

/**
 * @ngdoc function
 * @name ohellawApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the ohellawApp
 */
angular.module('ohellawApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
