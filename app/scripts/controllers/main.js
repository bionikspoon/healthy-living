'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
