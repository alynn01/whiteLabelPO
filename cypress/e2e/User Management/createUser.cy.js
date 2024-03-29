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

  it("Test that user is able to complete the form", () => {
    newUserPage.accessEndUserPage();
    newUserPage.createEndUser();
    newUserPage.enterDetails(getPO.email);
  });

  it("Test that user is unable to invite a new user to the organization with invalid email", () => {
    newUserPage.accessEndUserPage();
    newUserPage.createEndUser();
    newUserPage.enterDetails("hamaz@qa.");
    cy.get(".button-text").contains("Create User").click();
    cy.contains("Input must be a valid email");
  });

  it("Test that user is unable to invite a new user to the organization without details", () => {
    newUserPage.accessEndUserPage();
    newUserPage.createEndUser();
    cy.get(".button-text").contains("Create User").click();
    cy.contains("Email is required");
    cy.contains("Phone is required");
    cy.contains("First name is required");
    cy.contains("Last name is required");
    cy.contains("Gender is required");
    cy.contains("Program is required");
    cy.contains("Date of birth is required");
    cy.contains("Country is required");
  });

  it("Test that user is unable to invite a new user to the organization with thesame email address", () => {
    newUserPage.accessEndUserPage();
    newUserPage.createEndUser();
    newUserPage.enterDetails(getPO.email);
    cy.get(".button-text").contains("Create User").click();
    cy.contains("Username 'autotester@qa.team' is already taken.").should("be.visible")
  });

  it("Test that the user is able to sort the list of users using filters", () => {
    newUserPage.accessEndUserPage();
    newUserPage.sortUserListByProgram();
    newUserPage.sortUserListByRegion();
    newUserPage.sortUserListByCountry();
  })

});
