import ActionButton from '../buttons/ActionButton.vue';

describe('ActionButton Component', () => {
  it('renders a text-label', () => {
    const textLabel = 'Check'
    cy.mount(ActionButton, {
      props: {
        textLabel: textLabel
      }
    });

    cy.get('[data-testid="action-btn"]').should('contain', textLabel);
  })


   it('renders another text-label', () => {
    const textLabel = 'Play'
    cy.mount(ActionButton, {
      props: {
        textLabel: textLabel
      }
    });

    cy.get('[data-testid="action-btn"]').should('contain', textLabel);
  })
})
