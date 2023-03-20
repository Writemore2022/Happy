// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
// import { getAnalytics } from 'firebase/analytics';
const { getFirestore } = require('firebase/firestore');
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
const db = getFirestore(app);

module.exports = db;
