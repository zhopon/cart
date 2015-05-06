'use strict';

/**
 * @ngdoc function
 * @name cartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cartApp
 */
angular.module('cartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
