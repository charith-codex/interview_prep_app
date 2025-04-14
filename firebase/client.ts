import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAWtevGdpmV_FxwGrPl7K_MSWxpHjdTIlw',
  authDomain: 'prepwise-44f15.firebaseapp.com',
  projectId: 'prepwise-44f15',
  storageBucket: 'prepwise-44f15.firebasestorage.app',
  messagingSenderId: '497639213113',
  appId: '1:497639213113:web:54233c63a6886a7baaa5e8',
  measurementId: 'G-5KLSLB77ZJ',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
