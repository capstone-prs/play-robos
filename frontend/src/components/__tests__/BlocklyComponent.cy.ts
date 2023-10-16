import BlocklyComponent from '../blockly/BlocklyComponent.vue';

describe('BlocklyComponent', () => {
  beforeEach(() => {
    cy.mount(BlocklyComponent);
  });

  it('renders the blockly workspace', () => {
    cy.dataCy('blockly-container', { timeout: 1000 }).should('exist');
  });

  it('should interact with help button', () => {
    cy.dataCy('help-btn').should('exist');
    cy.dataCy('help-btn').click();
  });

  it('should interact with check button', () => {
    cy.dataCy('check-btn').should('exist');
    cy.dataCy('check-btn').click();
  });

  it('should interact with menu button', () => {
    cy.dataCy('menu-btn').should('exist');
    cy.dataCy('menu-btn').click();
  });

  it('opens a dialog when check button is clicked', () => {
    cy.dataCy('check-btn')
      .click()
      .then(() => {
        cy.dataCy('check-dialog').should('exist');
      });
  });

  it('closes the dialog when close button is clicked', () => {
    cy.dataCy('check-btn')
      .click()
      .then(() => {
        cy.dataCy('close-btn')
          .click()
          .then(() => {
            cy.dataCy('check-dialog').should('not.exist');
          });
      });
  });

  it('opens the upload dialog when the upload button from check dialog is clicked', () => {
    cy.dataCy('check-btn')
      .click()
      .then(() => {
        cy.dataCy('upload-btn')
          .click()
          .then(() => {
            cy.dataCy('upload-dialog').should('exist');
          });
      });
  });

  it('closes the upload dialog when the close button from upload dialog is clicked', () => {
    cy.dataCy('check-btn')
      .click()
      .then(() => {
        cy.dataCy('close-btn')
          .click()
          .then(() => {
            cy.dataCy('upload-dialog').should('not.exist');
          });
      });
  });
});
