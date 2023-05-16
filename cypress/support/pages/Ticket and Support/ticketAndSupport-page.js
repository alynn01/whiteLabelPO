export class TicketAndSupportPage {
  ticketTab = () => cy.get('[href="/dashboard/tickets"] > span');
  pageTitle = () =>
    cy.get(".sc-csuSiG > span").contains("View and manage all tickets");
  createTicketButton = () =>
    cy.get('[class="button-text"]').contains("Create a new ticket ");
  createPageTitle = () => cy.contains("CREATE A SUPPORT TICKET");
  submitTicketButton = () =>
    cy.get('[class="button-text"]').contains("Submit ticket ");
  typeOfIssue = () => cy.get('[class="placeholder"]').contains("Type of issue");
  selectProgram = () =>
    cy.get('[class="placeholder"]').contains("Select applicable program");
  selectAffectedUsers = () =>
    cy.get('[class="placeholder"]').contains("Select affected user");
  subjectField = () => cy.get('input[name="subject"]');
  descriptionField = () => cy.get('textarea[name="description"]');
  selectPriority = () => cy.get('[class="placeholder"]').contains("None");
  elipsis = () => cy.get(':nth-child(1) > td[style="cursor: pointer;"] > svg');
  moredetailsDropdown = () => cy.get(`[class="drop_down_content"]`);
  moreOptionsButton = () => cy.get(`[class="button-text"]`);
  resolutionComment = () => cy.get(`textarea[name="comment"]`);
  commentField = () => cy.get(`[class="comment_input"]`);
  selectActionDropdown = () => cy.get(`[class="action-text"]`);
  resolveTicketButton = () =>
    cy.get(".sc-kDvujY > .sc-bcXHqe > .button-text").contains("Resolve ticket");
  closePopup = () => cy.get(".modal-header-content > :nth-child(3) > img");

  accessTicketsPage() {
    this.ticketTab().click();
    this.pageTitle().should("be.visible");
  }

  accessCreateTicketPage() {
    this.createTicketButton().click();
    this.createPageTitle().should("be.visible");
  }

  enterValidDetailsAndSubmit() {
    this.typeOfIssue().click();
    cy.contains("KYC").click();
    cy.wait(3000);
    this.selectProgram().click();
    cy.contains("Borno").click();
    cy.wait(3000);
    this.selectAffectedUsers().click();
    cy.contains("Garba Bello").click();
    cy.wait(3000);
    this.subjectField().type("Test Ticket");
    this.descriptionField().type("This is an automated test ticket");
    this.selectPriority().click();
    cy.contains("Low").click();
  }

  closeTicket() {
    cy.get("table").contains("td", "Open").first().should("be.visible");
    this.elipsis().click();
    this.moredetailsDropdown().contains("More details").click();
    this.moreOptionsButton().contains("More options").click();
    this.moredetailsDropdown().contains("Resolve ticket").click();
    this.resolutionComment().type("Oga abeg go rest");
    this.selectActionDropdown().contains("Select status").click();
    cy.contains("Closed").click();
    cy.wait(2000);
    this.resolveTicketButton().click({ force: true });
    cy.contains("Ticket closed successfully!").should("be.visible");
    this.closePopup().click();
  }

  commentOnTicket() {
    cy.get("table").contains("td", "Open").first().should("be.visible");
    this.elipsis().click();
    this.moredetailsDropdown().contains("More details").click();
    this.commentField().type("this is automated test response");
    cy.get(`[class="button-text"]`).contains("Send").click();
    cy.contains("Comment created successfully").should("be.visible");
  }

  reopenTicket() {
    this.elipsis().click();
    this.moredetailsDropdown().contains("More details").click();
    this.moreOptionsButton().contains("More options").click();
    cy.contains("Open ticket").click();
    this.resolutionComment().type("Oga abeg go rest");
    this.selectActionDropdown().contains("Select status").click();
    cy.get(".sc-iJnaPW > :nth-child(2)").contains("Open").click();
    cy.wait(2000);
    this.resolveTicketButton().click({ force: true });
    cy.contains("Ticket opened successfully!").should("be.visible");
    this.closePopup().click();
  }

  holdTicket() {
    this.elipsis().click();
    this.moredetailsDropdown().contains("More details").click();
    this.moreOptionsButton().contains("More options").click();
    cy.contains("On hold").click();
    cy.contains("Ticket on hold successfully!").should("be.visible");
    this.closePopup().click();
  }
}
