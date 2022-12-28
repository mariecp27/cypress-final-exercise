/// <reference types="cypress" />

const pageLocators = {
    carouselImages: '.d-block',
    rightArrowButton: '.carousel-control-next',
    leftArrowButton: '.carousel-control-prev',
    navLinks: '.nav-link',
    contactModalTitle: '#exampleModalLabel',
    aboutUsModalTitle: '#videoModalLabel',
    loginModalTitle: '#logInModalLabel',
    signUpModalTitle: '#signInModalLabel',
    categories: '.list-group-item[href="#"]'
}

class HomePage {
    // Web elemets
    carouselImage(index) {
        return cy.get(pageLocators.carouselImages).eq(index);
    }

    carouselImageContainer(index) {
        return this.carouselImage(index).parents();
    }

    rightArrowButton() {
        return cy.get(pageLocators.rightArrowButton);
    }

    leftArrowButton() {
        return cy.get(pageLocators.leftArrowButton);
    }

    navLinks(text) {
        return cy.contains(pageLocators.navLinks, text);
    }

    contactModalTitle() {
        return cy.get(pageLocators.contactModalTitle);
    }

    aboutUsModalTitle() {
        return cy.get(pageLocators.aboutUsModalTitle);
    }

    loginModalTitle() {
        return cy.get(pageLocators.loginModalTitle);
    }

    signUpModalTitle() {
        return cy.get(pageLocators.signUpModalTitle);
    }

    category(index) {
        return cy.get(pageLocators.categories).eq(index);
    }

    // Actions
    clickOnRightArrowButton() {
        return this.rightArrowButton().click();
    }

    clickOnLeftArrowButton() {
        return this.leftArrowButton().click();
    }

    clickOnNavLink(text) {
        return this.navLinks(text).click();
    }

    clickOnCategoty(index) {
        cy.fixture('services').as('productsUrl');
        cy.get("@productsUrl").then(productsUrl => {
            cy.intercept('POST', productsUrl.categories).as('productsResponse');
        });
        return this.category(index).click();
    }

    getCategoriesResponse() {
        let desiredProducts = [];
        cy.wait('@productsResponse')
            .then( response => {
                desiredProducts =  response.response.body.Items;
            })
            .then( () => {
                cy.wrap(desiredProducts).as('desiredProducts');
            });
    }
}

export default new HomePage();