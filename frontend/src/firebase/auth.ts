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
} from 'firebase/auth';

const auth = getAuth();

export const signup = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);
// .then((userCredentials)=>{
//   const user:User = userCredentials.user;
//   return sendEmailVerification(user);
// })

const login = (email: string, password: string) =>
  setPersistence(auth, browserLocalPersistence).then(() =>
    signInWithEmailAndPassword(auth, email, password)
  );

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
