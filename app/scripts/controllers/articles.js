'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')
  .controller('ArticlesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
