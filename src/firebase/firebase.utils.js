import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDo7jZPqmECqxB4Df_us2luAOr8PbWH3PM',
  authDomain: 'crwn-db-57be1.firebaseapp.com',
  projectId: 'crwn-db-57be1',
  storageBucket: 'crwn-db-57be1.appspot.com',
  messagingSenderId: '780441724721',
  appId: '1:780441724721:web:ee287d5d0f493abd82f210',
  measurementId: 'G-JKWVQKTFDH',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
