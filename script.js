const navBars = document.querySelector('#menu-icon');
const navList = document.querySelector('.mobnav-menu');
const navItems = document.querySelectorAll('.mobnav-list');
const closeMenuBtn = document.querySelector('.closeBtn');
function menuToggler() {
  if (navList.classList.contains('show-menu')) {
    closeMenuBtn.style.display = 'none';
    navList.classList.remove('show-menu');
    navBars.style.display = 'block';
    navList.style.display = 'none';
  } else {
    closeMenuBtn.style.display = 'block';
    navList.classList.add('show-menu');
    navBars.style.display = 'none';
    navList.style.display = 'block';
  }
}
closeMenuBtn.addEventListener('click', menuToggler);
navBars.addEventListener('click', menuToggler);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', menuToggler);
});

// validate email
const form = document.querySelector('#contact-form');

function isValidated(input) {
  if (input === input.toLowerCase()) return true;
  return false;
}

form.addEventListener('submit', (event) => {
  const email = document.getElementById('email');
  if (!isValidated(email.value)) {
    event.preventDefault();
    const error = document.querySelector('.error-message');
    error.style.display = 'block';
  }
});