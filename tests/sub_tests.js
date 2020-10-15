const BigNumber = require('bignumber.js');
const expect = require('chai').expect;

const { sub } = require('../src/math');

describe('sub', function () {
  it('should be defined', function () {
    expect(sub).to.not.be.undefined;
  });

  describe('params', function () {
    it('should throw if called without params', function () {
      expect(function () { sub(); }).to.throw(TypeError, 'sub: Error! First param must be a number, a string, or a BigNumber.');
    });

    describe('first param', function () {
      it('should throw if 1st param is "undefined"', function () {
        expect(function () { sub(undefined, 1); }).to.throw(TypeError, 'sub: Error! First param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 1st param is "null"', function () {
        expect(function () { sub(null, 1); }).to.throw(TypeError, 'sub: Error! First param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 1st param is "true"', function () {
        expect(function () { sub(true, 1); }).to.throw(TypeError, 'sub: Error! First param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 1st param is "array"', function () {
        expect(function () { sub([], 1); }).to.throw(TypeError, 'sub: Error! First param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 1st param is "object"', function () {
        expect(function () { sub({}, 1); }).to.throw(TypeError, 'sub: Error! First param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 1st param is "NaN"', function () {
        expect(function () { sub(NaN, 1); }).to.throw(TypeError, 'sub: Error! First param must be a number, a string, or a BigNumber.');
      });
    });

    describe('second param', function () {
      it('should throw if 2nd param is "undefined"', function () {
        expect(function () { sub(1, undefined); }).to.throw(TypeError, 'sub: Error! Second param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 2nd param is "null"', function () {
        expect(function () { sub(1, null); }).to.throw(TypeError, 'sub: Error! Second param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 2nd param is "true"', function () {
        expect(function () { sub(1, true); }).to.throw(TypeError, 'sub: Error! Second param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 2nd param is "array"', function () {
        expect(function () { sub(1, []); }).to.throw(TypeError, 'sub: Error! Second param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 2nd param is "object"', function () {
        expect(function () { sub(1, {}); }).to.throw(TypeError, 'sub: Error! Second param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 2nd param is "NaN"', function () {
        expect(function () { sub(1, NaN); }).to.throw(TypeError, 'sub: Error! Second param must be a number, a string, or a BigNumber.');
      });
    });
  });

  describe('arithmetic', function () {
    it('should subtract 2 JS numbers', function () {
      const result = sub(4, 2);

      expect(result.toNumber()).to.equal(2);
    });

    it('should subtract 1 JS numbers and 1 BigNumber', function () {
      const result = sub(4, new BigNumber(2));

      expect(result.toNumber()).to.equal(2);
    });

    it('should subtract 1 BigNumber and 1 JS number', function () {
      const result = sub(new BigNumber(4), 2);

      expect(result.toNumber()).to.equal(2);
    });

    it('should subtract 2 BigNumber values', function () {
      const result = sub(new BigNumber(4), new BigNumber(2));

      expect(result.toNumber()).to.equal(2);
    });
  });
});
