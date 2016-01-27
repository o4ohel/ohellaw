'use strict';

/**
 * @ngdoc function
 * @name ohellawApp.controller:EstateplanCtrl
 * @description
 * # EstateplanCtrl
 * Controller of the ohellawApp
 */
angular.module('ohellawApp').controller('EstateplanCtrl', function ($scope, $http, $modal, $log, $stateParams, $state, epfSectionSrv, $timeout) {
    $scope.capNames = $stateParams.capNames ? ($stateParams.capNames === 'true' ? true : false ) : false;
    $scope.planId = $stateParams.planId;

    $scope.isBackAnim = false;
    $scope.sections = epfSectionSrv.getSections();

    $scope.sectionId = epfSectionSrv.getCurId();
    $scope.sectionIdx = parseInt($scope.sectionId);

    $scope.submitReady = !$scope.sections[$scope.sectionIdx + 1];

    $scope.next = function() {
      $scope.isBackAnim = false;
      updateSectionId().then(function() {
        $scope.submitReady = !$scope.sections[$scope.sectionIdx + 1];
      }, angular.noop);
    };

    $scope.prev = function() {
      $scope.isBackAnim = true;
      updateSectionId();
    };

    function updateSectionId() {
      return $timeout(function() {
        $scope.sectionId = epfSectionSrv.getCurId();
        $scope.sectionIdx = parseInt($scope.sectionId);
      }, 10);
    }
    
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
        isOwner: true,
        isCitizen: true,
        firstName: '',
        lastName: ''
      },
      spouse: {
        isOwner: true,
        isCitizen: true,
        firstName: '',
        lastName: ''
      },
      // children: [],
      beneficiaries: [{
        // firstName: 'John',
        // lastName: 'Jones',
        // gender: 'male',
        // relationship: 'child'
      }],
      trustee: {},
      trustees: [],
      distribution: {
        age1: 18,
        age2: 18,
        age3: 18
      },
      guardians: [],
      dpoas: [{
        clientAHCD: true,
        spouseAHCD: true
      }],
      rentalProperties: [{}],
      stockOptionPlans: [{}],
      prevPlans: [{}]
    };

    function date2parts(date) {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var parts = {};
      date = typeof(date) === 'object' ? date : new Date(date);
      parts.month = months[date.getMonth()];
      parts.day = date.getDate();
      parts.year = date.getUTCFullYear();

      return parts;
    }
    function markup(data) {
      var d = angular.copy(data);
      if(!d.client.dob.month && typeof(d.client.dob) === 'string' && d.client.dob.length > 1) {
        d.client.dob = date2parts(d.client.dob);
      }
      if(d.spouse.dob) {
        if(!d.spouse.dob.month && typeof(d.spouse.dob) === 'string' && d.spouse.dob.length > 1) {
          d.spouse.dob = date2parts(d.spouse.dob);
        }
      }
      
      var i = 0, len = d.beneficiaries.length;
      for(i = 0; i < len; i++) {
        if(!d.beneficiaries[i].dob.month && typeof(d.beneficiaries[i].dob) === 'string' && d.beneficiaries[i].dob.length > 1) {
          d.beneficiaries[i].dob = date2parts(d.beneficiaries[i].dob);
        }
      }

      return d;
    }
    $scope.loadPlan = function(planId) {
      $http.get('db/'+ planId +'.json').success(function(data) {
        $scope.plan = markup(data);
      });
    };

    if($scope.planId  && $scope.planId !== '0') {
      $scope.loadPlan($scope.planId);
    }

    $scope.getFullNameList = function() {
      return [
        $scope.plan.client.firstName + ' ' + $scope.plan.client.lastName,
        $scope.plan.spouse.firstName + ' ' + $scope.plan.spouse.lastName
      ];
    };
    

    $scope.relationships = ['Father', 'Mother', 'Son', 'Daughter', 'Father-in-law', 'Mother-in-law', 'Brother', 'Sister', 'Brother\’s spouse', 'Sister\’s spouse', 'Brother-in-law', 'Sister-in-law', 'Cousin', 'Cousin-in-law', 'Friend', 'Other'];
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
      $scope.plan.beneficiaries.push({});
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

    $scope.addGuardian = function() {
      if(!$scope.plan.guardians) {
        $scope.plan.guardians = [];
      }
      $scope.plan.guardians.push({});
    };
    $scope.removeGuardian = function() {
      var guardian = this.guardian;
      // if($scope.plan.guardians.length < 2) {
      //   $scope.plan.guardians = [{}];
      //   return;
      // }
      $scope.plan.guardians.splice($scope.plan.guardians.indexOf(guardian), 1);
    };

    $scope.addPoa = function() {
      if(!$scope.plan.dpoas) {
        $scope.plan.dpoas = [];
      }
      $scope.plan.dpoas.push({
        clientAHCD: true,
        spouseAHCD: true
      });
    };
    $scope.removePoa = function() {
      var poa = this.poa;
      $scope.plan.dpoas.splice($scope.plan.dpoas.indexOf(poa), 1);
    };

    $scope.addTrustee = function() {
      var trustee = {};
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

    function _calculateAge(birthday) { // birthday is a date
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    $scope.checkBeneficiaryAge = function() {
      var beneficiary = this.beneficiary;
      if(!beneficiary.dob) {
        beneficiary.isTrustee = false;
        return;
      }
      var age = _calculateAge(new Date(beneficiary.dob));
      if(age < 18) {
        beneficiary.isTrustee = false;
        beneficiary.isMinor = true;
      } else {
        beneficiary.isMinor = false;
      }
    };

    $scope.checkPreferred = function(spouse) {
      var guardian = this.guardian;
      if(!guardian.isPreferred) {return;}
      if(spouse) {
        guardian.isPreferred = false;
      } else {
        if(guardian.spouse) {
          guardian.spouse.isPreferred = false;
        }
      }
    };

    $scope.save = function() {
      // plans.push($scope.plan);
      $state.go('estateplan.preview');
      $http.post('php/estateplan.php', $scope.plan).success(function(data) {
        console.log('data from estateplan.php : %o', data);

      });
    };

    $scope.preview = function() {
      var modalInstance = $modal.open({
        templateUrl: 'views/estateplan_preview_modal.html',
        controller: 'EstateplanPreviewController',
        // windowClass: 'estate-plan-preview-modal',
        resolve: {
          plan: function () {
            return $scope.plan;
          }
        },
        size: 'lg'
      });
      modalInstance.result.then(function () {
        $log.info('need to save now.');
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.addPrevPlan = function() {
      $scope.plan.prevPlans.push({});
    };
    $scope.removePrevPlan = function() {
      var item = this.plan;
      $scope.plan.prevPlans.splice($scope.plan.prevPlans.indexOf(item), 1);
    };

    function swap(list, idx1, idx2) {
      var temp = list[idx2];
      list[idx2] = list[idx1];
      list[idx1] = temp;
    }

    $scope.moveUp = function(listName, idx) {
      swap($scope.plan[listName], idx, idx - 1);
    };
  })

	.controller('EstateplanPreviewController', ['$scope', '$modalInstance', 'plan', function($scope, $modalInstance, plan) {
    $scope.plan = plan;
	  $scope.save = function () {
	    $modalInstance.close(true);
	  };

	  $scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
	}])
;
