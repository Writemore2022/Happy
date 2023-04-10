const groupImg = document.querySelector('.g-img');
const groupTitle = document.querySelector('.g-name');
const groupIntro = document.querySelector('.g-intro');
const groupAddress = document.querySelector('.g-address');

const groupPurpose = document.querySelector('#g-purpose');
const groupGanre = document.querySelector('#g-ganre');
const groupMood = document.querySelector('#g-mood');
const groupContent = document.querySelector('#g-content');
const groupTarget = document.querySelector('#g-target');
const groupPeople = document.querySelector('#g-people');
const groupCost = document.querySelector('#g-cost');

const hostPage = document.querySelector('.host-page');
const hostImg = document.querySelector('#host-img');
const hostName = document.querySelector('#host-name');
const hostContent = document.querySelector('#host-content');
const hostSNS = document.querySelector('#host-sns');

const startTime = document.querySelector('#start-time');
const endTime = document.querySelector('#end-time');

const receiveGroupInfo = JSON.parse(localStorage.getItem('targetGroupInfo'));

if (receiveGroupInfo.groupImage == undefined) {
  groupImg.src = './assets/images/groupImages/group_test5.jpg';
} else {
  groupImg.src = receiveGroupInfo.groupImage;
}

groupTitle.innerHTML = receiveGroupInfo.title;
groupIntro.innerHTML = receiveGroupInfo.intro;
groupPurpose.innerHTML = '#' + receiveGroupInfo.purpose;
groupGanre.innerHTML = '#' + receiveGroupInfo.genre;
groupMood.innerHTML = '#' + receiveGroupInfo.mood;
groupContent.innerHTML = receiveGroupInfo.content;
groupCost.innerHTML = receiveGroupInfo.cost;

const groupTargetTitle = document.createElement('h2');
const groupTargetContent = document.createElement('div');
groupTargetTitle.innerHTML = '모임 대상';

if (receiveGroupInfo.target == undefined) {
  groupTarget.innerHTML = '';
} else {
  console.log(receiveGroupInfo.target);
  groupTarget.appendChild(groupTargetTitle);
  groupTargetContent.innerHTML = receiveGroupInfo.target;
  groupTarget.appendChild(groupTargetContent);
}

groupAddress.innerHTML =
  '<i class="fas fa-solid fa-map-pin" style="color: gray"></i> ' + receiveGroupInfo.address;

if (receiveGroupInfo.peopleMin == null) {
  groupPeople.innerHTML = '최대 ' + receiveGroupInfo.peopleMax + '명';
} else {
  groupPeople.innerHTML =
    '최소 ' + receiveGroupInfo.peopleMin + ' ~ ' + receiveGroupInfo.peopleMax + '명';
}

const groupWeek = document.querySelector('.res-day');

for (let i = 0; i < groupWeek.childNodes.length; i++) {
  if (groupWeek.childNodes[i].innerHTML == receiveGroupInfo.week) {
    groupWeek.childNodes[i].className = 'r-day';
  }
}

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

{
  /* 
    <div class="host-page">
      <div class="host-left">
        <a href="#">
          <img id="host-img" alt="host-img" class="host-img" />
        </a>
      </div>
      <div class="host-right">
        <div class="host-name">
          <span>호스트</span>
          <span><a href="#" id="host-name"></a></span>
        </div>
        <div class="host-intro" id="host-content"></div>
        <div class="host-sns" id="host-sns">
          <i class="fa fa-brands fa-instagram" style="color: gray"></i>
        </div>
      </div>
    </div>
  */
}

if (receiveGroupInfo.hostNmae == undefined) {
  hostPage.innerHTML = '준비 중입니다.';
  hostPage.style.display = 'flex';
  hostPage.style.justifyContent = 'center';
  hostPage.style.alignItems = 'center';
  hostName.innerHTML = '';
} else {
  hostName.innerHTML = receiveGroupInfo.hostNmae + ' >';
}

if (receiveGroupInfo.hostContent) {
  hostImg.src = receiveGroupInfo.hostImage;
} else {
  hostImg.alt = '';
}

hostContent.innerHTML = receiveGroupInfo.hostContent;

if (receiveGroupInfo.instagram == undefined) {
  hostSNS.innerHTML = '';
} else {
  hostSNS.innerHTML =
    '<i class="fa fa-brands fa-instagram" style="color: gray"></i> ' + receiveGroupInfo.instagram;
}
