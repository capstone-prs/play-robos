import '../boot/firebase';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from 'firebase/auth';

const provider = new GoogleAuthProvider();
const auth = getAuth();

const login = () => signInWithPopup(auth, provider);

// const login = () => signInWithRedirect(auth, provider);
export const looOut = () => signOut(auth);
export default login;
////////////////////////////////
// import {
//   getAuth,
//   signInWithRedirect,
//   getRedirectResult,
//   GoogleAuthProvider,
// } from 'firebase/auth/cordova';

// const auth = getAuth();
// const login = () =>
//   signInWithRedirect(auth, new GoogleAuthProvider())
//     .then(() => {
//       return getRedirectResult(auth);
//     })
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result!);

//       const token = credential?.accessToken;

//       // The signed-in user info.
//       const user = result?.user;
//       // ...
//     })
//     .catch((error) => {
//       console.log(error);
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });

/// export default login;
// import {
//   getAuth,
//   getRedirectResult,
//   GoogleAuthProvider,
// } from 'firebase/auth/cordova';

// const auth = getAuth();
// const login = () =>
//   getRedirectResult(auth)
//     .then((result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result!);
//       if (credential) {
//         // This gives you a Google Access Token.
//         // You can use it to access the Google API.
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result?.user;
//         // ...
//       }
//     })
//     .catch((error) => {
//       // Handle Errors here
//       console.log(error);
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });

// export default login;
