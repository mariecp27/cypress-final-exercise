/// <reference types="cypress" />

export function getWindownHref() {
    return cy.location().its('href');
}