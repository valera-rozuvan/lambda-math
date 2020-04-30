const uuidv4 = require('uuid').v4;
const BigNumber = require('bignumber.js');

const resultsStore = {};
let λ_call_count = -1;

function λ() {
  const func = arguments[0];
  const funcArgsSet = [];
  let repeatLastFuncTimes = 1;
  let c1;

  const CALL_ID = uuidv4();
  resultsStore[CALL_ID] = 0;

  λ_call_count += 1;
  λ[λ_call_count] = new BigNumber(0);

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

  funcArgsSet.forEach(function (args) {
    [args[0], args[1]].forEach((param) => {
      if (
        (typeof param === 'undefined' || param === null || Number.isNaN(param) === true) ||
        (typeof param !== 'number' && param.constructor !== BigNumber && param !== _)
      ) {
        throw new TypeError(`Error! Array item must be a number, a BigNumber, or "_".`);
      }
    });
  });

  funcArgsSet.forEach(function (args, idx) {
    if (idx === funcArgsSet.length - 1 && repeatLastFuncTimes >= 2) {
      return;
    }

    args.forEach(function (arg, idx) {
      if (args[idx] === _) {
        args[idx] = resultsStore[CALL_ID];
      }
    });

    resultsStore[CALL_ID] = func(args[0], args[1]);
  });

  if (repeatLastFuncTimes >= 2) {
    const args = [];

    for (c1 = 0; c1 < repeatLastFuncTimes; c1 += 1) {
      args[0] = funcArgsSet[funcArgsSet.length - 1][0];
      args[1] = funcArgsSet[funcArgsSet.length - 1][1];

      args.forEach(function (arg, idx) {
        if (args[idx] === _) {
          args[idx] = resultsStore[CALL_ID];
        }
      });

      resultsStore[CALL_ID] = func(args[0], args[1]);
    }
  }

  λ[λ_call_count] = resultsStore[CALL_ID];
  λ[λ_call_count].number = resultsStore[CALL_ID].toNumber();

  return λ;
}

λ.reset = function () {
  let prop;

  for (prop in resultsStore) {
    if (Object.prototype.hasOwnProperty.call(resultsStore, prop)) {
      resultsStore[prop] = undefined;
      delete resultsStore[prop];
    }
  }

  while (λ_call_count >= 0) {
    λ[λ_call_count] = undefined;
    delete λ[λ_call_count];

    λ_call_count -= 1;
  }
};

function _(callId) {
  return resultsStore[callId];
}

function verifyFuncParams(funcName, x, y) {
  [x, y].forEach((param, idx) => {
    if (
      (typeof param === 'undefined' || param === null || Number.isNaN(param) === true) ||
      (typeof param !== 'number' && param.constructor !== BigNumber)
    ) {
      const paramName = (idx === 0) ? 'First' : 'Second';

      throw new TypeError(`${funcName}: Error! ${paramName} param must be a number or a BigNumber.`);
    }
  });
}

function convertFuncParams(x, y) {
  if (typeof x === 'number') {
    x = new BigNumber(x);
  }

  if (typeof y === 'number') {
    y = new BigNumber(y);
  }

  return {x, y};
}

function add(x, y) {
  verifyFuncParams('add', x, y);

  ({x, y} = convertFuncParams(x, y));

  return x.plus(y);
}

function sub(x, y) {
  verifyFuncParams('sub', x, y);

  ({x, y} = convertFuncParams(x, y));

  return x.minus(y);
}

function mul(x, y) {
  verifyFuncParams('mul', x, y);

  ({x, y} = convertFuncParams(x, y));

  return x.times(y);
}

function div(x, y) {
  verifyFuncParams('div', x, y);

  ({x, y} = convertFuncParams(x, y));

  return x.div(y);
}

module.exports = {
  λ: λ,
  _: _,
  add: add,
  sub: sub,
  mul: mul,
  div: div
};
