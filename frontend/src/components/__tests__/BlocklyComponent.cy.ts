import BlocklyComponent from '../blockly/BlocklyComponent.vue';

describe('BlocklyComponent', () => {
  beforeEach(() => {
    cy.mount(BlocklyComponent);
  });

  it('renders the blockly workspace', () => {
    cy.get('.blockly-container', { timeout: 1000 }).should('exist');
  });

  it('should interact with help button', () => {
    cy.get('[data-testid="help-btn"]').should('exist');
    cy.get('[data-testid="help-btn"]').click();
  });

  it('should interact with check button', () => {
    cy.get('[data-testid="check-btn"]').should('exist');
    cy.get('[data-testid="check-btn"]').click();
  });

  it('should interact with menu button', () => {
    cy.get('[data-testid="menu-btn"]').should('exist');
    cy.get('[data-testid="menu-btn"]').click();
  });

  it('opens a dialog when check button is clicked', () => {
    cy.get('[data-testid="check-btn"]')
      .click()
      .then(() => {
        cy.get('[data-testid="check-dialog"]').should('exist');
      });
  });

  it('closes the dialog when close button is clicked', () => {
    cy.get('[data-testid="check-btn"]')
      .click()
      .then(() => {
        cy.get('[data-testid="close-btn"]')
          .click()
          .then(() => {
            cy.get('[data-testid="check-dialog"]').should('not.exist');
          });
      });
  });

  it('opens the upload dialog when the upload button from check dialog is clicked', () => {
    cy.get('[data-testid="check-btn"]')
      .click()
      .then(() => {
        cy.get('[data-testid="upload-btn"]')
          .click()
          .then(() => {
            cy.get('[data-testid="upload-dialog"]').should('exist');
          });
      });
  });

  it('closes the upload dialog when the close button from upload dialog is clicked', () => {
    cy.get('[data-testid="check-btn"]')
      .click()
      .then(() => {
        cy.get('[data-testid="close-btn"]')
          .click()
          .then(() => {
            cy.get('[data-testid="upload-dialog"]').should('not.exist');
          });
      });
  });
});
