'use strict';

/**
 * @ngdoc function
 * @name angularPeriodicTableApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularPeriodicTableApp
 */
angular.module('angularPeriodicTableApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
