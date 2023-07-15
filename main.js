const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.menu-close-icon');

const backdrop = document.querySelector('.backdrop');
const mobileMenu = document.querySelector('.mobile-nav');

const mobileMenuItems = document.querySelectorAll('.mobile-nav li');

menuIcon.addEventListener('click', () => {
  backdrop.classList.add('active');
  mobileMenu.classList.add('active');
});

closeMenuIcon.addEventListener('click', () => {
  backdrop.classList.remove('active');
  mobileMenu.classList.remove('active');
});

// change the hero-news image every 3 secs
const heroNewsImage = document.querySelector('.hero-news-image');
const heroNewsImages = [
  'assets/images/hero-news-1.jpg',
  'assets/images/hero-news-2.jpg',
  'assets/images/hero-news-3.png',
];
let currentImageIndex = 0; // to start with first index of array initially
setInterval(() => {
  currentImageIndex = (currentImageIndex + 1) % heroNewsImages.length;
  heroNewsImage.style.backgroundImage = `url(${heroNewsImages[currentImageIndex]})`;
}, 3000);
