import { Workspace } from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { GeneratorCode } from 'src/types/robotParts';

const generator = (workspace: Workspace | undefined): GeneratorCode[] => {
  if (workspace) {
    const value: string = javascriptGenerator.workspaceToCode(workspace);

    if (value.length === 0) {
      return [];
    }

    return value
      .trimEnd()
      .split('\n')
      .map((code) => JSON.parse(code));
  }
  return [];
};

export default generator;
