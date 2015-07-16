'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('ohellawApp'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  describe('Initial state', function () {
    it('should instantiate the controller properly', function () {
      expect(HomeCtrl).not.toBeUndefined();
    });
  });
});
