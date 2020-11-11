Feature: Buy item
    All functional conected to the cart

    @regression
    Scenario: Icons is displayed after adding item to the cart
        Given I am on oneteh homepage
        When I hower "Items for kithen" field on the main menu
        And I go to the items varochnae paneli section
        And I add first item from the list to the cart
        Then Right count of item is displayed
        