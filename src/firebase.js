import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAX2Y3P3kXCqe6Hca9FXkTmE3CcvHY0bG0',
  authDomain: 'tewahdoprayerwall.firebaseapp.com',
  projectId: 'tewahdoprayerwall',
  storageBucket: 'tewahdoprayerwall.appspot.com',
  messagingSenderId: '1003528534071',
  appId: '1:1003528534071:web:cf74d58acf2414428b27b2',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
