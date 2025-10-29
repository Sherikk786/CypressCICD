export class TextBoxPage {
  visit() {
    cy.visit('/text-box');
  }

  getFullName() {
    return cy.get('#userName');
  }

  getEmail() {
    return cy.get('#userEmail');
  }

  getCurrentAddress() {
    return cy.get('#currentAddress');
  }

  getPermanentAddress() {
    return cy.get('#permanentAddress');
  }

  getSubmitButton() {
    return cy.get('#submit');
  }

  fillForm({ name, email, currentAddress, permanentAddress }: { name: string; email: string; currentAddress: string; permanentAddress: string }) {
    this.getFullName().clear().type(name);
    this.getEmail().clear().type(email);
    this.getCurrentAddress().clear().type(currentAddress);
    this.getPermanentAddress().clear().type(permanentAddress);
  }

  submitForm() {
    // ensure submit is visible (demoqa has position fixed)
    this.getSubmitButton().click({ force: true });
  }

  getOutput() {
    return cy.get('#output');
  }
}
