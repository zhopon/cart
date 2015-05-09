'use strict';

/**
 * @ngdoc service
 * @name cartApp.products
 * @description
 * # products
 * Service in the cartApp.
 */
angular.module('cartApp')
  .factory('products', function () {
    var products = [
        {productCode: '7290012132223', price: 12.99, name: 'Product #1'}
      , {productCode: '7296073020462', price: 2.99, name: 'Product #2'}
      , {productCode: '7296073130499', price: 1.99, name: 'Product #3'}
      , {productCode: '7296073153337', price: 3.99, name: 'Product #4'}
      , {productCode: '7296073202479', price: 7.99, name: 'Product #5'}
    ];

    return {
      random: function() {
        return products[Math.floor(Math.random() * products.length)];
      }
    };
  });
