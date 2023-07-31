export class FundProgramUserPage {
  walletMenuItem = () => cy.get('[href="/dashboard/wallet"] > span');
  quickActionDropdown = () =>
  cy.get('[class=button-text]').contains("Quick actions");
  fundProgramDropdownItem = () =>
    cy.get(`div[type="button"]`).contains("Fund programs");
  programDropdown = () => cy.get(`input[placeholder="Program"]`);
  selectProgram = () =>
    cy.get(".sc-lllmON > :nth-child(3)").contains("Amas Program");
  enterAmount = () => cy.get(`input[name="amount"]`);
  fundProgramButton = () => cy.get(".button-text").contains("Transfer");
  popupHeader = () =>
    cy.get(".modal-header-content > span").contains("Fund program accounts");
  programNameField = () => cy.get(`input[placeholder="Program"]`);

  accessFundProgramPage() {
    this.walletMenuItem().click();
    this.quickActionDropdown().click({ force: true });
    cy.contains("Fund program").click();
    //this.fundProgramDropdownItem().click();
    this.popupHeader().should("be.visible");
  }

  enterFundDetails(fundingAmount) {
    this.programDropdown().click({ force: true });
    this.programNameField().type("Verney")
    cy.get('.sc-kMjNwy').contains("Verney - 1332122783 (USD)").click();
    //this.selectProgram().click({ force: true });
    this.enterAmount().type(fundingAmount);
    this.fundProgramButton().should("be.visible");
  }

  getVerificationOTP() {
    const currentDate = new Date();
    const threeMinutesAgo = new Date(currentDate.getTime() - 2 * 60 * 1000);
    const serverId = "bbcseikz";
    const searchCriteria = { sentTo: "progowner.bbcseikz@mailosaur.io", subject: 'OTP' };
    return cy
      .mailosaurGetMessage(serverId, searchCriteria, {
        receivedAfter: threeMinutesAgo,
        timeout: 40000,
      })
      .then((email) => {
        expect(email.subject).to.equal("OTP");
        return email.html.codes[0].value;
      });
      
  }
}
