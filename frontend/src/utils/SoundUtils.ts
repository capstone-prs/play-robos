import click from 'assets/sounds/click.mp3'
import { Howl} from 'howler';
import background from '../assets/sounds/background-music-2.mp3'
import backgroundSudio from '../assets/sounds/background-music-3.mp3'
import backgroundHome from '../assets/sounds/music-background-for-home.mp3'
export const soundEffect = (sound:string=click,loop = false)=>{
    const toPLay = new Howl({src:[sound],loop:loop})
    toPLay.load();
    return toPLay.play();
  };

export const backgroundMusic = new Howl({
    src: [background],
    loop: true, // Set to true for continuous looping
    volume: .5 // Adjust the volume as needed
  });

//   export const backgroundMusic2 =(backgroundSOund:string = background,mute=false )=> {
//     const sound = new Howl({
//     src: [background],
//     mute: mute,
//     loop: true, // Set to true for continuous looping
//     volume: .5 // Adjust the volume as needed
//   })
//   return sound
// };


export const backgroundMusicStudio = new Howl({
  src: [backgroundSudio],
  loop: true, // Set to true for continuous looping
  volume: .5 // Adjust the volume as needed
})
export const backgroundMusicHome = new Howl({
  src: [backgroundHome],
  loop: true, // Set to true for continuous looping
  volume: .5 // Adjust the volume as needed
})


