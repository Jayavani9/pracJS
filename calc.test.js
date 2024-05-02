//Test file for calculator function
//To run: node calc.test.js 
/*
//1. Use Console-Based Testing
You can quickly test functions in a browser's developer console or Node.js REPL by copying the function and running basic checks manually. 
It's not formal testing, but it's quick for small functions.

2. Use Built-in Assertions
JavaScript has a built-in assertion library with Node.js (assert). You can create a simple test file like this:
*/


const assert = require('assert');
const calc = require('./calc');

assert.strictEqual(calc(1, 2, '+'), 3, 'Addition test failed');
assert.strictEqual(calc(3, 2, '-'), 1, 'Subtraction test failed');
assert.strictEqual(calc(3, 5, '*'), 15, 'Multiplication test failed');
assert.strictEqual(calc(8, 2, '/'), 4, 'Division test failed');
assert.throws(() => calc(1, 2, '%'), /Invalid operator/, 'Invalid operator test failed');

console.log('All tests passed!');
