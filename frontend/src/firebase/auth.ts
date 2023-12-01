import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  // User,
  // sendEmailVerification,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  setPersistence,
  // indexedDBLocalPersistence
  browserLocalPersistence,
  User,
} from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import getAge from '../utils/ageGetter';

const auth = getAuth();
const db = getFirestore();

// export const signup = (email: string, password: string) =>
//   createUserWithEmailAndPassword(auth, email, password);
// .then((userCredentials)=>{
//   const user:User = userCredentials.user;
//   return sendEmailVerification(user);
// })

export const signup = (email: string, password: string): Promise<User> => {
  return new Promise<User>((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        resolve(user);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export const login = (email: string, password: string): Promise<User> => {
  return new Promise<User>((resolve, reject) => {
    setPersistence(auth, browserLocalPersistence)
      .then(() => signInWithEmailAndPassword(auth, email, password))
      .then(async (userCredential) => {
        const user = userCredential.user;

        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          const userBirthdate = userDocSnapshot.data().user_birthdate;

          const difficulty =
            getAge(userBirthdate.toDate(), new Date()) >= 5 &&
            getAge(userBirthdate.toDate(), new Date()) <= 7
              ? 'easy'
              : 'hard';
          localStorage.setItem('userDifficulty', difficulty);
        }

        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logout = () => signOut(auth);

// export const verifyEmail = (user:User) =>
//   sendEmailVerification(user)

export const resetPassword = (email: string) =>
  fetchSignInMethodsForEmail(auth, email).then((validEmail) => {
    if (validEmail.length == 0) {
      throw new Error('Email not found. Please sign up.');
    }
    sendPasswordResetEmail(auth, email);
  });

export default login;
