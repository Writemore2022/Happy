/* 카테고리 DB/김준수 */
/* 주석에서 변수 표기 시, 긴 변수 이름은 축약형으로 표현 (단어의 초성을 따옴)
    ex. helloEveryOne => hEO*/

import { db } from './firebase.js';
import { getDocs, query, where, collection } from 'firebase/firestore';

// 클래스 검색
const groupWrap = document.querySelector('.group-wrap');
const groupContainer = document.querySelector('.group-container');

// queryString: ?(물음표)로 시작하는 문자열 - 조건 표시를 위해 사용
// URLSearchParams를 통해 URL 파싱 (문자열 나누기) 가능!
const searchParams = new URLSearchParams(location.search);

//main 함수와 연결해서 보기!
// ex. ./category.html?purpose=등단
// param[0] -> ? 뒤에 있는 요소 중 첫번째 요소
// param[1] -> ? 뒤에 있는 요소 중 두번째 요소
for (const param of searchParams) {
  explainPage(param[0], param[1]); /*explainPage 함수*/
  categorySearch(param[0], param[1]); /*categorySearch 함수*/
}

async function explainPage(parent, child) {
  const categorySubTitle = document.createElement('div'); /*div요소 생성*/
  groupWrap.prepend(categorySubTitle); 
  /*gW 콘텐츠 앞에 cST 콘텐츠 추가*/

  const categorySubTitleText = document.createElement('p'); /*p요소 생성*/
  categorySubTitle.appendChild(categorySubTitleText); 
  /*cST의 자식 노드 리스트에 cSTT를 마지막 자식으로 붙임*/
  categorySubTitleText.innerHTML = child; 
  /*cSTT 안에 child 콘텐츠 삽입 ex. 등단*/

  const categoryTitle = document.createElement('h1'); /*h1 요소 생성*/
  groupWrap.prepend(categoryTitle);
  /*gW 콘텐츠 앞에 cT 콘텐츠 추가*/

  const categoryTitleText = document.createElement('a'); /*a 요소 생성*/
  categoryTitle.appendChild(categoryTitleText); 
  /*cT의 자식 노드 리스트에 cTT를 마지막 자식으로 붙임*/
  categoryTitleText.innerHTML = parent; 
  /*cTT 안에 parent 콘텐츠 삽입 ex. 목적*/

  /*parent 요소 영문 > 한글로 변경*/
  if (parent == 'purpose') {
    categoryTitleText.innerHTML = '목적';
  } else if (parent == 'genre') {
    categoryTitleText.innerHTML = '장르';
  } else if (parent == 'mood') {
    categoryTitleText.innerHTML = '분위기';
  }
}

/*async ~ await (비동기식 함수) AJAX*/
async function categorySearch(parent, child) {
  const targetGroup = await query(collection(db, 'group'), where(parent, '==', child));
  // tG: parent == child 조건의 모든 db 집합 검색
  const targetSnap = await getDocs(targetGroup);
  // tS: tG의 db 가져오기

  /*tS의 각 데이터를 cGC함수 변수로 사용*/
  targetSnap.forEach((doc) => {
    createGroupCard(doc.data());
  });

  // group-info 클래스 요소를 가르킴
  const groupCard = document.querySelectorAll('.group-info');

  for (let i = 0; i < groupCard.length; i++) {
    groupCard[i].addEventListener('click', async () => { /* 각 그룹 카드 클릭 */
      const targetGroupTitle = groupCard[i].childNodes[1].childNodes[0].textContent;
      /*그룹카드 요소> 자식노드의 두번째 요소 (ex. 등단, 친목..)> 자식노드 첫번쨰 요소(제목db) > 제목 컨텐츠(txt)*/

      const targetGroup = query(collection(db, 'group'), where('title', '==', targetGroupTitle));
      // tG: title == tGT 조건의 모든 db 집합 검색
      const targetSnap = await getDocs(targetGroup);
      // tS: tG의 db 가져오기

      targetSnap.forEach((doc) => { //tS의 각 요소에 대해서 반복문
        localStorage.setItem('targetGroupInfo', JSON.stringify(doc.data()));
        /*tGI에 data 쓰기
          data를 문자열로 바꾸어서 쓰기*/
        document.location.href = './detail1.html';
        /*현 문서에 있는 파일로 이동*/
      });
    });
  }

  if (groupCard.length == 0) { /*groupCard의 db가 존재 X*/
    groupContainer.innerHTML = '선택해주신 카테고리에 해당하는 모임이 아직 없습니다.';
    groupContainer.style.padding = '20px';
  }
}

function createGroupCard(data) { /*모임 등록 함수*/
  const groupInfo = document.createElement('div'); /*div 요소 생성*/
  groupInfo.className = 'group-info'; /*클래스 이름: group-info로 생성*/

  groupContainer.appendChild(groupInfo); /*gC의 자식요소에 gInfo 추가*/

  const groupImg = document.createElement('img'); /*img 요소 생성*/
  groupInfo.appendChild(groupImg); /*gInfo의 자식요소에 gImg 추가*/
  groupImg.className = 'group-img'; /*클래스 이름: group-img로 생성*/
  groupImg.src = data.groupImage; /*이미지 링크: db의 gImage*/

  const groupDetails = document.createElement('div'); /*div 요소 생성*/
  groupInfo.appendChild(groupDetails); /*gInfo의 자식요소에 gD 추가*/
  groupDetails.className = 'group-details'; /*클래스 이름: group-details로 생성*/

  const groupTitle = document.createElement('div'); /*div 요소 생성*/
  const groupIntro = document.createElement('div'); /*div 요소 생성*/
  const groupLocation = document.createElement('div'); /*div 요소 생성*/
  const groupCost = document.createElement('div'); /*div 요소 생성*/
  groupDetails.appendChild(groupTitle);/*gD의 자식요소에 gTitle 추가*/
  groupDetails.appendChild(groupIntro);/*gD의 자식요소에 gIntro 추가*/
  groupDetails.appendChild(groupLocation);/*gD의 자식요소에 gLocation 추가*/
  groupDetails.appendChild(groupCost);/*gD의 자식요소에 gCost 추가*/

  groupTitle.innerHTML = data.title; /*gT 텍스트에 db의 title 텍스트 삽입*/
  groupIntro.innerHTML = data.intro; /*gIntro 텍스트에 db의 intro 텍스트 삽입*/
  groupLocation.innerHTML = data.location; /*gL 텍스트에 db의 location 텍스트 삽입*/
  groupCost.innerHTML = data.cost; /*gC 텍스트에 db의 cost 텍스트 삽입*/
}
