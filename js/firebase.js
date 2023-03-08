// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
// import { getAnalytics } from 'firebase/analytics';
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDVtvdf03DK6N_v-c8qiRx7oji8i9prvrg',
  authDomain: 'test-writemore.firebaseapp.com',
  projectId: 'test-writemore',
  storageBucket: 'test-writemore.appspot.com',
  messagingSenderId: '316566833809',
  appId: '1:316566833809:web:d3d5253428d0aef8b08d30',
  measurementId: 'G-9LN5W2B0TP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
