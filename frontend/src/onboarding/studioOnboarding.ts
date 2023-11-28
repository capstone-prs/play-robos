import introJS from 'intro.js';
import 'intro.js/introjs.css';
import studioConfig from '../onboarding/studioIntro.json';
import homeConfig from '../onboarding/intro.json';
import { Options } from 'intro.js/src/option';

const intro = introJS();

export const startStudioOnboarding = () => {
  intro.setOptions(studioConfig as Partial<Options>);
  intro.start();
};

export const startHomeOnboarding = () => {
  intro.setOptions(homeConfig as Partial<Options>);
  intro.start();
};
