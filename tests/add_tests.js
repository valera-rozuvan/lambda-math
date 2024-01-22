const BigNumber = require('bignumber.js');
const { expect } = require('chai');

const { add } = require('../src/math');

describe('add', function () {
  it('should be defined', function () {
    expect(add).to.not.be.undefined;
  });

  describe('params', function () {
    it('should throw if called without params', function () {
      expect(function () { add(); }).to.throw(TypeError, 'add: Error! First param must be a number, a string, or a BigNumber.');
    });

    describe('first param', function () {
      it('should throw if 1st param is "undefined"', function () {
        expect(function () { add(undefined, 1); }).to.throw(TypeError, 'add: Error! First param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 1st param is "null"', function () {
        expect(function () { add(null, 1); }).to.throw(TypeError, 'add: Error! First param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 1st param is "true"', function () {
        expect(function () { add(true, 1); }).to.throw(TypeError, 'add: Error! First param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 1st param is "array"', function () {
        expect(function () { add([], 1); }).to.throw(TypeError, 'add: Error! First param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 1st param is "object"', function () {
        expect(function () { add({}, 1); }).to.throw(TypeError, 'add: Error! First param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 1st param is "NaN"', function () {
        expect(function () { add(NaN, 1); }).to.throw(TypeError, 'add: Error! First param must be a number, a string, or a BigNumber.');
      });
    });

    describe('second param', function () {
      it('should throw if 2nd param is "undefined"', function () {
        expect(function () { add(1, undefined); }).to.throw(TypeError, 'add: Error! Second param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 2nd param is "null"', function () {
        expect(function () { add(1, null); }).to.throw(TypeError, 'add: Error! Second param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 2nd param is "true"', function () {
        expect(function () { add(1, true); }).to.throw(TypeError, 'add: Error! Second param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 2nd param is "array"', function () {
        expect(function () { add(1, []); }).to.throw(TypeError, 'add: Error! Second param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 2nd param is "object"', function () {
        expect(function () { add(1, {}); }).to.throw(TypeError, 'add: Error! Second param must be a number, a string, or a BigNumber.');
      });

      it('should throw if 2nd param is "NaN"', function () {
        expect(function () { add(1, NaN); }).to.throw(TypeError, 'add: Error! Second param must be a number, a string, or a BigNumber.');
      });
    });
  });

  describe('arithmetic', function () {
    it('should add 2 JS numbers', function () {
      const result = add(2, 2);

      expect(result.toNumber()).to.equal(4);
    });

    it('should add 1 JS numbers and 1 BigNumber', function () {
      const result = add(2, new BigNumber(2));

      expect(result.toNumber()).to.equal(4);
    });

    it('should add 1 BigNumber and 1 JS number', function () {
      const result = add(new BigNumber(2), 2);

      expect(result.toNumber()).to.equal(4);
    });

    it('should add 2 BigNumber values', function () {
      const result = add(new BigNumber(2), new BigNumber(2));

      expect(result.toNumber()).to.equal(4);
    });
  });
});
