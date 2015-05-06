'use strict';

/**
 * @ngdoc function
 * @name cartApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cartApp
 */
angular.module('cartApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
