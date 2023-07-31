import { getSupportAdmin } from "../../fixtures/index.js";
import { LoginPage, TicketAndSupportPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const ticketsPage = new TicketAndSupportPage();
const getSA = getSupportAdmin();

describe("Ticket and Support", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.login('pomsia02@yopmail.com', "Test@123");
  });

  it("Test that user is able to view the tickets list page", () => {
    ticketsPage.accessTicketsPage();
  });

  it("Test that user is able to view the create ticket page", () => {
    ticketsPage.accessTicketsPage();
    ticketsPage.accessCreateTicketPage();
  });

  it("Test that user is unable to submit new ticket without filling the necessary details", () => {
    ticketsPage.accessTicketsPage();
    ticketsPage.accessCreateTicketPage();
    cy.get('[class="button-text"]').contains("Submit ticket ").click();
    //cy.contains("Please fill necessary fields")
  });

  it("Test that user is able to submit new ticket after filling the necessary details", () => {
    ticketsPage.accessTicketsPage();
    ticketsPage.accessCreateTicketPage();
    ticketsPage.enterValidDetailsAndSubmit();
    cy.get('[class="button-text"]').contains("Submit ticket ").click();
    cy.contains("Ticket created successfully").should("be.visible");
    cy.get("table").contains("td", "Open").first().should("be.visible");
  });

  it("Test that user is able to comment on a created ticket", () => {
    ticketsPage.accessTicketsPage();
    ticketsPage.commentOnTicket();
  });

  it("Test that user is able to close a created ticket", () => {
    ticketsPage.accessTicketsPage();
    ticketsPage.closeTicket();
    ticketsPage.accessTicketsPage();
  });

  it("Test that user is able to reopen closed ticket", () => {
    ticketsPage.accessTicketsPage();
    cy.get("table").contains("td", "Closed").first().should("be.visible");
    ticketsPage.reopenTicket();
    ticketsPage.accessTicketsPage();
    cy.get("table").contains("td", "Open").first().should("be.visible");
  });

  it("Test that user is able to reassign ticket from one level to another", () => {
    ticketsPage.accessTicketsPage();
    cy.get("table").contains("td", "Open").first().should("be.visible");
    ticketsPage.reassignTicket();
    cy.get(`.Toastify__toast-body>div:last-child`, { timeout: 5000 }).should('contain', 'Ticket level updated successfully!');
  });

  it("Test that user is able to hold a ticket", () => {
    ticketsPage.accessTicketsPage();
    cy.get("table").contains("td", "Open").first().should("be.visible");
    ticketsPage.holdTicket();
    ticketsPage.accessTicketsPage();
    cy.get("table").contains("td", "Hold").first().should("be.visible");
  });

  it("Test that user is unable to submit new ticket with an attachment that isn't supported", () => {
    ticketsPage.accessTicketsPage();
    ticketsPage.accessCreateTicketPage();
    ticketsPage.enterValidDetailsAndSubmit();
    ticketsPage.uploadInvalidFile();
    cy.contains("uploadthis.png has a file type that is not supported for upload").should("be.visible")
  });

  it("Test that user is unable to submit new ticket with an attachment that is supported but larger than 2MB", () => {
    ticketsPage.accessTicketsPage();
    ticketsPage.accessCreateTicketPage();
    ticketsPage.enterValidDetailsAndSubmit();
    ticketsPage.uploadLargeFile();
    cy.contains("Transactions-history.pdf has a file size larger than 2MB").should("be.visible");
  });

  it("Test that user is able to submit new ticket with an attachment that is supported and lesser than 2MB", () => {
    ticketsPage.accessTicketsPage();
    ticketsPage.accessCreateTicketPage();
    ticketsPage.enterValidDetailsAndSubmit();
    ticketsPage.uploadValidFile();
    ticketsPage.clickSubmitButton();
    cy.contains("Ticket created successfully").should("be.visible");
  });

});
