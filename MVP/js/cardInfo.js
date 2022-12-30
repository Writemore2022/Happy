const groupName = document.querySelectorAll('#group-name');
const hashtagGanre = document.querySelectorAll('#hashtag-ganre');
const hashtagPurpose = document.querySelectorAll('#hashtag-purpose');
const hashtagMood = document.querySelectorAll('#hashtag-mood');

const popularityBtn = document.querySelector('#popularity-btn');
const deadlineBtn = document.querySelector('#deadline-btn');

let writeArr = daegu;

writePurpose.addEventListener('click', () => {
  let writeArr = [];

  for (let i = 0; i < writeArr.length; i++) {
    groupName[i].innerHTML = writeArr[i].name;
    hashtagGanre[i].innerHTML = '#' + writeArr[i].ganre;
    hashtagPurpose[i].innerHTML = '#' + writeArr[i].purpose;
    hashtagMood[i].innerHTML = '#' + writeArr[i].mood;
  }

  for (let i = 0; i < daegu.length; i++) {
    if (daegu[i].purpose.includes('등단')) {
      console.log(daegu[i].name);

      writeArr.push(daegu[i]);
      console.log(writeArr);
    }
  }
});

function shuffleArray(array) {
  array.sort(() => Math.random() - 0.5);
}

popularityBtn.addEventListener(
  'click',
  () => {
    shuffleArray(writeArr);

    for (let i = 0; i < writeArr.length; i++) {
      groupName[i].innerHTML = writeArr[i].name;
      hashtagGanre[i].innerHTML = '#' + writeArr[i].ganre;
      hashtagPurpose[i].innerHTML = '#' + writeArr[i].purpose;
      hashtagMood[i].innerHTML = '#' + writeArr[i].mood;
    }
  },
  { once: true }
);

deadlineBtn.addEventListener(
  'click',
  () => {
    shuffleArray(writeArr);

    for (let i = 0; i < writeArr.length; i++) {
      groupName[i].innerHTML = writeArr[i].name;
      hashtagGanre[i].innerHTML = '#' + writeArr[i].ganre;
      hashtagPurpose[i].innerHTML = '#' + writeArr[i].purpose;
      hashtagMood[i].innerHTML = '#' + writeArr[i].mood;
    }
  },
  { once: true }
);

// for (let i = 0; i < writeArr.length; i++) {
//   groupName[i].innerHTML = writeArr[i].name;
//   hashtagGanre[i].innerHTML = '#' + writeArr[i].ganre;
//   hashtagPurpose[i].innerHTML = '#' + writeArr[i].purpose;
//   hashtagMood[i].innerHTML = '#' + writeArr[i].mood;
// }
