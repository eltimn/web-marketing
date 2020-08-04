const openMenuButton = document.querySelector('.tl-main-menu__button--open')
const closeMenuButton = document.querySelector('.tl-main-menu__button--close')
const navMenu = document.querySelector('.tl-main-header nav')

openMenuButton.addEventListener('click', function() {
  navMenu.classList.add('show')
  closeMenuButton.classList.add('show')
  openMenuButton.classList.add('hide')
}, false);

closeMenuButton.addEventListener('click', function() {
  navMenu.classList.remove('show')
  closeMenuButton.classList.remove('show')
  openMenuButton.classList.remove('hide')
}, false);