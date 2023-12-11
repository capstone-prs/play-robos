import click from 'assets/sounds/click.mp3';
import { Howl } from 'howler';
import background from '../assets/sounds/background-music.mp3';
// import background from '../assets/sounds/background-music-2.mp3';
import backgroundSudio from '../assets/sounds/background-music-3.mp3';
import backgroundHome from '../assets/sounds/music-background-for-home.mp3';
import { useQuasar } from 'quasar';
import { ref, onMounted } from 'vue';
import page1Sound from '../assets/sounds/narrator/page1.mp3';
import page2Sound from '../assets/sounds/narrator/page2.mp3';
import page3Sound from '../assets/sounds/narrator/page3.mp3';
import scorchaL1post from '../assets/sounds/narrator/scorcha-L1-post.mp3';
import scorchaL2post from '../assets/sounds/narrator/scorcha-L2-post.mp3';
import scorchaL3post from '../assets/sounds/narrator/scorcha-L3-post.mp3';
import scorchaL4post from '../assets/sounds/narrator/scorcha-L4-post.mp3';
import page6Sound from '../assets/sounds/narrator/page6.mp3';
import page7Sound from '../assets/sounds/narrator/page7.mp3';
import page9Sound from '../assets/sounds/narrator/page9.mp3';
import page10Sound from '../assets/sounds/narrator/page10.mp3';
import page11Sound from '../assets/sounds/narrator/page11.mp3';
import page12Sound from '../assets/sounds/narrator/page12.mp3';
import floraL1post from '../assets/sounds/narrator/flora-L1-post.mp3';
import floraL2post from '../assets/sounds/narrator/flora-L2-post.mp3';
import floraL3post from '../assets/sounds/narrator/flora-L3-post.mp3';
import floraL4post from '../assets/sounds/narrator/flora-L4-post.mp3';
import page14Sound from '../assets/sounds/narrator/page14.mp3';
import page15Sound from '../assets/sounds/narrator/page15.mp3';
import page17Sound from '../assets/sounds/narrator/page17.mp3';
import page18Sound from '../assets/sounds/narrator/page18.mp3';
import page19Sound from '../assets/sounds/narrator/page19.mp3';
import darkaL1post from '../assets/sounds/narrator/darka-L1-post.mp3';
import darkaL2post from '../assets/sounds/narrator/darka-L2-post.mp3';
import darkaL3post from '../assets/sounds/narrator/darka-L3-post.mp3';
import darkaL4post from '../assets/sounds/narrator/darka-L4-post.mp3';
import page21Sound from '../assets/sounds/narrator/page21.mp3';
import page22Sound from '../assets/sounds/narrator/page22.mp3';
import page23Sound from '../assets/sounds/narrator/page23.mp3';
import page24Sound from '../assets/sounds/narrator/page24.mp3';
import page25Sound from '../assets/sounds/narrator/page25.mp3';
import page26Sound from '../assets/sounds/narrator/page26.mp3';
import page27Sound from '../assets/sounds/narrator/page27.mp3';
import page28Sound from '../assets/sounds/narrator/page28.mp3';
import page30Sound from '../assets/sounds/narrator/page30.mp3';
import page31Sound from '../assets/sounds/narrator/page31.mp3';
import page32Sound from '../assets/sounds/narrator/page32.mp3';
import page33Sound from '../assets/sounds/narrator/page33.mp3';
import page34Sound from '../assets/sounds/narrator/page34.mp3';
import page35Sound from '../assets/sounds/narrator/page35.mp3';
import misticaL1post from '../assets/sounds/narrator/mistica-L1-post.mp3';
import misticaL2post from '../assets/sounds/narrator/mistica-L2-post.mp3';
import misticaL3post from '../assets/sounds/narrator/mistica-L3-post.mp3';
import misticaL4post from '../assets/sounds/narrator/mistica-L4-post.mp3';
import page37Sound from '../assets/sounds/narrator/page37.mp3';
import page38Sound from '../assets/sounds/narrator/page38.mp3';
import page40Sound from '../assets/sounds/narrator/page40.mp3';
import page41Sound from '../assets/sounds/narrator/page41.mp3';
import page42Sound from '../assets/sounds/narrator/page42.mp3';
import page43Sound from '../assets/sounds/narrator/page43.mp3';
import futuraL1post from '../assets/sounds/narrator/futura-L1-post.mp3';
import futuraL2post from '../assets/sounds/narrator/futura-L2-post.mp3';
import futuraL3post from '../assets/sounds/narrator/futura-L3-post.mp3';
import futuraL4post from '../assets/sounds/narrator/futura-L4-post.mp3';
import page45Sound from '../assets/sounds/narrator/page45.mp3';
import page46Sound from '../assets/sounds/narrator/page46.mp3';
import page47Sound from '../assets/sounds/narrator/page47.mp3';

