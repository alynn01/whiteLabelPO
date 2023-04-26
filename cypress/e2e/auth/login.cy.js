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
    cy.contains("Gain access. Change your life!").should("be.visible");
  });

  it("Test that user is unable to login with correct email but wrong password", () => {
    loginPage.login(getPO.email, "Password");
    cy.contains("Gain access. Change your life!").should("be.visible");
  });

  it("Test that user is unable to login without email but correct password", () => {
    cy.get(`input[name="password"]`).type(getPO.password);
    cy.contains("Gain access. Change your life!").should("be.visible");
  });

  it("Test that user is unable to login with correct email but no password", () => {
    cy.get(`input[name="password"]`).type(getPO.email);
    cy.contains("Gain access. Change your life!").should("be.visible");
  });

  it("Test that user is unable to login without email or password", () => {
    cy.get(`[class="button-text"]`).contains("Sign in").click();
    cy.contains("Gain access. Change your life!").should("be.visible");
  });

  it("Test that user is unable to login with valid email and password", () => {
    loginPage.login(getPO.email, getPO.password);
    cy.contains("Welcome");
    cy.contains("Amah").should("be.visible");
  });
});
