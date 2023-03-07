const goodGroupTitle4 = document.getElementById('good-group-title4');
const goodGroupIntro4 = document.getElementById('good-group-intro4');
const goodGroupCost4 = document.getElementById('good-group-cost4');

import { db } from './firebase.js';
import {
  getDocs,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

const querySnapshot = await getDocs(collection(db, 'group'));

querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data().title}`);

  goodGroupTitle4.innerHTML = doc.data().title;
  goodGroupIntro4.innerHTML = doc.data().intro;
  goodGroupCost4.innerHTML = doc.data().cost;
});
