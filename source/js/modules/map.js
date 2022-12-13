export function initMap(id) {
  const scriptElement = document.createElement('script');
  // Назначаем ссылку
  scriptElement.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
  scriptElement.addEventListener('load', () => {
    const {ymaps} = window;

    if (typeof ymaps === 'undefined') {
      return;
    }

    // Дождёмся загрузки API и готовности DOM.
    ymaps.ready(() => {
    // Создание экземпляра карты c заданными options и его привязка к контейнеру с
    // заданным id.
      const myMap = new ymaps.Map(id, {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
        center: [59.938635, 30.323118], // Санкт-Петербург
        zoom: 16,
        controls: [],
      });
      const myPlacemark = new ymaps.Placemark(
          myMap.getCenter(),
          {},

          {
          // Опции.
          // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/sprite/pointer.svg',
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38],
          }
      );
      myMap.geoObjects.add(myPlacemark);
    });
  });

  function scrollHandler() {
    if (window.pageYOffset > window.innerHeight) {
      document.removeEventListener('scroll', scrollHandler);
      document.body.append(scriptElement);
    }
  }
  document.addEventListener('scroll', scrollHandler);
}
