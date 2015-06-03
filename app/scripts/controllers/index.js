'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')

  .controller('IndexCtrl', function ($scope) {
    var slidesUrl = 'http://lorempixel.com/1920/1080';
    var contentUrl = 'http://lorempixel.com/200/200';
    $scope.setInterval = 5000;

    $scope.slides = [
      {
        title: '7 Ways to stay Fit',
        image: slidesUrl + '/sports',
        text: 'Play a sport for 30 minutes a day!'
      },
      {
        title: 'Healthy Food',
        image: slidesUrl + '/food',
        text: 'Food that you should be eating!'
      },
      {
        title: 'Relaxing Holidays',
        image: slidesUrl + '/nature',
        text: '10 Locations for Nature Lovers!'
      }
    ];

    $scope.content = [
      {
        img: contentUrl + '/people',
        title: 'About Us',
        summary: 'We are good people!  The best people there are.'
      },
      {
        img: contentUrl + '/business',
        title: 'Our Services',
        summary: 'We offer advice on staying Healthy, what to eat... what are the best exercises for you, etc.'
      },
      {
        img: contentUrl + '/transport',
        title: 'About Us',
        summary: '#111, Good Health Blvd, Happy Palace, Antarctica, 432167'
      }
    ];
  });
