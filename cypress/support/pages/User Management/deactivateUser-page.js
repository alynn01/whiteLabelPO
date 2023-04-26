export class DeactivateUserPage {
  firstUserInList = () => cy.get(`[class="row-detail-button"]`);
  deactivateButton = () => cy.get(`[class="button-text"]`);
  reasonField = () => cy.get('input[name="comment"]');
  continueButton = () => cy.get(`[class="button-text"]`);
  activateUserButton = () => cy.get(`[class="button-text"]`);

  clickFirstItem() {
    this.firstUserInList().first().click();
  }

  deactivateUser() {
    this.deactivateButton().contains("Deactivate").click();
    this.reasonField().type("I just no like you");
    this.continueButton().contains("Yes continue").click();
  }

  activateUser() {
    this.activateUserButton().contains("Reactivate").click();
    this.reasonField().type("Oya sorry come back");
    this.continueButton().contains("Yes continue").click();
  }
}
