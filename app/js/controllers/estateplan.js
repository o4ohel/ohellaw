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
      children: [],
      beneficiaries: [],
      trustee: {},
      distribution: {
        age1: 18,
        age2: 18,
        age3: 18
      }
    };

    $scope.addChild = function() {
      $scope.plan.children.push({});
    };
    $scope.addChild();
    $scope.removeChild = function() {
      var child = this.child;
      if($scope.plan.children.length < 2) {
        $scope.plan.children = [{}];
        return;
      }
      $scope.plan.children.splice($scope.plan.children.indexOf(child), 1);
    };
    $scope.addBeneficiary = function() {
      $scope.plan.beneficiaries.push({});
    };
    $scope.addBeneficiary();
    $scope.removeBeneficiary = function() {
      var beneficiary = this.beneficiary;
      if($scope.plan.beneficiaries.length < 2) {
        $scope.plan.beneficiaries = [{}];
        return;
      }
      $scope.plan.beneficiaries.splice($scope.plan.beneficiaries.indexOf(beneficiary), 1);
    };

    $scope.makeSameAddress = function() {
      var isSame = $scope.plan.spouse.sameAddr;
      if(isSame) {
        $scope.plan.spouse.address = angular.copy($scope.plan.client.address);
      } else {
        $scope.plan.spouse.address = '';
      }
    };

    $scope.save = function() {
      // plans.push($scope.plan);
    };
  });
