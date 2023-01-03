const navbarToggler = document.querySelector('.navbar-toggler');
const navbarList = document.querySelector('.navbar-list');
let scrollpos = window.scrollY;
let navbar = document.querySelector('nav');

// navbar toggler button
navbarToggler.onclick = function () {
  if (
    navbarList.classList.contains('opacity-0') &&
    navbarList.classList.contains('invisible')
  ) {
    navbarList.classList.remove('opacity-0', 'invisible', 'mt-3');
  } else {
    navbarList.classList.add('opacity-0', 'invisible', 'mt-3');
  }
};

// affix effect for navbar
window.addEventListener('scroll', function () {
  //Here you forgot to update the value
  scrollpos = window.scrollY;

  if (scrollpos > 10) {
    navbar.classList.add('bg-white', 'shadow-md', 'py-0');
  } else {
    navbar.classList.remove('bg-white', 'shadow-md', 'py-0');
  }
});
