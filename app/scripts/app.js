'use strict';

/**
 * @ngdoc overview
 * @name angularPeriodicTableApp
 * @description
 * # angularPeriodicTableApp
 *
 * Main module of the application.
 */
angular
  .module('angularPeriodicTableApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
