'use strict';

describe('Directive: dob', function () {

  // load the directive's module
  beforeEach(module('ohellawApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should contain 3 input fields', inject(function ($compile) {
    element = angular.element('<dob></dob>');
    element = $compile(element)(scope);
    expect(element.find('.dob')).toBeTruthy('');
  }));
});