export class ResendDefaultCreedntialsPage{
   moreOptionsDropdown = () => cy.get(`[class="button-text"]`)
   accountsAndCards = () => cy.get('h4').contains("Cards")

   selectResendCredentials(){
    this.moreOptionsDropdown().contains("More options").click()
    cy.contains("Resend default credentials").click()
   }

   clickAccountAndCards(){
    this.accountsAndCards().click();
   }
}