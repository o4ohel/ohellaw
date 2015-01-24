'use strict';

/**
 * @ngdoc function
 * @name ohellawApp.controller:EstateplanCtrl
 * @description
 * # EstateplanCtrl
 * Controller of the ohellawApp
 */
angular.module('ohellawApp')
  .controller('EstateplanCtrl', function ($scope, $http, $modal, $log) {
  	$scope.plan = {
      client: {
        isOwner: false
      },
      spouse: {},
      // children: [],
      beneficiaries: [{
        // firstName: 'John',
        // lastName: 'Jones',
        // gender: 'male',
        relationship: 'child'
      }],
      trustee: {},
      trustees: [],
      distribution: {
        age1: 18,
        age2: 18,
        age3: 18
      }
    };

    $scope.relationships = ['child', 'other'];

    $scope.addBeneficiary = function() {
      $scope.plan.beneficiaries.push({relationship: 'child'});
    };
    // $scope.addBeneficiary();
    $scope.removeBeneficiary = function() {
      var beneficiary = this.beneficiary;
      if($scope.plan.beneficiaries.length < 2) {
        $scope.plan.beneficiaries = [{}];
        return;
      }
      $scope.plan.beneficiaries.splice($scope.plan.beneficiaries.indexOf(beneficiary), 1);
    };

    $scope.addTrustee = function(beneficiary) {
      var trustee = {};
      if(beneficiary) {
        trustee = beneficiary;
        trustee.isBeneficiary = true;
        // trustee.name = beneficiary.firstName + " " + beneficiary.lastName;
        // trustee.gender = beneficiary.gender;
      }
      $scope.plan.trustees.push(trustee);
    };
    // $scope.addTrustee();
    $scope.removeTrustee = function() {
      var trustee = this.trustee;
      $scope.plan.trustees.splice($scope.plan.trustees.indexOf(trustee), 1);
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
      $http.post('scripts/estateplan.php', $scope.plan).success(function(data) {
        console.log('data from estateplan.php : %o', data);
      });
    };

    $scope.preview = function() {
      var modalInstance = $modal.open({
        templateUrl: 'views/estateplan.preview.html',
        controller: 'EstateplanPreviewController'
      });
      modalInstance.result.then(function () {
        $log.info('need to save now.');
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
	.controller('EstateplanPreviewController', ['$scope', '$modalInstance', function($scope, $modalInstance) {
	  $scope.save = function () {
	    $modalInstance.close(true);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	}]);
