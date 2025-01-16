/// <reference types="Cypress"/>

describe("Cypress web security", ()=> {

    it("Validate visiting 2 different domains",() => {
        cy.visit("https://www.automationteststore.com/");
        cy.visit("https://www.google.com/");
        



    });

    it("Validate visiting a different domain by clicking on link",() => {
        //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr','target').click({force:true})

    });



})
