Feature: Multiplication

  Multiplication is great as a verification exercise to get the Cucumber-js infrastructure up and running

  Scenario: Mutiplication of 2 numbers
    Given the numbers 2 and 2 for multiplication
    When they are multiplied together
    Then should the result of multiplication be 4
