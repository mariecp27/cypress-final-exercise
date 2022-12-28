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
}

export default new HomePage();