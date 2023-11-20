import { expect, it, describe } from 'vitest';
import getAge from './ageGetter';

describe('ageGetter.ts file', () => {
  describe('getAge function', () => {
    const now = () => new Date('2023-11-03');

    it('fails when the birthday is in the future', () => {
      expect(() => getAge(new Date('2023-12-12'), now())).toThrowError(
        'invalid birthdate'
      );
    });

    it('works when the birthday on a year has not yet occured', () => {
      expect(getAge(new Date('2022-11-20'), now())).toBe(0);
    });

    it('works when the birthday on a year has already passed', () => {
      expect(getAge(new Date('2022-06-20'), now())).toBe(1);
    });

    it('works when the birthday on a year has already passed', () => {
      expect(getAge(new Date('2001-06-08'), now())).toBe(22);
    });
  });
});
