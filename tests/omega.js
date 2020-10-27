const BigNumber = require('bignumber.js');
const expect = require('chai').expect;

const { λ, Ω } = require('../src/lambda');
const { add } = require('../src/math');

function test_func() {}

describe('omega', function () {
  beforeEach(function () {
    λ.reset();
  });

  it('should be defined', function () {
    expect(Ω).to.not.be.undefined;
  });

  describe('params', function () {
    describe('should throw', function () {
      it('if called with param of type "string"', function () {
        expect(function () { Ω('test'); }).to.throw(TypeError, 'Parameter to Ω() should be either a number or undefined.');
      });

      it('if called with param of type "array"', function () {
        expect(function () { Ω([]); }).to.throw(TypeError, 'Parameter to Ω() should be either a number or undefined.');
      });

      it('if called with param of type "boolean"', function () {
        expect(function () { Ω(true); }).to.throw(TypeError, 'Parameter to Ω() should be either a number or undefined.');
      });

      it('if called with param of type "object"', function () {
        expect(function () { Ω({ test: 1 }); }).to.throw(TypeError, 'Parameter to Ω() should be either a number or undefined.');
      });

      it('if called with param of type "function"', function () {
        expect(function () { Ω(test_func); }).to.throw(TypeError, 'Parameter to Ω() should be either a number or undefined.');
      });

      it('if called with param of type "number", where param is a floating point number', function () {
        expect(function () { Ω(1.23); }).to.throw(Error, 'Parameter to Ω() must be an integer.');
      });

      it('if called with param of type "number", where param is 0', function () {
        expect(function () { Ω(0); }).to.throw(Error, 'Parameter to Ω() can not be 0.');
      });
    });
  });

  describe('proper flow', function () {
    describe('count of results', function () {
      it('is properly returned', function () {
        λ( add, [1, 2] );  //  3
        λ( add, [3, 4] );  //  7
        λ( add, [5, 6] );  // 11
        λ( add, [7, 8] );  // 15
        λ( add, [9, 10] ); // 19

        expect(Ω()).to.equal(5);
      });

      it('use to get first element', function () {
        λ( add, [1, 2] );  //  3
        λ( add, [3, 4] );  //  7
        λ( add, [5, 6] );  // 11
        λ( add, [7, 8] );  // 15
        λ( add, [9, 10] ); // 19

        expect(Ω(Ω()).number).to.equal(3);
      });

      it('use to get last element', function () {
        λ( add, [1, 2] );  //  3
        λ( add, [3, 4] );  //  7
        λ( add, [5, 6] );  // 11
        λ( add, [7, 8] );  // 15
        λ( add, [9, 10] ); // 19

        expect(Ω(-Ω()).number).to.equal(19);
      });
    });

    describe('negative numbers', function () {
      it('in bounds', function () {
        λ( add, [1, 2] );  //  3
        λ( add, [3, 4] );  //  7
        λ( add, [5, 6] );  // 11
        λ( add, [7, 8] );  // 15
        λ( add, [9, 10] ); // 19

        expect(Ω(-1).number).to.equal(3);
        expect(Ω(-2).number).to.equal(7);
        expect(Ω(-3).number).to.equal(11);
        expect(Ω(-4).number).to.equal(15);
        expect(Ω(-5).number).to.equal(19);
      });

      it('out of bounds should throw', function () {
        λ( add, [1, 2] );  //  3
        λ( add, [3, 4] );  //  7
        λ( add, [5, 6] );  // 11
        λ( add, [7, 8] );  // 15
        λ( add, [9, 10] ); // 19

        expect(function () { Ω(-6); }).to.throw(Error, 'Parameter to Ω() is out of bounds.');
      });
    });

    describe('positive numbers', function () {
      it('in bounds', function () {
        λ( add, [1, 2] );  //  3
        λ( add, [3, 4] );  //  7
        λ( add, [5, 6] );  // 11
        λ( add, [7, 8] );  // 15
        λ( add, [9, 10] ); // 19

        expect(Ω(1).number).to.equal(19);
        expect(Ω(2).number).to.equal(15);
        expect(Ω(3).number).to.equal(11);
        expect(Ω(4).number).to.equal(7);
        expect(Ω(5).number).to.equal(3);
      });

      it('out of bounds should throw', function () {
        λ( add, [1, 2] );  //  3
        λ( add, [3, 4] );  //  7
        λ( add, [5, 6] );  // 11
        λ( add, [7, 8] );  // 15
        λ( add, [9, 10] ); // 19

        expect(function () { Ω(6); }).to.throw(Error, 'Parameter to Ω() is out of bounds.');
      });
    });
  });
});
