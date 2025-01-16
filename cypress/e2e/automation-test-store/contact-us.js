/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  


describe("Test Contact Us Page via Automation Test Store", ()=> {
    before(() => { 
        cy.fixture("userDetails").as("user");
    });


    it("Should be able to submit a successfull submission via contact us form",() => {
        cy.visit("https://www.automationteststore.com/");
        cy.xpath('//a[text()="Contact Us"]').click().then(function(linkHeaderText){
            cy.log("Link text: "+ linkHeaderText.text())
        })
        
        cy.get('@user').then((user)=>{
            cy.xpath('//*[@id="ContactUsFrm_first_name"]').type(user.firstName)
            cy.xpath('//*[@id="ContactUsFrm_email"]').type(user.email)
        })

        cy.xpath('//*[@id="ContactUsFrm_enquiry"]').type("enquiry text test")
        cy.xpath('//*[@id="ContactUsFrm"]//button[@type="submit"]').click()
        cy.xpath('//p[contains(text(),"successfully sent")]').should('contain.text',"successfully")
    });


})
