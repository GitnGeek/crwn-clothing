import firebase from 'firebase/compat/app';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDo7jZPqmECqxB4Df_us2luAOr8PbWH3PM',
  authDomain: 'crwn-db-57be1.firebaseapp.com',
  projectId: 'crwn-db-57be1',
  storageBucket: 'crwn-db-57be1.appspot.com',
  messagingSenderId: '780441724721',
  appId: '1:780441724721:web:ee287d5d0f493abd82f210',
  measurementId: 'G-JKWVQKTFDH',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating user', error);
    }
  }

  return userRef;
};

export default firebase;
