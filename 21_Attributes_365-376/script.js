// 21_Attributes_365-376
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
// Пользовательские атрибуты могут содержать дефисы в своем названии, например, вот так:
//
// <div id="elem" data-my-test="1000"></div>
// Для обращения к таким атрибутам следует использовать camelCase:
//
// let elem = document.querySelector('#elem');
// console.log(elem.dataset.myTest);


// 1 Дан следующий код:
//
// <div id="elem" data-product-price="1000" data-product-amount="5">
// 	товар яблоки
// </div>
// Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function getFinalPrice() {
//     let finalPrice = elem.dataset.productPrice * elem.dataset.productAmount;
//     elem.textContent += finalPrice;
//     elem.removeEventListener('click', getFinalPrice);
// });


// 371 Обращение к атрибутам через методы / Обращение к атрибутам через методы в JavaScript
//
// К пользовательским атрибутам можно также обращаться с помощью методов типа getAttribute,
// в этом случае следует писать полное название атрибута:
//
// <div id="elem" data-num="1000" data-my-num="2000"></div>
// let elem = document.querySelector('#elem');
//
// console.log(elem.getAttribute('data-num'));    // выведет 1000
// console.log(elem.getAttribute('data-my-num')); // выведет 2000


// 1 Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца.
// Используйте метод setAttribute.
//
// let p = document.querySelectorAll('p');
//
// for (let i = 0; i < p.length; i++) {
//     p[i].setAttribute('data-num', (i + 1).toString());
// }


// 372 Массив CSS классов / Манипулирование массивом CSS классов в JavaScript
//
// Теория
// Свойство classList
// Свойство classList содержит псевдомассив CSS классов элемента, а также позволяет добавлять и удалять классы элемента,
// проверять наличие определенного класса среди классов элемента.
//
// Речь идет об атрибуте class, внутри которого можно писать несколько классов через пробел, например www ggg zzz.
// С помощью classList можно удалить, к примеру, класс ggg, не затронув остальные классы.
//
// Синтаксис
// элемент.classList;
// Пример . Количество классов
// Узнаем количество классов элемента:
//
// <p id="elem" class="www ggg zzz"></p>
// let elem = document.querySelector('#elem');
//
// let length = elem.classList.length;
// console.log(length);
// Результат выполнения кода:
//
// 3
// Пример . Перебираем классы
// Выведем по очереди классы элемента:
//
// <p id="elem" class="www ggg zzz"></p>
// let elem = document.querySelector('#elem');
// let classNames = elem.classList;
//
// for (let className of classNames) {
// 	console.log(className);
// }
// Результат выполнения кода:
//
// 'www'
// 'ggg'
// 'zzz'


// 1 Дан элемент:
//
// <p id="elem" class="www ggg zzz"></p>
// Узнайте количество его классов.
//
// let elem = document.querySelector('#elem');
// let length = elem.classList.length;
//
// console.log('Количество классов ' + length);


// 2 Дан элемент:
//
// <p id="elem" class="www ggg zzz"></p>
// Переберите в цикле его классы.
//
// let elem = document.querySelector('#elem');
// let classNames = elem.classList;
//
// for (let className of classNames) {
//     console.log(className);
// }


// 373 Добавление CSS классов / Добавление CSS классов в JavaScript
//
// Теория
// Метод add объекта classList
// Метод add объекта classList позволяет добавлять CSS классы элементу.
//
// Синтаксис
// элемент.classList.add(класс);
// Пример
// Добавим элементу класс kkk:
//
// <p id="elem" class="www ggg zzz"></p>
// let elem = document.querySelector('#elem');
// elem.classList.add('kkk');
// Результат выполнения кода:
//
// <p id="elem" class="www ggg zzz kkk"></p>
// Пример
// Добавим элементу класс zzz, который уже есть в элементе - ничего не произойдет, так как дубли классов не добавляются:
//
// <p id="elem" class="www ggg zzz"></p>
// let elem = document.querySelector('#elem');
// elem.classList.add('zzz');
// Результат выполнения кода:
//
// <p id="elem" class="www ggg zzz"></p>


// 1 Дан элемент:
//
// <p id="elem" class="www ggg zzz"></p>
// Добавьте ему класс xxx.
//
// let elem = document.querySelector('#elem');
// elem.classList.add('xxx');


// 374 Удаление CSS классов / Удаление CSS классов в JavaScript
//
// Теория
// Метод remove объекта classList
// Метод remove объекта classList удаляет заданный CSS класс элемента.
//
// Синтаксис
// элемент.classList.remove(класс);
// Пример
// Удалим класс ggg:
//
// <p id="elem" class="www ggg zzz"></p>
// let elem = document.querySelector('#elem');
// elem.classList.remove('ggg');
// Результат выполнения кода:
//
// <p id="elem" class="www zzz"></p>


// 1 Дан элемент:
//
// <p id="elem" class="www ggg zzz"></p>
// Удалите у него класс www и класс zzz.
//
// let elem = document.querySelector('#elem');
// elem.classList.remove('www', 'zzz');


// 375 Проверка CSS классов / Проверка CSS классов в JavaScript
//
// Теория
// Метод contains объекта classList
// Метод contains объекта classList проверяет наличие CSS класса элемента.
//
// Синтаксис
// элемент.classList.contains(класс);
// Пример
// Проверим, есть ли у элемента класс ggg:
//
// <p id="elem" class="www ggg zzz"></p>
// let elem = document.querySelector('#elem');
//
// let contains = elem.classList.contains('ggg');
// console.log(contains);
// Результат выполнения кода:
//
// true


// 1 Дан элемент:
//
// <p id="elem" class="www ggg zzz"></p>
// Проверьте наличие у него класса ggg.
//
// let elem = document.querySelector('#elem');
// console.log(elem.classList.contains('ggg'));


// 376 Тогглинг CSS классов / Чередование CSS классов в JavaScript
//
// Теория
// Метод toggle объекта classList
// Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть.
//
// Синтаксис
// элемент.classList.toggle(класс);
// Пример
// В данном примере при использовании метода toggle класс zzz удалится, так как он уже есть в элементе:
//
// <p id="elem" class="www ggg zzz"></p>
// let elem = document.querySelector('#elem');
// elem.classList.toggle('zzz');
// Результат выполнения кода:
//
// <p id="elem" class="www ggg"></p>
// Пример
// В данном примере при использовании метода toggle класс zzz добавится, так как его нету в элементе:
//
// <p id="elem" class="www ggg"></p>
// let elem = document.querySelector('#elem');
// elem.classList.toggle('zzz');
// Результат выполнения кода:
//
// <p id="elem" class="www ggg zzz"></p>


// 1 Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
//
// let elem = document.querySelector('#elem');
// elem.classList.toggle('www');
