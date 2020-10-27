const BigNumber = require('bignumber.js');

function verifyFuncParams(funcName, x, y) {
  [x, y].forEach((param, idx) => {
    if (
      (typeof param === 'undefined' || param === null || Number.isNaN(param) === true) ||
      (typeof param !== 'string' && typeof param !== 'number' && param.constructor !== BigNumber)
    ) {
      const paramName = (idx === 0) ? 'First' : 'Second';

      throw new TypeError(`${funcName}: Error! ${paramName} param must be a number, a string, or a BigNumber.`);
    }
  });
}

function convertFuncParams(x, y) {
  if (typeof x === 'number' || typeof x === 'string') {
    x = new BigNumber(x);
  }

  if (typeof y === 'number' || typeof y === 'string') {
    y = new BigNumber(y);
  }

  return { x, y };
}

function isInteger(n) {
  return n % 1 === 0;
}

module.exports = { verifyFuncParams, convertFuncParams, isInteger };
