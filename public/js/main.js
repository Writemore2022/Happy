/* main에 나오는 모임 정보 db/김준수 */
/*글모 추천 모임, 자체 공간 보유 모임의 "변수명" 수정 필요!*/
/*why? 목적을 명시적으로 나타내지 못함. */

/*글로모여 추천 모임 정보*/
const goodGroupImg1 = document.getElementById('good-group-img1');
const goodGroupTitle1 = document.getElementById('good-group-title1');
const goodGroupIntro1 = document.getElementById('good-group-intro1');
const goodGroupLocation1 = document.getElementById('good-group-location1');
const goodGroupCost1 = document.getElementById('good-group-cost1');

const goodGroupImg2 = document.getElementById('good-group-img2');
const goodGroupTitle2 = document.getElementById('good-group-title2');
const goodGroupIntro2 = document.getElementById('good-group-intro2');
const goodGroupLocation2 = document.getElementById('good-group-location2');
const goodGroupCost2 = document.getElementById('good-group-cost2');

const goodGroupImg3 = document.getElementById('good-group-img3');
const goodGroupTitle3 = document.getElementById('good-group-title3');
const goodGroupIntro3 = document.getElementById('good-group-intro3');
const goodGroupLocation3 = document.getElementById('good-group-location3');
const goodGroupCost3 = document.getElementById('good-group-cost3');

const goodGroupImg4 = document.getElementById('good-group-img4');
const goodGroupTitle4 = document.getElementById('good-group-title4');
const goodGroupIntro4 = document.getElementById('good-group-intro4');
const goodGroupLocation4 = document.getElementById('good-group-location4');
const goodGroupCost4 = document.getElementById('good-group-cost4');

/*자체 공간 보유 모임 정보*/
const deadlineGroupImg1 = document.getElementById('deadline-group-img1');
const deadlineGroupTitle1 = document.getElementById('deadline-group-title1');
const deadlineGroupIntro1 = document.getElementById('deadline-group-intro1');
const deadlineGroupLocation1 = document.getElementById('deadline-group-location1');
const deadlineGroupCost1 = document.getElementById('deadline-group-cost1');

const deadlineGroupImg2 = document.getElementById('deadline-group-img2');
const deadlineGroupTitle2 = document.getElementById('deadline-group-title2');
const deadlineGroupIntro2 = document.getElementById('deadline-group-intro2');
const deadlineGroupLocation2 = document.getElementById('deadline-group-location2');
const deadlineGroupCost2 = document.getElementById('deadline-group-cost2');

const deadlineGroupImg3 = document.getElementById('deadline-group-img3');
const deadlineGroupTitle3 = document.getElementById('deadline-group-title3');
const deadlineGroupIntro3 = document.getElementById('deadline-group-intro3');
const deadlineGroupLocation3 = document.getElementById('deadline-group-location3');
const deadlineGroupCost3 = document.getElementById('deadline-group-cost3');

const deadlineGroupImg4 = document.getElementById('deadline-group-img4');
const deadlineGroupTitle4 = document.getElementById('deadline-group-title4');
const deadlineGroupIntro4 = document.getElementById('deadline-group-intro4');
const deadlineGroupLocation4 = document.getElementById('deadline-group-location4');
const deadlineGroupCost4 = document.getElementById('deadline-group-cost4');

/*지역 맞춤 모임 정보*/
const locationGroupImg1 = document.getElementById('location-group-img1');
const locationGroupTitle1 = document.getElementById('location-group-title1');
const locationGroupIntro1 = document.getElementById('location-group-intro1');
const locationGroupLocation1 = document.getElementById('location-group-location1');
const locationGroupCost1 = document.getElementById('location-group-cost1');

const locationGroupImg2 = document.getElementById('location-group-img2');
const locationGroupTitle2 = document.getElementById('location-group-title2');
const locationGroupIntro2 = document.getElementById('location-group-intro2');
const locationGroupLocation2 = document.getElementById('location-group-location2');
const locationGroupCost2 = document.getElementById('location-group-cost2');

const locationGroupImg3 = document.getElementById('location-group-img3');
const locationGroupTitle3 = document.getElementById('location-group-title3');
const locationGroupIntro3 = document.getElementById('location-group-intro3');
const locationGroupLocation3 = document.getElementById('location-group-location3');
const locationGroupCost3 = document.getElementById('location-group-cost3');

const locationGroupImg4 = document.getElementById('location-group-img4');
const locationGroupTitle4 = document.getElementById('location-group-title4');
const locationGroupIntro4 = document.getElementById('location-group-intro4');
const locationGroupLocation4 = document.getElementById('location-group-location4');
const locationGroupCost4 = document.getElementById('location-group-cost4');

