import { GeneratorCode } from '../types/robotParts';

const isEqualCodes = (arrayA: GeneratorCode[], arrayB: GeneratorCode[]) =>
  JSON.stringify(arrayA) === JSON.stringify(arrayB);

export default isEqualCodes;
