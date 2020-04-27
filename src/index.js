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

function add() {

}

function sub() {

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
