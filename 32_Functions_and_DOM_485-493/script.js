// 32_Functions_and_DOM_485-493
// Функции и DOM


// 485 Функции для работы с DOM элементом / Функции для работы с DOM элементом на JavaScript
//
// Сейчас мы с вами научимся делать вспомогательные функции, выполняющие какие-либо операции с DOM. Например, давайте сделаем функцию, которая первым параметром будет принимать id элемента, а вторым - текст элемента, и будет устанавливать этому элементу новый текст.
//
// Вот описанная функция:
//
// function setText(id, text) {
// 	let elem = document.getElementById(id);
// 	elem.textContent = text;
// }
// Давайте опробуем ее работу. Пусть у нас есть два абзаца:
//
// <p id="elem1"></p>
// <p id="elem2"></p>
// Давайте поменяем текст этим абзацам, воспользовавшись созданной нами функцией:
//
// setText('elem1', 'text1');
// setText('elem2', 'text2');


// 1 Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента,
// а произвольный CSS селектор.
//
// function setText(selector, text) {
//     let elem = document.querySelector(selector);
//     elem.textContent = text;
// }
//
// setText('.one', 'text1');
// setText('#elem2', 'text2');


// 2 Сделайте функцию setAttr, которая будет менять атрибут DOM элементу.
// Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.
//
// function setAttr(selector, name, value) {
//     let elem = document.querySelector(selector);
//     elem.setAttribute(name, value);
// }
//
// setAttr('a', 'href', '#');
// setAttr('a', 'class', 'link');


// 486 Функции для работы с группой элементов / Функции для работы с группой DOM элементов
//
// Давайте теперь напишем функцию, которая параметром будет принимать селектор группы элементов и их новый текст.
// Пусть эта функция устанавливает всем подпадающим под селектор элементам новый текст.
//
// Реализуем описанную функцию:
//
// function setText(selector, text) {
// 	let elems = document.querySelectorAll(selector);
//
// 	for (let elem of elems) {
// 		elem.textContent = text;
// 	}
// }
// Давайте проверим ее на группе следующих элементов:
//
// <p class="elem"></p>
// <p class="elem"></p>
// <p class="elem"></p>
// Установим всем элементам с классом elem новый текст:
//
// setText('.elem', 'text');


// 1 Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст.
// Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
//
// function appendText(selector, text) {
//     let elems = document.querySelectorAll(selector);
//
//     for (let elem of elems) {
//         elem.append(' ', text);
//     }
// }
//
// appendText('.elem', 'Append text');


// 487 Передача коллбэка для работы с DOM / Передача коллбэка для работы с DOM на JavaScript
//
// Пусть у нас есть некоторая группа DOM элементов:
//
// <p class="elem">1</p>
// <p class="elem">2</p>
// <p class="elem">3</p>
// <p class="elem">4</p>
// <p class="elem">5</p>
// Давайте сделаем функцию forEach, которая первым параметром будет принимать селектор группы элементов,
// а вторым параметром - функцию-коллбэк, которая применится по очереди к каждому из найденных элементов:
//
// forEach('.elem', function() {
// 	// функция применится к каждому элементу
// });
// Пусть элементы, попавшие под селектор, по очереди попадают в первый параметр коллбэка:
//
// forEach('.elem', function(elem) {
// 	console.log(elem); // выведет по очереди найденные элементы
// });
// Давайте с помощью нашей функции найдем все элементы с классом elem
// и для каждого найденного элемента применим коллбэк, который возведет в квадрат текст каждого элемента:
//
// forEach('.elem', function(elem) {
// 	elem.textContent = elem.textContent ** 2;
// });
// Давайте теперь напишем реализацию задуманной нами функции forEach:
//
// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
//
// 	for (let elem of elems) {
// 		func(elem);
// 	}
// }


// 1 Даны абзацы.
// С помощью созданной нами функции forEach для каждого абзаца добавьте в конец его текста восклицательный знак.
//
// function forEach(selector, func) {
//     let elems = document.querySelectorAll(selector);
//
//     for (let elem of elems) {
//         func(elem);
//     }
// }
//
// forEach('.elem', function (elem) {
//     elem.textContent += '!';
// });


// 488 Передача порядкового номера в коллбэк / Передача порядкового номера в коллбэк на JavaScript
//
// Давайте сделаем так, чтобы, если в нашей функции-коллбэке написан второй параметр, в него пусть попадает порядковый номер элемента в найденном наборе элементов:
//
// forEach('.elem', function(elem, index) {
// 	console.log(elem);  // выведет элемент
// 	console.log(index); // выведет порядковый номер элемента
// });
// С помощью этого параметра мы можем, к примеру, добавить в конец каждому элементу его порядковый номер:
//
// forEach('.elem', function(elem, index) {
// 	elem.textContent = elem.textContent + index;
// });
// Давайте переделаем код нашей функции forEach для осуществления описанного:
//
// function forEach(selector, func) {
// 	let elems = document.querySelectorAll(selector);
//
// 	for (let i = 0; i < elems.length; i++) {
// 		func(elems[i], i);
// 	}
// }


// 1 Даны абзацы.
// С помощью созданной нами функции forEach для каждого абзаца добавьте ему в начало его порядковый номер.
//
function forEach(selector, func) {
    let elems = document.querySelectorAll(selector);

    for (let i = 0; i < elems.length; i++) {
        func(elems[i], i);
    }
}

forEach('.elem', function (item, index) {
    item.prepend(`Элемент по счету ${index + 1}! `);
});