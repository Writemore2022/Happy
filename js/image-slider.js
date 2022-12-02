const daeguTitle = document.querySelector('#daegu-group-title');
const daeguPurpose = document.querySelector('#daegu-group-purpose');
const daeguGanre = document.querySelector('#daegu-group-ganre');
const daeguMood = document.querySelector('#daegu-group-mood');

const daeguPrev = document.querySelector('#daeguPrevBtn');
const daeguNext = document.querySelector('#daeguNextBtn');

const daeguCard = document.querySelector('.daegu');

let point = 0;

daeguTitle.innerHTML = daegu[point].name;
daeguPurpose.innerHTML = daegu[point].purpose;
daeguGanre.innerHTML = daegu[point].ganre;
daeguMood.innerHTML = daegu[point].mood;

daeguPrev.addEventListener('click', function () {
  if (point !== 0) {
    moveGroup(point - 1);
  } else if (point == 0) {
    moveGroup(daegu.length - 1);
  }

  //   daeguCard.style.transform = 'rotate(-5deg)';

  //   setTimeout(() => {
  //     daeguCard.style.transform = 'none';
  //   }, 150);
});

daeguNext.addEventListener('click', function () {
  if (point !== daegu.length - 1) {
    moveGroup(point + 1);
  } else if (point == daegu.length - 1) {
    moveGroup(0);
  }

  //   daeguCard.style.transform = 'rotate(5deg)';

  //   setTimeout(() => {
  //     daeguCard.style.transform = 'none';
  //   }, 150);
});

function moveGroup(num) {
  point = num;

  daeguTitle.innerHTML = daegu[point].name;
  daeguPurpose.innerHTML = daegu[point].purpose;
  daeguGanre.innerHTML = daegu[point].ganre;
  daeguMood.innerHTML = daegu[point].mood;
}