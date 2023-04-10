import { db } from './firebase.js';
import DB from './groupsInfo.json' assert { type: 'json' };
import { addDoc, collection } from 'firebase/firestore';

const groupDB = DB.group;

// 새로운 모임 등록하기
function allGroupResister() {
  groupDB.forEach((e) => {
    addDoc(collection(db, 'group'), {
      class: e.class,
      content: e.content,
      cost: e.cost,
      genre: e.genre,
      intro: e.intro,
      location: e.location,
      mood: e.mood,
      peopleMax: e.peopleMax,
      peopleMin: e.peopleMin,
      purpose: e.purpose,
      title: e.title,
      type: e.type,
      week: e.week,
      startTime: e.startTime,
      endTime: e.endTime,
      address: e.address,
      hostName: e.hostName,
      hostContent: e.hostContent,
      hostImage: e.hostImage,
      groupImage: e.groupImage,
      target: e.target,
      instagram: e.instagram,
    });

    console.log('모임명: ' + e.title + ' 등록 완료');
  });
}

allGroupResister();
