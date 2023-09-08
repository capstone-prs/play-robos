export interface User {
  name: string;
  age: number;
  gender: Gender;
  UID: string;
}
export type Gender = 'Male' | 'Famale';
export type NewUser = Omit<User, 'UID'>;
