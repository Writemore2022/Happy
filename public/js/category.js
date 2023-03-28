import { db } from './firebase.js';
import {
  getDocs,
  query,
  where,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

const groupWrap = document.querySelector('.group-wrap');
const groupContainer = document.querySelector('.group-container');

const searchParams = new URLSearchParams(location.search);

for (const param of searchParams) {
  explainPage(param[0], param[1]);
  categorySearch(param[0], param[1]);
}

async function explainPage(parent, child) {
  const categorySubTitle = document.createElement('div');
  groupWrap.prepend(categorySubTitle);

  const categorySubTitleText = document.createElement('p');
  categorySubTitle.appendChild(categorySubTitleText);
  categorySubTitleText.innerHTML = child;

  const categoryTitle = document.createElement('h1');
  groupWrap.prepend(categoryTitle);

  const categoryTitleText = document.createElement('a');
  categoryTitle.appendChild(categoryTitleText);
  categoryTitleText.innerHTML = parent;
}

async function categorySearch(parent, child) {
  const targetGroup = await query(collection(db, 'group'), where(parent, '==', child));
  const targetSnap = await getDocs(targetGroup);

  targetSnap.forEach((doc) => {
    createGroupCard(doc.data());
  });

  const groupCard = document.querySelectorAll('.group-info');

  for (let i = 0; i < groupCard.length; i++) {
    groupCard[i].addEventListener('click', async () => {
      const targetGroupTitle = groupCard[i].childNodes[1].childNodes[0].textContent;

      const targetGroup = query(collection(db, 'group'), where('title', '==', targetGroupTitle));
      const targetSnap = await getDocs(targetGroup);

      targetSnap.forEach((doc) => {
        localStorage.setItem('targetGroupInfo', JSON.stringify(doc.data()));
        document.location.href = './detail1.html';
      });
    });
  }

  if (groupCard.length == 0) {
    groupContainer.innerHTML = '선택하신 카테고리에 해당하는 모임이 아직 없습니다 ㅠㅠ';
  }
}

function createGroupCard(data) {
  const groupInfo = document.createElement('div');
  groupInfo.className = 'group-info';

  groupContainer.appendChild(groupInfo);

  const groupImg = document.createElement('img');
  groupInfo.appendChild(groupImg);
  groupImg.src = './assets/images/sample1.jpg';
  groupImg.className = 'group-img';

  const groupDetails = document.createElement('div');
  groupInfo.appendChild(groupDetails);
  groupDetails.className = 'group-details';

  const groupTitle = document.createElement('div');
  const groupIntro = document.createElement('div');
  const groupLocation = document.createElement('div');
  const groupCost = document.createElement('div');
  groupDetails.appendChild(groupTitle);
  groupDetails.appendChild(groupIntro);
  groupDetails.appendChild(groupLocation);
  groupDetails.appendChild(groupCost);

  groupTitle.innerHTML = data.title;
  groupIntro.innerHTML = data.intro;
  groupLocation.innerHTML = data.location;
  groupCost.innerHTML = data.cost;
}
