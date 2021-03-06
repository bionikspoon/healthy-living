'use strict';

/**
 * @ngdoc overview
 * @name healthyLivingApp
 * @description
 * # healthyLivingApp
 *
 * Main module of the application.
 */
angular

  .module('healthyLivingApp', [
    'ngAnimate',
    'ngRoute',
    'ui.bootstrap',
    'ngGrid'

  ])

  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })

      .when('/articles', {
        templateUrl: 'views/articles.html',
        controller: 'ArticlesCtrl'
      })

      .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl'
      })

      .when('/subscribers', {
        templateUrl: 'views/subscribers.html',
        controller: 'SubscribersCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
