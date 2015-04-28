'use strict';

/**
 * @ngdoc function
 * @name ohellawApp.controller:EstateplanCtrl
 * @description
 * # EstateplanCtrl
 * Controller of the ohellawApp
 */
angular.module('ohellawApp')
  .controller('EstateplanCtrl', function ($scope, $http, $modal, $log, $stateParams) {
    $scope.planId = $stateParams.planId;

    $scope.datepicker = {
      open: function(evt, who) {
        evt.preventDefault();
        evt.stopPropagation();
        $scope.datepicker[who] = true;
      },
      client: false, 
      spouse: false
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

  	$scope.plan = {
      client: {
        isOwner: false,
        firstName: '',
        lastName: ''
      },
      spouse: {
        firstName: '',
        lastName: ''
      },
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
      },
      rentalProperties: [{}],
      stockOptionPlans: [{}],
      prevPlans: [{}]
    };

    $scope.loadPlan = function(planId) {
      $http.get('db/'+ planId +'.json').success(function(data) {
        $scope.plan = data;
      });
    };
    if($scope.planId) {
      $scope.loadPlan($scope.planId);
    }

    $scope.getFullNameList = function() {
      return [
        $scope.plan.client.firstName + ' ' + $scope.plan.client.lastName,
        $scope.plan.spouse.firstName + ' ' + $scope.plan.spouse.lastName
      ];
    };
    

    $scope.relationships = ['child', 'other'];
    $scope.yesNo = ['Yes', 'No'];
    $scope.burialTypes = ['Spouse\'s Decision', 'Burial', 'Cremation'];

    $scope.addRentalProperty = function() {
      $scope.plan.rentalProperties.push({});
    };

    $scope.removeRentalProperty = function() {
      var property = this.property;
      if($scope.plan.rentalProperties.length < 2) {
        $scope.plan.rentalProperties = [{}];
        return;
      }
      $scope.plan.rentalProperties.splice($scope.plan.rentalProperties.indexOf(property), 1);
    };

    $scope.addStocks = function() {
      $scope.plan.stockOptionPlans.push({});
    };

    $scope.removeStock = function() {
      var stock = this.stock;
      if($scope.plan.stockOptionPlans.length < 2) {
        $scope.plan.stockOptionPlans = [{}];
        return;
      }
      $scope.plan.stockOptionPlans.splice($scope.plan.stockOptionPlans.indexOf(stock), 1);
    };

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
      $http.post('php/estateplan.php', $scope.plan).success(function(data) {
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

    $scope.addPrevPlan = function() {
      $scope.plan.prevPlans.push({});
    };
    $scope.removePrevPlan = function() {
      var item = this.plan;
      $scope.plan.prevPlans.splice($scope.plan.prevPlans.indexOf(item), 1);
    };
  })

	.controller('EstateplanPreviewController', ['$scope', '$modalInstance', function($scope, $modalInstance) {
	  $scope.save = function () {
	    $modalInstance.close(true);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	}])
  ;
