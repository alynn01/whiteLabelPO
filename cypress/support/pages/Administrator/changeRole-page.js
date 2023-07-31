export class ChangeRolePage{
    moreDetails = () => cy.get(`[class="row-detail-button"]`);
    changeRoleButton = () => cy.get(`[class="button-text"]`);
    roleDropdown = () => cy.get(`div[name="role"]`);
    selectRole = () => cy.get('.sc-bYMpWt > :nth-child(5)');
    updateRoleButton = () => cy.get('.sc-kDvujY > .sc-bcXHqe > .button-text');
    gobackButton = () => cy.get(`[class*="button-text"]`);

    clickSecondItem(role){
        this.moreDetails().eq(1).click()
        this.changeRoleButton().contains("Change Role").click({force:true})
        this.roleDropdown().click();
        cy.contains(role).click()
        this.updateRoleButton().contains("Change Role").click()
        cy.contains("Administrator role has been successfully changed").should("be.visible")
        this.gobackButton().contains("Go back").click();
    }

    changeSelection(role){
        this.moreDetails().eq(1).click()
        this.changeRoleButton().contains("Change Role").click()
        this.roleDropdown().click();
        cy.contains(role).click()
        this.updateRoleButton().contains("Change Role").click()
        cy.contains("Administrator role has been successfully changed").should("be.visible")
        this.gobackButton().contains("Go back").click();   
    }
}