const first = document.querySelector('.first');
const second = document.querySelector('.second');
const third = document.querySelector('.third');

function goGroupList() {
  second.style.WebkitAnimation = 'fadeOutLeft 1s';
  second.style.animation = 'fadeOutLeft 1s';

  setTimeout(() => {
    location.href = 'groupList.html';
  }, 450);
}

function goPurpose() {
  third.style.WebkitAnimation = 'fadeOutRight 1s';
  third.style.animation = 'fadeOutRight 1s';

  setTimeout(() => {
    location.href = 'purpose.html';
  }, 450);
}
