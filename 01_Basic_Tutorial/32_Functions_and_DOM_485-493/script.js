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
//         elem.textContent += ` ${text}`;
//         // elem.append(' ', text);
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
// function forEach(selector, func) {
//     let elems = document.querySelectorAll(selector);
//
//     for (let i = 0; i < elems.length; i++) {
//         func(elems[i], i);
//     }
// }
//
// forEach('.elem', function (item, index) {
//     item.textContent = `Элемент по счету ${++index}! ${item.textContent}`;
//     // item.prepend(`Элемент по счету ${index + 1}! `);
// });


// 489 Передача элемента параметром функции / Передача DOM элемента параметром функции
//
// В предыдущих уроках мы передавали в наши функции селекторы элементов,
// и наши функции сами получали ссылки на эти элементы внутри своего кода.
// Существует и другой подход: в функции можно передавать уже полученные ранее ссылки на элементы.
//
// Давайте посмотрим на примере. Пусть у нас есть следующий код:
//
// <p id="elem1"></p>
// <p id="elem2"></p>
// Давайте сделаем функцию setText, которая первым параметром будет принимать ссылку на DOM элемент,
// а вторым - текст элемента:
//
// function setText(elem, text){
// 	elem.textContent = text;
// }
// Используем созданную нами функцию для установки текста наших абзацев:
//
// let elem1 = document.getElementById('elem1');
// setText(elem1, 'text1');
//
// let elem2 = document.getElementById('elem2');
// setText(elem2, 'text2');


// 1 Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст.
// Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.
//
// function appendText(elem, text) {
//     elem.textContent += text;
//     // elem.append(text);
// }
//
// let elem1 = document.getElementById('elem1');
// let elem2 = document.getElementById('elem2');
//
// appendText(elem1, ' Hello');
// appendText(elem2, ' World');


// 2 Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText,
// сделанной в предыдущей задаче.
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
//     appendText(elem, '!');
// }


// 3 Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст.
// Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.
//
// let setValue = (input, text) => input.value = text;
//
// let input = document.querySelector('input');
// setValue(input, 'I\'m value man');


// 490 Передача группы элементов параметрами / Передача группы DOM элементов параметрами функций
//
// Пусть теперь наша функция setText первым параметром будем принимать ссылку не на один элемент, а сразу набор элементов:
//
// function setText(elems, text) {
// 	for (let elem of elems) {
// 		elem.textContent = text;
// 	}
// }
// Давайте опробуем нашу функцию на практике. Пусть у нас есть следующие абзацы:
//
// <p class="elem"></p>
// <p class="elem"></p>
// <p class="elem"></p>
// <p class="elem"></p>
// <p class="elem"></p>
// Давайте с помощью нашей функции установим всем этим абзацам какой-нибудь текст:
//
// let elems = document.querySelectorAll('.elem');
// setText(elems, 'text');


// 1 Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст.
// Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
//
// function appendText(elems, text) {
//     for (let elem of elems) {
//         elem.textContent += text;
//         // elem.append(text);
//     }
// }
//
// let ps = document.querySelectorAll('p');
// appendText(ps, ' JavaScript');


// 2 Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект,
// в котором лежит тег ul, а вторым - текст. Сделайте так,
// чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.
//
// function appendElem(elem, text) {
//     let li = document.createElement('li');
//     li.textContent = text;
//     elem.append(li);
// }
//
// let ul = document.querySelector('ul');
// appendElem(ul, 'List-1');
// appendElem(ul, 'List-2');


// 3 Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче,
// запишите каждый элемент массива в отдельную li в этом ul.
//
// let arr = [1, 2, 3];
//
// for (let el of arr) {
//     appendElem(ul, el);
// }