/*취향 맞춤 모임 정보*/
const favorGroupImg1 = document.getElementById('favor-group-img1');
const favorGroupTitle1 = document.getElementById('favor-group-title1');
const favorGroupIntro1 = document.getElementById('favor-group-intro1');
const favorGroupLocation1 = document.getElementById('favor-group-location1');
const favorGroupCost1 = document.getElementById('favor-group-cost1');

const favorGroupImg2 = document.getElementById('favor-group-img2');
const favorGroupTitle2 = document.getElementById('favor-group-title2');
const favorGroupIntro2 = document.getElementById('favor-group-intro2');
const favorGroupLocation2 = document.getElementById('favor-group-location2');
const favorGroupCost2 = document.getElementById('favor-group-cost2');

const favorGroupImg3 = document.getElementById('favor-group-img3');
const favorGroupTitle3 = document.getElementById('favor-group-title3');
const favorGroupIntro3 = document.getElementById('favor-group-intro3');
const favorGroupLocation3 = document.getElementById('favor-group-location3');
const favorGroupCost3 = document.getElementById('favor-group-cost3');

const favorGroupImg4 = document.getElementById('favor-group-img4');
const favorGroupTitle4 = document.getElementById('favor-group-title4');
const favorGroupIntro4 = document.getElementById('favor-group-intro4');
const favorGroupLocation4 = document.getElementById('favor-group-location4');
const favorGroupCost4 = document.getElementById('favor-group-cost4');

import { db } from './firebase.js';
import { getDocs, query, where, collection } from 'firebase/firestore';

const goodGroup = []; /*글로모여 추천 모임 배열*/
const deadlineGroup = []; /*자체 공간 보유 모임 배열*/
const locationGroup = []; /*지역 맞춤 모임 배열*/
const favorGroup = []; /*취향 맞춤 모임 배열*/

async function groupFirstSearch(option) { /* gFS 함수 */
  const targetGroup = await query(collection(db, 'group'), where('title', '==', option));
  /* tG: title == option 조건을 충족하는 모임 db의 집합*/
  const targetSnap = await getDocs(targetGroup);
  /* tS: tG의 db 가져오기 */

  switch (option) { /*option 조건에 속하는 모임 db 정보를 goodGroup에 넣기*/
    case '글바람':
      targetSnap.forEach((doc) => {
        goodGroup.push(doc.data());
      });

      break;

    case '정규모임 START':
      targetSnap.forEach((doc) => {
        goodGroup.push(doc.data());
      });

      break;

    case '미네르바의 부엉이 - 시낭독모임':
      targetSnap.forEach((doc) => {
        goodGroup.push(doc.data());
      });

      break;

    case '여우네 독서모임':
      targetSnap.forEach((doc) => {
        goodGroup.push(doc.data());
      });

      break;
  }
}


async function groupTitleSearch(option) { /* gTS 함수 */
  const targetGroup = await query(collection(db, 'group'), where('title', '==', option));
  /* tG: title == option 조건을 충족하는 모임 db의 집합*/
  const targetSnap = await getDocs(targetGroup);
  /* tS: tG의 db 가져오기 */

  switch (option) { /*option 조건에 속하는 모임 db 정보를 dG에 넣기*/
    case '글바람':
      targetSnap.forEach((doc) => {
        deadlineGroup.push(doc.data());
      });

      break;

    case '정규모임 START':
      targetSnap.forEach((doc) => {
        deadlineGroup.push(doc.data());
      });

      break;

    case '미네르바의 부엉이 - 시낭독모임':
      targetSnap.forEach((doc) => {
        deadlineGroup.push(doc.data());
      });

      break;

    case '여우네 독서모임':
      targetSnap.forEach((doc) => {
        deadlineGroup.push(doc.data());
      });

      break;
  }
}

async function groupLocationSearch(option) { /*gLS 함수*/
  const targetGroup = await query(collection(db, 'group'), where('location', '==', option));
  /* tG: location == option 조건을 충족하는 모임 db의 집합*/
  const targetSnap = await getDocs(targetGroup);
  /* tS: tG의 db 가져오기 */


  switch (option) { /*option 조건에 속하는 모임 db 정보 넣기*/
    case '미네르바의 부엉이':
      targetSnap.forEach((doc) => {
        goodGroup.push(doc.data()); // goodGroup에 넣기
      });

      break;

    case '책방일지':
      targetSnap.forEach((doc) => {
        favorGroup.push(doc.data()); // favorGroup에 넣기
      });

      break;

    case '책방다독':
      targetSnap.forEach((doc) => {
        favorGroup.push(doc.data()); // favorGroup에 넣기
      });

      break;
  }
}

