const existGroupList = document.getElementById('exist-group');
const resisterGroupForm = document.getElementById('resister-group-form');
const deleteGroupForm = document.getElementById('delete-group-form');

import { db } from './firebase.js';
import {
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

// 데이터베이스에 있는 모임 정보 모두 불러오기
const groupData = await getDocs(collection(db, 'group'));

groupData.forEach((doc) => {
  let data = document.createElement('div');
  data.textContent =
    doc.data().title + ', ' + doc.data().intro + ', ' + doc.data().cost.toLocaleString('ko-KR');
  existGroupList.appendChild(data);
});

// 새로운 모임 등록하기
resisterGroupForm.onsubmit = function () {
  let groupTitle = this.resisterGroupTitle.value;
  let groupIntro = this.resisterGroupIntro.value;
  let groupCost = Number(this.resisterGroupCost.value);

  if (groupTitle == '') {
    alert('모임 이름을 적어주세요');

    return false;
  }

  if (groupIntro == '') {
    alert('한 줄 소개를 적어주세요');

    return false;
  }

  if (groupCost == '') {
    alert('가격을 적어주세요');

    return false;
  }

  try {
    const docRef = addDoc(collection(db, 'group'), {
      title: groupTitle,
      intro: groupIntro,
      cost: groupCost,
    });

    console.log('ID: ', docRef.title);
  } catch (e) {
    console.error('Error adding document: ', e);
  }

  this.resisterGroupTitle.value = '';
  this.resisterGroupIntro.value = '';
  this.resisterGroupCost.value = '';

  return false;
};

// 모임 정보 삭제하기
// async/await 개념이 어려워서 그냥 함수 여러 개 만듦
deleteGroupForm.onsubmit = function () {
  let groupTitle = this.deleteGroupTitle.value;

  if (groupTitle == '') {
    alert('모임 이름을 적어주세요');

    return false;
  }

  deleteGroup(groupTitle);

  this.deleteGroupTitle.value = '';

  return false;
};

async function deleteGroup(group) {
  const targetGroup = query(collection(db, 'group'), where('title', '==', group));

  const targetSnap = await getDocs(targetGroup);

  targetSnap.forEach((doc) => {
    console.log(doc.id);

    deleteDocs(doc.id);
    console.log(doc.data().title + ' 모임에 대한 삭제가 완료 되었습니다.');
  });
}

async function deleteDocs(id) {
  await deleteDoc(doc(db, 'group', id));
}
