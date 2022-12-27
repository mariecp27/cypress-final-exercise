/// <reference types="cypress" />

const pageLocators = {
    carouselImages: '.d-block',
    rightArrowButton: '.carousel-control-next',
    leftArrowButton: '.carousel-control-prev'
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

    // Actions
    clickOnRightArrowButton() {
        return this.rightArrowButton().click();
    }

    clickOnLeftArrowButton() {
        return this.leftArrowButton().click();
    }
}

export default new HomePage();