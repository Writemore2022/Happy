// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDEwoEKjZ--6SFCyLdlDaIsm967ZwxxwpM',
  authDomain: 'writemore-f6e18.firebaseapp.com',
  projectId: 'writemore-f6e18',
  storageBucket: 'writemore-f6e18.appspot.com',
  messagingSenderId: '260041463825',
  appId: '1:260041463825:web:0fb51cc9e226a9e18839b0',
  measurementId: 'G-KHCTR1ZPF7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
