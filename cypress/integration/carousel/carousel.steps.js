/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/HomePage";

Then('The first image of the carousel should be displayed', () => {
    HomePage.carouselImage(0).should('be.visible');
});

When('I click on the right arrow button', () => {
    HomePage.clickOnRightArrowButton();
});

Then('The displayed image should change to the second image in the carousel', () => {
    HomePage.carouselImage(1).should('be.visible');
});

Given('The second imagen in the carousel is displayed', () => {
    HomePage.clickOnRightArrowButton();
    HomePage.carouselImageContainer(1).should('have.class', 'carousel-item-next');
    HomePage.carouselImageContainer(1).should('not.have.class', 'carousel-item-next');
});

Then('The displayed image should change to the third image in the carousel', () => {
    HomePage.carouselImage(2).should('be.visible');
});