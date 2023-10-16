import HomePage from '../../pages/HomePage.vue';

describe('Homepage', () => {
  beforeEach(() => {
    cy.mount(HomePage);
  });

  it('renders the homepage', () => {
    cy.dataCy('homepage').should('exist');
  });

  it('should open the menu dialog when clicked', () => {
    cy.dataCy('menu-btn')
      .click()
      .then(() => {
        cy.dataCy('menu-dialog').should('exist');
      });
  });

  it('should render the settings of levels', () => {
    cy.dataCy('setting-component').should('exist');
  });

  it('should render the level board', () => {
    cy.dataCy('level-board').should('exist');
  });
});
