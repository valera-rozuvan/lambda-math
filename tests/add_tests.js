const expect = require('chai').expect;

const add = require('../src/index').add;

describe('add', function () {
  it('should be defined', function () {
    expect(add).to.not.be.undefined;
  });

  it('should throw if called without params', function () {
    expect(function () { add(); }).to.throw(TypeError, 'add: Must be invoked with 2 params!');
  });

  it('should add 2 numbers', function () {
    expect(add(2, 2)).to.equal(4);
  });
});
