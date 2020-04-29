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

function add(x, y) {
  if (typeof x === 'undefined' || x === null || !x) {
    throw new TypeError('add: Must be invoked with 2 params!');
  }

  return x + y;
}

function sub(x, y) {
  if (typeof x === 'undefined' || x === null || !x) {
    throw new TypeError('sub: Must be invoked with 2 params!');
  }

  return x - y;

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
