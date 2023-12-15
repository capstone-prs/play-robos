export interface User {
  id: string;
  name: string;
  birthdate: Date;
  gender: Gender;
  coins: number;
  score: number;
}

export type Gender = 'Male' | 'Famale';
export type NewUser = Omit<User, 'id'>;
