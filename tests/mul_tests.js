const BigNumber = require('bignumber.js');
const expect = require('chai').expect;

const mul = require('../src/math').mul;

describe('mul', function () {
  it('should be defined', function () {
    expect(mul).to.not.be.undefined;
  });

  describe('params', function () {
    it('should throw if called without params', function () {
      expect(function () { mul(); }).to.throw(TypeError, 'mul: Error! First param must be a number or a BigNumber.');
    });

    describe('first param', function () {
      it('should throw if 1st param is "undefined"', function () {
        expect(function () { mul(undefined, 1); }).to.throw(TypeError, 'mul: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "null"', function () {
        expect(function () { mul(null, 1); }).to.throw(TypeError, 'mul: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "true"', function () {
        expect(function () { mul(true, 1); }).to.throw(TypeError, 'mul: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "array"', function () {
        expect(function () { mul([], 1); }).to.throw(TypeError, 'mul: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "object"', function () {
        expect(function () { mul({}, 1); }).to.throw(TypeError, 'mul: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "string"', function () {
        expect(function () { mul("test", 1); }).to.throw(TypeError, 'mul: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "NaN"', function () {
        expect(function () { mul(NaN, 1); }).to.throw(TypeError, 'mul: Error! First param must be a number or a BigNumber.');
      });
    });

    describe('second param', function () {
      it('should throw if 2nd param is "undefined"', function () {
        expect(function () { mul(1, undefined); }).to.throw(TypeError, 'mul: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "null"', function () {
        expect(function () { mul(1, null); }).to.throw(TypeError, 'mul: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "true"', function () {
        expect(function () { mul(1, true); }).to.throw(TypeError, 'mul: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "array"', function () {
        expect(function () { mul(1, []); }).to.throw(TypeError, 'mul: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "object"', function () {
        expect(function () { mul(1, {}); }).to.throw(TypeError, 'mul: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "string"', function () {
        expect(function () { mul(1, "test"); }).to.throw(TypeError, 'mul: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "NaN"', function () {
        expect(function () { mul(1, NaN); }).to.throw(TypeError, 'mul: Error! Second param must be a number or a BigNumber.');
      });
    });
  });

  describe('arithmetic', function () {
    it('should multiply 2 JS numbers', function () {
      const result = mul(2, 4);

      expect(result.toNumber()).to.equal(8);
    });

    it('should multiply 1 JS numbers and 1 BigNumber', function () {
      const result = mul(2, new BigNumber(4));

      expect(result.toNumber()).to.equal(8);
    });

    it('should multiply 1 BigNumber and 1 JS number', function () {
      const result = mul(new BigNumber(2), 4);

      expect(result.toNumber()).to.equal(8);
    });

    it('should multiply 2 BigNumber values', function () {
      const result = mul(new BigNumber(2), new BigNumber(4));

      expect(result.toNumber()).to.equal(8);
    });
  });
});
