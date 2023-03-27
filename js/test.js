const db = require('./firebase-copy');
const { collection, doc, addDoc, updateDoc, deleteField } = require('firebase/firestore');

const testDB = require('../test.json');

const groupDB = testDB.group;

// 새로운 모임 등록하기
function allGroupResister() {
  groupDB.forEach((e) => {
    addDoc(collection(db, 'group'), {
      class: e.class,
      content: e.content,
      cost: e.cost,
      ganre: e.ganre,
      intro: e.intro,
      location: e.location,
      mood: e.mood,
      peopleMax: e.peopleMax,
      peopleMin: e.peopleMin,
      purpose: e.purpose,
      title: e.title,
    });

    console.log('모임명: ' + e.title + ' 등록 완료');
  });

  return false;
}

function allGroupDelete() {
  const groupRef = doc(db, 'group', '');
}

// allGroupResister();
