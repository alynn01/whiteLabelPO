import {
    LoginPage,
    DeactivateUserPage,
    CreateUserPage,
    ResendDefaultCreedntialsPage
  } from "../../support/pages";
  import { getProgramOwner } from "../../fixtures/index.js";
  
  const loginPage = new LoginPage();
  const getPO = getProgramOwner();
  const deactivateUserPage = new DeactivateUserPage();
  const newUserPage = new CreateUserPage();
  const resendDetailsPage = new ResendDefaultCreedntialsPage();
  
  describe("Resend default credentials and view accounts details", () => {
    beforeEach(() => {
      loginPage.accessLoginModal();
      loginPage.login(getPO.email, getPO.password);
    });
  
    it("Test that user is unable to send default credentials if default password has been changed", () => {
      newUserPage.accessEndUserPage();
      cy.get("table").contains("td", "Active").first().scrollIntoView().should("be.visible");
      deactivateUserPage.clickFirstItem();
      resendDetailsPage.selectResendCredentials();
      cy.contains("Password already changed")
    });

    it("Test that user is able to see accounts and cards tied to a user", () => {
        newUserPage.accessEndUserPage();
        cy.wait(5000)
        cy.get(`input[placeholder="Search"]`).scrollIntoView().type("guestone")
        cy.wait(5000)
        cy.get("table").contains("td", "Active").first().scrollIntoView().should("be.visible");
        deactivateUserPage.clickFirstItem();
        resendDetailsPage.clickAccountAndCards();
        cy.wait(3000)
        cy.get(`[class="card-id"]`).contains("12707511").should("be.visible")
      });
  
  });
  