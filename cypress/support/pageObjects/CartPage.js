/// <reference types="cypress" />

import * as genericActions from '../generic/genericActions';

const pageLocators = {
    productTitle: '.success > :nth-child(2)',
    deleteButton: '.success > :nth-child(4) > a'
}

class CartPage {
    // Web elemets
    productTitle() {
        return cy.get(pageLocators.productTitle);
    }

    deleteButton() {
        return cy.get(pageLocators.deleteButton);
    }

    // Actions
    getProductTitle() {
        return this.productTitle().invoke('text');
    }

    addProductToShoppingCart() {

        cy.fixture('services').as('services');

        cy.get("@services").then(services => {
            cy.request('GET', services.allProducts).as('products');
        });

        let allProducts = [];
        let allProductsAmount = 0;
        let productId = 0;

        cy.get('@products')
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

        cy.get('@productsInShoppingCart')
        .then( response => {
            console.log(response);
            productsInShoppingCartAmount =  response.body.Items.length;
        })
        .then( () => {
            cy.wrap(productsInShoppingCartAmount).as('productsInShoppingCartAmount');
        });
    }
}

export default new CartPage();