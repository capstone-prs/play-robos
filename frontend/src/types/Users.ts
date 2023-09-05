export interface User {
  name: string;
  age: number;
  gender: gender;
  UID: string;
}
type gender = 'male' | 'famale';
export type NewUser = Omit<User, 'UID'>;
