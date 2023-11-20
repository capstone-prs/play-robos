export interface User {
  user_name: string;
  user_birthdate: Date;
  user_gender: Gender;
  user_id: string;
}
export type Gender = 'Male' | 'Famale';
export type NewUser = Omit<User, 'user_id'>;
