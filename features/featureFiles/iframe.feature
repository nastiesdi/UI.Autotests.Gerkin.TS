Feature: Open smt in iframe

    Open google.com in iframe 
    
    @regression
    Scenario: Open new page using iframe selector
        Given I am on google translate page
        When I click apps button
        And I click on google calendar icon
        Then login form is displayed