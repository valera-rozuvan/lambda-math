const BigNumber = require('bignumber.js');
const expect = require('chai').expect;

const div = require('../src/math').div;

describe('div', function () {
  it('should be defined', function () {
    expect(div).to.not.be.undefined;
  });

  describe('params', function () {
    it('should throw if called without params', function () {
      expect(function () { div(); }).to.throw(TypeError, 'div: Error! First param must be a number or a BigNumber.');
    });

    describe('first param', function () {
      it('should throw if 1st param is "undefined"', function () {
        expect(function () { div(undefined, 1); }).to.throw(TypeError, 'div: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "null"', function () {
        expect(function () { div(null, 1); }).to.throw(TypeError, 'div: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "true"', function () {
        expect(function () { div(true, 1); }).to.throw(TypeError, 'div: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "array"', function () {
        expect(function () { div([], 1); }).to.throw(TypeError, 'div: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "object"', function () {
        expect(function () { div({}, 1); }).to.throw(TypeError, 'div: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "string"', function () {
        expect(function () { div("test", 1); }).to.throw(TypeError, 'div: Error! First param must be a number or a BigNumber.');
      });

      it('should throw if 1st param is "NaN"', function () {
        expect(function () { div(NaN, 1); }).to.throw(TypeError, 'div: Error! First param must be a number or a BigNumber.');
      });
    });

    describe('second param', function () {
      it('should throw if 2nd param is "undefined"', function () {
        expect(function () { div(1, undefined); }).to.throw(TypeError, 'div: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "null"', function () {
        expect(function () { div(1, null); }).to.throw(TypeError, 'div: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "true"', function () {
        expect(function () { div(1, true); }).to.throw(TypeError, 'div: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "array"', function () {
        expect(function () { div(1, []); }).to.throw(TypeError, 'div: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "object"', function () {
        expect(function () { div(1, {}); }).to.throw(TypeError, 'div: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "string"', function () {
        expect(function () { div(1, "test"); }).to.throw(TypeError, 'div: Error! Second param must be a number or a BigNumber.');
      });

      it('should throw if 2nd param is "NaN"', function () {
        expect(function () { div(1, NaN); }).to.throw(TypeError, 'div: Error! Second param must be a number or a BigNumber.');
      });
    });
  });

  describe('arithmetic', function () {
    it('should divide 2 JS numbers', function () {
      const result = div(9, 3);

      expect(result.toNumber()).to.equal(3);
    });

    it('should divide 1 JS numbers and 1 BigNumber', function () {
      const result = div(9, new BigNumber(3));

      expect(result.toNumber()).to.equal(3);
    });

    it('should divide 1 BigNumber and 1 JS number', function () {
      const result = div(new BigNumber(9), 3);

      expect(result.toNumber()).to.equal(3);
    });

    it('should divide 2 BigNumber values', function () {
      const result = div(new BigNumber(9), new BigNumber(3));

      expect(result.toNumber()).to.equal(3);
    });
  });
});
