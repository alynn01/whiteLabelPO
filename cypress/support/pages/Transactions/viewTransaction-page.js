export class ViewTransactionPage{
    transactionsTab = () => cy.get('[href="/dashboard/transaction"] > span');
    reportTable = () => cy.get("table");
    calendarFilter = () => cy.get(`input[placeholder="Date"]`);
    previousMonth = () => cy.get('.react-datepicker__navigation');
    selectTwentyfth = () => cy.get(':nth-child(5) > .react-datepicker__day--025');
    selectTwentysixth = () => cy.get(':nth-child(5) > .react-datepicker__day--026');
    filterButton = () => cy.get('.btn_filter');

    
    
    accessTransactionsPage(){
        this.transactionsTab().click();
        this.reportTable().should("not.be.empty");
    }

    sortByDate(){
        this.calendarFilter().click();
        cy.wait(200);
        this.previousMonth().click();
        this.selectTwentyfth().click();
        this.selectTwentysixth().click();
        this.filterButton().click();
        cy.get('table').contains("2023-07-26").should('be.visible');
    }
}