export class ChangeRolePage{
    moreDetails = () => cy.get(`[class="row-detail-button"]`);
    changeRoleButton = () => cy.get(`[class="button-text"]`);
    roleDropdown = () => cy.get(`div[name="role"]`);
    selectRole = () => cy.get('.sc-lllmON > :nth-child(1)');
    updateRoleButton = () => cy.get('.sc-jrcTuL > .sc-bcXHqe');
    gobackButton = () => cy.get(`[class="button-text"]`);

    clickSecondItem(role){
        this.moreDetails().eq(1).click()
        this.changeRoleButton().contains("Change role").click()
        this.roleDropdown().click();
        this.selectRole().contains(role).click()
        this.updateRoleButton().contains("Change role").click()
        cy.contains("Administrator role has be successfully changed").should("be.visible")
        this.gobackButton().contains("Go back").click();
    }

    changeSelection(role){
        this.moreDetails().eq(1).click()
        this.changeRoleButton().contains("Change role").click()
        this.roleDropdown().click();
        cy.get('.sc-lllmON > :nth-child(3)').contains(role).click()
        this.updateRoleButton().contains("Change role").click()
        cy.contains("Administrator role has be successfully changed").should("be.visible")
        this.gobackButton().contains("Go back").click();   
    }
}