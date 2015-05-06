'use strict';

/**
 * @ngdoc directive
 * @name cartApp.directive:quagga
 * @description
 * # quagga
 */
angular.module('cartApp')
  .directive('quagga', function () {
    return {
      template: '<div><input ng-model="code"></div>',
      restrict: 'E',
      scope: {
          code: '='
      },
      link: function postLink(scope, element, attrs) {
          scope.code = '123123';
//          scope.detected(scope.code);
      }
    };
  });
