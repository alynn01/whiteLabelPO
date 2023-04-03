import { getProgramOwner } from "../../fixtures/index.js";
import { LoginPage, FundUserPage} from "../../support/pages/index";


const loginPage = new LoginPage();
const fundUser = new FundUserPage()
const getPO = getProgramOwner();

describe('Fund User', () => {

    beforeEach(() => {
      loginPage.accessLoginModal()
      loginPage.login(getPO.email, getPO.password);
    });

    it('Test that user is able to navigate to fund user popup', () => {
        fundUser.accessFundUserPopup();
        fundUser.enterFundDetails();
    })
})