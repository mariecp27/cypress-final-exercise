/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../support/pageObjects/HomePage';
import * as genericActions from '../../support/generic/genericActions';
import * as genericAssertions from '../../support/generic/genericAssertions';

// When
When('I click on phones category', () => {
    HomePage.clickOnCategoty(0);
});

When('I click on laptops category', () => {
    HomePage.clickOnCategoty(1);
});

When('I click on monitors category', () => {
    HomePage.clickOnCategoty(2);
});

// Then
Then('Only phones should be gotten through the API response', () => {
    HomePage.getCategoriesResponse();
    genericActions.getElement('@desiredProducts').then( (products) => {
        products.forEach(element => {
            genericAssertions.toContainText(genericActions.convertToCypressElement(element.cat), 'phone');
        });
    });
});

Then('Only laptops should be gotten through the API response', () => {
    HomePage.getCategoriesResponse();
    genericActions.getElement('@desiredProducts').then( (products) => {
        products.forEach(element => {
            genericAssertions.toContainText(genericActions.convertToCypressElement(element.cat), 'notebook');
        });
    });
});

Then('Only monitors should be gotten through the API response', () => {
    HomePage.getCategoriesResponse();
    genericActions.getElement('@desiredProducts').then( (products) => {
        products.forEach(element => {
            genericAssertions.toContainText(genericActions.convertToCypressElement(element.cat), 'monitor');
        });
    });
});