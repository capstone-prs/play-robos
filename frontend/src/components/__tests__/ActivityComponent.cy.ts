import ActivityComponent from '../games/ActivityComponent.vue';

describe('Activity Component', () => {
  beforeEach(() => {
    cy.mount(ActivityComponent, {
      props: {
        ageGroup: '5-7',
        settingNum: 2,
        levelNum: 2,
        goalTitle: 'Sample',
        reward: 100,
        toolbox: {},
        correctCode: ['100000'],
      },
    });
  });

  it('renders level and goal labels', () => {
    cy.dataCy('level-label').should('exist');
    cy.dataCy('goal-label').should('exist');
    cy.dataCy('coin-img').should('exist');
  });

  it('renders the play dialog when clicked', () => {
    cy.dataCy('activity-card')
      .click()
      .then(() => {
        cy.dataCy('play-dialog').should('exist');
      });
  });

  it('shows the level, goal, and reward details', () => {
    cy.dataCy('level-label').should('have.text', 'Level: 2');
    cy.dataCy('goal-label').should('have.text', 'Goal: Sample');
    cy.dataCy('coin-img').should('exist');
    cy.dataCy('reward-label').should('have.text', '100');
  });
});
