const BigNumber = require('bignumber.js');

const { Σ } = require('./sigma');
const { add, sub, mul, div } = require('./math');

let λ_call_count = -1;

function λ() {
  const func = arguments[0];
  const funcArgsSet = [];
  let repeatLastFuncTimes = 1;
  let c1;

  λ_call_count += 1;
  λ[λ_call_count] = new BigNumber(0);

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

  if (Array.isArray(arguments[1]) === false) {
    throw new TypeError('λ: 2nd param should be an array!');
  }

  funcArgsSet.push(arguments[1]);

  c1 = 2;
  while (typeof arguments[c1] !== 'undefined') {
    if (typeof arguments[c1] === 'number') {
      repeatLastFuncTimes = Math.floor(arguments[c1]);

      if (Number.isNaN(repeatLastFuncTimes) || repeatLastFuncTimes <= 0) {
        throw new Error('λ: Repeat last function call times should be a positive number!');
      }

      if (typeof arguments[c1 + 1] !== 'undefined') {
        throw new Error('λ: Repeat last function call times should be the last parameter!');
      }
    } else if (Array.isArray(arguments[c1])) {
      funcArgsSet.push(arguments[c1]);
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
        args[idx] = λ[λ_call_count];
      }
    });

    λ[λ_call_count] = func(args[0], args[1]);
  });

  if (repeatLastFuncTimes >= 2) {
    const args = [];

    for (c1 = 0; c1 < repeatLastFuncTimes; c1 += 1) {
      args[0] = funcArgsSet[funcArgsSet.length - 1][0];
      args[1] = funcArgsSet[funcArgsSet.length - 1][1];

      args.forEach(function(arg, idx) {
        if (args[idx] === Σ) {
          args[idx] = λ[λ_call_count];
        }
      });

      λ[λ_call_count] = func(args[0], args[1]);
    }
  }

  λ[λ_call_count].number = λ[λ_call_count].toNumber();

  return λ;
}

λ.reset = function() {
  while (λ_call_count >= 0) {
    λ[λ_call_count] = undefined;
    delete λ[λ_call_count];

    λ_call_count -= 1;
  }
};

module.exports = { λ };
