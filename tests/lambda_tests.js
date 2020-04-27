const expect = require('chai').expect;

const λ = require('../src/index').λ;

const add = require('../src/index').add;
const sub = require('../src/index').sub;
const mul = require('../src/index').mul;
const div = require('../src/index').div;

const _ = require('../src/index')._;

function test_func() {}

describe('lambda', function () {
  it('should be defined', function () {
    expect(λ).to.not.be.undefined;
  });

  it('should throw if called without params', function () {
    expect(function () { λ(); }).to.throw(TypeError, 'λ: Illegal function passed as 1st param!');
  });

  it('should throw if called with wrong function as 1st param', function () {
    expect(function () { λ(test_func); }).to.throw(TypeError, 'λ: Illegal function passed as 1st param!');
  });

  it('should be callable with "add" as 1st param', function () {
    expect(function () { λ(add); }).to.not.throw();
  });

  it('should be callable with "sub" as 1st param', function () {
    expect(function () { λ(sub); }).to.not.throw();
  });

  it('should be callable with "mul" as 1st param', function () {
    expect(function () { λ(mul); }).to.not.throw();
  });

  it('should be callable with "div" as 1st param', function () {
    expect(function () { λ(div); }).to.not.throw();
  });

  it('should return a callable', function () {
    expect(function () { λ(add)(add); }).to.not.throw();
  });

  it('used in complex scenario should not throw', function () {
    expect(function () {
      λ( div, [300, 293] )
       ( add, [λ[0], λ[0]], [_, λ[0]], 70 );
    }).to.not.throw();
  });
});
