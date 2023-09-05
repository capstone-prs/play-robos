import { getDoc, doc, setDoc } from 'firebase/firestore';
import { db } from 'src/boot/firebase';
import { NewUser } from 'src/types/Users';

export const addUser = (data: NewUser, uid: string) =>
  setDoc(doc(db, 'users', uid), {
    ...data,
    UID: uid,
  });

export const getUser = (uid: string) =>
  getDoc(doc(db, 'users', uid)).then((snap) => {
    if (snap.exists()) {
      return snap.data();
    } else {
      throw new Error('user not found');
    }
  });

export default getUser;
