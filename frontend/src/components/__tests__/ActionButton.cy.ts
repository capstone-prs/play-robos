import ActionButton from '../buttons/ActionButton.vue';

describe('ActionButton Component', () => {
  it('contains a Check label', () => {
    cy.mount(ActionButton, {
      props: {
        textLabel: 'Check',
      },
    });
    cy.dataCy('action-btn').should('contain', 'Check');
  });

  it('containes a Enter label', () => {
    cy.mount(ActionButton, {
      props: {
        textLabel: 'Enter',
      },
    });
    cy.dataCy('action-btn').should('contain', 'Enter');
  });
});
