Feature: Manage inputs
  Manage input actions

  Scenario Outline: User insert text into an input field and the text is visible below
    Given a user is on the cucumber page
    When a user enters <USER_TEXT> into the input
    Then a text below input is equal <USER_TEXT>
    Examples:
      | USER_TEXT                                                                                                                                                                          |
      | test                                                                                                                                                                               |
      | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non euismod ex. Aenean commodo vel velit faucibus malesuada. Quisque fermentum turpis eget ex volutpat tristique. |
