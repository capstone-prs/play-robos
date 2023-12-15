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

        res(
          value
            .trimEnd()
            .split('\n')
            .map((code) => JSON.parse(code))
        );
      } catch (error) {
        rej(error);
      }
    }
    res([]);
  });
};

export default generator;
