/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  

describe("Verify autocomplete dropdown list via webdriveruni", ()=> {
    it("Select specific product via autocomplete list", () => {
        cy.visit("/");
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#myInput').type('A');
        cy.get('#myInputautocomplete-list > *').each(($element, index, $list) => {
            const currentProduct = $element.text();
            const productToSelect = 'Avocado'; // Correct the spelling

            if (currentProduct === productToSelect) {
                cy.get($element).click();
                cy.get('#submit-button').click();
                cy.url().should('contain', 'Avocado');
            }
        }).then(() => {
            cy.get('#myInput').clear();
            cy.get('#myInput').type('G');
            cy.get('#myInputautocomplete-list > *').each(($element, index, $list) => {
                const currentProduct = $element.text();
                const productToSelect = 'Grapes';

                if (currentProduct === productToSelect) {
                    cy.get($element).click();
                    cy.get('#submit-button').click();
                    cy.url().should('contain', 'Grapes');
                }
            }); // Close the second each loop properly
        });
    });
});
