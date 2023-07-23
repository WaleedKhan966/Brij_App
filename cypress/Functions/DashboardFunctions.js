/// <reference types="cypress"/>
//var locators_page = require('../DataAccess/LoginData.json');
var DashboardPage = function () 
{
  
   this.EmailInput ='input[name="email"][tabindex="1"][placeholder="you@company.com"]'
   this.ErrorMessage= "div.fly-form-error__message"
   this.PasswordInput= 'input[name="password"][type="password"][tabindex="1"][autocomplete="password"]'
   this.LoginButton ='button.fly-btn--primary[type="submit"]'
   //this.ErrorMessage ='[data-test="error"]'
   this.ErrorMessage = 'fly-form-error__message'
   this.GoogleLogin= 'button.fly-btn--outline.google-oauth-button--light[type="button"]'
   this.Logo='.signup-logo__image'
   this.SignUpTitle = '.signup-title'
   this.AppLoader= '.loading-gears'
   this.alertMessage = '.cio-alert-banners > .fly-banner > .fly-banner__inner-container > .fly-banner__content > p'
   this.welcomeDashboard = '.setup-guide__header'
   this.useDifferentEmail= '.button-link'
   this.DashboardTab = '#ember13'
   this.PeopleTab = '#ember31'
   this.AddPeopledropdDownClick = '#ember81'
   this.AddPeopleOptionbutton ='Add a Person'
   this.PersonID = '#attribute-value-id'
   this.PersonEmail = '#attribute-value-email'
   this.saveChanges = 'span > .fly-btn'
   this.toaster = '.fly-banner__content > p'
   this.PageDisplayEmail = '#ember105'
   this.emailFeildValue = ':nth-child(3) > :nth-child(2) > .flex-1 > .item-value > .cio-attribute-collection__value'
   this.IdFieldValue = ':nth-child(3) > .flex-1 > .item-value > .cio-attribute-collection__value'
     this.EditPerson = '#ember141'
     this.attributeTabButton = '#ember104'
     this.SegmentTab = '#ember33'
    this.verifyValidCreadentials = function (Validemail,validPass) 
    {
      cy.get(this.EmailInput,{timeout:60000}).should('be.visible').clear().type(Validemail)
      cy.get(this.LoginButton).should('be.visible').click({force:true})
      cy.get(this.PasswordInput).should('be.visible').clear().type(validPass)
      cy.get(this.LoginButton).should('be.visible').click({force:true})
      cy.get(this.DashboardTab,{timeout:60000}).should('contain','Dashboard')
    }
    this.verifyPersonCreating = function (ID,Email) 
    {
      cy.get(this.PeopleTab,{timeout:60000}).should('contain','People').click()
      cy.get(this.AddPeopledropdDownClick).click()
      cy.contains(this.AddPeopleOptionbutton).click()
      cy.get(this.PersonID).should('be.visible').type(ID)
      cy.get(this.PersonEmail).should('be.visible').type(Email)
      cy.get(this.saveChanges).should('be.visible').and('contain','Save Changes').click()
      cy.get(this.toaster,{timeout:60000}).should('contain','Creating your customer')


      cy.get(this.emailFeildValue,{timeout:60000}).then(($Email) => {
         const buttonText = $Email.text().trim();
         expect(buttonText).to.equal(Email);
       });
      cy.get(this.IdFieldValue,{timeout:60000}).then(($ID) => {
         const buttonText = $ID.text().trim();
         expect(buttonText).to.equal(ID);
       });
    }
    this.verifyPersonUpdating = function (UpdateID,UpdateEmail,AddEmail) 
    {
      cy.get(this.PeopleTab,{timeout:60000}).should('contain','People').click()
     cy.contains(AddEmail).then(($AdEmail) => {
      const buttonText = $AdEmail.text().trim();
      expect(buttonText).to.equal(AddEmail)
       $AdEmail[0].click({force:true})
    });
    cy.contains('View all',{timeout:60000}).click()
     cy.contains('Edit Attributes',{timeout:60000}).should('contain','Edit Attributes').click()
     cy.get(this.PersonEmail).should('be.visible').clear().type(UpdateEmail+'@gmail.com')
     cy.get(this.PersonID).should('be.visible').clear().type(UpdateID)
     cy.get(this.saveChanges).should('be.visible').and('contain','Save Changes').click()
    
     cy.get(this.toaster,{timeout:60000}).should('contain','Updating your customer…')
    cy.wait(5000)
     cy.contains('Options',{timeout:60000}).click()
     cy.get(':nth-child(5) > .fly-action-dropdown__control').should('contain','Delete forever').click()
     cy.get('#people-delete-count').type('1')
     cy.get('.is-danger').click({ multiple: true })
     cy.get(this.toaster,{timeout:60000}).should('contain','The selected person will be deleted soon')
    }
    this.verifyCreateUpdateDeleteSegment = function (SegmentName,SegmentDesc) 
    {
    cy.get(this.SegmentTab).should('contain','Segments').click()
    cy.contains('Create Segment').click()
    cy.get('.fly-input > .fly-form-control').type(SegmentName)
    cy.get('#description').type(SegmentDesc)
    cy.get(':nth-child(2) > .fly-card__section > .fly-card__section-body > .text-center > span > .fly-btn').should('contain','Create Manual Segment').click()
    cy.get('.fly-page-header__primary > .jc-start > .inline-edit__button > .fly-flex > .whitespace-nowrap > :nth-child(1) > .inline-block > .fly-svg-icon__icon').click()
    cy.get('.fly-form-control').clear().type('Update Test Segment')
    cy.get('.fly-flex > .fly-btn--primary').click()
    cy.contains('Options',{timeout:60000}).click()
    cy.wait(1000)
    cy.contains('Delete Segment',{timeout:60000}).click()
    cy.wait(1000)
    cy.get('.is-danger').should('contain','Yes, delete segment').click({ multiple: true })
    }
}

module.exports = new DashboardPage();  