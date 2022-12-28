/// <reference types="cypress" />

const pageLocators = {
    productTitle: '.name'
}

class ProductPage {
    // Web elemets
    productTitle() {
        return cy.get(pageLocators.productTitle);
    }

    // Actions
    getProductTitle() {
        return this.productTitle().invoke('text');
    }
}

export default new ProductPage();