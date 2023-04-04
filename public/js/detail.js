const groupTitle = document.querySelector('.g-name');
const groupIntro = document.querySelector('.g-intro');
const groupAddress = document.querySelector('.g-address');

const groupPurpose = document.querySelector('#g-purpose');
const groupGanre = document.querySelector('#g-ganre');
const groupMood = document.querySelector('#g-mood');
const groupContent = document.querySelector('#g-content');
const groupPeople = document.querySelector('#g-people');
const groupCost = document.querySelector('#g-cost');

const hostName = document.querySelector('#host-name');
const hostContent = document.querySelector('#host-content');

const receiveGroupInfo = JSON.parse(localStorage.getItem('targetGroupInfo'));
console.log(receiveGroupInfo);

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

if (receiveGroupInfo.hostName != undefined) {
  hostName.innerHTML = receiveGroupInfo.hostName;
}

hostContent.innerHTML = receiveGroupInfo.hostContent;
