import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, FundUserPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const fundUser = new FundUserPage();
const getPO = getProgramOwner();
let minimumAmount = 1;
let maximumNumber = 1000000;

describe("Fund User", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
  });

  it("Test that user is able to navigate to fund user popup", () => {
    loginPage.login(getPO.email, getPO.password);
    fundUser.accessFundUserPopup();
    fundUser.enterFundDetails(minimumAmount);
  });

  it("Test that user is unable to fund user if he doesnt enter the required details", () => {
    loginPage.login(getPO.email, getPO.password);
    fundUser.accessFundUserPopup();
    cy.get(".button-text").contains("Transfer").click();
    cy.contains("Username - ClientID is required").should("be.visible");
    cy.contains("Amount is required").should("be.visible");
  });

  it("Test that user is unable to fund user if they enter amount greater that available balance in wallet", () => {
    loginPage.login(getPO.email, getPO.password);
    fundUser.accessFundUserPopup();
    fundUser.enterFundDetails(maximumNumber);
    cy.get(".button-text").contains("Transfer").click();
    cy.get(`.Toastify__toast-body>div:last-child`, { timeout: 5000 }).should('contain', 'Insufficient balance in Pasha Group program account');
  });

  it("Test that user is able to transfer money to an end user", () => {
    loginPage.login("progowner.bbcseikz@mailosaur.io", getPO.password);
    fundUser.accessFundUserPopup();
    fundUser.enterFundDetails(minimumAmount);
    cy.get(".button-text").contains("Transfer").click();
    cy.wait(2000)
    cy.get(".button-text").contains("Yes, continue").click();
    cy.wait(5000)
    fundUser.getVerificationOTP().then((receivedOTP) => {
      cy.get(':nth-child(1) > .formInput').type(receivedOTP);
    });
    cy.get('.sc-bcXHqe > .button-text').contains("Proceed").click();
    cy.contains("User account funded successfully.").should('be.visible');
    cy.get('[class="button-text"').contains("Go back to Wallet").click();
  });
});
