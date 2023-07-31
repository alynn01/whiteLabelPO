export class FundUserPage {
  walletMenuItem = () => cy.get('[href="/dashboard/wallet"] > span');
  quickActionDropdown = () =>
    cy.get(`[class="button-text"]`).contains("Quick actions");
  fundUserDropdownItem = () =>
    cy.contains("Fund user(s)");
  popupHeader = () =>
    cy.get(".modal-header-content > span").contains("Fund user card(s)");
  programDropdown = () => cy.get(`input[placeholder="Program"]`);
  selectProgram = () =>
  cy.get('.sc-kMjNwy').contains("Pasha");
  enterAmount = () => cy.get(`input[name="amount"]`);
  fundUsersButton = () => cy.get(".button-text").contains("Transfer");
  selectAcctNumber = () => cy.get(`input[placeholder="Username - ClientID"]`);
  pickAccount = () => cy.contains('127082');
  

  accessFundUserPopup() {
    this.walletMenuItem().click();
    this.quickActionDropdown().click();
    this.fundUserDropdownItem().click();
    this.popupHeader().should("be.visible");
  }

  enterFundDetails(fundingAmount) {
    this.programDropdown().click();
    cy.wait(300)
    this.programDropdown().type("Pasha");
    this.selectProgram().click();
    this.selectAcctNumber().click();
    this.pickAccount().click();
    this.enterAmount().type(fundingAmount);
    this.fundUsersButton().should("be.visible");
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
