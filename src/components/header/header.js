const menuBtn = document.querySelector('.header__content-nav-burger');
const menu = document.querySelector('.header__content-nav-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('header__content-nav-burger--open');
  menu.classList.toggle('header__content-nav-menu--open');
});
