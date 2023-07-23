/// <reference types="cypress" /> 
import data from "../../DataAccess/Data.json";
var objLogin = require('../../Functions/LoginFunction.js');

describe("Test Suites for FORgot Scenarios", () => {
    before(() => {
        cy.visit("/");

    })
    it("TC:01 verifying Forgot button", () => {
      cy.xpath("//span[text()='Forgot Password']").should('exist').click({force:true})
    })
    it("TC: 02 Verifying that the app should not allow login with invalid credentials.", () => {
        cy.xpath("//h1[text()='Forgot Password']").should('contain','Forgot Password')
        cy.xpath("//span[text()='Send Password Reset Email']").should('exist')
    })
})