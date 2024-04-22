describe('Home', () => {
  it('should render content with right text', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-test-id="cypress-card-title"]').should('contain', 'Wizards');
    cy.get('[data-test-id="cypress-create-wizard-button"]').should('contain', 'Criar Wizard');
    cy.get('[data-test-id="cypress-create-wizard-button-empty-list"]').should('contain', 'Crie seu primeiro wizard');
  })

  it('should navigate to create wizard page when button is clicked', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-test-id="cypress-create-wizard-button"]').click();
    cy.url().should('include', '/wizards/create');
  })

  it('should display the list of wizards', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-test-id="cypress-wizard-list"]').should('exist');
  })

  
})