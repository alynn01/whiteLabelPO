import {
  LoginPage,
  DeactivateUserPage,
  CreateUserPage,
} from "../../support/pages";
import { getProgramOwner } from "../../fixtures/index.js";

const loginPage = new LoginPage();
const getPO = getProgramOwner();
const deactivateUserPage = new DeactivateUserPage();
const newUserPage = new CreateUserPage();

describe("Deactivate and Activate User", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.login(getPO.email, getPO.password);
  });

  it("Test that user is able to deactivate a user in the organization", () => {
    newUserPage.accessEndUserPage();
    cy.get("table").contains("td", "Inactive").first().scrollIntoView().should("be.visible");
    deactivateUserPage.clickFirstItem();
    deactivateUserPage.deactivateUser();
    cy.contains("User deactivated successfully");
  });

  it("Test that user is able to activate a user in the organization", () => {
    newUserPage.accessEndUserPage();
    cy.get("table").contains("td", "Deactivated").first().scrollIntoView().should("be.visible");
    deactivateUserPage.clickFirstItem();
    deactivateUserPage.activateUser();
    cy.contains("User reactivated successfully.");
  });
});
