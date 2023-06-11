import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, FundProgramUserPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const fundProgram = new FundProgramUserPage();
const getPO = getProgramOwner();
let minimumAmount = 4;
let maximumNumber = 1000000;

describe("Fund Program", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.login(getPO.email, getPO.password);
  });

  it("Test that user is able to navigate to fund program popup", () => {
    fundProgram.accessFundProgramPage();
    fundProgram.enterFundDetails(minimumAmount);
  });

  it("Test that user is unable to fund program if he doesnt select program or amount", () => {
    fundProgram.accessFundProgramPage();
    cy.get(".button-text").contains("Transfer").click();
    cy.contains("program is required").should("be.visible");
    cy.contains("Amount is required").should("be.visible");
  });

  it("Test that user is to fund program if he enters an amount more than what is available in the wallet", () => {
    fundProgram.accessFundProgramPage();
    fundProgram.enterFundDetails(maximumNumber);
    cy.get(".button-text").contains("Transfer").click();
    cy.get(`.Toastify__toast-body>div:last-child`, { timeout: 5000 }).should('contain', 'Insufficient balance in USD company account');
  });
});
