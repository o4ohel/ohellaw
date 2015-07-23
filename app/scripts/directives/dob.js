'use strict';

/**
 * @ngdoc directive
 * @name ohellawApp.directive:dob
 * @description
 * # dob
 */
angular.module('ohellawApp').directive('dob', function () {
  return {
    // templateUrl: 'views/dobTpl.html',
    template: '\n' + 
    '<div class="dob form-control">' + 
      '<span class="dropdown" dropdown on-toggle="toggled(open)" tabindex="0">' + 
        '<a href class="dropdown-toggle" dropdown-toggle><span ng-bind="_dob.month.label"></span></a>' +
        '<ul class="dropdown-menu dob-month-dropdown">' +
          '<li ng-repeat="month in months"><a ng-click="_dob.month = month">{{month.label}}</a></li>' +
        '</ul>' + 
      '</span>&nbsp;/&nbsp;' +
      '<span class="dropdown" dropdown on-toggle="toggled(open)" tabindex="0">' +
        '<a href class="dropdown-toggle" dropdown-toggle><span ng-bind="_dob.day"></span></a>' +
        '<ul class="dropdown-menu dob-day-dropdown">' +
          '<li ng-repeat="day in days[_dob.month.key]"><a ng-click="_dob.day = day">{{day}}</a></li>' +
        '</ul>' +
      '</span>&nbsp;/&nbsp;' +
      '<span class="dropdown" dropdown on-toggle="toggled(open)" tabindex="0">' +
        '<a href class="dropdown-toggle" dropdown-toggle><span ng-bind="_dob.year"></span></a>' +
        '<ul class="dropdown-menu dob-year-dropdown">' +
          '<li ng-repeat="year in years"><a ng-click="_dob.year = year">{{year}}</a></li>' +
        '</ul>' +
      '</span>' +
    '</div>',
    restrict: 'E',
    scope: {
      dob: '=date'
    },
    link: function (scope) {
      var now = new Date(),
        thisYear = now.getFullYear(),
        months = [
          {key: '01', label: 'Jan', num: 0},
          {key: '02', label: 'Feb', num: 1},
          {key: '03', label: 'Mar', num: 2},
          {key: '04', label: 'Apr', num: 3},
          {key: '05', label: 'May', num: 4},
          {key: '06', label: 'Jun', num: 5},
          {key: '07', label: 'Jul', num: 6},
          {key: '08', label: 'Aug', num: 7},
          {key: '09', label: 'Sep', num: 8},
          {key: '10', label: 'Oct', num: 9},
          {key: '11', label: 'Nov', num: 10},
          {key: '11', label: 'Dec', num: 11}

        ],
        days = {
          '01': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          '02': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29'],
          '03': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          '04': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
          '05': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          '06': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
          '07': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          '08': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          '09': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
          '10': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
          '11': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'],
          '12': ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15',
                '16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
        }
      ;

      function getYears(thisYear) {
        var years = [thisYear], i = 0, len = 100;
        for(i = 1; i < len; i++) {
          years.push(thisYear - i);
        }
        return years;
      }

      scope.months = months;
      scope.days = days;
      scope.years = getYears(thisYear);
      if(!scope.dob) {
        scope.dob = now;
      } else {
        scope.dob = new Date(scope.dob);
      }
      scope._dob = {
        month: months[scope.dob.getMonth()],
        day: scope.dob.getDate(),
        year: scope.dob.getFullYear()
      };

      scope.$watchCollection('_dob', function(d) {
        var newDate = new Date(d.year, d.month.num, parseInt(d.day));
        scope.dob = newDate;
      });
    }
  };
});
