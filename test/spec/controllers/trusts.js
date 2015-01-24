'use strict';

describe('Controller: TrustsCtrl', function () {

  // load the controller's module
  beforeEach(module('ohellawApp'));

  var TrustsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrustsCtrl = $controller('TrustsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of Questions and Answers to the scope', function () {
    expect(scope.faqs.length).toBe(9);
  });
});
