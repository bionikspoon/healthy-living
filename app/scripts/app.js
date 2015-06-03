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
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.grid'

  ])

  .config(function ($routeProvider) {
    $routeProvider

      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
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
