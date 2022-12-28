/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';
import * as genericActions from '../../support/generic/genericActions';
import * as genericAssertions from '../../support/generic/genericAssertions';

// When
When('I click on phones category', () => {
    HomePage.clickOnCategory(0);
});

When('I click on laptops category', () => {
    HomePage.clickOnCategory(1);
});

When('I click on monitors category', () => {
    HomePage.clickOnCategory(2);
});

When('I click on a random product', () => {
    HomePage.getProductsAmount();
    cy.get('@productsAmount').then( productsAmount => {
        let randomValue = genericActions.getRandomValue(productsAmount);
        HomePage.getProductTitle(randomValue);
        HomePage.clickOnproductTitle(randomValue);
    });
});

// Then
Then('Only phones should be gotten through the API response', () => {
    HomePage.getCategoriesResponse();
    cy.get('@desiredProducts').then( (products) => {
        products.forEach(element => {
            genericAssertions.toContainText(cy.wrap(element.cat), 'phone');
        });
    });
});

Then('Only laptops should be gotten through the API response', () => {
    HomePage.getCategoriesResponse();
    cy.get('@desiredProducts').then( (products) => {
        products.forEach(element => {
            genericAssertions.toContainText(cy.wrap(element.cat), 'notebook');
        });
    });
});

Then('Only monitors should be gotten through the API response', () => {
    HomePage.getCategoriesResponse();
    cy.get('@desiredProducts').then( (products) => {
        products.forEach(element => {
            genericAssertions.toContainText(cy.wrap(element.cat), 'monitor');
        });
    });
});

Then('I should be taken to the product detail', () => {
    cy.get('@productTitle').then( productTitle => {
        genericAssertions.toContainText(ProductPage.getProductTitle(), productTitle);
    });
});