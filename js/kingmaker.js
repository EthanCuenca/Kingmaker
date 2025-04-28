const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeIns.forEach((fadeIn) => observer.observe(fadeIn));

const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

// Function to move to the next slide
const moveToSlide = (index) => {
  track.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
};

// Button controls
nextButton.addEventListener('click', () => {
  const nextIndex = (currentIndex + 1) % track.children.length;
  moveToSlide(nextIndex);
});

prevButton.addEventListener('click', () => {
  const prevIndex = (currentIndex - 1 + track.children.length) % track.children.length;
  moveToSlide(prevIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
  const nextIndex = (currentIndex + 1) % track.children.length;
  moveToSlide(nextIndex);
}, 5000); // 5000 milliseconds = 5 seconds