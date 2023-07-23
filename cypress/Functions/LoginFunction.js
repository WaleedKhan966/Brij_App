/// <reference types="cypress"/>
//var locators_page = require('../DataAccess/LoginData.json');

var LoginPage = function () 
{
  this.heading = "//h1[text()='Sign In']"
   this.EmailInput ="input[formcontrolname='contactEmail']"
   this.ErrorMessage= "//div[text()='Incorrect password']"
   this.PasswordInput= "input[formcontrolname='password']"
   this.LoginButton ='//span[text()="Sign In"]'
   this.GoogleLogin= 'button.fly-btn--outline.google-oauth-button--light[type="button"]'
   this.Logo='.signup-logo__image'
   this.SignUpTitle = '.signup-title'
   this.AppLoader= '.loading-gears'
   this.alertMessage = '.cio-alert-banners > .fly-banner > .fly-banner__inner-container > .fly-banner__content > p'
   this.welcomeDashboard = '.setup-guide__header'
   this.useDifferentEmail= '.button-link'
   this.DashboardTab = "//h1[@class='ng-star-inserted']"
   this.verifyAllFieldsExistInloginForm = function () 
   {
    cy.url().should("include", "/login")
      cy.xpath(this.heading,{timeout:10000}).should('exist')
      cy.get(this.EmailInput).should('exist')
      cy.get(this.PasswordInput).should('exist')
   }
    this.verifyInvalidCreadentials = function (Validemail,InvalidPass) 
    {
      cy.get(this.EmailInput).should('be.visible').type(Validemail,{force: true})
      cy.get(this.PasswordInput).should('be.visible').type(InvalidPass,{force: true})
      cy.xpath(this.LoginButton).should('be.visible').click({force:true})
      cy.xpath(this.ErrorMessage,{timeout:60000}).should('be.exist')
      cy.get(this.EmailInput).clear({force: true})
      cy.get(this.PasswordInput).clear({force: true})
    }
    this.verifyValidCreadentials = function (Validemail,validPass) 
    {
      //cy.get(this.useDifferentEmail).click({ multiple: true })
      cy.get(this.EmailInput).type(Validemail,{force:true})
      cy.get(this.PasswordInput).type(validPass,{force:true})
      cy.xpath(this.LoginButton).should('be.visible').click({force:true})
      cy.xpath(this.DashboardTab,{timeout:60000}).should('contain','Analytics')
      cy.xpath("//img[@src='assets/images/BRIJ LOGO Black.png']").click({force:true})
      cy.xpath("//div[text()='Logout']").click({force:true})
    }
    this.verifyAllFieldsExistInCreateForm = function () 
    {
     cy.url().should("include", "/login")
     cy.xpath("//span[text()='Sign Up']").should('exist').click({force:true})
     cy.xpath("//input[contains(@class,'p-inputtext p-component')]").should('be.visible')
     cy.xpath("//input[@formcontrolname='confirmPassword']").should('be.visible')
    }
    this.enterCreadentials = function (Validemail,validPass) 
    {
      //cy.get(this.useDifferentEmail).click({ multiple: true })
      cy.xpath("//input[contains(@class,'p-inputtext p-component')]").eq(0).type(Validemail,{force:true})
         cy.xpath("//input[@formcontrolname='password']").type("Test2345",{force: true})
         cy.xpath("//span[text()='Create Account']").should('contain','Create Account')
    }
}

module.exports = new LoginPage();  