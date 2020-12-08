Feature: Catalog

    This tests check if right pages are opened by clicking on general section of main page
    
    @regression
    Scenario: Catalog is opened by clicking in main menu in header

        Given I am on onliner homepage
        When I open "Каталог" page  from header
        Then Title 'Каталог' is displayed
        And I see "catalog" url displayed
        And Navigation panel displayed

    @regression    
    Scenario Outline: I can see <activeItem> item in category

        Given I am on onliner homepage
        When I open "Каталог" page  from header
        And  I click on category "<activeItem>"
        Then "<activeItem>" item is active
        And Catalog navigation list opened

        Examples:
        |activeItem|
        |Электроника|
        |Компьютеры|
        |Бытовая|
        |Стройка|
        |Дом|
        |Авто|
        |Красота|
        |Детям|
        |Работа|
        |Еда|

    @regression
    Scenario Outline: I can open brend list

        Given I am on onliner homepage
        When I open "Каталог" page  from header
        And  I click on brend "<Item>"
        Then Catalog navigation list opened

        Examples:
        |Item|
        |Honor|
        |Apple|
        |Asus|
        |Lenovo|
        |Xiaomi|
        |Bosch|
        |Nokia|
        |LG|
        |Candy|
        |beurer|

    @regression    
    Scenario: I can open itemlist by hover

        Given I am on onliner homepage
        When I open "Каталог" page  from header
        And  I click on brend "Honor"
        Then Catalog navigation list opened

    @regression    
    Scenario: I see Honor items

        Given I am on onliner homepage
        When I open "Каталог" page  from header
        And  I click on brend "Honor"
        And I click on mobilePhone category
        Then HONOR item is displayed

      
    @regression  
    Scenario: I see Honor headphones

        Given I am on onliner homepage
        When I open "Каталог" page  from header
        And  I click on brend "Honor"
        And I click on headphones category
        Then HONOR item is displayed
    
    @regression 
    Scenario: I see Honor headphones

        Given I am on onliner homepage
        When I open "Каталог" page  from header
        And  I click on brend "Honor"
        And I click on watch category
        Then HONOR item is displayed