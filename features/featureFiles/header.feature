 Feature: Header

    @regression   
    Scenario Outline: I can open <category> category from menu in header

        Given I am on onliner homepage
        When I open "<category>" page  from header
        Then I see "<category>" section
        And I can see "<category>" section is highlated

        Examples:
        |category|
        |Автобарахолка|
        |Дома и квартиры|
        |Услуги|
   