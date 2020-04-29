const expect = require('chai').expect;

const sub = require('../src/index').sub;

describe('sub', function () {
  it('should be defined', function () {
    expect(sub).to.not.be.undefined;
  });

  it('should throw if called without params', function () {
    expect(function () { sub(); }).to.throw(TypeError, 'sub: Must be invoked with 2 params!');
  });

  it('should subtract 2 numbers', function () {
    expect(sub(4, 2)).to.equal(2);
  });
});
