/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import HomePage from '../../support/pageObjects/HomePage';
import * as genericAssertions from '../../support/generic/genericAssertions';

// Given
Given('The third imagen in the carousel is displayed', () => {
    HomePage.clickOnLeftArrowButton();
    genericAssertions.toHaveClass(HomePage.carouselImageContainer(2), 'carousel-item-right');
    genericAssertions.toNotHaveClass(HomePage.carouselImageContainer(2), 'carousel-item-right');
});

Given('The second imagen in the carousel is displayed', () => {
    HomePage.clickOnRightArrowButton();
    genericAssertions.toHaveClass(HomePage.carouselImageContainer(1), 'carousel-item-next');
    genericAssertions.toNotHaveClass(HomePage.carouselImageContainer(1), 'carousel-item-next');
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
    genericAssertions.toBeVisible(HomePage.carouselImage(0));
});

Then('The displayed image should change to the first image in the carousel', () => {
    genericAssertions.toBeVisible(HomePage.carouselImage(0));

});

Then('The displayed image should change to the second image in the carousel', () => {
    genericAssertions.toBeVisible(HomePage.carouselImage(1));
});

Then('The displayed image should change to the third image in the carousel', () => {
    genericAssertions.toBeVisible(HomePage.carouselImage(2));
});



