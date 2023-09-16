import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

const auth = getAuth();

export const signup = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

const login = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () =>
  signOut(auth);

export default login;
