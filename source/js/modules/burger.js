const buttonElement = document.querySelector('[data-burger]');
const headerElement = document.querySelector('[data-header]');
const listElement = document.querySelector('[data-list]');


const openMenuHandler = () => {
  buttonElement.classList.toggle('burger--open');
  headerElement.classList.toggle('page-header--open');
  listElement.classList.toggle('page-nav__list--open');
};

const initOpenMenu = () => {
  buttonElement.addEventListener('click', openMenuHandler);
};

export {initOpenMenu};
