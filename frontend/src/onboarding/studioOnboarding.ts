import introJS from 'intro.js';
import 'intro.js/introjs.css';
import introConfig from '../onboarding/studioIntro.json';
import { Options } from 'intro.js/src/option';

const intro = introJS();

export const startOnboarding = () => {
  intro.setOptions(introConfig as Partial<Options>);
  intro.start();
};
