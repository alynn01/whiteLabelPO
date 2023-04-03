import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, FundProgramUserPage} from "../../support/pages/index";


const loginPage = new LoginPage();
const fundProgram = new FundProgramUserPage()
const getPO = getProgramOwner();

describe('Fund Program', () => {

    beforeEach(() => {
      loginPage.accessLoginModal()
      loginPage.login(getPO.email, getPO.password);
    });

    it('Test that user is able to navigate to fund program popup', () => {
        fundProgram.accessFundProgramPage();
        fundProgram.enterFundDetails();
    })
})