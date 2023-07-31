import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const getPO = getProgramOwner();

describe("Login Test", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
  });

  it("Test that user is unable to login with wrong email but correct password", () => {
    loginPage.login("damiuser001@yop", getPO.password);
    cy.contains("Gain Access. Change your life").should("be.visible");
    cy.contains("Input must be a valid email").should("be.visible")
  });

  it("Test that user is unable to login with correct email but wrong password", () => {
    loginPage.login(getPO.email, "Password");
    cy.contains("Gain Access. Change your life").should("be.visible");
    cy.get(`.Toastify__toast-body>div:last-child`, { timeout: 5000 }).should('contain', 'Invalid email or password');
  });

  it("Test that user is unable to login without email but correct password", () => {
    cy.get(`input[name="password"]`).type(getPO.password);
    cy.contains("Gain Access. Change your life").should("be.visible");
  });

  it("Test that user is unable to login with correct email but no password", () => {
    cy.get(`input[name="password"]`).type(getPO.email);
    cy.contains("Gain Access. Change your life").should("be.visible");
  });

  it("Test that user is unable to login without email or password", () => {
    cy.get(`[class="button-text"]`).contains("Sign In").click();
    cy.contains("Email is a required field").should("be.visible");
    cy.contains("Password is a required field").should("be.visible");
  });

  it("Test that user is unable to login with valid email and password", () => {
    loginPage.login(getPO.email, getPO.password);
    cy.contains("Welcome");
    cy.contains("Auto").should("be.visible");
  });
});