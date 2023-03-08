const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');
const link = document.querySelector('.nav-links');
const menuClose = document.querySelector('#menuClose');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  link.classList.toggle('fade-in');
});

menuClose.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  link.classList.toggle('fade-in');
});
