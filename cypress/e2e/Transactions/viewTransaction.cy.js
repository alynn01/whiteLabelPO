import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, ViewTransactionPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const viewTransactions = new ViewTransactionPage();
const getPO = getProgramOwner();



describe("Transactions", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.login("pomsia02@yopmail.com", "Test@123");
  });

  it("Test that user is able to view transactions", () => {
     viewTransactions.accessTransactionsPage();
     cy.get("table").contains("td", "USD").first().should("be.visible");
     cy.get(':nth-child(1) > :nth-child(9) > button > span').click({force:true})
  });

  it("Test that user is able to use the filter options on the table", () => {
    viewTransactions.accessTransactionsPage();
    cy.get("table").contains("td", "USD").first().should("be.visible");
    
  })
});