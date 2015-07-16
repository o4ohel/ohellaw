'use strict';

describe('Controller: CorpCtrl', function () {

  // load the controller's module
  beforeEach(module('ohellawApp'));

  var CorpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CorpCtrl = $controller('CorpCtrl', {
      $scope: scope
    });
  }));

  describe('Initial state', function () {
    it('should instantiate the controller properly', function () {
      expect(CorpCtrl).not.toBeUndefined();
    });
  });
});
