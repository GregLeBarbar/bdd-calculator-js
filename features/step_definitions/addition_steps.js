const assert = require('assert')
const { Given, When, Then } = require('cucumber')
const Calculator = require('../../lib/calculator');

let calculator;

Given('the numbers {int} and {int}', function (x, y) {
    console.log(`@Given the numbers ${ x } and ${ y }`);
    calculator = new Calculator(x, y);
});

When('they are added together', function () {
    console.log(`@When they are added together`);
    calculator.addition();
});

Then('should the result be {int}', function (expected) {
    console.log(`@Then should the result be ${ expected }`);
    assert.equal(calculator.getResult(), expected)
});