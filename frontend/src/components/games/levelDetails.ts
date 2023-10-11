import * as Toolbox from '../blockly/toolbox/toolbox';
import Settings_5_7 from './levels_5_7.json';
import Settings_8_11 from './levels_8_11.json';

export interface Level {
  levelNum: number;
  goalTitle: string;
  reward: number;
  toolbox: object;
  correctCode: Array<object>;
}

export interface Setting {
  SettingName: string;
  SettingImage: string;
  SettingBg: string;
  Levels: Array<Level>;
}

const preprocess: (settings: Setting[]) => Setting[] = (settings) => {
  const levels: Array<Level> = [];
  settings.map((setting) => {
    return setting.Levels.map((level) => {
      level.toolbox = Toolbox.levels[level.levelNum];
      levels.push();
    });
  });
  return {
    ...settings,
    Levels: levels,
  };
};

export const levels_5_7: Setting[] = preprocess(Settings_5_7);
export const levels_8_11: Setting[] = preprocess(Settings_8_11);
