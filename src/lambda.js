const BigNumber = require('bignumber.js');

const { Σ } = require('./sigma');
const { add, sub, mul, div } = require('./math');

let λCallCount = -1;

function λ(...args) {
  const func = args[0];
  const funcArgsSet = [];
  let repeatLastFuncTimes = 1;
  let c1;

  λCallCount += 1;
  λ[λCallCount] = new BigNumber(0);

  if (typeof func === 'undefined' || func === undefined) {
    throw new TypeError('λ: 1st param should be a function!');
  }

  if (!(func instanceof Function)) {
    throw new TypeError('λ: 1st param should be a function!');
  }

  if (
    (func !== add) &&
    (func !== sub) &&
    (func !== mul) &&
    (func !== div)
  ) {
    throw new TypeError('λ: Illegal function passed as 1st param!');
  }

  if (Array.isArray(args[1]) === false) {
    throw new TypeError('λ: 2nd param should be an array!');
  }

  funcArgsSet.push(args[1]);

  c1 = 2;
  while (typeof args[c1] !== 'undefined') {
    if (typeof args[c1] === 'number') {
      repeatLastFuncTimes = Math.floor(args[c1]);

      if (Number.isNaN(repeatLastFuncTimes) || repeatLastFuncTimes <= 0) {
        throw new Error('λ: Repeat last function call times should be a positive number!');
      }

      if (typeof args[c1 + 1] !== 'undefined') {
        throw new Error('λ: Repeat last function call times should be the last parameter!');
      }
    } else if (Array.isArray(args[c1])) {
      funcArgsSet.push(args[c1]);
    } else {
      throw new TypeError('λ: 3rd, 4th, ... params can be either an array or a number!');
    }

    c1 += 1;
  }

  funcArgsSet.forEach(function(args) {
    [args[0], args[1]].forEach((param) => {
      if (
        (typeof param === 'undefined' || param === null || Number.isNaN(param) === true) ||
        (typeof param !== 'number' && param.constructor !== BigNumber && param !== Σ)
      ) {
        throw new TypeError(`Error! Array item must be a number, a BigNumber, or "Σ".`);
      }
    });
  });

  funcArgsSet.forEach(function(args, idx) {
    if (idx === funcArgsSet.length - 1 && repeatLastFuncTimes >= 2) {
      return;
    }

    args.forEach(function(arg, idx) {
      if (args[idx] === Σ) {
        args[idx] = λ[λCallCount];
      }
    });

    λ[λCallCount] = func(args[0], args[1]);
  });

  if (repeatLastFuncTimes >= 2) {
    const args = [];

    for (c1 = 0; c1 < repeatLastFuncTimes; c1 += 1) {
      args[0] = funcArgsSet[funcArgsSet.length - 1][0];
      args[1] = funcArgsSet[funcArgsSet.length - 1][1];

      args.forEach(function(arg, idx) {
        if (args[idx] === Σ) {
          args[idx] = λ[λCallCount];
        }
      });

      λ[λCallCount] = func(args[0], args[1]);
    }
  }

  λ[λCallCount].number = λ[λCallCount].toNumber();
  λ[λCallCount].string = λ[λCallCount].toString(10);

  return λ;
}

λ.reset = function() {
  while (λCallCount >= 0) {
    λ[λCallCount] = undefined;
    delete λ[λCallCount];

    λCallCount -= 1;
  }
};

module.exports = { λ };
