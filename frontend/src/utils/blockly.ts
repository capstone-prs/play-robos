import { Workspace } from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { GeneratorCode } from 'src/types/robotParts';

const generator = (workspace: Workspace | undefined) => {
  return new Promise<GeneratorCode[]>((res, rej) => {
    if (workspace) {
      try {
        const value: string = javascriptGenerator.workspaceToCode(workspace);

        if (value.length === 0) {
          res([]);
        }

        const parsed = value
          .trimEnd()
          .split('\n')
          .map((code) => {
            if (code !== '') {
              return JSON.parse(code);
            }
            rej('Blocks are not connected');
          });

        res(parsed);
      } catch (error) {
        rej(error);
      }
    }
    res([]);
  });
};

export default generator;
