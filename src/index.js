const BigNumber = require('bignumber.js');

function λ() {
  const func = arguments[0];

  if (
    (func !== add) &&
    (func !== sub) &&
    (func !== mul) &&
    (func !== div)
  ) {
    throw new TypeError('λ: Illegal function passed as 1st param!');
  }

  return λ;
}

function _() {

}

function verifyFuncParams(funcName, x, y) {
  [x, y].forEach((param, idx) => {
    if (
      (typeof param === 'undefined' || param === null || isNaN(param) === true) ||
      (typeof param !== 'number' && param.constructor !== BigNumber)
    ) {
      const paramName = (idx === 0) ? 'First' : 'Second';

      throw new TypeError(`${funcName}: Error! ${paramName} param must be a number or a BigNumber.`);
    }
  });
}

function add(x, y) {
  verifyFuncParams('add', x, y);

  if (typeof x === 'number') {
    x = new BigNumber(x);
  }

  if (typeof y === 'number') {
    y = new BigNumber(y);
  }

  return x.plus(y);
}

function sub(x, y) {
  verifyFuncParams('sub', x, y);

  if (typeof x === 'number') {
    x = new BigNumber(x);
  }

  if (typeof y === 'number') {
    y = new BigNumber(y);
  }

  return x.minus(y);
}

function mul() {

}

function div() {

}

module.exports = {
  λ: λ,
  _: _,
  add: add,
  sub: sub,
  mul: mul,
  div: div
};
