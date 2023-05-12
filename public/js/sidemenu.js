/* 사이드 메뉴/김준수 */
/* 페이지 사이즈 변경으로 헤더 메뉴가 더보기 메뉴로 변경되었을 때 나타나는 페이지 */

const menuIcon = document.querySelector('.menu-icon'); /*menu-icon 클래스 선택*/
const nav = document.querySelector('nav'); /*nav 선택*/
const link = document.querySelector('.nav-links'); /*nav-links 클래스 선택*/
const menuClose = document.querySelector('#menuClose'); /*menuClose id 선택*/

// 더보기 버튼
menuIcon.addEventListener('click', () => { /*클릭 시*/
  if (nav.style.display == '') { 
    nav.style.display = 'block';
    /*nav.style 공백일 때, block으로 변환*/
    /*공백(안보임) -> block(보임) */

    setTimeout(() => {
      link.classList.toggle('fade-in'); 
      /* "fade-in" 클래스 유무 체크 
          -> 없으면 add, 있으면 remove 자동 => toggle*/
    }, 0);
  } else if (nav.style.display == 'block') {
    link.classList.toggle('fade-in');
    /* "fade-in" 클래스 유무 체크 
          -> 없으면 add, 있으면 remove 자동 => toggle*/

    setTimeout(() => {
      nav.style.display = '';
    }, 500);
    /*nav.style가 block일 때, 공백으로 변환*/
    /*block(보임) -> 공백(안보임) */
  }
});

// 더보기 메뉴 닫기 버튼
menuClose.addEventListener('click', () => {
  link.classList.toggle('fade-in');
  /* "fade-in" 클래스 유무 체크 
          -> 없으면 add, 있으면 remove 자동 => toggle*/

  setTimeout(() => {
    nav.style.display = '';
  }, 500);
});
