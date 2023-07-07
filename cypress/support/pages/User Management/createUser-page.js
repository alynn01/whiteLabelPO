import { times } from 'lodash'

export class CreateUserPage {
  emailField = () => cy.get('input[name="email"]');
  passwordField = () => cy.get('input[name="password"]');
  loginButton = () => cy.get(`[class*="button-text"]`).contains("Sign in");
  welcomeMessage = () => cy.contains("Welcome back, ");
  endUserMenuItem = () =>
    cy.get('[href="/dashboard/users"] > span').contains("End Users");
  createUserDropdown = () =>
    cy.get(`[class="button-text"]`).contains("Create new user");
  openCreateUserPopup = () => cy.get('.sc-fIhvWL > :nth-child(1)').contains("Create new user");
  firstNameField = () => cy.get('input[name="firstName"]');
  lastNameField = () => cy.get('input[name="lastName"]');
  emailEntryField = () => cy.get('input[name="emailAddress"]');
  clickIntDropdown = () => cy.get('[class="selected-flag"]');
  searchNigeria = () => cy.get(`[class="search-box"]`);
  phoneNumber = () => cy.get('input[type="tel"]');
  gender = () => cy.get(`[class*="placeholder"]`).contains("Gender");
  middlename = () => cy.get('input[name="middleName"]');
  male = () => cy.contains("Male");
  selectProgram = () =>
    cy.get(`input[placeholder="Select program"]`);
  chooseProgram = () => cy.get('.sc-kMjNwy').contains("Verney");
  createUserButton = () => cy.get(`[class="button-text"]`).contains("Create user");
  countryField = () => cy.get(`input[placeholder="Select country"]`);
  calenderField = () => cy.get(`input[placeholder="YYYY-MM-DD"]`);
  clickDefaultYear = () => cy.get(`[class="react-datepicker__year-read-view--selected-year"]`).contains("2007");
  calendarScroll = () => cy.get('.react-datepicker__year-dropdown > :nth-child(13)');
  select1994 = () => cy.get('.react-datepicker__year-dropdown > :nth-child(12)').contains("1994");
  select08 = () => cy.get('.react-datepicker__day--008');


  accessPOPortal(email, password, url) {
    cy.visit();
    this.emailField().type(email);
    this.passwordField().type(password);
    this.loginButton().click({ force: true });
    this.welcomeMessage().should("be.visible");
  }

  accessEndUserPage() {
    this.endUserMenuItem().click();
  }

  createEndUser() {
    this.createUserDropdown().click({ force: true });
    this.openCreateUserPopup().click();
  }

  enterDetails(email) {
    this.firstNameField().type("Amayindi");
    this.lastNameField().type("Lynn");
    this.emailEntryField().type(email);
    this.clickIntDropdown().click();
    this.searchNigeria().type("Nigeria");
    cy.contains("Nigeria").click({force:true})
    this.phoneNumber().type("9072609472");
    this.middlename().type("Mohammed")
    this.gender().click({ force: true });
    this.male().click();
    this.selectProgram().type("Verney");
    this.chooseProgram().click();
    this.countryField().type("Nigeria")
    cy.contains('Nigeria').click({force:true});
    this.calenderField().click({force:true});
    this.clickDefaultYear().click({force:true});
    times(8, () => {
      this.calendarScroll().click()});
    this.select1994().click({force:true});
    this.select08().click({force:true})
    this.createUserButton().should("be.visible");
  }
}