// 491 Функция для создания HTML таблиц / Функция для создания HTML таблиц на JavaScript
//
// Давайте теперь сделаем функцию createTable,
// которая будет будет создавать таблицу заданного размера и добавлять ее в конец заданного элемента.
//
// Пусть первым параметром наша функция принимает количество рядов, вторым параметром - количество колонок,
// а третьим - ссылку на DOM элемент, внутри которого будет создаваться наша таблица.
//
// Давайте посмотрим, как мы будем пользоваться описанной функцией, когда она будет создана.
// Пусть, к примеру, у нас дан вот такой див:
//
// <div id="elem"></div>
// Давайте сделаем внутри этого дива таблицу 3 на 4:
//
// let div = document.querySelector('#elem');
// createTable(3, 4, div);
// Пусть теперь у нас даны два дива:
//
// <div id="elem1"></div>
// <div id="elem2"></div>
// Давайте сделаем свою таблицу в каждом из этих дивов:
//
// let div1 = document.querySelector('#elem1');
// createTable(3, 4, div1);
//
// let div2 = document.querySelector('#elem2');
// createTable(5, 6, div2);
// Для того, чтобы создаваемые таблицы сразу были видны, можно добавить какой-нибудь CSS, например, такой:
//
// td {
// 	width: 50px;
// 	height: 50px;
// 	border: 1px solid black;
// }


// 1 Вот заготовка описанной функции:
//
// function createTable(rows, cols, parent) {
// 	let table = document.createElement('table');
//
// 	// тут создадим таблицу с rows рядами и cols колонками
// 	for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);
//
// 		for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td')
//             tr.appendChild(td);
// 		}
// 	}
//
// 	parent.appendChild(table);
// }
// Допишите код представленной выше заготовки функции. Потестируйте работу готовой функции.


// 492 Возврат таблицы из функции / Возврат таблицы из функции на JavaScript
//
// В предыдущем уроке мы с вами сделали функцию createTable. Давайте модифицируем эту функцию так,
// чтобы она не добавляла таблицу в какой-то элемент, а просто возвращала ее через return.
//
// То есть приведенный код предыдущего урока преобразуется вот в такой:
//
// let div = document.querySelector('#elem');
// let table = createTable(3, 4);
// div.appendChild(table);
// Можно переписать короче:
//
// let div = document.querySelector('#elem');
// div.appendChild(createTable(3, 4));
// Получение ссылки на таблицу может понадобится для того, чтобы что-то сделать с созданной таблицей.
// К примеру, давайте покрасим ее цвет текста в красный:
//
// let div = document.querySelector('#elem');
//
// let table = createTable(3, 4);
// table.style.color = 'red';
//
// div.appendChild(table);


// 1 Переделайте вашу функцию createTable в соответствии с описанным в теории.
//
// function createTable(rows, cols) {
// 	let table = document.createElement('table');
//
// 	for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);
//
// 		for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td')
//             tr.appendChild(td);
// 		}
// 	}
//
//     return table;
// }


// 2 Пусть у нас есть вот такой див с абзацами:
//
// <div id="elem">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// С помощью функции createTable создайте новую таблицу, а затем вставьте ее в конец дива.
//
// let elem = document.querySelector('div');
// elem.appendChild(createTable(3, 5));


// 493 Функция для создания таблицы из массива
//
// В предыдущих уроках мы с вами сделали функцию createTable, которая создает таблицу заданного размера.
// Давайте теперь сделаем функцию createTableByArr,
// которая параметром будет принимать двухмерный массив и строить на его основе таблицу.
//
// То есть приведенный код предыдущего урока преобразуется вот в такой:
//
// let div = document.querySelector('#elem');
//
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let table = createTableByArr(arr);
//
// div.appendChild(table);
// В результате выполнения этого кода должна получится следующая таблица:
//
// <div id="elem">
// 	<table>
// 		<tr>
// 			<td>1</td>
// 			<td>2</td>
// 			<td>3</td>
// 		</tr>
// 		<tr>
// 			<td>4</td>
// 			<td>5</td>
// 			<td>6</td>
// 		</tr>
// 		<tr>
// 			<td>7</td>
// 			<td>8</td>
// 			<td>9</td>
// 		</tr>
// 	</table>
// </div>

// function createTableByArr(arr) {
//     let table = document.createElement('table');
//
//     for (let i = 0; i < arr.length; i++) {
//         let tr = document.createElement('tr');
//         table.append(tr);
//
//         for (let j = 0; j < arr[i].length; j++) {
//             let td = document.createElement('td');
//             tr.append(td);
//             td.textContent = arr[i][j];
//         }
//     }
//
//     return table;
// }

