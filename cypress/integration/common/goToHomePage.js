import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I am in demoblaze home page', () => {
    cy.visit('/');
});