const $q = useQuasar();
export const musicFX = ref<boolean>(
  ($q?.localStorage.getItem('fx-sound') as boolean) || true
);
export const musicBackground = ref<boolean>(
  ($q?.localStorage.getItem('bg-sound') as boolean) || false
);

onMounted(() => {
  $q.localStorage.set('fx-sound', musicFX.value);
  $q?.localStorage.set('bg-sound', musicBackground.value);
});

export const soundEffect = (
  sound: string = click,
  isPlaying = musicFX.value
) => {
  const toPLay = new Howl({ src: [sound] });
  toPLay.load();
  if (isPlaying == true) {
    return toPLay.play();
  }
};

export const introNarrationsScorcha = [page1Sound, page2Sound, page3Sound, ''];
export const introNarrationsFlora = [
  page9Sound,
  page10Sound,
  page11Sound,
  page12Sound,
  '',
];
export const introNarrationsDarka = [page17Sound, page18Sound, page19Sound, ''];
export const introNarrationsMistica = [
  page30Sound,
  page31Sound,
  page32Sound,
  page33Sound,
  page34Sound,
  page35Sound,
  '',
];

export const introNarrationsFutura = [
  page40Sound,
  page41Sound,
  page42Sound,
  page43Sound,
  '',
];

export const postNarrationsScorcha = [
  scorchaL1post,
  scorchaL2post,
  scorchaL3post,
  scorchaL4post,
  page6Sound,
  page7Sound,
];

export const postNarrationsFlora = [
  floraL1post,
  floraL2post,
  floraL3post,
  floraL4post,
  page14Sound,
  page15Sound,
];

export const postNarrationsDarka = [
  darkaL1post,
  darkaL2post,
  darkaL3post,
  darkaL4post,
  page21Sound,
  page22Sound,
  page23Sound,
  page24Sound,
  page25Sound,
  page26Sound,
  page27Sound,
  page28Sound,
];

export const postNarrationsMistica = [
  misticaL1post,
  misticaL2post,
  misticaL3post,
  misticaL4post,
  page37Sound,
  page38Sound,
];

export const postNarrationsFutura = [
  futuraL1post,
  futuraL2post,
  futuraL3post,
  futuraL4post,
  page45Sound,
  page46Sound,
  page47Sound,
];

export const narrator = (source: string) => {
  return new Howl({ src: [source] });
};

export const backgroundMusic = new Howl({
  src: [background],
  loop: true,
  volume: 0.5,
});

export const backgroundMusicStudio = new Howl({
  src: [backgroundSudio],
  mute: true,
  loop: true, // Set to true for continuous looping
  volume: 0.5, // Adjust the volume as needed
});
export const backgroundMusicHome = new Howl({
  src: [backgroundHome],
  loop: true, // Set to true for continuous looping
  volume: 0.5, // Adjust the volume as needed
});

export const stopmusic = () => {
  backgroundMusic.stop();
  backgroundMusicStudio.stop();
  backgroundMusicHome.stop();
};
