let menuIcon = document.querySelector('.menu-icon');
let nav = document.querySelector('nav');
let link = document.querySelector('.nav-links');
let menuClose = document.querySelector('#menuClose');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  link.classList.toggle('fade-in');
});

menuClose.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  link.classList.toggle('fade-in');
});
