# Lambda math

[![Build Status](https://travis-ci.org/valera-rozuvan/lambda-math.svg?branch=master)](https://travis-ci.org/valera-rozuvan/lambda-math)

Pseudo lambda expressions for JS arbitrary-precision arithmetic operations.

## Example

Consider adding the floating point number `300 / 293` many times. 72 times in fact. Now, we don't want to simply multiply a number by 72. We want to add it 72 times, so that we can clearly see the problem with floating point rounding which exists in standard JavaScript. So, using `lambda-math` library, we can write:

```
const { div, add, λ, _ } = require('lambda-math');

λ( div, [300, 293] )
 ( add, [λ[0], λ[0]], [_, λ[0]], 70 );

console.log(λ[1].number); // 73.72013651877133
```

Compare the above to the simple JavaScript way of doing such a sum:

```
let result = 0;

for (let i = 0; i < 72; i += 1) {
  result += 300 / 293;
}

console.log(result); // 73.72013651877126
```

Or, a more functional (fancy) JS approach:

```
console.log(
  Array.from(Array(72).keys()).map(() => { return 300 / 293; }).reduce((a, b) => { return a + b; })
); // 73.72013651877126
```

As you can see, the pseudo lambda approach doesn't have the problem with rounding floating point numbers. Also, some (mathematicians) can argue that the syntax `lambda-math` introduces is more elegant, shorter, and cleaner overall (compared to pure JavaScript way of doing things).

## Internals

Besides adding pseudo syntactic sugar, `lambda-math` uses [bignumber.js](https://www.npmjs.com/package/bignumber.js) under the hood for actual arbitrary-precision decimal arithmetic.
