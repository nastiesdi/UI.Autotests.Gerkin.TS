 Feature: Search

    @regression   
    Scenario Outline: I can find needed items
        Given I am on onliner homepage
        When I enter "<productName>" in search field
        Then I see fast search modal
        And Searched items "<productName>" are displayed

        Examples:
        |productName|
        |Samsung|
        |Телевизор|

    @regression
    Scenario: I can Open all proposals
        Given I am on onliner homepage
        When I enter "Смартфон Samsung Galaxy S20 Ultra 5G SM-G988B/DS 12GB/128GB Exynos 990 (белый)" in search field
        And I click on all proposals
        Then I see Смартфон Samsung Galaxy S20 Ultra 5G SM-G988B/DS 12GB/128GB Exynos 990 (белый) product is displayed
    
    @onliner
    Scenario: I can Open all proposals
        Given I am on onliner homepage
        When I enter "Смартфон Samsung Galaxy S20 Ultra 5G SM-G988B/DS 12GB/128GB Exynos 990 (белый)" in search field
        And I click on all proposals
        And I add product to compare
        Then Text was changed

    @regression  
    Scenario: I can Open all proposals
        Given I am on onliner homepage
        When I enter "Смартфон Samsung Galaxy S20 Ultra 5G SM-G988B/DS 12GB/128GB Exynos 990 (белый)" in search field
        And I click on all proposals
        And I add product to cart
        Then Text on button changed
        And Bage is displayed

    @regression
    Scenario: I can Open all proposals
        Given I am on onliner homepage
        When I enter "Смартфон Samsung Galaxy S20 Ultra 5G SM-G988B/DS 12GB/128GB Exynos 990 (белый)" in search field
        And I click on all proposals
        And I add product to cart
        Then Text on button changed
        
        