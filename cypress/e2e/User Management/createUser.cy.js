import { LoginPage, CreateUserPage } from "../../support/pages";
import { getProgramOwner } from "../../fixtures/index.js";

const loginPage = new LoginPage();
const getPO = getProgramOwner();
const newUserPage = new CreateUserPage();

describe("Create User", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.login(getPO.email, getPO.password);
  });

  it("Test that user is able to invite a new user to the organization", () => {
    newUserPage.accessEndUserPage();
    newUserPage.createEndUser();
    newUserPage.enterDetails(getPO.email);
  });

  it("Test that user is unable to invite a new user to the organization with invalid email", () => {
    newUserPage.accessEndUserPage();
    newUserPage.createEndUser();
    newUserPage.enterDetails("hamaz@qa.");
    cy.get(".button-text").contains("Create user").click();
    cy.contains("emailAddress must be a valid email");
  });

  it("Test that user is unable to invite a new user to the organization without details", () => {
    newUserPage.accessEndUserPage();
    newUserPage.createEndUser();
    cy.get(".button-text").contains("Create user").click();
    cy.contains("Email is required");
    cy.contains("Phone number is required");
    cy.contains("First name is required");
    cy.contains("Last name is required");
    cy.contains("Gender is required");
    cy.contains("Program is required");
  });
});
