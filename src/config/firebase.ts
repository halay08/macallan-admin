import 'firebase/auth';
import 'firebase/functions';
import 'firebase/storage';
import firebase from 'firebase/app';
import { FirebaseEmulator } from './firebaseEmulator';

const {
  REACT_APP_FIREBASE_DATABASE_URL,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_USE_FIREBASE_EMULATOR = ''
} = process.env;

const config = {
  databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

if (parseFloat(REACT_APP_USE_FIREBASE_EMULATOR) > 0) {
  const emulator = new FirebaseEmulator(firebase);
  emulator.useAuth().useFunctions();
}

const auth = firebase.auth();
const functions = firebase.functions();
const storage = firebase.app().storage();

export { auth, functions, firebase, storage };
