import { expect, it, describe } from 'vitest';
import isEqualCodes from './compareCode';
import { GeneratorCode } from '../types/robotParts';

const correctCodes: GeneratorCode[] = [
  { eyes: 'i' },
  { eyes: '0' },
  { eyes: 'i' },
  { eyes: '0' },
];

describe('compareCode.ts File', () => {
  it('It should work when the array of generatedCodes are equal', () => {
    expect(
      isEqualCodes(correctCodes, [
        { eyes: 'i' },
        { eyes: '0' },
        { eyes: 'i' },
        { eyes: '0' },
      ])
    ).toBeTruthy();
  });
  it('It should work when the array of generatedCodes are not equal', () => {
    expect(
      isEqualCodes(correctCodes, [
        { eyes: 'i', leftArm: '3' },
        { eyes: '0' },
        { eyes: 'i' },
        { eyes: '0' },
      ])
    ).toBeFalsy();
  });
  it('It should work when the array of generatedCodes are not equal in lenght', () => {
    expect(
      isEqualCodes(correctCodes, [{ eyes: '0' }, { eyes: 'i' }, { eyes: '0' }])
    ).toBeFalsy();
  });
  it('It should work when the array of generatedCodes are not eqaul in order', () => {
    expect(
      isEqualCodes(correctCodes, [
        { eyes: '0' },
        { eyes: 'i' },
        { eyes: 'i' },
        { eyes: '0' },
      ])
    ).toBeFalsy();
  });
});
