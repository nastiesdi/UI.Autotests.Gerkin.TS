Feature: Oneteh showcase

    Just little demo showcase
    @regression
    Scenario: Search a non-existent thing on oneteh homepage

        Given I am on oneteh homepage
        When enter "qqqqq" in Search field on the onetehpage
        Then I see "Ничего не найдено" text
        And I see close search button
    
    @regression
    Scenario: Search an existent thing on oneteh homepage

        Given I am on oneteh homepage
        When enter "FORNELLI PV 60 MIRAGGIO" in Search field on the onetehpage
        Then I see "FORNELLI PV 60 MIRAGGIO" item
        And I see close search button

    @regression
    Scenario: open items section

        Given I am on oneteh homepage
        When I hower "Items for kithen" field on the main menu
        And I go to the items section
        Then Title "ВСТРАИВАЕМАЯ ТЕХНИКА ДЛЯ КУХНИ" is displayed

    @regression
    Scenario: menu opened by hovering menu elements

        Given I am on oneteh homepage
        When I hower "Items for kithen" field on the main menu
        Then Title Items for kithen is displayed
 