// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("navigate_to_HomePage", () => {
    cy.visit("/")
});

Cypress.Commands.add("navigate_to_CheckboxPage", () => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html")
});

Cypress.Commands.add("selectProduct", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text().includes(productName)) {
            cy.wrap($el).click()
        }
    });
});

Cypress.Commands.add("addProduct", productName => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
        if($el.text()===productName) {
            cy.log(productName)
            cy.get(".productcart").eq(index).click()
        }
    });
});

Cypress.Commands.add("webDriverUni_ContactForm_Submission", (firstName,lastName,email,body,$selector,textToLocate) => {
    cy.get('[name="first_name"]').type(firstName);
    cy.get('[name="last_name"]').type(lastName);
    cy.get('[name="email"]').type(email);
    cy.get('textarea.feedback-input').type(body);

    cy.get('[type="submit"]').click();
    cy.get($selector).contains(textToLocate);
});

//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })