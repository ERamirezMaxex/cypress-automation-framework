import HomePage_PO from "../../support/pageObjects/web-driver-uni/HomePage_PO"
import Contact_Us_PO from "../../support/pageObjects/web-driver-uni/Contact_Us_PO"
// <reference types="Cypress"/>

describe("Test Contact Us Page via WebdriverUni", ()=> {
    const contactUs = new Contact_Us_PO();
    const homepage = new HomePage_PO();

    before(() => { 
        cy.fixture('example').then(function(data){
            global.data= data
            
        })
    });

    beforeEach(() => { 
        homepage.visitHomePage();
        homepage.clickOnContactUsButton();
    });


    it("Should be able to submit a successfull submission via contact us form",() => {
        cy.document().should('have.prop','charset').and('eq','UTF-8')
        cy.url().should('include','/Contact-Us/contactus.html')
        cy.title().should('contain','WebDriver')

        contactUs.contactForm_Submission(Cypress.env("firstName"),data.lastName,data.email,data.body,'h1','Thank You');
    });

    it("Should NOT be able to submit a successfull submission via contact us form as all fields are required",() => {
        contactUs.contactForm_Submission(Cypress.env("firstName"),data.lastName," ",data.body,'body','Error');
    });



})
