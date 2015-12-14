'use strict';

// 3rd-party
const Lab = require('lab');
const expect = require('code').expect;

// sut
const paramsList = require('../lib/params-list');

// init
const lab = exports.lab = Lab.script();
lab.context = lab.describe;

lab.describe('lib/params-list', () => {
  lab.context('given a function declaration', () => {
    function fn(foo) {
      return foo;
    }
    lab.it('returns array of parameter names', (done) => {
      expect(paramsList(fn)).to.deep.equal(['foo']);
      done();
    });
  });

  lab.context('given an anonymous function expression', () => {
    const fn = function(alpha, beta) {
      return beta;
    };
    lab.it('returns array of parameter names', (done) => {
      expect(paramsList(fn)).to.deep.equal(['alpha', 'beta']);
      done();
    });
  });

  lab.context('given a class', () => {
    class Foo {
      constructor(one, two, three) {
        this.one = one;
        this.two = two;
        this.three = three;
      }
    }
    lab.it('returns array of constructor parameter names', (done) => {
      expect(paramsList(Foo)).to.deep.equal(['one', 'two', 'three']);
      done();
    });
  });

  lab.context('given a function without parameters', () => {
    function fn() {
    }
    lab.it('returns empty array', (done) => {
      expect(paramsList(fn)).to.deep.equal([]);
      done();
    });
  });

  lab.context('given a class without constructor parameters', () => {
    class FooBar {
      constructor() {
      }
    }
    lab.it('returns empty array', (done) => {
      expect(paramsList(FooBar)).to.deep.equal([]);
      done();
    });
  });
});
