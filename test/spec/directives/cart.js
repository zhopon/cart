'use strict';

describe('Directive: cart', function () {

  // load the directive's module
  beforeEach(module('cartApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cart></cart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cart directive');
  }));
});
