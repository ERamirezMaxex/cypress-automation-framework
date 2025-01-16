/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  


describe("Verify checkboxes via WebdriverUni", ()=> {
    beforeEach(() => { 
        cy.navigate_to_CheckboxPage();
      });

    it("Check and validate checkboxes",() => {
        cy.xpath("//input[@value='option-1']").as('option1')

        cy.get('@option1').check().should('be.checked');

    });

    it("Uncheck and validate checkboxes",() => {
        cy.xpath("//input[@value='option-3']").as('option3')

        cy.get('@option3').uncheck().should('not.be.checked');
    });


    it("Check multiple checkboxes",() => {

        cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked')


    });


})
