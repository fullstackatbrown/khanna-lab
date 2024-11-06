import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_LOGIN_API_KEY,
  authDomain: 'cadre-webpage.firebaseapp.com',
  projectId: 'cadre-webpage',
  storageBucket: 'cadre-webpage.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_APP_MSG,
  appId: process.env.NEXT_PUBLIC_APP_APP,
  measurementId: process.env.NEXT_PUBLIC_APP_MSR,
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { firestore, storage, auth };
