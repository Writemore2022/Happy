const groupName = document.querySelectorAll('#group-name');
const hashtagGanre = document.querySelectorAll('#hashtag-ganre');
const hashtagPurpose = document.querySelectorAll('#hashtag-purpose');
const hashtagMood = document.querySelectorAll('#hashtag-mood');

const popularityBtn = document.querySelector('#popularity-btn');
const deadlineBtn = document.querySelector('#deadline-btn');

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

popularityBtn.addEventListener(
  'click',
  () => {
    shuffleArray(daegu);

    for (let i = 0; i < daegu.length; i++) {
      groupName[i].innerHTML = daegu[i].name;
      hashtagGanre[i].innerHTML = '#' + daegu[i].ganre;
      hashtagPurpose[i].innerHTML = '#' + daegu[i].purpose;
      hashtagMood[i].innerHTML = '#' + daegu[i].mood;
    }
  },
  { once: true }
);

deadlineBtn.addEventListener(
  'click',
  () => {
    shuffleArray(daegu);

    for (let i = 0; i < daegu.length; i++) {
      groupName[i].innerHTML = daegu[i].name;
      hashtagGanre[i].innerHTML = '#' + daegu[i].ganre;
      hashtagPurpose[i].innerHTML = '#' + daegu[i].purpose;
      hashtagMood[i].innerHTML = '#' + daegu[i].mood;
    }
  },
  { once: true }
);

for (let i = 0; i < daegu.length; i++) {
  groupName[i].innerHTML = daegu[i].name;
  hashtagGanre[i].innerHTML = '#' + daegu[i].ganre;
  hashtagPurpose[i].innerHTML = '#' + daegu[i].purpose;
  hashtagMood[i].innerHTML = '#' + daegu[i].mood;
}
