@products
Feature: Actions with products

    As a user of demoblaze store
    I want to perform different actions with the available products
    So I can use the store properly

    Background:
        Given I am in demoblaze home page

@regression @smoke @products @productCategories @phonesCategory
    Scenario: Verify phones
        When I click on phones category
        Then Only phones should be gotten through the API response

@regression @smoke @products @productCategories @laptopsCategory
    Scenario: Verify laptops
        When I click on laptops category
        Then Only laptops should be gotten through the API response

@regression @smoke @products @productCategories @monitorsCategory
    Scenario: Verify monitors
        When I click on monitors category
        Then Only monitors should be gotten through the API response

@regression @smoke @products @productSelection
    Scenario: Product selection
        When I click on a random product
        Then I should be taken to the product detail

@regression @smoke @products @shoppingCart @addToShoppingCart
    Scenario: Adding product to shopping cart
        Given I am in a random product detail page
        When I click on Add to cart button
        Then The product should be added to my shopping cart

@regression @smoke @products @shoppingCart @deleteFromShoppingCart
    Scenario: Deleting product to shopping cart
        Given I am in the shopping cart page
        And I have a random product in my shopping cart
        When I click on Delete button
        Then The product should be removed from my shopping cart

@regression @smoke @products @shoppingCart @buyShoppingCart
    Scenario: Buying product in shopping cart
        Given I am in the shopping cart page
        And I have a random product in my shopping cart
        When I click on Place Order button
        Then I should be able to finish the purchase procedure