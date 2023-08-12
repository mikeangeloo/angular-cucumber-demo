Feature: Manage lists
  Manage list actions

  Background:
    Given a user is on the cucumber page

  Scenario: Button remove is disabled when a list is empty
    Given the initial list size is equal 0
    Then the button a Remove an element from a list is disabled

  Scenario: Button add is enabled at startup
    Then the button a Remove an element from a list is enabled

  Scenario Outline: Add elements to a list and remove them from a list
    Given the initial list size is equal 0
    When a user add <ELEMENTS_TO_ADD_NUMBER> new elements to list
    Then the list size ie equal <ELEMENTS_TO_ADD_NUMBER>
    Examples:
      | ELEMENTS_TO_ADD_NUMBER |
      | 1                      |
      | 3                      |
      | 4                      |
