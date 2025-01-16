import HomePage_PO from "../../support/pageObjects/automation-test-store/HomePage_PO.js"
import HairCare_PO from "../../support/pageObjects/automation-test-store/HairCare_PO.js"
/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  


describe("Add multiple items to basket", ()=> {
    const homepage = new HomePage_PO();
    const hairCare = new HomePage_PO();

    before(() => { 
        cy.fixture("product").then((product) =>{
            globalThis.product=product
        })
      });

    beforeEach(() => { 
        homepage.visitHomePage();
        homepage.clickOn_HairCare_Link();

      });

    it("add specific items to basket",() => {
        hairCare.clickOn_HairCare_Link();

 
    });


})