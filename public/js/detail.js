const groupTitle = document.querySelector('.g-name');
const groupIntro = document.querySelector('.g-intro');
const groupAddress = document.querySelector('.g-address');

const groupPurpose = document.querySelector('#g-purpose');
const groupGanre = document.querySelector('#g-ganre');
const groupMood = document.querySelector('#g-mood');
const groupContent = document.querySelector('#g-content');
const groupPeople = document.querySelector('#g-people');
const groupCost = document.querySelector('#g-cost');

const hostImg = document.querySelector('#host-img');
const hostName = document.querySelector('#host-name');
const hostContent = document.querySelector('#host-content');
const hostSNS = document.querySelector('#host-sns');

const startTime = document.querySelector('#start-time');
const endTime = document.querySelector('#end-time');

const receiveGroupInfo = JSON.parse(localStorage.getItem('targetGroupInfo'));

groupTitle.innerHTML = receiveGroupInfo.title;
groupIntro.innerHTML = receiveGroupInfo.intro;
groupPurpose.innerHTML = '#' + receiveGroupInfo.purpose;
groupGanre.innerHTML = '#' + receiveGroupInfo.ganre;
groupMood.innerHTML = '#' + receiveGroupInfo.mood;
groupContent.innerHTML = receiveGroupInfo.content;
groupCost.innerHTML = receiveGroupInfo.cost;

groupAddress.innerHTML =
  '<i class="fas fa-solid fa-map-pin" style="color: gray"></i> ' + receiveGroupInfo.address;

if (receiveGroupInfo.peopleMin == null) {
  groupPeople.innerHTML = '최대 ' + receiveGroupInfo.peopleMax + '명';
} else {
  groupPeople.innerHTML =
    '최소 ' + receiveGroupInfo.peopleMin + ' ~ ' + receiveGroupInfo.peopleMax + '명';
}

if (receiveGroupInfo.hostContent) {
  hostImg.src = receiveGroupInfo.hostImage;
} else {
  hostImg.alt = '';
}

if (receiveGroupInfo.hostNmae == undefined) {
  hostName.innerHTML = '';
} else {
  hostName.innerHTML = receiveGroupInfo.hostNmae + ' >';
}

hostContent.innerHTML = receiveGroupInfo.hostContent;

if (receiveGroupInfo.instagram == undefined) {
  hostSNS.innerHTML = '';
} else {
  hostSNS.innerHTML =
    '<i class="fa fa-brands fa-instagram" style="color: gray"></i> ' + receiveGroupInfo.instagram;
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
