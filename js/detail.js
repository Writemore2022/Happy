// import { db } from './firebase.js';
// import {
//   getDoc,
//   getDocs,
//   doc,
//   query,
//   where,
//   collection,
// } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js';

const groupTitle = document.querySelector('.g-name');
const groupIntro = document.querySelector('.g-intro');
const groupAddress = document.querySelector('.g-address');

const groupPurpose = document.querySelector('#g-purpose');
const groupGanre = document.querySelector('#g-ganre');
const groupMood = document.querySelector('#g-mood');
const groupContent = document.querySelector('#g-content');
const groupPeople = document.querySelector('#g-people');
const groupCost = document.querySelector('#g-cost');

const receiveGroupInfo = JSON.parse(localStorage.getItem('targetGroupInfo'));
console.log(receiveGroupInfo);

groupTitle.innerHTML = receiveGroupInfo.title;
groupIntro.innerHTML = receiveGroupInfo.intro;
groupPurpose.innerHTML = '#' + receiveGroupInfo.purpose;
groupGanre.innerHTML = '#' + receiveGroupInfo.ganre;
groupMood.innerHTML = '#' + receiveGroupInfo.mood;
groupContent.innerHTML = receiveGroupInfo.content;
groupCost.innerHTML = receiveGroupInfo.cost;

if (receiveGroupInfo.peopleMin == null) {
  groupPeople.innerHTML = '최대 ' + receiveGroupInfo.peopleMax + '명';
} else {
  groupPeople.innerHTML =
    '최소 ' + receiveGroupInfo.peopleMin + ' ~ ' + receiveGroupInfo.peopleMax + '명';
}
