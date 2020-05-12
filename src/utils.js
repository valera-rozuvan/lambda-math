const BigNumber = require('bignumber.js');

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

module.exports = { verifyFuncParams, convertFuncParams };
