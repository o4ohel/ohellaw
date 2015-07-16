'use strict';

describe('Controller: EstateplanCtrl', function () {

  // load the controller's module
  beforeEach(module('ohellawApp'));

  var EstateplanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EstateplanCtrl = $controller('EstateplanCtrl', {
      $scope: scope
    });
  }));

  describe('Initial state', function () {
    it('should instantiate the controller properly', function () {
      expect(EstateplanCtrl).not.toBeUndefined();
    });
  });
});
