export class CreateUserPage {
  emailField = () => cy.get('input[name="email"]');
  passwordField = () => cy.get('input[name="password"]');
  loginButton = () => cy.get(`[class*="button-text"]`).contains("Sign in");
  welcomeMessage = () => cy.contains("Welcome back, ");
  endUserMenuItem = () =>
    cy.get('[href="/dashboard/users"] > span').contains("End users");
  createUserDropdown = () =>
    cy.get(`[class*="placeholder"]`).contains("Create new user");
  openCreateUserPopup = () => cy.contains("Single user creation");
  firstNameField = () => cy.get('input[name="firstName"]');
  lastNameField = () => cy.get('input[name="lastName"]');
  emailEntryField = () => cy.get('input[name="emailAddress"]');
  seearchNig = () => cy.get('input[id="dropdownchild"]');
  selectNigeria = () => cy.contains("Nigeria");
  phoneNumber = () => cy.get('input[name="phoneNumber"]');
  gender = () => cy.get(`[class*="placeholder"]`).contains("Gender");
  male = () => cy.contains("Male");
  selectProgram = () =>
    cy.get(`[class*="placeholder"]`).contains("Select program");
  chooseProgram = () => cy.contains("Amas Program");
  createUserButton = () => cy.get(".button-text").contains("Create user");

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
    this.seearchNig().type("Nigeria");
    this.selectNigeria().click();
    this.phoneNumber().type("9072609472");
    this.gender().click({ force: true });
    this.male().click();
    this.selectProgram().click({ force: true });
    this.chooseProgram().click();
    this.createUserButton().should("be.visible");
  }
}
