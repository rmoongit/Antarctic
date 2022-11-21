const buttonElement = document.querySelector('[data-burger]');
const headerElement = document.querySelector('[data-header]');
const navElement = document.querySelector('[data-nav]');


const openMenuHandler = () => {
  buttonElement.classList.toggle('is-active');
  headerElement.classList.toggle('is-active');
  navElement.classList.toggle('is-active');
};

const initOpenMenu = () => {
  buttonElement.addEventListener('click', openMenuHandler);
};

export {initOpenMenu};
