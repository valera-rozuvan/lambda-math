const BigNumber = require('bignumber.js');
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

  describe('params', function () {
    it('should throw if called without params', function () {
      expect(function () { λ(); }).to.throw(TypeError, 'λ: 1st param should be a function!');
    });

    describe('1st param', function () {
      it('should throw if called with wrong function as first param', function () {
        expect(function () { λ(test_func); }).to.throw(TypeError, 'λ: Illegal function passed as 1st param!');
      });

      describe('wrong types', function () {
        it('should throw if first param is "string"', function () {
          expect(function () { λ('test', []); }).to.throw(TypeError, 'λ: 1st param should be a function!');
        });

        it('should throw if first param is "object"', function () {
          expect(function () { λ({}, []); }).to.throw(TypeError, 'λ: 1st param should be a function!');
        });

        it('should throw if first param is "null"', function () {
          expect(function () { λ(null, []); }).to.throw(TypeError, 'λ: 1st param should be a function!');
        });

        it('should throw if first param is "undefined"', function () {
          expect(function () { λ(undefined, []); }).to.throw(TypeError, 'λ: 1st param should be a function!');
        });

        it('should throw if first param is "NaN"', function () {
          expect(function () { λ(NaN, []); }).to.throw(TypeError, 'λ: 1st param should be a function!');
        });

        it('should throw if first param is "number" 0', function () {
          expect(function () { λ(0, []); }).to.throw(TypeError, 'λ: 1st param should be a function!');
        });

        it('should throw if first param is "number" 1', function () {
          expect(function () { λ(1, []); }).to.throw(TypeError, 'λ: 1st param should be a function!');
        });

        it('should throw if first param is "boolean" false', function () {
          expect(function () { λ(false, []); }).to.throw(TypeError, 'λ: 1st param should be a function!');
        });

        it('should throw if first param is "boolean" true', function () {
          expect(function () { λ(true, []); }).to.throw(TypeError, 'λ: 1st param should be a function!');
        });

        it('should throw if first param is "BigNumber"', function () {
          expect(function () { λ(new BigNumber(1), []); }).to.throw(TypeError, 'λ: 1st param should be a function!');
        });
      });

      describe('correct arithmetic function', function () {
        it('should be callable with "add" as first param', function () {
          expect(function () { λ(add, []); }).to.not.throw();
        });

        it('should be callable with "sub" as first param', function () {
          expect(function () { λ(sub, []); }).to.not.throw();
        });

        it('should be callable with "mul" as first param', function () {
          expect(function () { λ(mul, []); }).to.not.throw();
        });

        it('should be callable with "div" as first param', function () {
          expect(function () { λ(div, []); }).to.not.throw();
        });
      });
    });

    describe('2nd param', function () {
      it('should throw if second param is "string"', function () {
        expect(function () { λ(add, 'test'); }).to.throw(TypeError, 'λ: 2nd param should be an array!');
      });

      it('should throw if second param is "object"', function () {
        expect(function () { λ(add, {}); }).to.throw(TypeError, 'λ: 2nd param should be an array!');
      });

      it('should throw if second param is "null"', function () {
        expect(function () { λ(add, null); }).to.throw(TypeError, 'λ: 2nd param should be an array!');
      });

      it('should throw if second param is "undefined"', function () {
        expect(function () { λ(add, undefined); }).to.throw(TypeError, 'λ: 2nd param should be an array!');
      });

      it('should throw if second param is "NaN"', function () {
        expect(function () { λ(add, NaN); }).to.throw(TypeError, 'λ: 2nd param should be an array!');
      });

      it('should throw if second param is "number" 0', function () {
        expect(function () { λ(add, 0); }).to.throw(TypeError, 'λ: 2nd param should be an array!');
      });

      it('should throw if second param is "number" 1', function () {
        expect(function () { λ(add, 1); }).to.throw(TypeError, 'λ: 2nd param should be an array!');
      });

      it('should throw if second param is "boolean" false', function () {
        expect(function () { λ(add, false); }).to.throw(TypeError, 'λ: 2nd param should be an array!');
      });

      it('should throw if second param is "boolean" true', function () {
        expect(function () { λ(add, true); }).to.throw(TypeError, 'λ: 2nd param should be an array!');
      });

      it('should throw if second param is "BigNumber"', function () {
        expect(function () { λ(add, new BigNumber(1)); }).to.throw(TypeError, 'λ: 2nd param should be an array!');
      });
    });

    describe('3rd param', function () {
      describe('wrong types', function () {
        it('should throw if third param is "string"', function () {
          expect(function () { λ(add, [], 'test'); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if third param is "object"', function () {
          expect(function () { λ(add, [], {}); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if third param is "null"', function () {
          expect(function () { λ(add, [], null); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if third param is "NaN"', function () {
          expect(function () { λ(add, [], NaN); }).to.throw(Error, 'λ: Repeat last function call times should be a positive number!');
        });

        it('should throw if third param is "number" -1', function () {
          expect(function () { λ(add, [], -1); }).to.throw(Error, 'λ: Repeat last function call times should be a positive number!');
        });

        it('should throw if third param is "number" 0', function () {
          expect(function () { λ(add, [], 0); }).to.throw(Error, 'λ: Repeat last function call times should be a positive number!');
        });

        it('should throw if third param is "boolean" false', function () {
          expect(function () { λ(add, [], false); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if third param is "boolean" true', function () {
          expect(function () { λ(add, [], true); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if third param is "BigNumber"', function () {
          expect(function () { λ(add, [], new BigNumber(1)); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });
      });

      describe('correct types', function () {
        it('should not throw if third param is "undefined"', function () {
          expect(function () { λ(add, [], undefined); }).to.not.throw();
        });

        it('should not throw if third param is a positive number', function () {
          expect(function () { λ(add, [], 2); }).to.not.throw();
        });

        it('should not throw if third param is an array', function () {
          expect(function () { λ(add, [], []); }).to.not.throw();
        });
      });

      describe('repeat last function call times', function () {
        it('should throw if another "number" is passed after', function () {
          expect(function () { λ(add, [], 1, 1); }).to.throw(Error, 'λ: Repeat last function call times should be the last parameter!');
        });

        it('should throw if another "array" is passed after', function () {
          expect(function () { λ(add, [], 1, []); }).to.throw(Error, 'λ: Repeat last function call times should be the last parameter!');
        });

        it('should throw if another "object" is passed after', function () {
          expect(function () { λ(add, [], 1, {}); }).to.throw(Error, 'λ: Repeat last function call times should be the last parameter!');
        });
      });
    });

    describe('4th param', function () {
      describe('wrong types', function () {
        it('should throw if fourth param is "string"', function () {
          expect(function () { λ(add, [], [], 'test'); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if fourth param is "object"', function () {
          expect(function () { λ(add, [], [], {}); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if fourth param is "null"', function () {
          expect(function () { λ(add, [], [], null); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if fourth param is "NaN"', function () {
          expect(function () { λ(add, [], [], NaN); }).to.throw(Error, 'λ: Repeat last function call times should be a positive number!');
        });

        it('should throw if fourth param is "number" -1', function () {
          expect(function () { λ(add, [], [], -1); }).to.throw(Error, 'λ: Repeat last function call times should be a positive number!');
        });

        it('should throw if fourth param is "number" 0', function () {
          expect(function () { λ(add, [], [], 0); }).to.throw(Error, 'λ: Repeat last function call times should be a positive number!');
        });

        it('should throw if fourth param is "boolean" false', function () {
          expect(function () { λ(add, [], [], false); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if fourth param is "boolean" true', function () {
          expect(function () { λ(add, [], [], true); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if fourth param is "BigNumber"', function () {
          expect(function () { λ(add, [], [], new BigNumber(1)); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });
      });

      describe('correct types', function () {
        it('should not throw if fourth param is "undefined"', function () {
          expect(function () { λ(add, [], [], undefined); }).to.not.throw();
        });

        it('should not throw if fourth param is a positive number', function () {
          expect(function () { λ(add, [], [], 2); }).to.not.throw();
        });

        it('should not throw if fourth param is an array', function () {
          expect(function () { λ(add, [], [], []); }).to.not.throw();
        });
      });

      describe('repeat last function call times', function () {
        it('should throw if another "number" is passed after', function () {
          expect(function () { λ(add, [], [], 1, 1); }).to.throw(Error, 'λ: Repeat last function call times should be the last parameter!');
        });

        it('should throw if another "array" is passed after', function () {
          expect(function () { λ(add, [], [], 1, []); }).to.throw(Error, 'λ: Repeat last function call times should be the last parameter!');
        });

        it('should throw if another "object" is passed after', function () {
          expect(function () { λ(add, [], [], 1, {}); }).to.throw(Error, 'λ: Repeat last function call times should be the last parameter!');
        });
      });
    });

    describe('5th param', function () {
      describe('wrong types', function () {
        it('should throw if fifth param is "string"', function () {
          expect(function () { λ(add, [], [], [], 'test'); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if fifth param is "object"', function () {
          expect(function () { λ(add, [], [], [], {}); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if fifth param is "null"', function () {
          expect(function () { λ(add, [], [], [], null); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if fifth param is "NaN"', function () {
          expect(function () { λ(add, [], [], [], NaN); }).to.throw(Error, 'λ: Repeat last function call times should be a positive number!');
        });

        it('should throw if fifth param is "number" -1', function () {
          expect(function () { λ(add, [], [], [], -1); }).to.throw(Error, 'λ: Repeat last function call times should be a positive number!');
        });

        it('should throw if fifth param is "number" 0', function () {
          expect(function () { λ(add, [], [], [], 0); }).to.throw(Error, 'λ: Repeat last function call times should be a positive number!');
        });

        it('should throw if fifth param is "boolean" false', function () {
          expect(function () { λ(add, [], [], [], false); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if fifth param is "boolean" true', function () {
          expect(function () { λ(add, [], [], [], true); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });

        it('should throw if fifth param is "BigNumber"', function () {
          expect(function () { λ(add, [], [], [], new BigNumber(1)); }).to.throw(TypeError, 'λ: 3rd, 4th, ... params can be either an array or a number!');
        });
      });

      describe('correct types', function () {
        it('should not throw if fifth param is "undefined"', function () {
          expect(function () { λ(add, [], [], [], undefined); }).to.not.throw();
        });

        it('should not throw if fifth param is a positive number', function () {
          expect(function () { λ(add, [], [], [], 2); }).to.not.throw();
        });

        it('should not throw if fifth param is an array', function () {
          expect(function () { λ(add, [], [], [], []); }).to.not.throw();
        });
      });

      describe('repeat last function call times', function () {
        it('should throw if another "number" is passed after', function () {
          expect(function () { λ(add, [], [], [], 1, 1); }).to.throw(Error, 'λ: Repeat last function call times should be the last parameter!');
        });

        it('should throw if another "array" is passed after', function () {
          expect(function () { λ(add, [], [], [], 1, []); }).to.throw(Error, 'λ: Repeat last function call times should be the last parameter!');
        });

        it('should throw if another "object" is passed after', function () {
          expect(function () { λ(add, [], [], [], 1, {}); }).to.throw(Error, 'λ: Repeat last function call times should be the last parameter!');
        });
      });
    });
  });

  it('should return a callable', function () {
    expect(function () { λ(add, [])(add, []); }).to.not.throw();
  });

  it('used in complex scenario should not throw', function () {
    expect(function () {
      λ( div, [300, 293] )
       ( add, [λ[0], λ[0]], [_, λ[0]], 70 );
    }).to.not.throw();
  });
});
