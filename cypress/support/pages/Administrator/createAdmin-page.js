export class CreateAdminPage{

    adminTab = () => cy.get('[href="/dashboard/administrators"]')
    createNewAdminButton = () => cy.get(`[class="button-text"]`).contains("Create New Administrator ")
    firstNameField = () => cy.get('input[name="firstName"]');
    lastNameField = () => cy.get('input[name="lastName"]');
    emailField = () => cy.get('input[name="emailAddress"]');
    selectCountry = () => cy.get(`[class="selected-flag"]`);
    searchCountryFiled = () => cy.get('input[placeholder="search"]');
    phoneNumberFiled = () => cy.get('input[placeholder="Select Phone Number"]');
    selectRole = () => cy.get(`[class="placeholder"]`).contains("Select role");
    // pickRole = () => cy.get('.sc-bYMpWt > :nth-child(2)');
    createAdminButton = () => cy.get(`[class="button-text"]`).contains("Create Administrator")


    accessAdminPage(){
        this.adminTab().click()
    }

    createAdminUser(){
        this.createNewAdminButton().click()
    }

    completeEntryFields(emailValue){
        this.firstNameField().type("Chuks");
        this.lastNameField().type("Enedeh");
        this.emailField().type(emailValue);
        this.selectCountry().click();
        this.searchCountryFiled().type("Colombia");
        cy.contains("Colombia").click()
        this.phoneNumberFiled().type("5678578590")
        this.selectRole().click()
        cy.get('.sc-bYMpWt > :nth-child(3)').contains("Audit Admin").click({force : true})
        this.createAdminButton().should("be.visible")
    }
}