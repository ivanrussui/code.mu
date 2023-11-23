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
// Пользовательские атрибуты в JavaScript
// В HTML разрешено добавлять свои, пользовательские атрибуты тегам. Такие атрибуты должны начинаться с data-,
// а затем должно идти любое название атрибута, которое вам удобно.
//
// Пользовательские атрибуты могут быть использованы огромным количеством различных способов. Многие из этих способов
// мы изучим далее в учебнике, а еще больше вы сможете в дальнейшем изобрести самостоятельно.
//
// Обращение к таким атрибутам устроено не стандартным образом. Нельзя просто обратиться к одноименному свойству
// элемента, как мы делали это раньше, а следует использовать специальное свойство dataset, после которого через точку
// пишется имя атрибута без data-. Например, если наш атрибут называется data-test, то для обращения к нему мы будем
// писать elem.dataset.test, где elem - переменная с нашим элементом.
//
// Давайте посмотрим на примере. Пусть у нас дан вот такой элемент:
//
// <div id="elem" data-num="1000"></div>
// Выведем на экран значение его атрибута data-num:
//
// let elem = document.querySelector('#elem');
// console.log(elem.dataset.num); // выведет 1000
// А теперь присвоим этому атрибуту другое значение:
//
// let elem = document.querySelector('#elem');
// elem.dataset.num = 123;


// 1 Дан следующий код:
//
// <div id="elem" data-text="str">text</div>
// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.

// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function () {
//     elem.textContent += elem.dataset.text;
// });


// 2 Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
//
// <div data-num="1">text</div>
// <div data-num="2">text</div>
// <div data-num="3">text</div>
// <div data-num="4">text</div>
// <div data-num="5">text</div>
// Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.
//
// let divs = document.querySelectorAll('div');
//
// divs.forEach(item => {
//    item.addEventListener('click', () => {
//        item.textContent += item.dataset.num;
//    });
// });


// 3 Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь
// пользовательский атрибут. Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.
//
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
//
// btn1.setAttribute('data-sum', '0');
//
// btn1.addEventListener('click', sumCount);
// btn2.addEventListener('click', getCount);
//
// function sumCount() {
//     this.dataset.sum++;
// }
//
// function getCount() {
//     this.textContent = btn1.dataset.sum;
// }


// 4 Дан инпут:
//
// <input id="elem" data-length="5">
// В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. Сделайте так,
// чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('blur', () => {
//     if (elem.value.length !== +elem.dataset.length) {
//         elem.value = 'Введите 5 символов';
//     }
// });
//
// elem.addEventListener('focus', () => {
//     elem.value = '';
// });


// 5 Дан инпут:
//
// <input id="elem" data-min="5" data-max="10">
// В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса,
// если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('blur', () => {
//     if (elem.value.length < elem.dataset.min || elem.value.length > elem.dataset.max) {
//         elem.value = 'Введите от 5 до 10 символов';
//     }
// });


// 370 Имена атрибутов с дефисами / Имена атрибутов с дефисами в JavaScript
//
//


