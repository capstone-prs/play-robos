import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
  setPersistence,
  indexedDBLocalPersistence,
  // browserLocalPersistence,
  User,
  sendEmailVerification,
} from 'firebase/auth';
import getAge from '../utils/ageGetter';
import { getLocalUser, upsertLocalUser } from '../dexie/db';
import getUser from './firestore';

const auth = getAuth();

export const signup = (email: string, password: string): Promise<User> => {
  return new Promise<User>((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        resolve(user);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const isEmailVerified = (userCredentials: User): Promise<void> =>
  new Promise((resolve, reject) => {
    userCredentials.emailVerified ? resolve() : reject();
  });

export const verifyEmail = (user: User) => sendEmailVerification(user);

export const login = (email: string, password: string): Promise<User> => {
  return new Promise<User>((resolve, reject) => {
    setPersistence(auth, indexedDBLocalPersistence)
      .then(() => {
        return signInWithEmailAndPassword(auth, email, password);
      })
      .then(async (userCredential) => {
        const user = userCredential.user;

<<<<<<< HEAD
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        console.log(userDocSnapshot.data());
        if (userDocSnapshot.exists()) {
          const userBirthdate = userDocSnapshot.data().birthdate;
          const userName = userDocSnapshot.data().name;
          const userGender = userDocSnapshot.data().gender;
          const userCoins = userDocSnapshot.data().coins;
          const userScore = userDocSnapshot.data().score;
=======
        // const userDocRef = doc(db, 'users', user.uid);
        await getLocalUser(user.uid).then(async (localUser) => {
          if (!localUser) {
            const firebaseUser = await getUser(user.uid);
            if (firebaseUser) {
              const userBirthdate = firebaseUser.birthdate;
              const userName = firebaseUser.name;
              const userGender = firebaseUser.gender;
              const userCoins = firebaseUser.coins;
              const userScore = firebaseUser.score;
>>>>>>> 99a5dc66cd2ab751785b967873705f99457c01ea

              const difficulty =
                getAge(userBirthdate, new Date()) >= 5 &&
                getAge(userBirthdate, new Date()) <= 7
                  ? 'easy'
                  : 'hard';
              localStorage.setItem('userDifficulty', difficulty);
              await upsertLocalUser({
                id: user.uid,
                name: userName,
                birthdate: userBirthdate,
                gender: userGender,
                coins: userCoins,
                score: userScore,
              })
                .then(() => resolve(user))
                .catch(reject);
            } else {
              reject('User does not exist');
            }
          } else {
            const difficulty =
              getAge(new Date(localUser.birthdate), new Date()) >= 5 &&
              getAge(new Date(localUser.birthdate), new Date()) <= 7
                ? 'easy'
                : 'hard';
            localStorage.setItem('userDifficulty', difficulty);
            resolve(user);
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const logout = () => signOut(auth);

export const resetPassword = (email: string) =>
  fetchSignInMethodsForEmail(auth, email).then((validEmail) => {
    if (validEmail.length == 0) {
      throw new Error('Email not found. Please sign up.');
    }
    sendPasswordResetEmail(auth, email);
  });

export default login;
