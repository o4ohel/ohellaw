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
    $scope.navbarCollapse = true;

  	$rootScope.$on('$stateChangeStart', function(event, toState){
  		$rootScope.fluidBodyLayout = (toState.name.indexOf('estateplan.form') > -1);
      $scope.navbarCollapse = true;
    });

  });
