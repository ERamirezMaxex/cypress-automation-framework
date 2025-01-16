/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  


describe("Interact wwith dropdown list via webdriver uni", ()=> {

    it("select specific values via select dropdown list",() => {
        cy.visit("/")
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click({force:true})

        cy.get("#dropdowm-menu-1").as('firstDropdown')
        cy.get("#dropdowm-menu-2").as('secondDropdown')
        cy.get("#dropdowm-menu-3").as('thirdDropdown')


        cy.get('@firstDropdown').select('c#').should('have.value','c#')  //select based on value
        cy.get('@secondDropdown').select(2).should('have.value','testng')   //select based on id
        cy.get('@thirdDropdown').select('JQuery').should('have.value','jquery')   //select based on text


        

   

    });

})


