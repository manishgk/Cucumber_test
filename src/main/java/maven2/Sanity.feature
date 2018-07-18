  Feature: Serve coffee
  
  @Tester
  Scenario Outline: Buy a coffee
  
  Given there are "<number>" coffee left in the machine
  And I have deposited "<money>" dollar
  When I press the coffee button
  Then I should be served a coffee
  
  Examples:
  
  | number | money |
  |  1     |   1   |
  |   0    |   1   |
  |   1    |   0   |
  |   2    |   1   |
  |   9   |  10   |
  