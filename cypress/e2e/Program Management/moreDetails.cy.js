import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, MoreDetailsPage } from "../../support/pages/index";


const loginPage = new LoginPage();
const programDetails = new MoreDetailsPage()
const getPO = getProgramOwner();

describe('Program More Details', () => {

    beforeEach(() => {
      loginPage.accessLoginModal()
      loginPage.login(getPO.email, getPO.password);
    });

    it('Test that user is able to view the program more details page', () => {
        programDetails.accessProgramPage()
        programDetails.openProgramDetails()
    })

    it('Test that user is able to deactivate program', () => {
        programDetails.accessProgramPage()
        programDetails.openProgramDetails()
        programDetails.deactivateProgram()
    })

    
    it('Test that user is able to navigate to the single user page from more details', () => {
        programDetails.accessProgramPage()
        programDetails.openSingleUserCreation()
       
    })
})