const carousel2 = document.querySelector('.carousel2-inner');
const items2 = document.querySelectorAll('.carousel2-item');
const indicators2 = document.querySelectorAll('.carousel2-indicators span');

let index2 = 0;
const total2 = items2.length;
const intervalTime = 3500; // cambiar tiempo si querés (milisegundos)

function updateCarousel2() {
  carousel2.style.transform = `translateX(-${index2 * 100}%)`;

  indicators2.forEach((ind, i) => {
    ind.classList.toggle('active', i === index2);
  });
}

// Indicadores clickeables (opcional)
indicators2.forEach((ind, i) => {
  ind.addEventListener('click', () => {
    index2 = i;
    updateCarousel2();
  });
});

// AUTO-PLAY
setInterval(() => {
  index2 = (index2 + 1) % total2;
  updateCarousel2();
}, intervalTime);