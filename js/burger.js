const menuElem = document.querySelector('.menu');
const humburgerElem = document.querySelector('.humburger-menu');
const menuClose = document.querySelector('.menu-list__link');

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active');
  humburgerElem.classList.toggle('humburger-menu-active');
};

const closeMenu = () => {
  menuElem.classList.remove('menu-active');
  humburgerElem.classList.remove('humburger-menu-active');
}

humburgerElem.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', closeMenu);
