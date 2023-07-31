import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, CreateAdminPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const createAdmin = new CreateAdminPage();
const getPO = getProgramOwner();
let validEmail = "robertoacrl@yopmail.com";
let invalidEmail = "robertoacrl@yopmail";

describe("Create Admin", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.login(getPO.email, getPO.password);
  });

  it("Test that user is unable to create program without required details", () => {
     createAdmin.accessAdminPage();
     createAdmin.createAdminUser()
     cy.get(`[class="button-text"]`).contains("Create Administrator").click();
     cy.contains("First name is required").should("be.visible")
     cy.contains("Email is required").should("be.visible")
     cy.contains("Last name is required").should("be.visible")
     cy.contains("Phone is required").should("be.visible")
     cy.contains("Role is required").should("be.visible")
  });

 it("Test that user is able to complete the form successfully", () => {
      createAdmin.accessAdminPage();
      createAdmin.createAdminUser();
      createAdmin.completeEntryFields(validEmail);
   });

   it("Test that user is unable to complete the form successfully with invalid email", () => {
    createAdmin.accessAdminPage();
    createAdmin.createAdminUser();
    createAdmin.completeEntryFields(invalidEmail);
    cy.get(`[class="button-text"]`).contains("Create Administrator").click();
    cy.contains("Email must be a valid email").should("be.visible")
 });

 it("Test that user is unable to submit the form with email address of an existing user", () => {
    createAdmin.accessAdminPage();
    createAdmin.createAdminUser();
    createAdmin.completeEntryFields(validEmail);
    cy.get(`[class="button-text"]`).contains("Create Administrator").click();
    cy.contains("Username 'robertoacrl@yopmail.com' is already taken.").should("be.visible")
 });
});