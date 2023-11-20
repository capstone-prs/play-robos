import click from 'assets/sounds/click.mp3'
import { Howl} from 'howler';
import background from '../assets/sounds/background-music.mp3'
export const soundEffect = (sound:string=click)=>{
    const toPLay = new Howl({src:[sound]})
    toPLay.load();
    return toPLay.play();
  };
export const backgroundMusic = new Howl({
    src: [background],
    loop: true, // Set to true for continuous looping
    volume: 1 // Adjust the volume as needed
  });