async function groupClassSearch(option) {
  const targetGroup = await query(collection(db, 'group'), where('class', '==', option));
   /* tG: class == option 조건을 충족하는 모임 db의 집합*/
  const targetSnap = await getDocs(targetGroup);
  /* tS: tG의 db 가져오기 */

  switch (option) { /*option 조건에 속하는 모임 db 정보 넣기*/
    case '글쓰기':
      targetSnap.forEach((doc) => {
        favorGroup.push(doc.data());  // favorGroup에 넣기
      });

      break;

    case '독서':
      targetSnap.forEach((doc) => {
        locationGroup.push(doc.data()); // locationGroup에 넣기
      });

      break;
  }
}

await groupLocationSearch('미네르바의 부엉이');
/* "미네르바의 부엉이"에 해당하는 db 전부 가져오기 */
/* 이를 바탕으로 한 배열 생성! -> 그 중 4개 보여주기 */
/* 모임 사진, 제목, 소개, 장소, 비용 */

goodGroupImg1.src = goodGroup[0].groupImage;
goodGroupTitle1.innerHTML = goodGroup[0].title;
goodGroupIntro1.innerHTML = goodGroup[0].intro;
goodGroupLocation1.innerHTML = '장소: ' + goodGroup[0].location;
goodGroupCost1.innerHTML = goodGroup[0].cost;

goodGroupImg2.src = goodGroup[1].groupImage;
goodGroupTitle2.innerHTML = goodGroup[1].title;
goodGroupIntro2.innerHTML = goodGroup[1].intro;
goodGroupLocation2.innerHTML = '장소: ' + goodGroup[1].location;
goodGroupCost2.innerHTML = goodGroup[1].cost;

goodGroupImg3.src = goodGroup[2].groupImage;
goodGroupTitle3.innerHTML = goodGroup[2].title;
goodGroupIntro3.innerHTML = goodGroup[2].intro;
goodGroupLocation3.innerHTML = '장소: ' + goodGroup[2].location;
goodGroupCost3.innerHTML = goodGroup[2].cost;

goodGroupImg4.src = goodGroup[3].groupImage;
goodGroupTitle4.innerHTML = goodGroup[3].title;
goodGroupIntro4.innerHTML = goodGroup[3].intro;
goodGroupLocation4.innerHTML = '장소: ' + goodGroup[3].location;
goodGroupCost4.innerHTML = goodGroup[3].cost;

/* gTS 함수 실행 */
await groupTitleSearch('글바람');
await groupTitleSearch('정규모임 START');
await groupTitleSearch('미네르바의 부엉이 - 시낭독모임');
await groupTitleSearch('여우네 독서모임');

/* 모임 사진, 제목, 소개, 장소, 비용 */
deadlineGroupImg1.src = deadlineGroup[0].groupImage;
deadlineGroupTitle1.innerHTML = deadlineGroup[0].title;
deadlineGroupIntro1.innerHTML = deadlineGroup[0].intro;
deadlineGroupLocation1.innerHTML = '장소: ' + deadlineGroup[0].location;
deadlineGroupCost1.innerHTML = deadlineGroup[0].cost;

deadlineGroupImg2.src = deadlineGroup[1].groupImage;
deadlineGroupTitle2.innerHTML = deadlineGroup[1].title;
deadlineGroupIntro2.innerHTML = deadlineGroup[1].intro;
deadlineGroupLocation2.innerHTML = '장소: ' + deadlineGroup[1].location;
deadlineGroupCost2.innerHTML = deadlineGroup[1].cost;

deadlineGroupImg3.src = deadlineGroup[2].groupImage;
deadlineGroupTitle3.innerHTML = deadlineGroup[2].title;
deadlineGroupIntro3.innerHTML = deadlineGroup[2].intro;
deadlineGroupLocation3.innerHTML = '장소: ' + deadlineGroup[2].location;
deadlineGroupCost3.innerHTML = deadlineGroup[2].cost;

deadlineGroupImg4.src = deadlineGroup[3].groupImage;
deadlineGroupTitle4.innerHTML = deadlineGroup[3].title;
deadlineGroupIntro4.innerHTML = deadlineGroup[3].intro;
deadlineGroupLocation4.innerHTML = '장소: ' + deadlineGroup[3].location;
deadlineGroupCost4.innerHTML = deadlineGroup[3].cost;

// gCS 함수 실행 ~ 독서 class에 해당하는 db 넣기
await groupClassSearch('독서');

/* 모임 사진, 제목, 소개, 장소, 비용 */
locationGroupImg1.src = locationGroup[0].groupImage;
locationGroupTitle1.innerHTML = locationGroup[0].title;
locationGroupIntro1.innerHTML = locationGroup[0].intro;
locationGroupLocation1.innerHTML = '장소: ' + locationGroup[0].location;
locationGroupCost1.innerHTML = locationGroup[0].cost;

