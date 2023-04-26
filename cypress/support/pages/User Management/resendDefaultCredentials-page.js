export class ResendDefaultCreedntialsPage{
   moreOptionsDropdown = () => cy.get(`[class="placeholder"]`)


   selectResendCredentials(){
    this.moreOptionsDropdown().contains("More options").click()
    cy.contains("Resend default credentials").click()
   }
}