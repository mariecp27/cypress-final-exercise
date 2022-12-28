/// <reference types="cypress" />

export function getWindownHref() {
    return cy.location().its('href');
}

export function getRandomValue(max) {
    return Math.floor(Math.random() * max);
}