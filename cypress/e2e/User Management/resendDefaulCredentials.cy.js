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
  
  describe("Resend default credentials", () => {
    beforeEach(() => {
      loginPage.accessLoginModal();
      loginPage.login(getPO.email, getPO.password);
    });
  
    it("Test that user is unable to send default credentials if default password has been changed", () => {
      newUserPage.accessEndUserPage();
      cy.get("table").contains("td", "Active").first().should("be.visible");
      deactivateUserPage.clickFirstItem();
      resendDetailsPage.selectResendCredentials();
      cy.contains("Password already changed")
    });
  
  });
  