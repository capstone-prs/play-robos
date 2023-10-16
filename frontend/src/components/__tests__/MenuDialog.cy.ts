import MenuDialog from '../MenuDialog.vue';

describe('Menu dialog', () => {
  beforeEach(() => {
    cy.mount(MenuDialog, {
      props: {
        value: true,
        dataForHomepage: '5-7',
      },
      data() {
        return {
          showDialog: true,
          isLogoutDialogVisible: false,
        };
      },
    });
  });

  it('should render the menu dialog', () => {
    cy.dataCy('menu-dialog').should('exist');
  });

  it('should close the menu dialog when the close icon is clicked', () => {
    cy.dataCy('close-btn')
      .click()
      .then(() => {
        cy.dataCy('menu-dialog').should('not.exist');
      });
  });

  it('should open the logout dialog when the logout button is clicked', () => {
    cy.dataCy('logout-btn')
      .click()
      .then(() => {
        cy.dataCy('logout-dialog').should('exist');
      });
  });
});
