// 모임 정보 데이터 불러오기 / 김준수

/* class 선택 ~ 그룹 정보 (사진, 제목, 소개, 장소)*/
const groupImg = document.querySelector('.g-img'); 
const groupTitle = document.querySelector('.g-name');
const groupIntro = document.querySelector('.g-intro');
const groupAddress = document.querySelector('.g-address');

/* id / class 선택 ~ 카테고리(목적, 장르, 분위기), 모임 세부사항, 대상, 참가비*/ 
const groupPurpose = document.querySelector('#g-purpose');
const groupGanre = document.querySelector('#g-ganre');
const groupMood = document.querySelector('#g-mood');
const groupContent = document.querySelector('#g-content');
const groupTarget = document.querySelector('.g-target');
const groupPeople = document.querySelector('#g-people');
const groupCost = document.querySelector('#g-cost');

/*모임장 (이미지, 닉네임, 소개, sns)*/
const hostPage = document.querySelector('.host-page');
const hostImg = document.querySelector('#host-img');
const hostName = document.querySelector('#host-name');
const hostContent = document.querySelector('#host-content');
const hostSNS = document.querySelector('#host-sns');

/* 모임 시간 (시작, 끝) */
const startTime = document.querySelector('#start-time');
const endTime = document.querySelector('#end-time');

/* 모임 정보 받아오기 */
const receiveGroupInfo = JSON.parse(localStorage.getItem('targetGroupInfo'));

/*모임이미지 X -> test이미지 사용. 모임이미지 O -> 데이터에 존재하는 이미지 받아오기*/
if (receiveGroupInfo.groupImage == undefined) {
  // undefined: 값이 지정되지 않은 경우
  // null: 해당 변수가 어떤 객체도 가리키고 있지 않음
  groupImg.src = './assets/images/groupImages/group_test5.jpg';
} else {
  groupImg.src = receiveGroupInfo.groupImage;
}

/*각 클래스에 해당하는 태그에 innerHTML을 이용해 데이터 삽입*/
groupTitle.innerHTML = receiveGroupInfo.title;
groupIntro.innerHTML = receiveGroupInfo.intro;
groupPurpose.innerHTML = '#' + receiveGroupInfo.purpose;
groupGanre.innerHTML = '#' + receiveGroupInfo.genre;
groupMood.innerHTML = '#' + receiveGroupInfo.mood;
groupContent.innerHTML = receiveGroupInfo.content;
groupCost.innerHTML = receiveGroupInfo.cost;

//모임 대상, 내용에 h2태그와 div태그 생성해서 삽입
const groupTargetTitle = document.createElement('h2');
const groupTargetContent = document.createElement('div');
groupTargetTitle.innerHTML = '모임 대상';

// 모임 대상 X -> 공백, 모임 대상 O -> 모임 대상에 제목, 내용 영역 추가! 내용 영역에 데이터 정보 삽입
if (receiveGroupInfo.target == undefined) {
  groupTarget.innerHTML = '';
} else {
  console.log(receiveGroupInfo.target);
  groupTarget.appendChild(groupTargetTitle);
  groupTargetContent.innerHTML = receiveGroupInfo.target;
  groupTarget.appendChild(groupTargetContent);
}

// 주소 삽입
groupAddress.innerHTML =
  '<i class="fas fa-solid fa-map-pin" style="color: gray"></i> ' + receiveGroupInfo.address;

// 사람 최소 명수가 표기X -> 최대만 표시!, 나머지 경우 -> 최소 몇 명 ~ 최대 몇 명
if (receiveGroupInfo.peopleMin == null) {
  groupPeople.innerHTML = '최대 ' + receiveGroupInfo.peopleMax + '명';
} else {
  groupPeople.innerHTML =
    '최소 ' + receiveGroupInfo.peopleMin + ' ~ ' + receiveGroupInfo.peopleMax + '명';
}

// 모임장 이미지 (있으면 데이터에서 추출하여 넣기. 없으면 공백)
if (receiveGroupInfo.hostContent) {
  hostImg.src = receiveGroupInfo.hostImage;
} else {
  hostImg.src = '';
}

// 모임장 이름
if (receiveGroupInfo.hostName == undefined) {
  hostName.innerHTML = '';
} else {
  hostName.innerHTML = receiveGroupInfo.hostNmae + ' >';
}

// 모임장 한 줄 소개 (모임장 이름 없을 때, 준비 중! 띄우기)
if (receiveGroupInfo.hostName == undefined) {
  hostPage.innerHTML = '준비 중입니다.';
  hostPage.style.display = 'flex';
  hostPage.style.justifyContent = 'center';
  hostPage.style.alignItems = 'center';
}

hostContent.innerHTML = receiveGroupInfo.hostContent;

// 모임장 SNS
if (receiveGroupInfo.instagram == undefined) {
  hostSNS.innerHTML = '';
} else {
  hostSNS.innerHTML =
    '<i class="fa fa-brands fa-instagram" style="color: gray"></i> ' + receiveGroupInfo.instagram;
}

// 모임 날짜 (주간 표시) : 월~일 요소 지정
const groupWeek = document.querySelector('.res-day');

// groupWeek 요소의 하위요소 텍스트 ("월" ~ "일")과 데이터 요소의 요일이 일치 -> 날짜 표시!
for (let i = 0; i < groupWeek.childNodes.length; i++) {
  if (groupWeek.childNodes[i].innerHTML == receiveGroupInfo.week) {
    groupWeek.childNodes[i].className = 'r-day';
  }
}

// 시작 시간 데이터가 존재할 때
if (receiveGroupInfo.startTime != undefined) {
  const start = String(receiveGroupInfo.startTime);
  console.log(start.length);

  if (start.length == 4) {
    const slice = start.replace(/(\d)(?=(?:\d{2})+(?!\d))/g, '$1 : ');
    startTime.innerHTML = slice + ' 시 ~';
  } else {
    startTime.innerHTML = start + ' 시 ~';
  }
}
