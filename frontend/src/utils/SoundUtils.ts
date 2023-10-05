import click from 'assets/sounds/click.mp3'
import back from 'assets/sounds/back.mp3'
import { Howl} from 'howler';

export const soundEffect = (sound:string=click)=>{
    const toPLay = new Howl({src:[sound]})
    toPLay.load();
    return toPLay.play();
  };

  