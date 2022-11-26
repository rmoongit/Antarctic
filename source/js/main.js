import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initOpenMenu} from './modules/burger';
import {initMap} from './modules/map';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // const formElement = document.querySelector('[data-form]');
  const inputElements = document.querySelectorAll('[data-validate]');
  const buttonElement = document.querySelector('[data-submit');

  const Type = {
    tel: {
      validate(phone) {
        const re = /^((\+7|7|8)+([0-9]){10})$/;
        return re.test(String(phone));
      },
      message: 'Начинается с +7 и без пробелов',
    },
    name: {
      validate(name) {
        const re = /[a-zA-Z]+/;
        return re.test(String(name));
      },
      message: 'Имя только буквами',
    },
    email: {
      validate(email) {
        const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
        return re.test(String(email));
      },
      message: 'формат name@mail.ru',
    },
  };

  const validHandler = () => {
    const emptyInputs = Array.from(inputElements).filter((input) => input.value === '');

    inputElements.forEach((input) => {
      const {validate, message} = Type[input.getAttribute('data-validate')];
      let errorElement = document.createElement('strong');
      errorElement.classList.add('is-error');


      if (validate(input.value)) {
        input.classList.add('is-succed');
        input.classList.remove('is-error');
        input.parentElement.querySelector('strong').remove();
      } else {
        input.classList.add('is-error');
        input.classList.remove('is-succed');
        input.parentElement.append(errorElement);
        errorElement.textContent = `${message}`;
      }

    });
  };

  // switch (input.type) {
  //   case 'tel':
  //     console.log(input);
  // }

  buttonElement.addEventListener('click', validHandler);


  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  initOpenMenu();

  initMap('map', {
    // При инициализации карты обязательно нужно указать
    // её центр и коэффициент масштабирования.
    center: [59.938635, 30.323118], // Санкт-Петербург
    zoom: 13,
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {

    initModals();

  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
