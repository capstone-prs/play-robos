import { InputForms } from '../types/signUpForm';

const fiveYearsInMillis = 157680000000;

export const isEmpty = (val: number | string | null) =>
  val === '' || val === null;
// export const isValidAge = (val: number) => val >= 5 && val <= 11;

export const isValidBirthDate = (date: Date) =>
  date.getTime() < Date.now() - fiveYearsInMillis;

export const isValidLifeSpan = (date: Date) =>
  new Date().getFullYear() - date.getFullYear() < 120;

const validate = (inputForms: InputForms, prev?: string) => (val: string) => {
  if (isEmpty(val)) {
    switch (inputForms) {
      case 'NAME':
        return 'Name is Required';
      case 'BIRTHDATE':
        return 'Birthdate is Required';
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

    case 'BIRTHDATE':
      const parsedInput = new Date(val);

      if (isNaN(parsedInput.getTime())) {
        return 'Please enter a valid date in the format YYYY/MM/DD';
      } else if (Number(val.split('/')[2]) !== parsedInput.getDate()) {
        return 'Please enter a valid date';
      } else if (!isValidLifeSpan(parsedInput)) {
        return 'Invalid Birthdate';
      } else if (isValidBirthDate(parsedInput)) {
        return true;
      }
      return 'Child must be atleast 5 years old';

    case 'EMAIL':
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
      if (isEmpty(val)) {
        return 'Email is Required';
      } else if (!emailRegex.test(val)) {
        return 'Invalid Email';
      }
      return true;

    case 'PASSWORD':
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,}$/;
      if (!passwordRegex.test(val)) {
        return 'Password must be at least 6 characters and include at least 1 number, 1 capital letter, and 1 special character';
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
