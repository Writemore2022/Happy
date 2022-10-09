const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

function goPurpose() {
  first.style.WebkitAnimation = 'fadeOutLeft 1s';
  first.style.animation = 'fadeOutLeft 1s';

  setTimeout(() => {
    location.href = 'purpose.html';
  }, 450);
}

function goGroupList() {
  second.style.WebkitAnimation = 'fadeOutLeft 1s';
  second.style.animation = 'fadeOutLeft 1s';

  setTimeout(() => {
    location.href = 'groupList.html';
  }, 450);
}

function backPurpose() {
  third.style.WebkitAnimation = 'fadeOutRight 1s';
  third.style.animation = 'fadeOutRight 1s';

  setTimeout(() => {
    location.href = 'purpose.html';
  }, 450);
}

function backLocation() {
  second.style.WebkitAnimation = 'fadeOutRight 1s';
  second.style.animation = 'fadeOutRight 1s';

  setTimeout(() => {
    location.href = 'location.html';
  }, 450);
}
