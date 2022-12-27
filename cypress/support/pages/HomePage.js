/// <reference types="cypress" />

const pageLocators = {
    carouselImages: '.d-block',
    rightArrowButton: '.carousel-control-next'

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

    // Actions
    clickOnRightArrowButton() {
        return this.rightArrowButton().click();
    }
}

export default new HomePage();