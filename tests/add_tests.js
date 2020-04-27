const expect = require('chai').expect;

const add = require('../src/index').add;

describe('lambda', function () {
  it('should be defined', function () {
    expect(add).to.not.be.undefined;
  });

  it('should throw if called without params', function () {
    expect(function () { add(); }).to.throw(TypeError, 'add: Must be invoked with 2 params!');
  });
});
