const carousel = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prev = document.querySelector('.carousel-control.prev');
const next = document.querySelector('.carousel-control.next');
const indicators = document.querySelectorAll('.carousel-indicators span');

let currentIndex = 0;
const totalItems = items.length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  indicators.forEach((ind, i) => {
    ind.classList.toggle('active', i === currentIndex);
  });
}

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

indicators.forEach((ind, i) => {
  ind.addEventListener('click', () => {
    currentIndex = i;
    updateCarousel();
  });
});
