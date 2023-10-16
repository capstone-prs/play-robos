import { GeneratorCode } from './robotParts';

export interface Level {
  levelNum: number;
  goalTitle: string;
  reward: number;
  correctCode: Array<GeneratorCode>;
}

export interface Setting {
  settingName: string;
  settingImage: string;
  settingBg: string;
  levels: Array<Level>;
}
