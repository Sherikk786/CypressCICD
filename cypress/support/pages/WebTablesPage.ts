export class WebTablesPage {
  navigate() {
    cy.visit("https://demoqa.com/webtables");
  }

  clickAddNewRecord() {
    cy.get("#addNewRecordButton").click();
  }

  fillRegistrationForm(firstName: string, lastName: string, email: string, age: string, salary: string, department: string) {
    cy.get("#firstName").type(firstName);
    cy.get("#lastName").type(lastName);
    cy.get("#userEmail").type(email);
    cy.get("#age").type(age);
    cy.get("#salary").type(salary);
    cy.get("#department").type(department);
  }

  submitForm() {
    cy.get("#submit").click();
  }

  verifyRecordAdded(email: string) {
    cy.get(".rt-tbody").should("contain.text", email);
  }
}
