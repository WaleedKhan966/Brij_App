/// <reference types="cypress" /> 
import data from "../../DataAccess/Data.json";
var objLogin = require('../../Functions/LoginFunction.js');

describe("Test Suites for Login Scenarios", () => {
    before(() => {
        cy.visit("/");

    })
    it("TC:01 verifying that input fields label,button should be exist in login page", () => {
       objLogin.verifyAllFieldsExistInloginForm()
    })
    it("TC: 02 Verifying that the app should not allow login with invalid credentials.", () => {
        objLogin.verifyInvalidCreadentials(data.Logindata.validEmail,data.Logindata.InValidpassword)
    })

    it("TC: 03 Verifying that the app should allow to login with valid credentials. to display the App DashBoadrd", () => {
        objLogin.verifyValidCreadentials(data.Logindata.validEmail,data.Logindata.Validpassword)
    })
})