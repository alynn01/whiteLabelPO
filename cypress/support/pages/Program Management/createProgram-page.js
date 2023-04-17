export class CreateProgramPage {
  quickActionDropdown = () => cy.get(`[class*="placeholder"]`).contains("Quick actions");
  createProgramItem = () => cy.contains('Create a new program');
  pageTitle = () => cy.get('.modal-header-content > span').contains('Create a new program');
  programName = () => cy.get('input[name="name"]');
  progDescription = () => cy.get('textarea[name="desc"]');
  currency = () => cy.get('div[name="currency"]');
  programCountry = () => cy.get('input[placeholder="Program country"]');
  region = () => cy.get('input[placeholder="Program region"]');
  selectAfrica = () => cy.contains('Africa')
  selectNig = () => cy.contains('Nigeria')
  selectUSD = () => cy.get('.sc-iJnaPW').contains('USD')
  createProgramButton = () => cy.get('.button-text').contains('Create program')


  accessCreateProgram() {
    this.quickActionDropdown().click({ force: true })
    this.createProgramItem().click()
    this.pageTitle().should('be.visible')
  }

  enterProgramDetails() {
    this.programName().type('Test Ama')
    this.region().click({ force: true })
    this.selectAfrica().click()
    this.programCountry().type('Nig')
    this.selectNig().click()
    this.currency().click({ force: true })
    cy.wait(2000)
    this.selectUSD().click()
    this.progDescription().type("This is a test program")
    //this.createProgramButton().should('be.visible')
    this.createProgramButton().click()
    // verify that the success message is displayed
    cy.get('.sc-kgTSHT').should('be.visible');
    cy.contains('Program created successfully. You can now fund your program account in the wallets page').should('be.visible');
  }
}