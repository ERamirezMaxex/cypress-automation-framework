/// <reference types="Cypress" />
describe("Handling data via webdriveruni", () => {
    beforeEach(() => { 
      cy.visit("/");
      cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });
    
    it("calculate and assert the total age of all users", () => {
        var userDetails = []
        var totalAge=0


        //table extract of ages
        cy.get('#thumbnail-1 td').each(($element,index,$list) => {
            userDetails[index] = $element.text();
        }).then(() =>{
            var i
            for (i=1; i < userDetails.length;i++){
                if(!isNaN(userDetails[i])){
                    totalAge+=Number(userDetails[i]);
                }
                
            }
            
        }).then(() =>{
            expect(totalAge).eq(322)
        })
        
    });

    it("Calculate and assert the age of a given user based on last name", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes("Woods")) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAge = age.text();
                    expect(userAge).to.equal("80");
                })
            }
        })
    });   


});
