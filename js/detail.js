import { db } from './firebase.js';
import {
  getDoc,
  getDocs,
  doc,
  query,
  where,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

const test = {
  class: '글쓰기',
  address: '대구광역시 북구 산격로 8길 11-2',
  location: '쓰기 클럽, 저문',
  title: '나와 만나는 그림책',
  peopleMin: null,
  peopleMax: 4,
  purpose: '취미',
  ganre: '문학',
  mood: '따뜻한 공감',
  cost: '5주, 35,000원',
  intro: '그림책을 통해 나와 마주한다면 어떤 일들이 벌어질까요?',
  content:
    '안녕하세요.\n\n금방 일곱 번의 달이 지나 우리가 다시 만나는 날이 왔어요.\n\n오늘은 여러분의 필명도 함께 공유하게 될텐데, 왠지 더욱 설레네요.\n\n날이 따뜻합니다.\n오늘 오후 7시, 아무에서 만나요.\n\n쓰기 클럽, 저문 호스트 .윤 올림',
};

const groupTitle = document.querySelector('.g-name');
const groupIntro = document.querySelector('.g-intro');

groupTitle.innerHTML = test.title;
groupIntro.innerHTML = test.intro;

const receiveGroupTitle = localStorage.getItem('targetGroupTitle');
console.log(receiveGroupTitle);

const targetGroup = query(collection(db, 'group'), where('title', '==', '인권스터디'));
console.log(targetGroup);

const targetSnap = await getDocs(targetGroup);

targetSnap.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, ' => ', doc.data());
});
