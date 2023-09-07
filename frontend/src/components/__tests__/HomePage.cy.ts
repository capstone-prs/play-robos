import HomePage from '../../pages/HomePage.vue';

describe('Homepage', () => {
  beforeEach(() => {
    cy.mount(HomePage);
  });

  it('renders the homepage', () => {
    cy.get('[data-test-id="homepage"]').should('exist');
  });

  it('should open the menu dialog when clicked', () => {
    cy.get('[data-test-id="menu-btn"]')
      .click()
      .then(() => {
        cy.get('[data-test-id="menu-dialog"]').should('exist');
      });
  });

  it('should render the settings of levels', () => {
    cy.get('[data-test-id="setting-component"]').should('exist');
  });

  it('should render the level board', () => {
    cy.get('[data-test-id="level-board"]').should('exist');
  });
});
