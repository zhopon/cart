'use strict';

describe('Service: products', function () {

  // load the service's module
  beforeEach(module('cartApp'));

  // instantiate service
  var products;
  beforeEach(inject(function (_products_) {
    products = _products_;
  }));

  it('should return a random product', function () {
    expect(products.random()).toEqual(jasmine.any(Object));
  });

});
