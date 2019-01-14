Feature: Addition

  Addition is great as a verification exercise to get the Cucumber-js infrastructure up and running

  Scenario: Add two number
    Given the numbers 1 and 3
    When they are added together 
    Then should the result be 4

  @outline
  Scenario Outline: Tests lots of additions
    Given the numbers <x> and <y>
    When they are added together 
    Then should the result be <result>

    Examples:
    | x | y | result | 
    | 1 | 2 | 3 |
    | 2 | 3 | 5 |
    | 4 | 2 | 6 |
    | 3 | 3 | 6 |