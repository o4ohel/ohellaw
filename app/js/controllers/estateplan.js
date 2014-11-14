'use strict';

/**
 * @ngdoc function
 * @name app.controller:EstateplanCtrl
 * @description
 * # EstateplanCtrl
 * Controller of the estate plan form
 */
angular.module('app')
  .controller('EstateplanController', function ($scope) {

    $scope.states = [
      {key: 'AZ', label: 'Arizona'},
      {key: 'CA', label: 'California'},
      {key: 'NV', label: 'Nevada'}
    ];
    $scope.plan = {
      client: {
        isOwner: false
      },
      spouse: {},
      children: {
        0: {}
      },
      beneficiaries: {
        0: {}
      }
    };

    $scope.addChild = function() {
      $scope.plan.children.push({});
    };
    $scope.removeChild = function() {
      var child = this.child;
      $scope.plan.children.splice($scope.plan.children.indexOf(child), 1);
    };
    $scope.addBeneficiary = function() {
      $scope.plan.beneficiaries.push({});
    };
    $scope.removeBeneficiary = function() {
      var beneficiary = this.beneficiary;
      $scope.plan.beneficiaries.splice($scope.plan.beneficiaries.indexOf(beneficiary), 1);
    };

    $scope.makeSameAddress = function() {
      var isSame = $scope.plan.wife.sameAddress;
      if(isSame) {
        $scope.plan.wife.address = angular.copy($scope.plan.husband.address);
      } else {
        $scope.plan.wife.address = {};
      }
    };

    $scope.save = function() {
      // plans.push($scope.plan);
    };
  });
