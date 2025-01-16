/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  


describe("Iterate over elements", ()=> {
    beforeEach(() => { 
        cy.visit("https://www.automationteststore.com/");
        cy.get("a[href*='product/category&path']").contains('Hair Care').click();
      });

    it("Click on the first item searching for it as the first product of same class",() => {

        cy.get('.fixed_wrapper .prdocutname').each(($el,index, $list) =>{

            cy.log("Index: "+ index + " : " + $el.text());

        });


    });

    it("Add a specific product to the basket",() => {
        cy.selectProduct('Eau Parfumee au The Vert Shampoo');


    });

    it("Add a specific product to the basket 2",() => {

        cy.selectProduct('Pantene Pro-V Conditioner, Classic Care');

        

    });

})