/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/pages/HomePage";

// Given
Given('The third imagen in the carousel is displayed', () => {
    HomePage.clickOnLeftArrowButton();
    HomePage.carouselImageContainer(2).should('have.class', 'carousel-item-right');
    HomePage.carouselImageContainer(2).should('not.have.class', 'carousel-item-right');
});

Given('The second imagen in the carousel is displayed', () => {
    HomePage.clickOnRightArrowButton();
    HomePage.carouselImageContainer(1).should('have.class', 'carousel-item-next');
    HomePage.carouselImageContainer(1).should('not.have.class', 'carousel-item-next');
});

// When
When('I click on the right arrow button', () => {
    HomePage.clickOnRightArrowButton();
});

When('I click on the left arrow button', () => {
    HomePage.clickOnLeftArrowButton();
});

// Then
Then('The first image of the carousel should be displayed', () => {
    HomePage.carouselImage(0).should('be.visible');
});

Then('The displayed image should change to the first image in the carousel', () => {
    HomePage.carouselImage(0).should('be.visible');
});

Then('The displayed image should change to the second image in the carousel', () => {
    HomePage.carouselImage(1).should('be.visible');
});

Then('The displayed image should change to the third image in the carousel', () => {
    HomePage.carouselImage(2).should('be.visible');
});



