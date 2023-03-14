const goodGroupTitle1 = document.getElementById('good-group-title1');
const goodGroupIntro1 = document.getElementById('good-group-intro1');
const goodGroupCost1 = document.getElementById('good-group-cost1');

const goodGroupTitle2 = document.getElementById('good-group-title2');
const goodGroupIntro2 = document.getElementById('good-group-intro2');
const goodGroupCost2 = document.getElementById('good-group-cost2');

const goodGroupTitle3 = document.getElementById('good-group-title3');
const goodGroupIntro3 = document.getElementById('good-group-intro3');
const goodGroupCost3 = document.getElementById('good-group-cost3');

const goodGroupTitle4 = document.getElementById('good-group-title4');
const goodGroupIntro4 = document.getElementById('good-group-intro4');
const goodGroupCost4 = document.getElementById('good-group-cost4');

const deadlineGroupTitle1 = document.getElementById('deadline-group-title1');
const deadlineGroupIntro1 = document.getElementById('deadline-group-intro1');
const deadlineGroupCost1 = document.getElementById('deadline-group-cost1');

const deadlineGroupTitle2 = document.getElementById('deadline-group-title2');
const deadlineGroupIntro2 = document.getElementById('deadline-group-intro2');
const deadlineGroupCost2 = document.getElementById('deadline-group-cost2');

const deadlineGroupTitle3 = document.getElementById('deadline-group-title3');
const deadlineGroupIntro3 = document.getElementById('deadline-group-intro3');
const deadlineGroupCost3 = document.getElementById('deadline-group-cost3');

const deadlineGroupTitle4 = document.getElementById('deadline-group-title4');
const deadlineGroupIntro4 = document.getElementById('deadline-group-intro4');
const deadlineGroupCost4 = document.getElementById('deadline-group-cost4');

import { db } from './firebase.js';
import {
  getDocs,
  query,
  where,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

const goodGroup = [];
const deadlineGroup = [];

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

await groupSearch('good');
console.log(goodGroup);

goodGroupTitle1.innerHTML = goodGroup[0].title;
goodGroupIntro1.innerHTML = goodGroup[0].intro;
goodGroupCost1.innerHTML = goodGroup[0].cost.toLocaleString('ko-KR') + '원~';

goodGroupTitle2.innerHTML = goodGroup[1].title;
goodGroupIntro2.innerHTML = goodGroup[1].intro;
goodGroupCost2.innerHTML = goodGroup[1].cost.toLocaleString('ko-KR') + '원~';

goodGroupTitle3.innerHTML = goodGroup[2].title;
goodGroupIntro3.innerHTML = goodGroup[2].intro;
goodGroupCost3.innerHTML = goodGroup[2].cost.toLocaleString('ko-KR') + '원~';

goodGroupTitle4.innerHTML = goodGroup[3].title;
goodGroupIntro4.innerHTML = goodGroup[3].intro;
goodGroupCost4.innerHTML = goodGroup[3].cost.toLocaleString('ko-KR') + '원~';

await groupSearch('deadline');
console.log(deadlineGroup);

deadlineGroupTitle1.innerHTML = deadlineGroup[0].title;
deadlineGroupIntro1.innerHTML = deadlineGroup[0].intro;
deadlineGroupCost1.innerHTML = deadlineGroup[0].cost.toLocaleString('ko-KR') + '원~';

deadlineGroupTitle2.innerHTML = deadlineGroup[1].title;
deadlineGroupIntro2.innerHTML = deadlineGroup[1].intro;
deadlineGroupCost2.innerHTML = deadlineGroup[1].cost.toLocaleString('ko-KR') + '원~';

deadlineGroupTitle3.innerHTML = deadlineGroup[2].title;
deadlineGroupIntro3.innerHTML = deadlineGroup[2].intro;
deadlineGroupCost3.innerHTML = deadlineGroup[2].cost.toLocaleString('ko-KR') + '원~';

deadlineGroupTitle4.innerHTML = deadlineGroup[3].title;
deadlineGroupIntro4.innerHTML = deadlineGroup[3].intro;
deadlineGroupCost4.innerHTML = deadlineGroup[3].cost.toLocaleString('ko-KR') + '원~';