locationGroupImg2.src = locationGroup[1].groupImage;
locationGroupTitle2.innerHTML = locationGroup[1].title;
locationGroupIntro2.innerHTML = locationGroup[1].intro;
locationGroupLocation2.innerHTML = '장소: ' + locationGroup[1].location;
locationGroupCost2.innerHTML = locationGroup[1].cost;

locationGroupImg3.src = locationGroup[2].groupImage;
locationGroupTitle3.innerHTML = locationGroup[2].title;
locationGroupIntro3.innerHTML = locationGroup[2].intro;
locationGroupLocation3.innerHTML = '장소: ' + locationGroup[2].location;
locationGroupCost3.innerHTML = locationGroup[2].cost;

locationGroupImg4.src = locationGroup[3].groupImage;
locationGroupTitle4.innerHTML = locationGroup[3].title;
locationGroupIntro4.innerHTML = locationGroup[3].intro;
locationGroupLocation4.innerHTML = '장소: ' + locationGroup[3].location;
locationGroupCost4.innerHTML = locationGroup[3].cost;

/* gCS 함수 ~ 글쓰기 class에 해당하는 db 넣기*/
await groupClassSearch('글쓰기'); 

/* 모임 사진, 제목, 소개, 장소, 비용 */
favorGroupImg1.src = favorGroup[0].groupImage;
favorGroupTitle1.innerHTML = favorGroup[0].title;
favorGroupIntro1.innerHTML = favorGroup[0].intro;
favorGroupLocation1.innerHTML = '장소: ' + favorGroup[0].location;
favorGroupCost1.innerHTML = favorGroup[0].cost;

favorGroupImg2.src = favorGroup[1].groupImage;
favorGroupTitle2.innerHTML = favorGroup[1].title;
favorGroupIntro2.innerHTML = favorGroup[1].intro;
favorGroupLocation2.innerHTML = '장소: ' + favorGroup[1].location;
favorGroupCost2.innerHTML = favorGroup[1].cost;

favorGroupImg3.src = favorGroup[2].groupImage;
favorGroupTitle3.innerHTML = favorGroup[2].title;
favorGroupIntro3.innerHTML = favorGroup[2].intro;
favorGroupLocation3.innerHTML = '장소: ' + favorGroup[2].location;
favorGroupCost3.innerHTML = favorGroup[2].cost;

favorGroupImg4.src = favorGroup[3].groupImage;
favorGroupTitle4.innerHTML = favorGroup[3].title;
favorGroupIntro4.innerHTML = favorGroup[3].intro;
favorGroupLocation4.innerHTML = '장소: ' + favorGroup[3].location;
favorGroupCost4.innerHTML = favorGroup[3].cost;

// 모임 상세페이지 이동 및 해당 모임 데이터 localStorage에 저장

const groupCard = document.querySelectorAll('.group-info'); 
// group-info 클래스에 해당하는 요소
// category.js 요소와 함꼐 보기 (groupCard 존재)
console.log(groupCard[0].childNodes[5]); 
// groupCard 1st 요소의 6th 자식 요소

for (let i = 0; i < groupCard.length; i++) {
  groupCard[i].addEventListener('click', async () => { /* 클릭 */
    const targetGroupTitle = groupCard[i].childNodes[5].childNodes[1].textContent;
    /* tGT: 해당 그룹카드 > 6번째 자식 노드 > 2번째 자식 요소 */

    const targetGroup = query(collection(db, 'group'), where('title', '==', targetGroupTitle));
    const targetSnap = await getDocs(targetGroup);

    targetSnap.forEach((doc) => {
      localStorage.setItem('targetGroupInfo', JSON.stringify(doc.data()));
      document.location.href = './detail1.html';
    });
  });
}

// feedback
import { database } from './firebase';
import { ref, set } from 'firebase/database';

const feedback = document.querySelector('#feedback'); // id == feedback 요소 선택
const submitBtn = document.querySelector('#submitFeedback'); // id == submitFeedback 요소 선택

submitBtn.addEventListener('click', () => {
  const now = new Date();

  const feedbackText = JSON.stringify(feedback.value); // feedback 값을 문자열로 바꾸기

  if (feedback.value != '') {  // feedback 값이 공백이 아닐 때
    try {
      storeFeedback(now, feedbackText); // db에 feedback 콘텐츠 저장
    } catch (error) {
      console.error(error);
    }

    feedback.value = ''; // feedback 값이 공백
    alert('소중한 의견 감사합니다!');
  }
});

function storeFeedback(now, data) {
  set(ref(database, 'feedback/' + now), {
    time: now,
    feedback: data,
  });
}
