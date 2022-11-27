export function initMap(id) {
  if (typeof ymaps === 'undefined') {
    return;
  }

  // Дождёмся загрузки API и готовности DOM.
  ymaps.ready(() => {
    // Создание экземпляра карты c заданными options и его привязка к контейнеру с
    // заданным id.
    let myMap = new ymaps.Map(id, {
      // При инициализации карты обязательно нужно указать
      // её центр и коэффициент масштабирования.
      center: [59.938635, 30.323118], // Санкт-Петербург
      zoom: 16,
      controls: [],

    });
    let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../img/sprite/pointer.svg',
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38],
    });
    myMap.geoObjects
        .add(myPlacemark);
  });
}
