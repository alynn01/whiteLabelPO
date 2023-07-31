import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, CreateProgramPage } from "../../support/pages/index";

const loginPage = new LoginPage();
const createProgram = new CreateProgramPage();
const getPO = getProgramOwner();

describe("Create Program", () => {
  beforeEach(() => {
    loginPage.accessLoginModal();
    loginPage.login(getPO.email, getPO.password);
  });

  it("Test that user is able to navigate to create program popup", () => {
    createProgram.accessCreateProgram();
    createProgram.enterProgramDetails();
  });

  it("Test that user is unable to submit the form if the details arent completed", () => {
    createProgram.accessCreateProgram();
    createProgram.clickSubmitWithoutData();
  });

  it("Test that user is able to create program", () => {
    createProgram.accessCreateProgram();
    createProgram.enterProgramDetails();
    cy.get(".button-text").contains("Create Program").click();
    cy.contains("Program created successfully").should("be.visible");
  });

});
