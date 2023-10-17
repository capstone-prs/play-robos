import MenuDialog from '../MenuDialog.vue';
import { useRouter } from 'vue-router';

describe('Menu dialog', () => {
  beforeEach(() => {
    cy.mount(MenuDialog, {
      props: {
        dataForHomepage: '5-7',
        modelValue: true,
      },
      data() {
        return {
          showDialog: true,
          isLogoutDialogVisible: false,
          router: useRouter(),
          path: '',
        };
      },
    });
  });

  it('should render the menu dialog', () => {
    cy.dataCy('menu-dialog').should('exist');
  });

  it('should open the logout dialog when the logout button is clicked', () => {
    cy.dataCy('logout-btn')
      .click()
      .then(() => {
        cy.dataCy('logout-dialog').should('exist');
      });
  });
});
