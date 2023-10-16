import AuthPage from '../login/AuthPage.vue';

describe('Authentication Page', () => {
  beforeEach(() => {
    cy.mount(AuthPage);
  });
  it('renders the background', () => {
    cy.get('img')
      .should('exist')
      .should('have.attr', 'src', '/__cypress/src/src/assets/PlayRobos1.svg');
  });

  it('renders the game title', () => {
    cy.get('h2').should('exist').should('contain.text', 'PlayRoboS');
  });

  it('should render login and signup buttons', () => {
    cy.dataCy('login-btn').should('exist');
    cy.dataCy('login-btn').should('exist');
  });
});
