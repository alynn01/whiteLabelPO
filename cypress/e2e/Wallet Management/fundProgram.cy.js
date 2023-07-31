import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, FundProgramUserPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const fundProgram = new FundProgramUserPage();
const getPO = getProgramOwner();
let minimumAmount = 1;
let maximumNumber = 1000000;

describe("Fund Program", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
  });

  it("Test that user is able to navigate to fund program popup", () => {
    loginPage.login(getPO.email, getPO.password);
    fundProgram.accessFundProgramPage();
    fundProgram.enterFundDetails(minimumAmount);
  });

  it("Test that user is unable to fund program if he doesnt select program or amount", () => {
    loginPage.login(getPO.email, getPO.password);
    fundProgram.accessFundProgramPage();
    cy.get(".button-text").contains("Transfer").click();
    cy.contains("Program is required").should("be.visible");
    cy.contains("Amount is required").should("be.visible");
  });

  it("Test that user is unable to fund program if he enters an amount more than what is available in the wallet", () => {
    loginPage.login(getPO.email, getPO.password);
    fundProgram.accessFundProgramPage();
    fundProgram.enterFundDetails(maximumNumber);
    cy.get(".button-text").contains("Transfer").click();
    cy.get(`.Toastify__toast-body>div:last-child`, { timeout: 5000 }).should('contain', 'Insufficient balance in USD company account');
  });

  it("Test that user is able to fund program successfully", () => {
    loginPage.login("progowner.bbcseikz@mailosaur.io", getPO.password);
    fundProgram.accessFundProgramPage();
    fundProgram.enterFundDetails(minimumAmount);
    cy.get(".button-text").contains("Transfer").click();
    cy.wait(2000)
    cy.get(".button-text").contains("Yes, continue").click();
    cy.wait(5000)
    fundProgram.getVerificationOTP().then((receivedOTP) => {
      cy.get(':nth-child(1) > .formInput').type(receivedOTP);
    });
    cy.get('.sc-bcXHqe > .button-text').contains("Proceed").click();
    cy.contains("Program account funded successfully").should('be.visible');
    cy.get('[class="button-text"').contains("Go back to Wallet").click();
  });
});
