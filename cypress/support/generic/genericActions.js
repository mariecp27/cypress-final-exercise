/// <reference types="cypress" />

export function getWindownHref() {
    return cy.location().its('href');
}

export function getElement(element) {
    return cy.get(element);
}

export function convertToCypressElement(element) {
    return cy.wrap(element);
}