/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  

describe("Test mouse actions via webdriveruni", ()=> {
    it("Scroll elements into view", () => {
        cy.visit("/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });

        cy.get('#draggable').trigger('mousedown',{which:1})

        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{ force: true })

    });

    it("Perform a double mosue click", () => {
        cy.visit("/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });

        cy.get('#double-click').trigger('dblclick')


    });

    it("Perform hold down click and validate color", () => {
        cy.visit("/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });

        cy.get('#click-box').trigger('mousedown',{which:1}).should('have.css', 'background-color', 'rgb(0, 255, 0)')


    });
});
