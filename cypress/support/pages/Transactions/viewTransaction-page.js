export class ViewTransactionPage{
    transactionsTab = () => cy.get('[href="/dashboard/transaction"] > span');
    reportTable = () => cy.get("table");
    
    
    accessTransactionsPage(){
        this.transactionsTab().click();
        this.reportTable().should("not.be.empty")
    }
}