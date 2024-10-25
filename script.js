const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoSlideInterval = null;
let autoSlideEnabled = false;

// Show the first image and update the first dot
function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots(index);
  currentIndex = index;
}

// Move to the next image
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

// Move to the previous image
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

// Update dot indicators
function updateDots(index) {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

// Toggle auto slide on and off
function toggleAutoSlide() {
  if (autoSlideEnabled) {
    clearInterval(autoSlideInterval);
    autoSlideEnabled = false;
  } else {
    autoSlideInterval = setInterval(nextSlide, 3000);
    autoSlideEnabled = true;
  }
}

// Handle dot clicks
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

// Initialize the first slide and active dot
showSlide(0);
