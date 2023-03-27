const goodGroupTitle1 = document.getElementById('good-group-title1');
const goodGroupIntro1 = document.getElementById('good-group-intro1');
const goodGroupLocation1 = document.getElementById('good-group-location1');
const goodGroupCost1 = document.getElementById('good-group-cost1');

const goodGroupTitle2 = document.getElementById('good-group-title2');
const goodGroupIntro2 = document.getElementById('good-group-intro2');
const goodGroupLocation2 = document.getElementById('good-group-location2');
const goodGroupCost2 = document.getElementById('good-group-cost2');

const goodGroupTitle3 = document.getElementById('good-group-title3');
const goodGroupIntro3 = document.getElementById('good-group-intro3');
const goodGroupLocation3 = document.getElementById('good-group-location3');
const goodGroupCost3 = document.getElementById('good-group-cost3');

const goodGroupTitle4 = document.getElementById('good-group-title4');
const goodGroupIntro4 = document.getElementById('good-group-intro4');
const goodGroupLocation4 = document.getElementById('good-group-location4');
const goodGroupCost4 = document.getElementById('good-group-cost4');

const deadlineGroupTitle1 = document.getElementById('deadline-group-title1');
const deadlineGroupIntro1 = document.getElementById('deadline-group-intro1');
const deadlineGroupLocation1 = document.getElementById('deadline-group-location1');
const deadlineGroupCost1 = document.getElementById('deadline-group-cost1');

const deadlineGroupTitle2 = document.getElementById('deadline-group-title2');
const deadlineGroupIntro2 = document.getElementById('deadline-group-intro2');
const deadlineGroupLocation2 = document.getElementById('deadline-group-location2');
const deadlineGroupCost2 = document.getElementById('deadline-group-cost2');

const deadlineGroupTitle3 = document.getElementById('deadline-group-title3');
const deadlineGroupIntro3 = document.getElementById('deadline-group-intro3');
const deadlineGroupLocation3 = document.getElementById('deadline-group-location3');
const deadlineGroupCost3 = document.getElementById('deadline-group-cost3');

const deadlineGroupTitle4 = document.getElementById('deadline-group-title4');
const deadlineGroupIntro4 = document.getElementById('deadline-group-intro4');
const deadlineGroupLocation4 = document.getElementById('deadline-group-location4');
const deadlineGroupCost4 = document.getElementById('deadline-group-cost4');

const locationGroupTitle1 = document.getElementById('location-group-title1');
const locationGroupIntro1 = document.getElementById('location-group-intro1');
const locationGroupLocation1 = document.getElementById('location-group-location1');
const locationGroupCost1 = document.getElementById('location-group-cost1');

const locationGroupTitle2 = document.getElementById('location-group-title2');
const locationGroupIntro2 = document.getElementById('location-group-intro2');
const locationGroupLocation2 = document.getElementById('location-group-location2');
const locationGroupCost2 = document.getElementById('location-group-cost2');

const locationGroupTitle3 = document.getElementById('location-group-title3');
const locationGroupIntro3 = document.getElementById('location-group-intro3');
const locationGroupLocation3 = document.getElementById('location-group-location3');
const locationGroupCost3 = document.getElementById('location-group-cost3');

const locationGroupTitle4 = document.getElementById('location-group-title4');
const locationGroupIntro4 = document.getElementById('location-group-intro4');
const locationGroupLocation4 = document.getElementById('location-group-location4');
const locationGroupCost4 = document.getElementById('location-group-cost4');

const favorGroupTitle1 = document.getElementById('favor-group-title1');
const favorGroupIntro1 = document.getElementById('favor-group-intro1');
const favorGroupLocation1 = document.getElementById('favor-group-location1');
const favorGroupCost1 = document.getElementById('favor-group-cost1');

const favorGroupTitle2 = document.getElementById('favor-group-title2');
const favorGroupIntro2 = document.getElementById('favor-group-intro2');
const favorGroupLocation2 = document.getElementById('favor-group-location2');
const favorGroupCost2 = document.getElementById('favor-group-cost2');

