import MenuDialog from '../MenuDialog.vue';

describe('Menu dialog', () => {
  beforeEach(() => {
    cy.mount(MenuDialog, {
      data() {
        return {
          showDialog: true,
        };
      },
    });
  });

  it('should render the menu dialog', () => {
    cy.get('[data-test-id="menu-dialog"]').should('exist');
  });

  it('should close the menu dialog when close icon is clicked', () => {
    cy.get('[data-test-id="close-btn"]')
      .click()
      .then(() => {
        cy.get('[data-test-id="menu-dialog"]').should('not.exist');
      });
  });

  it('should open the logout dialog when logout button is clicked', () => {
    cy.get('[data-test-id="logout-btn"]')
      .click()
      .then(() => {
        cy.get('[data-test-id="logout-dialog"]').should('exist');
      });
  });
});
