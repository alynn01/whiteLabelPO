export class FundUserPage {
  walletMenuItem = () => cy.get('[href="/dashboard/wallet"] > span');
  quickActionDropdown = () =>
    cy.get(`[class="button-text"]`).contains("Quick actions");
  fundUserDropdownItem = () =>
    cy.contains("Fund user(s)");
  popupHeader = () =>
    cy.get(".modal-header-content > span").contains("Fund user accounts");
  programDropdown = () => cy.get(`input[placeholder="Program"]`);
  selectProgram = () =>
   cy.get('.sc-iJnaPW > :nth-child(3)');
  enterAmount = () => cy.get(`input[name="amount"]`);
  fundUsersButton = () => cy.get(".button-text").contains("Transfer");
  selectAcctNumber = () => cy.get(`div[name="accountNo"]`);
  pickAccount = () => cy.get('.sc-iJnaPW > :nth-child(3)');

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
