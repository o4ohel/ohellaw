'use strict';

describe('Controller: TestimonialsCtrl', function () {

  // load the controller's module
  beforeEach(module('ohellawApp'));

  var TestimonialsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestimonialsCtrl = $controller('TestimonialsCtrl', {
      $scope: scope
    });
  }));

  describe('Initial state', function () {
    it('should instantiate the controller properly', function () {
      expect(TestimonialsCtrl).not.toBeUndefined();
    });
  });
});
