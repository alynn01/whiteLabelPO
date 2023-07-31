export class ViewTransactionPage{
    transactionsTab = () => cy.get('[href="/dashboard/transaction"] > span');
    reportTable = () => cy.get("table");
    calendarFilter = () => cy.get(`input[placeholder="Date"]`);
    previousMonth = () => cy.get('.react-datepicker__navigation');
    selectSixth = () => cy.get('.react-datepicker__day--006');
    selectSeventh = () => cy.get('.react-datepicker__day--007');
    filterButton = () => cy.get('.btn_filter');

    
    
    accessTransactionsPage(){
        this.transactionsTab().click();
        this.reportTable().should("not.be.empty")
    }

    sortByDate(){
        this.calendarFilter().click();
        cy.wait(200)
        this.previousMonth().click();
        this.selectSixth().click();
        this.selectSeventh().click();
        this.filterButton().click();
        cy.get('table').contains("2023-06-07").should('be.visible')
    }
}