export class MoreDetailsPage {
  programMenuItem = () => cy.get('[href="/dashboard/programs"] > span');
  pageDescription = () =>
    cy.contains("View and manage all programs");
  moreDetailsLink = () =>
    cy.get('[class="row-detail-button"]').contains("More details");
  programDetailsHeading = () => cy.contains("Program details");
  moreOptionsDropdown = () =>
    cy.get('[class="placeholder"]').contains("More options");
  deactivateLink = () => cy.contains("Deactivate program");
  createUserDropdown = () =>
  cy.get(`[class="button-text"]`).contains("Create new user");
  singleUserDropdownItem = () => cy.get('.sc-fIhvWL > :nth-child(1)').contains("Single user creation");;
  singleUserCreationTitle = () =>
    cy.get(".modal-header-content > span").contains("Single user creation");
  bulkUserDropdownItem = () => cy.contains("Bulk user creation");
  bulkUserCreationTitle = () =>
    cy.get(".modal-header-content > span").contains("Bulk user creation");
  addUserToProgramDropdownItem = () => cy.contains("Add user to program");
  addUserToProgramTitle = () =>
    cy
      .get(".modal-header-content > span")
      .contains("Add existing user to Program");
  removeUserFromProgramDropdownItem = () =>
    cy.contains("Remove user from program");
  removeUserFromProgramTitle = () =>
    cy.get(".modal-header-content > span").contains("Remove User from Program");
  viewAdministratorsLink = () => cy.contains("View administrators");
  administratorsEmailAddress = () => cy.contains("phlat@yopmail.com");
  viewEndUsersLink = () => cy.contains("View end users");
  endUsersEmail = () => cy.contains("sageh@yopmail.com");
  transactionsTab = () => cy.get(`[class="tab-text"]`).contains("TRANSACTIONS")

  accessProgramPage() {
    this.programMenuItem().click();
    this.pageDescription().should("be.visible");
  }

  openProgramDetails() {
    this.moreDetailsLink().click();
    this.programDetailsHeading().should("be.visible");
    //this.moreOptionsDropdown().click();
  }

  deactivateProgram() {
    this.deactivateLink().click();
  }

  openSingleUserCreation() {
    this.moreDetailsLink().click();
    this.programDetailsHeading().should("be.visible");
    this.createUserDropdown().click();
    this.singleUserDropdownItem().click();
    this.singleUserCreationTitle().should("be.visible");
  }

  openBulkUserCreation() {
    this.moreDetailsLink().click();
    this.programDetailsHeading().should("be.visible");
    this.createUserDropdown().click();
    this.bulkUserDropdownItem().click();
    this.bulkUserCreationTitle().should("be.visible");
  }

  openAddUserToProgram() {
    this.moreDetailsLink().click();
    this.programDetailsHeading().should("be.visible");
    this.createUserDropdown().click();
    this.addUserToProgramDropdownItem().click();
    this.addUserToProgramTitle().should("be.visible");
  }

  openRemoveUser() {
    this.moreDetailsLink().click();
    this.programDetailsHeading().should("be.visible");
    this.createUserDropdown().click();
    this.removeUserFromProgramDropdownItem().click();
    this.removeUserFromProgramTitle().should("be.visible");
  }

  openAdministratorsPage() {
    this.moreDetailsLink().click();
    this.programDetailsHeading().should("be.visible");
    this.viewAdministratorsLink().click();
    this.administratorsEmailAddress().should("be.visible");
  }

  openEndUsersPage() {
    this.moreDetailsLink().click();
    this.programDetailsHeading().should("be.visible");
    this.viewEndUsersLink().click();
    cy.get('table').scrollIntoView();
    this.endUsersEmail().should("be.visible");
  }

  viewTransactionsPage(){
    cy.get(`input[placeholder="Search"]`).type("Verney");
    cy.wait(3000)
    cy.get('.row-detail-button').contains("More details").click();
    this.transactionsTab().click()
    cy.get('table').contains("Card Funding (Wallet)").should('be.visible')
  }
}
