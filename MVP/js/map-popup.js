const daeguMap = document.querySelector('.daeguMap');
const daeguHover = document.querySelector('.daeguHover');

function daeguPopup() {
  daeguHover.style.display = 'block';

  setTimeout(() => {
    daeguHover.style.display = 'none';
  }, 150);
}
