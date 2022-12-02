const daeguMap = document.querySelector('.daeguMap');
const daeguHover = document.querySelector('.daeguHover');

function daeguPopup() {
  daeguHover.style.display = 'block';
  daeguCard.style.transform = 'scale(1.1)';

  setTimeout(() => {
    daeguHover.style.display = 'none';
    daeguCard.style.transform = 'none';
  }, 150);
}
