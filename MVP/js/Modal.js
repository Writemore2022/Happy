const modal = document.querySelector('#modal-btn');
const popup = document.querySelector('#modal');

function modalOn() {
  popup.style.display = 'flex';
}

function modalOff() {
  popup.style.display = 'none';
}

modal.addEventListener('click', () => {
  modalOn();
});

window.addEventListener('keyup', (e) => {
  if ((popup.style.display = 'flex' && e.key === 'Escape')) {
    modalOff();
  }
});

popup.addEventListener('click', (e) => {
  const evTarget = e.target;
  if (evTarget.classList.contains('top-nav')) {
    modalOff();
  }
});
