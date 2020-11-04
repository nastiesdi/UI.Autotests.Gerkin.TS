
Feature: Onliner showcase

    Just little demo showcase

    Scenario: Search on homepage

        Given I am on Onliner homepage
        When enter "i9-9900k" in Search field
        Then I see "Intel Core i9-9900K (BOX)" item

    @smoke
    Scenario: Search on oneteh homepage

        Given I am on oneteh homepage
        When enter "qqqqq" in Search field on the onetehpage
        Then I see "Ничего не заполнено" item
        