const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const Calculator = require('../../lib/calculator');

let calculator;

Given('the numbers {int} and {int} for multiplication', function (x, y, callback) {
    calculator = new Calculator(x, y);
    callback();
});

When('they are multiplied together', function () {
    calculator.multiplication();
});

Then('should the result of multiplication be {int}', function (expected) {
    assert.equal(calculator.getResult(), expected)
});