/// <reference types="Cypress" />
describe("Test date picker via webdriveruni", () => {
    beforeEach(() => { 
      cy.visit("https://www.webdriveruniversity.com/");
      cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    });

    it("Select date from the date picker", () => {
        cy.get(".input-group-addon").click();

        var date = new Date();
        date.setDate(date.getDate() + 365);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", { month: "long" });
        var futureDay = date.getDate();

        cy.log(futureYear);
        cy.log(futureMonth);
        cy.log(futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.datepicker-dropdown').find('.next').first().click();
                    selectMonthAndYear();
                } else if (!currentDate.text().includes(futureMonth)) {
                    cy.get('.datepicker-dropdown').find('.next').first().click();
                    selectMonthAndYear();
                }
            });
        }

        function selectDay() {
            cy.get('.datepicker-dropdown').find('.day').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectDay();
    });
});
/// <reference types="Cypress" />
describe("Test date picker via webdriveruni", () => {
    beforeEach(() => { 
      cy.visit("/");
      cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
    });

    it("Select date from the date picker", () => {
        cy.get(".input-group-addon").click();

        var date = new Date();
        date.setDate(date.getDate() + 10);

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", { month: "long" });
        var futureDay = date.getDate();

        cy.log(futureYear);
        cy.log(futureMonth);
        cy.log(futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.datepicker-dropdown').find('.next').first().click();
                    selectMonthAndYear();
                } else if (!currentDate.text().includes(futureMonth)) {
                    cy.get('.datepicker-dropdown').find('.next').first().click();
                    selectMonthAndYear();
                }
            });
        }

        function selectDay() {
            cy.get('.datepicker-dropdown').find('.day').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectDay();
    });
});
