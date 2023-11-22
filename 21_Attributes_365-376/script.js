// 20_Introduction_to_DOM_365-376
// Атрибуты


// 365 Метод получения атрибутов / Получение атрибутов в JavaScript

// Теория
//
// Метод getAttribute
// Метод getAttribute считывает значение заданного атрибута у тега.
//
// Синтаксис
// элемент.getAttribute(имя атрибута);
// Пример
// Давайте выведем содержимое атрибута value элемента:
//
// <input id="elem" value="abcde">
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');

// console.log(value);
// Результат выполнения кода:
//
// 'abcde'


// 1 Дан элемент:
//
// <input id="elem" value="text">
// Получите значение его атрибута value.
//
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
//
// console.log(value);


// 2 Дан элемент:
//
// <input id="elem" class="www zzz">
// Получите значение его атрибута class.
//
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('class');
//
// console.log(value);


// 366 Метод установки атрибутов / Установка атрибутов в JavaScript
//
// Теория
//
// Метод setAttribute
// Метод setAttribute позволяет изменить значение заданного атрибута какого-либо тега.
//
// Синтаксис
// элемент.setAttribute(имя атрибута, новое значение);
// Пример
// Давайте элементу поменяем значение атрибута value:
//
// <input id="elem" value="abcde">
// let elem = document.querySelector('#elem');
// elem.setAttribute('value', '!!!');
// HTML код станет выглядеть так:
//
// <input id="elem" value="!!!">


// 1 Дан элемент:
//
// <input id="elem">
// Установите его атрибут value в значение 'text'.
//
// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'text');


// 2 Дан элемент:
//
// <input id="elem">
// Установите ему атрибут class в значение 'valid'.
//
// let elem = document.querySelector('#elem');
// elem.setAttribute('class', 'valid');


// 367 Метод удаления атрибутов / Удаление атрибутов в JavaScript
//
// Теория
//
// Метод removeAttribute
// Метод removeAttribute удаляет заданный атрибут у какого-либо тега.
//
// Синтаксис
// элемент.removeAttribute(имя атрибута);
// Пример
// Давайте для элемента удалим атрибут value:
//
// <input id="elem" value="abcde">
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');
// HTML код станет выглядеть так (исчезнет атрибут value):
//
// <input id="elem">


// 1 Дан элемент:
//
// <input id="elem" value="text">
// Удалите у него атрибут value.
//
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');


// 368 Метод проверки атрибутов / Проверка наличия атрибутов в JavaScript
//
// Теория
//
// Метод hasAttribute
// Метод hasAttribute проверяет наличие заданного атрибута у элемента.
// Если атрибут есть - выведет true, если нет - выведет false.
//
// Синтаксис
// элемент.hasAttribute(имя атрибута);
// Пример
// Давайте проверим наличие атрибута value у элемента:
//
// <input id="elem" value="abcde">
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));
// Результат выполнения кода:
//
// true
// Пример
// А теперь атрибута value нету:
//
// <input id="elem">
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));
// Результат выполнения кода:
//
// false


// 1 Дан элемент:
//
// <input id="elem" value="text">
// Проверьте наличие у него атрибута value.
//
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));


// 369 Пользовательские атрибуты / Пользовательские атрибуты в JavaScrip
//
//