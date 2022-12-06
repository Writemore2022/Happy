const submenu = document.querySelector('#write-submenu');

const writeTotal = document.querySelector('#write-total');
const writePurpose = document.querySelector('#write-purpose');
const writeganre = document.querySelector('#write-ganre');
const writeMood = document.querySelector('#write-mood');

submenu.addEventListener('click', (e) => {
  document.location.href = './writeGroup.html';
  console.log(e.target.innerHTML + ' 갑니다?');

  console.log(e.target.innerHTML);

  let select = e.target.innerHTML;

  name(select);

  //   window.addEventListener('DOMContentLoaded', () => {
  //     if (select == '전체보기') {
  //       writeTotal.style.color = 'red';
  //     } else if (select == '목적') {
  //       writePurpose.style.color = 'red';
  //     } else if (select == '장르') {
  //       writeganre.style.color = 'red';
  //     } else if (select == '전체보기') {
  //       writeMood.style.color = 'red';
  //     }
  //   });
});

function name(select) {
  if (select == '전체보기') {
    writeTotal.style.color = 'red';
  } else if (select == '목적') {
    writePurpose.style.color = 'red';
  } else if (select == '장르') {
    writeganre.style.color = 'red';
  } else if (select == '전체보기') {
    writeMood.style.color = 'red';
  }
}
