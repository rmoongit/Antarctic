export function initMap(id, options) {
  if (typeof ymaps === 'undefined') {
    return;
  }

  // Дождёмся загрузки API и готовности DOM.
  ymaps.ready(() => {
    // Создание экземпляра карты c заданными options и его привязка к контейнеру с
    // заданным id.
    new ymaps.Map(id, options);
  });
}
