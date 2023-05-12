// 모임 등록 js/ 김준수

import { db } from './firebase.js';
import { collection, doc, addDoc } from 'firebase/firestore';
import group from '../groupsInfo.json' assert { type: 'json' };

/*모임 정보가 담긴 json 파일의 group 요소*/
/* groupsInfo.js파일과 함께 보기! */
const groupDB = group.group;

// 새로운 모임 등록하기
function allGroupResister() {
  groupDB.forEach((e) => { /* groupDB 각각의 event에 대해서*/
    addDoc(collection(db, 'group'), { /*data 추가*/
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
      type: e.type,
      week: e.week,
      startTime: e.startTime,
      endTime: e.endTime,
      address: e.address,
      hostNmae: e.hostName,
      hostContent: e.hostContent,
    });

    console.log('모임명: ' + e.title + ' 등록 완료');
  });

  return false;
}

function allGroupDelete() { 
  const groupRef = doc(db, 'group', '');
}

allGroupResister(); // 모임 등록 함수 실행
