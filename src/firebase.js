import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBs-pG9_LIQ-ZDtfav0521GBrzVm4jLa3U",
  authDomain: "shopit-4e4ad.firebaseapp.com",
  projectId: "shopit-4e4ad",
  storageBucket: "shopit-4e4ad.firebasestorage.app",
  messagingSenderId: "407344287112",
  appId: "1:407344287112:web:61cc2bbb91f6980ad9fe3d"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };
