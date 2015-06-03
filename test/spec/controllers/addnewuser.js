'use strict';

describe('Controller: AddNewUserCtrl', function () {

  // load the controller's module
  beforeEach(module('healthyLivingApp'));

  var AddNewUserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddNewUserCtrl = $controller('AddNewUserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
