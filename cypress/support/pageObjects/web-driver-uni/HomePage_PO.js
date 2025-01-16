class HomePage_PO {
    visitHomePage(){
        cy.visit(Cypress.env("webDriverUni_URL"));
    }

    clickOnContactUsButton(){
        cy.visit(Cypress.env("webDriverUni_URL") +"/Contact-Us/contactus.html")
    }

}
export default HomePage_PO;