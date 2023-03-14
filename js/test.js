const db = require('./firebase-copy');
const { collection, doc, addDoc } = require('firebase/firestore');

const testDB = require('../test.json');

const groupDB = testDB.group;

// 새로운 모임 등록하기
function a() {
  groupDB.forEach((e) => {
    console.log(e.class);

    addDoc(collection(db, 'test'), {
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

    console.log('ID: ', e.title);
  });

  return false;
}

a();
