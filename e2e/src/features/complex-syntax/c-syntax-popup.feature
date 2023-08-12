Feature: Manage inputs
  Manage popup actions

  Scenario: Close popup
    Given a user is on the cucumber page
    And the popup is visible
    When a user click on a Close me! button
    Then the popup is gone
