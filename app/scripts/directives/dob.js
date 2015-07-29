'use strict';

/**
 * @ngdoc directive
 * @name ohellawApp.directive:dobInput
 * @description
 * # dobInput
 */
angular.module('ohellawApp').directive('dobInput', function () {
  return {
    templateUrl: 'views/dobTpl.html',
    // template: '\n' + 
    // '<div class="dob form-control">' + 
    //   '<span class="dropdown" dropdown on-toggle="toggled(open)" tabindex="0">' + 
    //     '<a href class="dropdown-toggle" dropdown-toggle><span ng-bind="_dob.month.label"></span></a>' +
    //     '<ul class="dropdown-menu dob-month-dropdown">' +
    //       '<li ng-repeat="month in months"><a ng-click="_dob.month = month">{{month.label}}</a></li>' +
    //     '</ul>' + 
    //   '</span>&nbsp;/&nbsp;' +
    //   '<span class="dropdown" dropdown on-toggle="toggled(open)" tabindex="0">' +
    //     '<a href class="dropdown-toggle" dropdown-toggle><span ng-bind="_dob.day"></span></a>' +
    //     '<ul class="dropdown-menu dob-day-dropdown">' +
    //       '<li ng-repeat="day in days[_dob.month.key]"><a ng-click="_dob.day = day">{{day}}</a></li>' +
    //     '</ul>' +
    //   '</span>&nbsp;/&nbsp;' +
    //   '<span class="dropdown" dropdown on-toggle="toggled(open)" tabindex="0">' +
    //     '<a href class="dropdown-toggle" dropdown-toggle><span ng-bind="_dob.year"></span></a>' +
    //     '<ul class="dropdown-menu dob-year-dropdown">' +
    //       '<li ng-repeat="year in years"><a ng-click="_dob.year = year">{{year}}</a></li>' +
    //     '</ul>' +
    //   '</span>' +
    // '</div>',
    restrict: 'E',
    scope: {
      dob: '='
    },
    link: function (scope, element) {
      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        days = {
          'Jan': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          'Feb': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29'],
          'Mar': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          'Apr': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
          'May': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          'Jun': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
          'Jul': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          'Aug': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          'Sep': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
          'Oct': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          'Nov': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
          'Dec': ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
        }
      ;

      scope.months = months;
      scope.days = days;

      if(!scope.dob) {
        scope.dob = {
          month: null,
          day: null,
          year: null
        };
      }

      scope.isOpenDay = false;

      scope.onSelectDay = function() {
        var day = this.day;
        scope.dob.day = day;
        element.find('input')[2].focus();
      };

      scope.onSelectMonth = function() {
        var month = this.month;
        scope.dob.month = month;
        element.find('input')[1].focus();
        // scope.isOpenDay = true;
      };

      // scope.$watchCollection('dob', function(newCollection, oldCollection, scope) {
      //   if(scope.dob.month && scope.dob.day && scope.dob.year) {
      //     scope.date = new Date();
      //   }
      // });
    }
  };
});
