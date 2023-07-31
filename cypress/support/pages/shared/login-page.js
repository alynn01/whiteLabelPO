import { sharedData } from "../../../fixtures/index";

export class LoginPage {
  emailField = () => cy.get(`input[name="email"]`);
  passwordField = () => cy.get(`input[name="password"]`);
  loginButton = () => cy.get(`[class="button-text"]`).contains("Sign In");

  accessLoginModal() {
    cy.visit(sharedData.paths.login);
    cy.contains("Gain Access");
  }

  clickLogin = () => {
    return this.loginButton().click({ force: true });
  };

  login = (email, password) => {
    this.emailField().type(email);
    this.passwordField().type(password);
    return this.clickLogin();
  };
}
