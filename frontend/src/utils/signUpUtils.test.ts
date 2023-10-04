import { expect, it, describe } from 'vitest';
import validate, { isEmpty, isValidAge } from './signUpUtils'; // Import your functions

describe('Validation Functions', () => {
  it('isEmpty function should work correctly', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty('Hello')).toBe(false);
    expect(isEmpty(123)).toBe(false);
  });

  it('isValidAge function should work correctly', () => {
    expect(isValidAge(25)).toBe(false);
    expect(isValidAge(0)).toBe(false);
    expect(isValidAge(-5)).toBe(false);
    expect(isValidAge(101)).toBe(false);
  });

  it('validate function should work correctly', () => {
    // Add your test cases for the validate function here
    // Example:
    expect(validate('NAME')('')).toBe('Name is Required');
    expect(validate('AGE')('')).toBe('Age is Required');
    expect(validate('AGE')('0')).toBe('Enter Age Between 5-11');
    expect(validate('AGE')('5')).toBe(true);

    // Add more test cases as needed
  });
});
