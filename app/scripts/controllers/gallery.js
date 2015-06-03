'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
