const { Before, BeforeAll, After, AfterAll } = require('cucumber')

BeforeAll(function() {
    console.log("Inside BeforeALL Hook");
})

AfterAll(function() {
    console.log("Inside AfterALL Hook");
})

Before(function() {
    console.log("Inside Before Hook");
})

After(function() {
    console.log("Inside After Hook");
})