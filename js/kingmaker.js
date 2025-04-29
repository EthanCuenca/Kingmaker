// Fade-in Observer
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeIns.forEach((fadeIn) => observer.observe(fadeIn));

// Carousel Elements
const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;
let timerDuration = 5000; // 5 seconds
let timer;

// Function to move to the next slide
const moveToSlide = (index) => {
  track.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
};

// Function to start the timer
const startCarouselTimer = () => {
  timer = setInterval(() => {
    const nextIndex = (currentIndex + 1) % track.children.length;
    moveToSlide(nextIndex);
  }, timerDuration);
};

// Function to reset the timer
const resetCarouselTimer = () => {
  clearInterval(timer); // Stops the current timer
  startCarouselTimer(); // Restarts the timer
};

// Button controls with timer reset
nextButton.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % track.children.length;
  moveToSlide(nextIndex);
  resetCarouselTimer();
});

prevButton.addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + track.children.length) % track.children.length;
  moveToSlide(prevIndex);
  resetCarouselTimer();
});

// Initialize the carousel timer
startCarouselTimer();