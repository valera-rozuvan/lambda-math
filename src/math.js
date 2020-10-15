const { verifyFuncParams, convertFuncParams } = require('./utils');

function add(x, y) {
  verifyFuncParams('add', x, y);

  ({ x, y } = convertFuncParams(x, y));

  return x.plus(y);
}

function sub(x, y) {
  verifyFuncParams('sub', x, y);

  ({ x, y } = convertFuncParams(x, y));

  return x.minus(y);
}

function mul(x, y) {
  verifyFuncParams('mul', x, y);

  ({ x, y } = convertFuncParams(x, y));

  return x.times(y);
}

function div(x, y) {
  verifyFuncParams('div', x, y);

  ({ x, y } = convertFuncParams(x, y));

  return x.div(y);
}

module.exports = { add, sub, mul, div };
