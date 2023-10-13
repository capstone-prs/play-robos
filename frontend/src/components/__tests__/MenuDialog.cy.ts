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
    cy.dataCy('menu-dialog').should('exist');
  });

  it('should close the menu dialog when close icon is clicked', () => {
    cy.dataCy('close-btn')
      .click()
      .then(() => {
        cy.dataCy('menu-dialog').should('not.exist');
      });
  });

  it('should open the logout dialog when logout button is clicked', () => {
    cy.dataCy('logout-btn')
      .click()
      .then(() => {
        cy.dataCy('logout-dialog').should('exist');
      });
  });
});
