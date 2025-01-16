/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  


describe("Inspect store items using chain of commands", ()=> {

    it("Click on the first item searching for it as the first product of same class",() => {
        cy.visit("https://www.automationteststore.com/");
        cy.xpath("(//a[@class='prdocutname'])[1]").click()


    });
    
    it("Click on the first item using text and chain of commands",() => {
        cy.visit("https://www.automationteststore.com/");
        cy.xpath("(//a[@class='prdocutname'])").contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            cy.log("Item selected: "+itemHeaderText.text())
        })


    });

    it("Click on the first item using index",() => {
        cy.visit("https://www.automationteststore.com/");
        cy.xpath("//*[@class='fixed_wrapper']").find('.prdocutname').eq(0).click()


    });


})
