/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>  


describe("Verify variables, cypress commands and jquery commands", ()=> {

    it("Navigate to specific product pages",() => {
        cy.visit("https://www.automationteststore.com/");        
        // const makeupLink = cy.get("a[href*='product/category&path']").contains('Makeup')
        // const skincareLink = cy.get("a[href*='product/category&path']").contains('Skincare')

        // makeupLink.click();
        // skincareLink.click();

        cy.get("a[href*='product/category&path']").contains('Makeup').click();
        cy.get("a[href*='product/category&path']").contains('Skincare').click();
    });

    it("Navigate to Makeup section and find makeup header text",() => {
        cy.visit("https://www.automationteststore.com/");        

        cy.get("a[href*='product/category&path']").contains('Makeup').click();      
        
        cy.xpath("//h1/span[@class='maintext']").then(($headerText)=>{
            const headerText= $headerText.text();
            cy.log("Header text: " + headerText);

            expect(headerText).is.eq('Makeup');
        })

    });

    it("Validate properties of the contact us page",() => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");     

        //Use Cypress commands and chaining
        cy.xpath("//label[@for='ContactUsFrm_first_name']").should('have.text','First name:');

        //Jquery approach
        cy.xpath("//label[@for='ContactUsFrm_first_name']").then(textFN => {
            const firstNameText = textFN.text();

            expect(firstNameText).to.contain('First name');

            //Embeded commands (Closure)
            cy.xpath("//label[@for='ContactUsFrm_first_name']").then(textNested => {
                cy.log(textNested.text())


            });



        });

      

    });
    
})
