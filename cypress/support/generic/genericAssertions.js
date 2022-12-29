/// <reference types="cypress" />

export function toHaveClass(element, className) {
    return element.should('have.class', className);
}

export function toNotHaveClass(element, className) {
    return element.should('not.have.class', className);
}

export function toBeVisible(element) {
    return element.should('be.visible');
}

export function toContainText(element, text) {
    return element.should('contain', text);
}

export function toBeEqual(element, text) {
    return element.should('eq', text);
}