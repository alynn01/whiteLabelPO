export class MoreDetailsPage {
  programMenuItem = () => cy.get('[href="/dashboard/programs"] > span');
  pageDescription = () =>
    cy.contains("VIEW AND MANAGE ALL PROGRAMS");
  moreDetailsLink = () =>
    cy.get('[class="row-detail-button"]').contains("More Details");
  programDetailsHeading = () => cy.contains("Program Details");
  moreOptionsDropdown = () =>
    cy.get('[class="placeholder"]').contains("More options");
  deactivateLink = () => cy.contains("Deactivate program");
  createUserDropdown = () =>
  cy.get(`[class="button-text"]`).contains("Create New User");
  singleUserDropdownItem = () => cy.contains("Single User Creation");;
  singleUserCreationTitle = () =>
    cy.get(".modal-header-content > span").contains("Single User Creation");
  bulkUserDropdownItem = () => cy.contains("Bulk User Creation");
  bulkUserCreationTitle = () =>
    cy.get(".modal-header-content > span").contains("Bulk User Creation");
  addUserToProgramDropdownItem = () => cy.contains("Add User to Program");
  addUserToProgramTitle = () =>
    cy.get(".modal-header-content > span")
      .contains("Add existing user to Program");
  removeUserFromProgramDropdownItem = () =>
    cy.contains("Remove User from Program");
  removeUserFromProgramTitle = () =>
    cy.get(".modal-header-content > span").contains("Remove User from Program");
  viewAdministratorsLink = () => cy.contains("View Administrators");
  administratorsEmailAddress = () => cy.contains("phlat@yopmail.com");
  viewEndUsersLink = () => cy.contains("View End Users");
  endUsersEmail = () => cy.contains("jfg@yopmail.com");
  transactionsTab = () => cy.get(`[class="tab-text"]`).contains("Transactions")

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
    cy.get('.row-detail-button').contains("More Details").click();
    this.transactionsTab().click()
    cy.get('table').contains("Funding of program wallet").should('be.visible')
  }
}
