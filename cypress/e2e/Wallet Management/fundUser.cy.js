import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, FundUserPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const fundUser = new FundUserPage();
const getPO = getProgramOwner();
let minimumAmount = 4;
let maximumNumber = 1000000;

describe("Fund User", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.login(getPO.email, getPO.password);
  });

  it("Test that user is able to navigate to fund user popup", () => {
    fundUser.accessFundUserPopup();
    fundUser.enterFundDetails(minimumAmount);
  });

  it("Test that user is unable to fund user if he doesnt enter the required details", () => {
    fundUser.accessFundUserPopup();
    cy.get(".button-text").contains("Transfer").click();
    cy.contains("Username - ClientID is required").should("be.visible");
    cy.contains("Amount is required").should("be.visible");
  });

  it("Test that user is unable to fund user if they enter amount greater that available balance in wallet", () => {
    fundUser.accessFundUserPopup();
    fundUser.enterFundDetails(maximumNumber);
    cy.get(".button-text").contains("Transfer").click();
    cy.get(`.Toastify__toast-body>div:last-child`, { timeout: 5000 }).should('contain', 'Insufficient balance in Pasha Group program account');
  });
});
