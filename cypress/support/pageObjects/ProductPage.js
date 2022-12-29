/// <reference types="cypress" />

const pageLocators = {
    productTitle: '.name',
    addToCartButton: '.btn-success',
    cartLink: '#cartur'
}

class ProductPage {
    // Web elemets
    productTitle() {
        return cy.get(pageLocators.productTitle);
    }

    addToCartButton() {
        return cy.get(pageLocators.addToCartButton);
    }

    cartLink() {
        return cy.get(pageLocators.cartLink);
    }

    // Actions
    getProductTitle() {
        return this.productTitle().invoke('text');
    }

    clickOnAddToCartButton() {
        cy.fixture('services').as('services');
        cy.get("@services").then(services => {
            cy.intercept('POST', services.addProductToShoppingCart).as('addToCartResponse');
        });
        return this.addToCartButton().click();
    }

    getAddToCartResponse() {
        let status;
        cy.wait('@addToCartResponse')
            .then( response => {
                status =  response.response.statusCode;
            })
            .then( () => {
                cy.wrap(status).as('status');
            });
    }

    saveProductTitle() {
        this.productTitle().invoke('text').as('productTitleInDetail');
    }

    clickOnCartLink() {
        return this.cartLink().click();
    }
}

export default new ProductPage();