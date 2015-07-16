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

  describe('Initial state', function () {
    it('should instantiate the controller properly', function () {
      expect(TrustsCtrl).not.toBeUndefined();
    });
  });
});
