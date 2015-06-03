'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:AddNewUserCtrl
 * @description
 * # AddNewUserCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')

  .controller('AddNewUserCtrl', function ($scope, $modalInstance) {
    $scope.saveNewUser = function () {
      $modalInstance.close($scope.newUser);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });
