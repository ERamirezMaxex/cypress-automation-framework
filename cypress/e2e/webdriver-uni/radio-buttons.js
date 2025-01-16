/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  


describe("Verify radio buttons via WebdriverUni", ()=> {
    beforeEach(() => { 
        cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})
      });


    it("Check and validate individual ratio buttons",() => {
        cy.get("#radio-buttons").find("[type='radio']").first().check().should('be.checked');
        cy.get("#radio-buttons").find("[type='radio']").eq(1).check().should('be.checked');

    });

    it("Validate the state of specific radio buttons",() => {

        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='pumpkin']").should('be.checked')
        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
        cy.get("[value='pumpkin']").should('not.be.checked')
        cy.get("[value='cabbage']").should('be.disabled')

    });

 


})


