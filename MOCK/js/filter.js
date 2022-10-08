const first = document.querySelector('#locations');
const second = document.querySelector('#purposes');
const recommend = document.querySelector('#recommend');
const info = document.querySelector('#groupInfo');

let select = {};

function goPurposes(loca) {
  first.style.WebkitAnimation = 'fadeOut 1s';
  first.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    second.style.WebkitAnimation = 'fadeIn 1s';
    second.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      first.style.display = 'none';
      second.style.display = 'block';
    }, 450);
  });

  select.location = loca;
}

function goRecommend(purp) {
  second.style.WebkitAnimation = 'fadeOut 1s';
  second.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    recommend.style.WebkitAnimation = 'fadeIn 1s';
    recommend.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      second.style.display = 'none';
      recommend.style.display = 'block';
    }, 450);
  });

  select.purpose = purp;

  recommendGroup();
  addRecommend();
}

function recommendGroup() {
  let data = [];

  sl = select.location;
  sp = select.purpose;

  for (let i = 0; i < group.length; i++) {
    if (group[i].location === sl && group[i].purpose === sp) {
      data.push(group[i]);
    }
  }
  for (let i = 0; i < group.length; i++) {
    if (group[i].location === sl && group[i].purpose === sp) {
    } else if (group[i].location === sl || group[i].purpose === sp) {
      data.push(group[i]);
    }
  }

  return data;
}

function addRecommend() {
  const groupName1 = document.querySelector('.groupName1');
  groupName1.innerHTML = recommendGroup()[0].name;

  const groupLocation1 = document.querySelector('.groupLocation1');
  groupLocation1.innerHTML = '지역: 대구 ' + recommendGroup()[0].location;

  const groupPurpose1 = document.querySelector('.groupPurpose1');
  groupPurpose1.innerHTML = '목적: ' + recommendGroup()[0].purpose;

  const groupName2 = document.querySelector('.groupName2');
  groupName2.innerHTML = recommendGroup()[1].name;

  const groupLocation2 = document.querySelector('.groupLocation2');
  groupLocation2.innerHTML = '지역: 대구 ' + recommendGroup()[1].location;

  const groupPurpose2 = document.querySelector('.groupPurpose2');
  groupPurpose2.innerHTML = '목적: ' + recommendGroup()[1].purpose;

  const groupName3 = document.querySelector('.groupName3');
  groupName3.innerHTML = recommendGroup()[2].name;

  const groupLocation3 = document.querySelector('.groupLocation3');
  groupLocation3.innerHTML = '지역: 대구 ' + recommendGroup()[2].location;

  const groupPurpose3 = document.querySelector('.groupPurpose3');
  groupPurpose3.innerHTML = '목적: ' + recommendGroup()[2].purpose;
}

function reset() {
  recommend.style.display = 'none';
  first.style.display = 'block';
  first.style.animation = 'none';
  first.style.animation = 'none';

  select = {};
}

function goGroupInfo() {
  recommend.style.WebkitAnimation = 'fadeOut 1s';
  recommend.style.animation = 'fadeOut 1s';
  setTimeout(() => {
    info.style.WebkitAnimation = 'fadeIn 1s';
    info.style.animation = 'fadeIn 1s';
    setTimeout(() => {
      recommend.style.display = 'none';
      info.style.display = 'block';
    }, 450);
  });

  infoList();
}

function infoList() {
  const groupName = document.querySelector('#groupName');

  if (recommendGroup()[0].name == '이스터에그') {
    groupName.innerHTML =
      '<hr />' + '이 페이지를 캡쳐해서 보여주면 커피를 사준대요!';
  }
}

function goBack() {
  info.style.display = 'none';
  recommend.style.display = 'block';
  recommend.style.animation = 'none';
  recommend.style.animation = 'none';
}
