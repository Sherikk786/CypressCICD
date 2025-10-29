import { TextBoxPage } from '../support/pages/TextBoxPage';

describe('DemoQA TextBox (POM + TS)', () => {
  const page = new TextBoxPage();

  it('types and submits the form', () => {
    page.visit();
    page.fillForm({
      name: 'Test User',
      email: 'testuser@example.com',
      currentAddress: 'Current Addr 123',
      permanentAddress: 'Permanent Addr 456'
    });
    page.submitForm();
    page.getOutput().should('be.visible');
    page.getOutput().should('contain', 'Test User');
    page.getOutput().should('contain', 'testuser@example.com');
  });
});
