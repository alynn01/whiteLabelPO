export class FundUserPage {
  walletMenuItem = () => cy.get('[href="/dashboard/wallet"] > span');
  quickActionDropdown = () =>
    cy.get(`[class*="placeholder"]`).contains("Quick actions");
  fundUserDropdownItem = () =>
    cy.get(`div[type="button"]`).contains("Fund users");
  popupHeader = () =>
    cy.get(".modal-header-content > span").contains("Fund user accounts");
  programDropdown = () => cy.get(`input[placeholder="Program"]`);
  selectProgram = () =>
    cy.get(".sc-lllmON > :nth-child(8)").contains("Auto Ama Test");
  enterAmount = () => cy.get(`input[name="amount"]`);
  fundUsersButton = () => cy.get(".button-text").contains("Fund users");
  selectAcctNumber = () => cy.get(`div[name="accountNo"]`);
  pickAccount = () => cy.get(".sc-lllmON > :nth-child(2)").contains("Lynn Ama");

  accessFundUserPopup() {
    this.walletMenuItem().click();
    this.quickActionDropdown().click();
    this.fundUserDropdownItem().click();
    this.popupHeader().should("be.visible");
  }

  enterFundDetails(fundingAmount) {
    this.programDropdown().click();
    this.selectProgram().click();
    this.selectAcctNumber().click();
    this.pickAccount().click();
    this.enterAmount().type(fundingAmount);
    this.fundUsersButton().should("be.visible");
  }
}
