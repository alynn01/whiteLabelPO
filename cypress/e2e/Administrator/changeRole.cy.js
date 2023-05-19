import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, CreateAdminPage, ChangeRolePage } from "../../support/pages/index";

const loginPage = new LoginPage();
const createAdmin = new CreateAdminPage();
const changeRole = new ChangeRolePage()
const getPO = getProgramOwner();
let oldRole = "Support Admin";
let newRole = "Program Management Admin";


describe("Change Role", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.login(getPO.email, getPO.password);
  });

  it("Test that user is able to change role from audit admin to program admin", () => {
     createAdmin.accessAdminPage();
     cy.get("table").contains("td", "Support Admin").first().should("be.visible");
     changeRole.clickSecondItem(newRole); 
     createAdmin.accessAdminPage();
     cy.get("table").contains("td", "Program Management Admin").first().should("be.visible");
     
   
  });

 it("Test that user is able to change role from program admin to audit admin", () => {
      createAdmin.accessAdminPage();
      cy.get("table").contains("td", "Program Management Admin").first().should("be.visible");
      changeRole.changeSelection(oldRole); 
      createAdmin.accessAdminPage();
      cy.get("table").contains("td", "Support Admin").first().should("be.visible");


      
      
   });
});