const formElement = document.querySelector('[data-form]');
const inputElements = formElement.querySelectorAll('[data-validate]');

// валидация по типу элемента
const Type = {
  tel: {
    validate(phone) {
      const re = /^\+?[\d ()-]+$/;
      return re.test(String(phone));
    },
    message: 'Формат: только цифры',
  },
  name: {
    validate(name) {
      const re = /^[A-Za-zА-Яа-яёЁ]+(?:[-'\s][A-Za-zА-Яа-яёЁ]+)*$/;
      return re.test(String(name));
    },
    message: 'Формат: Имя',
  },
  email: {
    validate(email) {
      const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      return re.test(String(email));
    },
    message: 'Формат: name@mail.ru',
  },
};

// валидация формы
const handleValidation = () => {

  inputElements.forEach((input) => {
    const {validate, message} = Type[input.getAttribute('data-validate')];

    if (!validate(input.value)) {
      input.classList.add('is-error');
      input.classList.remove('is-succed');
    } else {
      input.classList.add('is-succed');
      input.classList.remove('is-error');
    }

    if (input.classList.contains('is-error')) {
      input.previousElementSibling.classList.add('is-error');
      input.previousElementSibling.textContent = `${message}`;
    } else {
      input.previousElementSibling.classList.remove('is-error');
      input.previousElementSibling.textContent = '';
    }
  });
};

// инициализация валидатора
const initValidate = () => {

  inputElements.forEach((input) => {
    input.addEventListener('input', () => {

      if (input.type === 'tel') {
        input.value = input.value.replace(/[A-Za-zА-Яа-яЁё]/, '');
      }
      handleValidation();
    });
  });
};

// local storage
const initStorage = () => {

  inputElements.forEach((input) => {
    const {type, id} = input;
    const identify = `${id}`;

    input.addEventListener('change', () => {
      localStorage.setItem(identify, input.value);
    });

    if (type === 'password') {
      return;
    }

    try {
      const value = localStorage.getItem(identify);

      if (value !== null) {
        input.value = value;
      }

    } catch (error) {
      return;
    }
  });
};

export {initValidate, initStorage};
