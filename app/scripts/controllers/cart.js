'use strict';

/**
 * @ngdoc function
 * @name cartApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the cartApp
 */

angular.module('cartApp')
  .controller('CartCtrl', ['$scope', '$modal', 'products', 'localStorageService', function ($scope, $modal, products, localStorageService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.showDialog = false;
    $scope.cart = localStorageService.get('cart') || [];

    $scope.add = function(code) {
      var lineItem = products.random();
      $scope.cart.push(lineItem);
    };

    $scope.$watchCollection('cart', function() {
      localStorageService.set('cart', $scope.cart);
      $scope.totalCost = $scope.cart.reduce(function(total, item) {
          return total + parseFloat(item.price);
      }, 0);
    });
  }]);
