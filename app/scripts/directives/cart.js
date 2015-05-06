'use strict';

/**
 * @ngdoc directive
 * @name cartApp.directive:cart
 * @description
 * # cart
 */
angular.module('cartApp')
  .directive('cart', function () {
    return {
      templateUrl: 'views/cart-list.html',
      restrict: 'E',
      scope: {
        items: '='
      },
      link: function postLink(scope, element, attrs) {
//        element.text('this is the cart directive');
      }
    };
  });
