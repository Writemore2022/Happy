// Firebase 문서 (공식 문서 그대로 입니다.)
// 그냥 다 가져와서 사용하는 것! (주석 따로 필요 없다고 판단)

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'; // Firebase 초기화를 위해 
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { // Firebase 앱 객체
  apiKey: 'AIzaSyDEwoEKjZ--6SFCyLdlDaIsm967ZwxxwpM',
  authDomain: 'writemore-f6e18.firebaseapp.com',
  projectId: 'writemore-f6e18',
  storageBucket: 'writemore-f6e18.appspot.com',
  messagingSenderId: '260041463825',
  appId: '1:260041463825:web:0fb51cc9e226a9e18839b0',
  measurementId: 'G-KHCTR1ZPF7',
  databaseURL: 'https://writemore-f6e18-default-rtdb.asia-southeast1.firebasedatabase.app',
  storageBucket: 'gs://writemore-f6e18.appspot.com',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
