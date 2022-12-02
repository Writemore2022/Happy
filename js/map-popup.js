const daeguCard = document.querySelector('.daegu');
const daeguHover = document.querySelector('.daeguHover');

function daeguPopup() {
  daeguHover.style.display = 'block';
  daeguCard.style.transform = 'scale(1.1)';

  setTimeout(() => {
    daeguHover.style.display = 'none';
    daeguCard.style.transform = 'none';
  }, 150);
}