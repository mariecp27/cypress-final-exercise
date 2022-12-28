Feature: Actions with products

    As a user of demoblaze store
    I want to perform different actions with the available products
    So I can use the store properly

    Background:
        Given I am in demoblaze home page

    Scenario: Verify phones
        When I click on phones category
        Then Only phones should be gotten through the API response

    Scenario: Verify laptops
        When I click on laptops category
        Then Only laptops should be gotten through the API response

    Scenario: Verify monitors
        When I click on monitors category
        Then Only monitors should be gotten through the API response

    Scenario: Product selection
        When I click on a random product
        Then I should be taken to the product detail