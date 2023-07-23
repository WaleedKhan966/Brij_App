// ***********************************************
var objLogin = require('../Functions/LoginFunction.js');
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
//
//
import 'cypress-file-upload';
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', (Email, password) => {
    cy.session([Email, password], () => {
        cy.visit('https://staging.aurorasw.com.au/#/sign-in');
        cy.get(':nth-child(1) > .fs-6').should('exist').should('be.visible').should('have.text','Username')
        cy.wait(1000)
        cy.get(':nth-child(2) > .fs-6').should('exist').should('be.visible').should('have.text','Password')
        cy.wait(1000)
        cy.get('input[class="el-input__inner"]').eq(0).should('exist').type('ttest') // User name field
        cy.wait(1000)
        cy.get('input[class="el-input__inner"]').eq(1).should('exist').type('X7kWzdbtS5LenJ') // Password field
        cy.wait(1000)
        cy.get('#kt_sign_in_submit').should('exist').should('have.text',' Log In  Please wait... ').click()
        cy.get('#kt_aside_menu > :nth-child(2) > .menu-link',{timeout:60000}).should('be.visible')
    })
  })