/// <reference types="Cypress" />
describe("Test file upload via webdriveruni", () => {
    beforeEach(() => { 
      cy.visit("/");
      cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    });

    it("Upload a file", () => {
        cy.get('#myFile').selectFile('cypress/fixtures/sampleFile.txt');
        cy.get('#submit-button').click();

    });

    it("Upload NO file", () => {
        cy.get('#submit-button').click();

    });
});
