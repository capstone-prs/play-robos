import { expect, it, describe } from 'vitest';
import validate, { isEmpty } from './signUpUtils'; // Import your functions

describe('Validation Functions', () => {
  it('isEmpty function should work correctly', () => {
    expect(isEmpty('')).toBe(true);
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty('Hello')).toBe(false);
    expect(isEmpty(123)).toBe(false);
  });

  it('validate function should work correctly', () => {
    // Add your test cases for the validate function here
    // Example:
    expect(validate('NAME')('')).toBe('Name is Required');

    // Add more test cases as needed
  });
});
