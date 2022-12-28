/// <reference types="cypress" />

import { When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../support/pageObjects/HomePage';
import * as genericActions from '../../support/generic/genericActions';
import * as genericAssertions from '../../support/generic/genericAssertions';

// When
When('I click on the Home option of the navigation bar', () => {
    HomePage.clickOnNavLink('Home');
});

When('I click on the Contact option of the navigation bar', () => {
    HomePage.clickOnNavLink('Contact');
});

When('I click on the About us option of the navigation bar', () => {
    HomePage.clickOnNavLink('About us');
});

When('I click on the Cart option of the navigation bar', () => {
    HomePage.clickOnNavLink('Cart');
});

When('I click on the Log in option of the navigation bar', () => {
    HomePage.clickOnNavLink('Log in');
});

When('I click on the Sign up option of the navigation bar', () => {
    HomePage.clickOnNavLink('Sign up');
});

// Then
Then('I should be taken to the Home page', () => {
    genericAssertions.toContainText(genericActions.getWindownHref(), 'index.html');
});

Then('The Contact modal should be displayed', () => {
    genericAssertions.toContainText(HomePage.contactModalTitle(), 'New message');
});

Then('The About us modal should be displayed', () => {
    genericAssertions.toContainText(HomePage.aboutUsModalTitle(), 'About us');
});

Then('I should be taken to the Cart page', () => {
    genericAssertions.toContainText(genericActions.getWindownHref(), 'cart.html');
});

Then('The Log in modal should be displayed', () => {
    genericAssertions.toContainText(HomePage.loginModalTitle(), 'Log in');
});

Then('The Sign up modal should be displayed', () => {
    genericAssertions.toContainText(HomePage.signUpModalTitle(), 'Sign up');
});