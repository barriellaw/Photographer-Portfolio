const images = document.querySelectorAll('.carousel-image');
let current = 0;

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  images[index].classList.add('active');
}

document.getElementById('prevBtn').addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});

// Initialize
showImage(current);

// Auto-rotate images every 8 seconds
setInterval(() => {
  current = Math.floor(Math.random() * images.length);
  showImage(current);
}, 8000);

// Add event listeners for keyboard navigation
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  } else if (event.key === 'ArrowRight') {
    current = (current + 1) % images.length;
    showImage(current);
  }
});
