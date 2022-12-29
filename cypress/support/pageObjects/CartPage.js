/// <reference types="cypress" />

import * as genericActions from '../generic/genericActions';

const pageLocators = {
    productTitle: '.success > :nth-child(2)',
    deleteButton: '.success > :nth-child(4) > a',
    placeOrderButton: '.btn-success',
    nameInput: '#name',
    countryInput: '#country',
    cityInput: '#city',
    creditCardInput: '#card',
    monthInput: '#month',
    yearInput: '#year',
    purchaseButton: '.btn-primary',
    purchaseButtonText: 'Purchase',
    confirmationModalTitle: 'Thank you for your purchase!'
}

class CartPage {
    // Web elemets
    productTitle() {
        return cy.get(pageLocators.productTitle);
    }

    deleteButton() {
        return cy.get(pageLocators.deleteButton);
    }

    placeOrderButton() {
        return cy.get(pageLocators.placeOrderButton);
    }

    nameInput() {
        return cy.get(pageLocators.nameInput);
    }

    countryInput() {
        return cy.get(pageLocators.countryInput);
    }

    cityInput() {
        return cy.get(pageLocators.cityInput);
    }

    creditCardInput() {
        return cy.get(pageLocators.creditCardInput);
    }

    monthInput() {
        return cy.get(pageLocators.monthInput);
    }

    yearInput() {
        return cy.get(pageLocators.yearInput);
    }

    purchaseButton() {
        return cy.contains(pageLocators.purchaseButton, pageLocators.purchaseButtonText);
    }

    confirmationModalTitle() {
        return cy.contains(pageLocators.confirmationModalTitle);
    }

    // Actions
    getProductTitle() {
        return this.productTitle().invoke('text');
    }

    addProductToShoppingCart() {

        cy.fixture('services').as('services');

        let allProducts = [];
        let allProductsAmount = 0;
        let productId = 0;
        
        cy.get("@services").then(services => {

            cy.request('GET', services.allProducts)
                .then( response => {
                    allProducts =  response.body.Items;
                    allProductsAmount = allProducts.length;
                })
                .then( () => {
                    cy.wrap(allProducts).as('allProducts');
                    cy.wrap(allProductsAmount).as('allProductsAmount');
                });

            cy.get('@allProductsAmount').then( allProductsAmount => {
                return genericActions.getRandomValue(allProductsAmount);
            })
                .then( id => {
                    cy.get('@allProducts').then( allProducts => {

                        cy.wrap(allProducts[id].title).as('boughtProductTitle');

                        productId = allProducts[id].id;

                        cy.get("@services").then(services => {
                            cy.intercept('POST', services.shoppingCartView, (req) => {
                                req.reply( res => {
                                    res.body.Items = [{prod_id: productId}]
                                });
                            });
                        });
                    });
                });
        });
    }

    clickODeleteButton() {
        return this.deleteButton().click();
    }

    getProductsInShoppingCart() {

        cy.fixture('services').as('services');

        cy.get("@services").then(services => {
            cy.intercept('POST', services.shoppingCartView).as('productsInShoppingCart');
        });

        let productsInShoppingCartAmount = [];

        cy.wait('@productsInShoppingCart')
        .then( response => {
            productsInShoppingCartAmount =  response.response.body.Items.length;
        })
        .then( () => {
            cy.wrap(productsInShoppingCartAmount).as('productsInShoppingCartAmount');
        });
    }

    clickOnPlaceOrderButton() {
        return this.placeOrderButton().click();
    }

    typeOnNameInput(text) {
        return this.nameInput().invoke('val', text);
    }

    typeOnCountryInput(text) {
        return this.countryInput().invoke('val', text);
    }

    typeOnCityInput(text) {
        return this.cityInput().invoke('val', text);
    }

    typeOnCreditCardInput(text) {
        return this.creditCardInput().invoke('val', text);
    }

    typeOnMonthInput(text) {
        return this.monthInput().invoke('val', text);
    }

    typeOYearInput(text) {
        return this.yearInput().invoke('val', text);
    }

    clickOnPurchaseButton() {
        return this.purchaseButton().click();
    }

    getConfirmationModalTitleText() {
        return this.confirmationModalTitle().invoke('text');
    }
}

export default new CartPage();