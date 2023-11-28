import { GeneratorCode } from './robotParts';

export interface Level {
  levelNum: number;
  goalTitle: string;
  reward: number;
  gif: Array<string>;
  hint: Array<string>;
  correctCode: Array<GeneratorCode>;
  completed: boolean;
}

export interface Setting {
  settingName: string;
  settingImage: string;
  settingBg: string;
  accessible: boolean;
  levels: Array<Level>;
}