const favorGroupTitle3 = document.getElementById('favor-group-title3');
const favorGroupIntro3 = document.getElementById('favor-group-intro3');
const favorGroupLocation3 = document.getElementById('favor-group-location3');
const favorGroupCost3 = document.getElementById('favor-group-cost3');

const favorGroupTitle4 = document.getElementById('favor-group-title4');
const favorGroupIntro4 = document.getElementById('favor-group-intro4');
const favorGroupLocation4 = document.getElementById('favor-group-location4');
const favorGroupCost4 = document.getElementById('favor-group-cost4');

import db from './firebase.js';
import {
  getDocs,
  query,
  where,
  collection,
  doc,
  getDoc,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

const goodGroup = [];
const deadlineGroup = [];
const locationGroup = [];
const favorGroup = [];

async function groupSearch(option) {
  const targetGroup = await query(collection(db, 'group'), where('option', '==', option));
  const targetSnap = await getDocs(targetGroup);

  switch (option) {
    case 'good':
      targetSnap.forEach((doc) => {
        goodGroup.push(doc.data());
      });

      break;

    case 'deadline':
      targetSnap.forEach((doc) => {
        deadlineGroup.push(doc.data());
      });

      break;
  }
}

async function groupLocationSearch(option) {
  const targetGroup = await query(collection(db, 'group'), where('location', '==', option));
  const targetSnap = await getDocs(targetGroup);

  switch (option) {
    case '미네르바의 부엉이':
      targetSnap.forEach((doc) => {
        goodGroup.push(doc.data());
      });

      break;

    case '책방일지':
      targetSnap.forEach((doc) => {
        favorGroup.push(doc.data());
      });

      break;

    case '책방다독':
      targetSnap.forEach((doc) => {
        favorGroup.push(doc.data());
      });

      break;
  }
}

async function groupClassSearch(option) {
  const targetGroup = await query(collection(db, 'group'), where('class', '==', option));
  const targetSnap = await getDocs(targetGroup);

  switch (option) {
    case '글쓰기':
      targetSnap.forEach((doc) => {
        deadlineGroup.push(doc.data());
      });

      break;

    case '독서':
      targetSnap.forEach((doc) => {
        locationGroup.push(doc.data());
      });

      break;
  }
}

await groupLocationSearch('미네르바의 부엉이');

goodGroupTitle1.innerHTML = goodGroup[0].title;
goodGroupIntro1.innerHTML = goodGroup[0].intro;
goodGroupLocation1.innerHTML = '장소: ' + goodGroup[0].location;
goodGroupCost1.innerHTML = goodGroup[0].cost;

goodGroupTitle2.innerHTML = goodGroup[1].title;
goodGroupIntro2.innerHTML = goodGroup[1].intro;
goodGroupLocation2.innerHTML = '장소: ' + goodGroup[1].location;
goodGroupCost2.innerHTML = goodGroup[1].cost;

goodGroupTitle3.innerHTML = goodGroup[2].title;
goodGroupIntro3.innerHTML = goodGroup[2].intro;
goodGroupLocation3.innerHTML = '장소: ' + goodGroup[2].location;
goodGroupCost3.innerHTML = goodGroup[2].cost;

goodGroupTitle4.innerHTML = goodGroup[3].title;
goodGroupIntro4.innerHTML = goodGroup[3].intro;
goodGroupLocation4.innerHTML = '장소: ' + goodGroup[3].location;
goodGroupCost4.innerHTML = goodGroup[3].cost;

await groupClassSearch('글쓰기');

deadlineGroupTitle1.innerHTML = deadlineGroup[0].title;
deadlineGroupIntro1.innerHTML = deadlineGroup[0].intro;
deadlineGroupLocation1.innerHTML = '장소: ' + deadlineGroup[0].location;
deadlineGroupCost1.innerHTML = deadlineGroup[0].cost;

deadlineGroupTitle2.innerHTML = deadlineGroup[1].title;
deadlineGroupIntro2.innerHTML = deadlineGroup[1].intro;
deadlineGroupLocation2.innerHTML = '장소: ' + deadlineGroup[1].location;
deadlineGroupCost2.innerHTML = deadlineGroup[1].cost;

deadlineGroupTitle3.innerHTML = deadlineGroup[2].title;
deadlineGroupIntro3.innerHTML = deadlineGroup[2].intro;
deadlineGroupLocation3.innerHTML = '장소: ' + deadlineGroup[2].location;
deadlineGroupCost3.innerHTML = deadlineGroup[2].cost;

deadlineGroupTitle4.innerHTML = deadlineGroup[3].title;
deadlineGroupIntro4.innerHTML = deadlineGroup[3].intro;
deadlineGroupLocation4.innerHTML = '장소: ' + deadlineGroup[3].location;
deadlineGroupCost4.innerHTML = deadlineGroup[3].cost;

await groupClassSearch('독서');

locationGroupTitle1.innerHTML = locationGroup[0].title;
locationGroupIntro1.innerHTML = locationGroup[0].intro;
locationGroupLocation1.innerHTML = '장소: ' + locationGroup[0].location;
locationGroupCost1.innerHTML = locationGroup[0].cost;

locationGroupTitle2.innerHTML = locationGroup[1].title;
locationGroupIntro2.innerHTML = locationGroup[1].intro;
locationGroupLocation2.innerHTML = '장소: ' + locationGroup[1].location;
locationGroupCost2.innerHTML = locationGroup[1].cost;

locationGroupTitle3.innerHTML = locationGroup[2].title;
locationGroupIntro3.innerHTML = locationGroup[2].intro;
locationGroupLocation3.innerHTML = '장소: ' + locationGroup[2].location;
locationGroupCost3.innerHTML = locationGroup[2].cost;

locationGroupTitle4.innerHTML = locationGroup[3].title;
locationGroupIntro4.innerHTML = locationGroup[3].intro;
locationGroupLocation4.innerHTML = '장소: ' + locationGroup[3].location;
locationGroupCost4.innerHTML = locationGroup[3].cost;

await groupLocationSearch('책방일지');
await groupLocationSearch('책방다독');

favorGroupTitle1.innerHTML = favorGroup[0].title;
favorGroupIntro1.innerHTML = favorGroup[0].intro;
favorGroupLocation1.innerHTML = '장소: ' + favorGroup[0].location;
favorGroupCost1.innerHTML = favorGroup[0].cost;

favorGroupTitle2.innerHTML = favorGroup[1].title;
favorGroupIntro2.innerHTML = favorGroup[1].intro;
favorGroupLocation2.innerHTML = '장소: ' + favorGroup[1].location;
favorGroupCost2.innerHTML = favorGroup[1].cost;

favorGroupTitle3.innerHTML = favorGroup[2].title;
favorGroupIntro3.innerHTML = favorGroup[2].intro;
favorGroupLocation3.innerHTML = '장소: ' + favorGroup[2].location;
favorGroupCost3.innerHTML = favorGroup[2].cost;

favorGroupTitle4.innerHTML = favorGroup[3].title;
favorGroupIntro4.innerHTML = favorGroup[3].intro;
favorGroupLocation4.innerHTML = '장소: ' + favorGroup[3].location;
favorGroupCost4.innerHTML = favorGroup[3].cost;

// 모임 상세페이지 이동 및 해당 모임 데이터 localStorage에 저장

const groupCard = document.querySelectorAll('.group-info');

for (let i = 0; i < groupCard.length; i++) {
  groupCard[i].addEventListener('click', async () => {
    const targetGroupTitle = groupCard[i].childNodes[5].childNodes[1].textContent;

    const targetGroup = query(collection(db, 'group'), where('title', '==', targetGroupTitle));
    const targetSnap = await getDocs(targetGroup);

    targetSnap.forEach((doc) => {
      localStorage.setItem('targetGroupInfo', JSON.stringify(doc.data()));
      console.log(doc.id, ' => ', doc.data());
      document.location.href = './detail1.html';
    });
  });
}
