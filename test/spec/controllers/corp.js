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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.faqs.length).toBe(6);
  });
});
