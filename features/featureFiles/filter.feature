Feature: Filter items

    Filter items

    @regression
    Scenario: Select Akpo brand in dropdown list on items page

        Given I am on oneteh homepage
        When I hower "Items for kithen" field on the main menu
        And I go to the items varochnae paneli section
        And I select "Akpo" in dropdovn list
        Then Text "Akpo" displayed in brand droplist
    
    @regression
    Scenario: Filter items by Akpo field on items page

        Given I am on oneteh homepage
        When I hower "Items for kithen" field on the main menu
        And I go to the items varochnae paneli section
        And I select "Akpo" in dropdovn list
        And I click FILTER button
        Then I see "Akpo" in the breadcrumbs
        #sometimes this test fail if it is run with oter tests, it think that breadcrumps have not Akpo value/ It seams that the page cant be loaded fast and old breadcrumbs are gotten

    @smoke
    @regression
    Scenario: Radiobutton Washing mashine is selected

       Given I am on oneteh homepage
       When I hower "Items for kithen" field on the main menu
       And I go to the plates items section
       And I set 'plate can be washed in washmashine' checkbox
       Then I see 'plate can be washed in washmashine checkbox' is selected