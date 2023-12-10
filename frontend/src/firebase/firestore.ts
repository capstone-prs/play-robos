import { getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../boot/firebase';
import { NewUser } from '../types/Users';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

export const addUser = (data: NewUser, id: string) =>
  setDoc(doc(db, 'users', id), {
    ...data,
    id: id,
  });

export const getUser = (id: string) =>
  getDoc(doc(db, 'users', id)).then((snap) => {
    if (snap.exists()) {
      return snap.data();
    } else {
      throw new Error('user not found');
    }
  });

export const userID = () => {
  return auth.currentUser ? auth.currentUser.uid : '0'; // FIXME:
};

export default getUser;
