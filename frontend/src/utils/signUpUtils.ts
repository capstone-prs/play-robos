import { InputForms } from '../types/signUpForm';

export const isEmpty = (val: number | string | null) =>
  val === '' || val === null;
export const isValidAge = (val: number) => val > 0 && val < 100;

const validate = (inputForms: InputForms, prev?: string) => (val: string) => {
  if (isEmpty(val)) {
    switch (inputForms) {
      case 'NAME':
        return 'Name is Required';
      case 'AGE':
        return 'Age is Required';
      case 'GENDER':
        return 'Gender is Required';
      case 'EMAIL':
        return 'Email is Required';
      case 'PASSWORD':
        return 'Password is Required';
      case 'REPASSWORD':
        return 'Confirm Password is Required';
      default:
        return true;
    }
  }
  switch (inputForms) {
    case 'NAME':
    case 'GENDER':
      return true;

    case 'AGE':
      if (!isValidAge(Number(val))) {
        return 'Enter a valid age';
      }
      return true;

    case 'EMAIL':
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (isEmpty(val)) {
        return 'Email is Required';
      } else if (!emailRegex.test(val)) {
        return 'Invalid Email';
      }
      return true;

    case 'PASSWORD':
      if (val.length < 6) {
        return 'At least 6 characters ';
      }
      return true;

    case 'REPASSWORD':
      if (val !== prev) {
        return 'Password does not match';
      }
      return true;

    default:
      return true;
  }
};
export default validate;
