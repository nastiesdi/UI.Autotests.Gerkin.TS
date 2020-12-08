@regression
Feature: Navigation from onliner main Page

    This tests check if right pages are opened by clicking on general section of main page

    @regression   
    Scenario: People page is opened by clickin on People section

        Given I am on onliner homepage
        When I click on "people" section
        Then I see "people" url displayed
        And "people" section is selected in main menu
        And I see "people" main block
        And I see rubrics menu
        
    @regression   
    Scenario: Catalog is opened by clickin on Catalog section

        Given I am on onliner homepage
        When I click on "catalog" section
        Then I see "catalog" url displayed
        And I see "catalog" main block

    @regression   
    Scenario: Opinions is opened by clickin on Opinion section

        Given I am on onliner homepage
        When I click on "opinions" section
        Then I see "opinions" url displayed
        And I see "opinions" main block

    @regression   
    Scenario: Avto is opened by clickin on Avto section

        Given I am on onliner homepage
        When I click on "avto" section
        Then I see "avto" url displayed
        And I see "avto" main block
        And "avto" section is selected in main menu
        And I see rubrics menu
        And I see rubrics menu
 
    @regression   
    Scenario: Tehnology is opened by clickin on Tehnology section

        Given I am on onliner homepage
        When I click on "tehnology" section
        Then I see "tehnology" url displayed
        And I see "tehnology" main block
        And I see rubrics menu
        
    @regression    
    Scenario: Realt is opened by clickin on Realt section

        Given I am on onliner homepage
        When I click on "realt" section
        Then I see "realt" url displayed
        And I see "realt" main block
        And I see rubrics menu
