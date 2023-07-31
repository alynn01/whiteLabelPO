export class ResendDefaultCreedntialsPage{
   moreOptionsDropdown = () => cy.get(`[class="button-text"]`)
   accountsAndCards = () => cy.get('h4').contains("CARDS")

   selectResendCredentials(){
    this.moreOptionsDropdown().contains("More Options").click()
    cy.contains("Resend default credentials").click()
   }

   clickAccountAndCards(){
    this.accountsAndCards().click();
   }
}