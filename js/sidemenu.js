const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');
const link = document.querySelector('.nav-links');
const menuClose = document.querySelector('#menuClose');

console.log(nav.style.display);

menuIcon.addEventListener('click', () => {
  if (nav.style.display == '') {
    nav.style.display = 'block';

    setTimeout(() => {
      link.classList.toggle('fade-in');
    }, 0);
  } else if (nav.style.display == 'block') {
    link.classList.toggle('fade-in');

    setTimeout(() => {
      nav.style.display = '';
    }, 500);
  }
});

menuClose.addEventListener('click', () => {
  link.classList.toggle('fade-in');

  setTimeout(() => {
    nav.style.display = '';
  }, 500);
});
