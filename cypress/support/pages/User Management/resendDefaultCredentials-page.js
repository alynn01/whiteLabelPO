export class ResendDefaultCreedntialsPage{
   moreOptionsDropdown = () => cy.get(`[class="placeholder"]`)
   accountsAndCards = () => cy.get('h4').contains("Accounts & Cards")

   selectResendCredentials(){
    this.moreOptionsDropdown().contains("More options").click()
    cy.contains("Resend default credentials").click()
   }

   clickAccountAndCards(){
    this.accountsAndCards().click();
   }
}