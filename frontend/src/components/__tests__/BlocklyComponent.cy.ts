import BlocklyComponent from '../blockly/BlocklyComponent.vue';

describe('BlocklyComponent', () => {
  beforeEach(() => {
    cy.mount(BlocklyComponent)
  })

  it('renders the blockly workspace', () => {
    cy.get('.blockly-container', {timeout: 1000}).should('exist');
  });

  it('should interact with help button', () => {
    cy.get('[data-testid="help-btn"]').should('exist')
    cy.get('[data-testid="help-btn"]').click();
  })

   it('should interact with check button', () => {
    cy.get('[data-testid="check-btn"]').should('exist')
    cy.get('[data-testid="check-btn"]').click()
   })

   it('should interact with menu button', () => {
    cy.get('[data-testid="menu-btn"]').should('exist')
    cy.get('[data-testid="menu-btn"]').click()
  })
})
