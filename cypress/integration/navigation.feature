@navigation
Feature: Navigation working

    As a user of demoblaze store
    I want to navigate through the navigation bar
    So I can access to the different store sections

    Background:
        Given I am in demoblaze home page

@regression @smoke @navigation @homeNavigation
    Scenario: Access to Home page through the navigation bar
        When I click on the Home option of the navigation bar
        Then I should be taken to the Home page

@regression @smoke @navigation @contactNavigation
    Scenario: Access to Contact modal through the navigation bar
        When I click on the Contact option of the navigation bar
        Then The Contact modal should be displayed

@regression @smoke @navigation @aboutUstNavigation
    Scenario: Access to About us modal through the navigation bar
        When I click on the About us option of the navigation bar
        Then The About us modal should be displayed

@regression @smoke @navigation @cartNavigation
    Scenario: Access to Cart page through the navigation bar
        When I click on the Cart option of the navigation bar
        Then I should be taken to the Cart page
    
@regression @smoke @navigation @logInNavigation
    Scenario: Access to Log in modal through the navigation bar
        When I click on the Log in option of the navigation bar
        Then The Log in modal should be displayed

@regression @smoke @navigation @signUpNavigation
    Scenario: Access to Sign up modal through the navigation bar
        When I click on the Sign up option of the navigation bar
        Then The Sign up modal should be displayed