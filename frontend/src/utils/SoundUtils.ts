import click from 'assets/sounds/click.mp3';
import { Howl } from 'howler';
import background from '../assets/sounds/background-music.mp3';
// import background from '../assets/sounds/background-music-2.mp3';
import backgroundSudio from '../assets/sounds/background-music-3.mp3';
import backgroundHome from '../assets/sounds/music-background-for-home.mp3';
import { useQuasar } from 'quasar';
import { ref, onMounted } from 'vue';
const $q = useQuasar();
export const musicFX = ref<boolean>(
  ($q?.localStorage.getItem('fx-sound') as boolean) || false
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

export const backgroundMusic = new Howl({
  src: [background],
  loop: true,
  volume: 0.5
});


export const backgroundMusicStudio = new Howl({
  src: [backgroundSudio],
  mute: true,
  loop: true, // Set to true for continuous looping
  volume: 0.5 // Adjust the volume as needed
});
export const backgroundMusicHome = new Howl({
  src: [backgroundHome],
  loop: true, // Set to true for continuous looping
  volume: 0.5 // Adjust the volume as needed
});


export const stopmusic = () => {
  backgroundMusic.stop();
  backgroundMusicStudio.stop();
  backgroundMusicHome.stop()
}