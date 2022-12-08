const modal = document.querySelector('.card');
const popup = document.querySelector('#modal');
const modalOffBtn = document.querySelector('#del_btn');

function modalOn() {
  popup.style.display = 'flex';
}

function modalOff() {
  popup.style.display = 'none';
}

modal.addEventListener('click', () => {
  modalOn();
});

modalOffBtn.addEventListener('click', () => {
  modalOff();
});

window.addEventListener('keyup', (e) => {
  if ((popup.style.display = 'flex' && e.key === 'Escape')) {
    modalOff();
  }
});
