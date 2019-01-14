const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const Calculator = require('../../lib/calculator');

let calculator;

Given('the numbers {int} and {int} for multiplication', function (x, y) {
    console.log(`@Given the numbers ${ x } and ${ y } for multiplication`);
    calculator = new Calculator(x, y);
});

When('they are multiplied together', function () {
    console.log(`@When they are multiplied together`);
    calculator.multiplication();
});

Then('should the result of multiplication be {int}', function (expected) {
    console.log(`@Then should the result of multiplication be ${expected}`);
    assert.equal(calculator.getResult(), expected)
});