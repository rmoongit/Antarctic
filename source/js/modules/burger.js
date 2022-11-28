import '../utils/focus-lock.js';

const headerElement = document.querySelector('[data-header]');
const buttonElement = headerElement.querySelector('[data-burger]');
const navElement = headerElement.querySelector('[data-nav]');
const elements = [buttonElement, headerElement, navElement];

const openMenuHandler = () => {
  elements.forEach((el) => el.classList.add('is-active'));
  document.addEventListener('keydown', keyCloseHandler);
  window.focusLock.lock('[data-header]');
  document.documentElement.classList.add('scroll-lock');
};

const closeMenuhandler = () => {
  elements.forEach((el) => el.classList.remove('is-active'));
  document.removeEventListener('keydown', keyCloseHandler);
  window.focusLock.unlock('[data-header]');
  document.documentElement.classList.remove('scroll-lock');
};

function keyCloseHandler(evt) {
  if (evt.key.startsWith('Esc')) {
    closeMenuhandler();
  }
}

document.addEventListener('click', (e) => {
  const isLinkTarget = e.target.nodeName === 'A';
  if (!headerElement.contains(e.target) || isLinkTarget) {
    closeMenuhandler();
  }
});

const initOpenMenu = () => {

  buttonElement.addEventListener('click', () => {
    if (headerElement.classList.contains('is-active')) {
      return closeMenuhandler();
    }
    return openMenuHandler();
  });
  buttonElement.classList.remove('no-js');
  headerElement.classList.remove('no-js');
};

export {initOpenMenu};
