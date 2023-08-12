Feature: Manage dropdowns
  Manage dropdown actions

  Background:
    Given a user is on the cucumber page

  Scenario: A new entry is added to the dropdown
    Given a dropdown is visible
    And dropdown's values are equal to 3
    When a user click on a Add a new entry to a dropdown button
    Then dropdown's values are equal to 4

  Scenario Outline: A value from dropdown is displayed at the bottom
    Given a user is on the cucumber page
    When a user opens a dropdown
    And a user chooses a dropdown entry <ENTRY_NAME>
    Then dropdown's value <ENTRY_NAME> is displayed below
    Examples:
      | ENTRY_NAME               |
      | Another dropdown element |
      | Example dropdown element |
