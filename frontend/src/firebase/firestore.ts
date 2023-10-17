import { getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '../boot/firebase';
import { NewUser } from '../types/Users';
import { getAuth } from 'firebase/auth';

const auth = getAuth();

export const addUser = (data: NewUser, id: string) =>
  setDoc(doc(db, 'users', id), {
    ...data,
    user_id: id,
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
  return auth.currentUser.uid;
};

export default getUser;
