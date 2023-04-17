export class MoreDetailsPage{

    programMenuItem = () => cy.get('[href="/dashboard/program"] > span');
    pageDescription = () => cy.get('.sc-ipEyDJ > span').contains("View and manage all programs");
    moreDetailsLink = () => cy.get('[class="row-detail-button"]').contains("More details");
    programDetailsHeading = () => cy.contains("Program details");
    moreOptionsDropdown = () => cy.get('[class="placeholder"]').contains("More options");
    deactivateLink = () => cy.contains("Deactivate program");
    createUserDropdown = () => cy.get('[class="placeholder"]').contains("Create new user");
    singleUserDropdownItem = () => cy.contains("Single user creation");
    singleUserCreationTitle = () => cy.get('.modal-header-content > span').contains("Single user creation");

    
    accessProgramPage(){
        this.programMenuItem().click();
        this.pageDescription().should("be.visible");
      
    }

    openProgramDetails(){
        this.moreDetailsLink().click();
        this.programDetailsHeading().should("be.visible");
        this.moreOptionsDropdown().click();
    }

    deactivateProgram(){
       this.deactivateLink().click();
    }

    openSingleUserCreation(){
        this.moreDetailsLink().click();
        this.programDetailsHeading().should("be.visible");
        this.createUserDropdown().click();
        this.singleUserDropdownItem().click();
        this.singleUserCreationTitle().should("be.visible")
    }



}

