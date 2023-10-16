import AchievementButton from '../buttons/AchievementButton.vue';
import HelpButton from '../buttons/HelpButton.vue';
import MenuButton from '../buttons/MenuButton.vue';
import MusicButton from '../buttons/MusicButton.vue';
import SoundButton from '../buttons/SoundButton.vue';
import ToggleButton from '../buttons/ToggleButton.vue';
import UndoButton from '../buttons/UndoButton.vue';
import RobotConnectButton from '../buttons/RobotConnectButton.vue'

describe('All Buttons with Icons', () => {
  it('renders the achievement button', () => {
    cy.mount(AchievementButton);
    cy.get('[data-testid="achievement-btn"]').should('exist');
  });

  it('renders the help button', () => {
    cy.mount(HelpButton);
    cy.get('[data-testid="help-btn"]').should('exist');
  });

  it('renders the menu button', () => {
    cy.mount(MenuButton);
    cy.get('[data-testid="menu-btn"]').should('exist');
  });

  it('renders the music button', () => {
    cy.mount(MusicButton);
    cy.get('[data-testid="music-btn"]').should('exist');
  });

  it('renders the sound button', () => {
    cy.mount(SoundButton);
    cy.get('[data-testid="sound-btn"]').should('exist');
  });

  it('renders the toggle button', () => {
    cy.mount(ToggleButton);
    cy.get('[data-testid="toggle-btn"]').should('exist');
  });

  it('renders the undo button', () => {
    cy.mount(UndoButton);
    cy.get('[data-testid="undo-btn"]').should('exist');
  });
  it('renders the undo butoon',()=>{
    cy.mount(RobotConnectButton);
    cy.get('[data-testid="connect-btn"]').should('exist');
  });
});
