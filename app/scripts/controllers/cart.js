'use strict';

/**
 * @ngdoc function
 * @name cartApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the cartApp
 */
angular.module('cartApp')
  .controller('CartCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.add = function(code) {
        $scope.products.push({productCode: code, price: 9.99});
    };

    $scope.products = [
        {productCode: '123123', price: 12.99}
      , {productCode: '45435', price: 2.99}
      , {productCode: '90909', price: 1.99}
    ];

    $scope.$watch('products', function() {
        $scope.totalCost = $scope.products.reduce(function(total, item) {
            return total + parseFloat(item.price);
        }, 0);
    });
  });
