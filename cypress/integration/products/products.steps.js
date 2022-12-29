/// <reference types="cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../support/pageObjects/HomePage';
import ProductPage from '../../support/pageObjects/ProductPage';
import CartPage from '../../support/pageObjects/CartPage';
import * as genericActions from '../../support/generic/genericActions';
import * as genericAssertions from '../../support/generic/genericAssertions';

// Given
Given('I am in a random product detail page', () => {
    HomePage.getProductsAmount();
    cy.get('@productsAmount').then( productsAmount => {
        let randomValue = genericActions.getRandomValue(productsAmount);
        HomePage.clickOnproductTitle(randomValue);
    });
});

Given('I am in the shopping cart page', () => {
    CartPage.addProductToShoppingCart();
    HomePage.clickOnNavLink('Cart');
});

And('I have a random product in my shopping cart', () => {
    cy.get('@boughtProductTitle').then( boughtProductTitle => {
        genericAssertions.toContainText(CartPage.getProductTitle(), boughtProductTitle);
    });
});

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

When('I click on Add to cart button', () => {
    ProductPage.clickOnAddToCartButton();
});

When('I click on Delete button', () => {
    CartPage.clickODeleteButton();
});

When('I click on Place Order button', () => {
    CartPage.clickOnPlaceOrderButton();
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

Then('The product should be added to my shopping cart', () => {
    ProductPage.saveProductTitle();
    ProductPage.getAddToCartResponse();
    cy.get('@status').then( (actualStatus) => {
        genericAssertions.toBeEqual(cy.wrap(actualStatus), 200);
    });
    ProductPage.clickOnCartLink();
    cy.get('@productTitleInDetail').then( productTitleInDetail => {
        genericAssertions.toContainText(CartPage.getProductTitle(), productTitleInDetail);
    });
});

Then('The product should be removed from my shopping cart', () => {
    CartPage.getProductsInShoppingCart();
    cy.get('@productsInShoppingCartAmount').then( (productsInShoppingCartAmount) => {
        genericAssertions.toBeEqual(cy.wrap(productsInShoppingCartAmount), 0);
    });
});

Then('I should be able to finish the purchase procedure', () => {
    cy.fixture('formInformation').then( formInformation => {
        CartPage.typeOnNameInput(formInformation.name);
        CartPage.typeOnCountryInput(formInformation.country);
        CartPage.typeOnCityInput(formInformation.city);
        CartPage.typeOnCreditCardInput(formInformation.card);
        CartPage.typeOnMonthInput(formInformation.month);
        CartPage.typeOYearInput(formInformation.year);
        CartPage.clickOnPurchaseButton();
        genericAssertions.toContainText(CartPage.getConfirmationModalTitleText(), 'Thank you for your purchase!');
    });
});