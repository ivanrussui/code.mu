// 27_Event_Object_414-430
// Объект Event


// 414 Основы работы с объектом Event / Основы работы с объектом Event в JavaScript
//
// В данном уроке мы с вами изучим основы работы с объектом Event.
// Данный объект содержит в себе информацию о произошедшем событии. К примеру, если по элементу был сделан клик,
// мы можем узнать координаты этого клика, была ли нажата клавиша Ctrl, Alt или Shift в момент клика и так далее.
//
// Давайте посмотрим, как получить объект Event. Пусть у нас есть кнопка:
//
// <button id="elem">text</button>
// Пусть по клику на эту кнопку выполняется некоторая функция:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
//
// });
// Внутри привязанной функции уже есть объект Event - мы просто пока еще не знаем, как его получить.
// Получается он следующем образом: нужно при объявлении нашей функции передать в нее параметром любую переменную
// (как правило, event - но название может быть любым) и в эту переменную браузер автоматически положит объект Event:
//
// elem.addEventListener('click', function(event) {
// 	console.log(event); // увидим объект с событием
// });


// 1 Самостоятельно проделайте описанные манипуляции и выведите объект с событием в консоль.
// Изучите структуру этого объекта.
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function (event) {
//     console.log(event);
// });


// 415 Координаты события в JavaScript
//
// Теория

// Свойство event.clientX
// Свойство event.clientX содержит в себе координаты курсора мыши по оси X. Для определения координат есть также
// свойства event.clientY, event.pageX, event.pageY. Давайте посмотрим разницу между clientX/clientY и pageX/pageY.
//
// Как работают clientX и clientY: если у вас есть окно 1000 на 1000 пикселей, и мышь находится в центре, то clientX и
// clientY будут оба равны 500. Если вы затем прокрутите страницу по горизонтали или вертикали, не двигая курсор,
// то значения clientX и clientY не изменятся, так как отсчитываются относительно окна, а не документа.
//
// Как работают pageX и pageY: если у вас есть окно 1000 на 1000 пикселей, и курсор находится в центре, то pageX и
// pageY будут равны 500. Если вы затем прокрутите страницу на 250 пикселей вниз, то pageY станет равным 750.
// Таким образом pageX и pageY содержат координаты события с учетом прокрутки.
//
// Синтаксис
// event.clientX;
// Пример
// При движении мыши по странице будем выводить ее координаты относительно окна браузера (clientX и clientY):
//
// <div id="elem">0 : 0</div>
// let elem = document.getElementById('elem');
//
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });
//
// Результат выполнения кода:
//
// открыть в дочернем окне


// Свойство event.clientY
// Свойство event.clientY содержит в себе координаты курсора мыши по оси Y. ...


// Свойство event.pageX
// Свойство event.pageX содержит в себе координаты курсора мыши по оси X. ...
//
// Синтаксис
// event.pageX;
// Пример
// При движении мыши по странице будем выводить ее координаты относительно окна браузера (pageX и pageY):
//
// <div id="elem">0 : 0</div>
// let elem = document.getElementById('elem');
//
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.pageX + ' : ' + event.pageY;
// });
//
// Результат выполнения кода:
//
// открыть в дочернем окне


// Свойство event.pageY
// Свойство event.pageY содержит в себе координаты курсора мыши по оси Y. ...


// 1 Сделайте так, чтобы при движении мышки по странице, отображались координаты курсора, подобно тому,
// как это сделано в следующем образце:
//
// открыть в дочернем окне
//
// let elem = document.getElementById('elem');
//
// document.addEventListener('mousemove', function (event) {
//     elem.innerText = event.clientX + ' : ' + event.clientY;
// });


// 416 Тип события / Тип события в объекте Event в JavaScript
//
// Объект Event также содержит в себе тип произошедшего события.
// Под типом понимается название click, mouseover и так далее. Тип события содержит свойство type:
//
// elem.addEventListener('click', function(event) {
// 	console.log(event.type); // выведет 'click'
// });


// 1 В следующем коде к двум событиям привязан один и тот же обработчик:
//
// <button id="elem">text</button>
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
//
// function func(event) {
//     if (event.type === 'click') {
//         elem.style.backgroundColor = 'green';
//     } else if (event.type === 'dblclick') {
//         elem.style.backgroundColor = 'red';
//     }
// }
// Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет,
// а при двойном клике - в красный.


// 417 Элемент события / Элемент события в объекте Event в JavaScript
//
// Объект Event также позволяет получить элемент, в котором произошло событие.
// Этот элемент содержится в свойстве target. Зачем это нужно, если этот элемент содержится в this?
//
// Дело в том, что на самом деле this всегда содержит элемент, к которому было привязано событие, а свойство target -
// элемент, по которому реально был клик. Этот реальный элемент может совпадать с this, а может не совпадать.
//
// Давайте посмотрим на примере. Пусть у нас есть div, а внутри него абзац:
//
// <div id="elem">
// 	<p>text</p>
// </div>
// Привяжем событие к диву, но кликнем по абзацу. Очевидно, что клик по абзацу представляет собой одновременно
// и клик по диву, так как абзац содержится в нашем диве.
//
// В описанном случае получится, что свойство target будет содержать конечный тег,
// в котором случилось событие - то есть абзац, а не див. Убедимся в этом:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function(event) {
// 	console.log(event.target); // выведет наш абзац
// 	console.log(this);         // выведет наш див
// });


// 1 Пусть у вас есть список ul с тегами li:
//
// ul {
// 	padding: 30px;
// 	border: 1px solid red;
// }
// li {
// 	list-style-type: none;
// 	margin-bottom: 20px;
// 	border: 1px dashed black;
// }
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Результат выполнения кода:
//
//
// Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName,
// по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак.
// А если клик был по тегу ul - выведите информацию об этом в консоль.
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function (event) {
//     if (event.target.tagName === 'LI') {
//         event.target.textContent += '!';
//     } else if (event.target.tagName === 'UL') {
//         console.log('клик был по тегу ul');
//     }
// });


// 418 Получение нажатых клавиш / Получение нажатых клавиш в JavaScript
//
// С помощью объекта Event можно получать нажатые клавиши. Давайте посмотрим, как это делается. Пусть у нас есть инпут:
//
// <input>
// Получим ссылку на него в переменную:
//
// let elem = document.querySelector('input');
// Навесим на наш инпут событие, срабатывающее по каждому нажатию клавиши:
//
// elem.addEventListener('keypress', function(event) {
//
// });
// В свойстве key объекта с событием будет лежать нажатый символ:
//
// elem.addEventListener('keypress', function(event) {
// 	console.log(event.key);
// });
// А в свойстве code будет лежать код нажатой клавиши:
//
// elem.addEventListener('keypress', function(event) {
// 	console.log(event.code);
// });


// 1 Сделайте инпут, который будет по вводу выводить значения введенных клавиш и их коды.
//
// let elem = document.querySelector('input');
//
// elem.addEventListener('keypress', function (event) {
//     console.log(event.key);
//     console.log(event.code);
//     console.log(event);
// });


// 2 Понажимайте в инпуте различные клавиши и посмотрите, какие у них значения и коды.


// 3 Определите, какой код будет у клавиши Enter.
//
// "Enter"


// 4 Определите, какой код будет у клавиши BackSpace.
//
// Код будет - Backspace. У Backspace нет события keypress, помогает keydown
// elem.addEventListener('keypress', function (event) {
// elem.addEventListener('keydown', function (event) {
//     console.log(event.code);
// });


// 419 Отслеживание клавиш-модификаторов / Отслеживание клавиш-модификаторов в JavaScript
//
// С помощью объекта Event можно узнать, были ли нажаты в момент события клавиши Ctrl, Alt и Shift.
// Это делается с помощью свойств ctrlKey, altKey и shiftKey - они имеют значение true или false в зависимости от того,
// была ли нажата эта клавиша в момент события или нет.
//
// Давайте посмотрим на примере. Пусть у нас дана следующая кнопка:
//
// <button id="elem">text</button>
// По клику на кнопку будем выводить сообщение о том, была ли нажата одна из клавиш Ctrl, Alt и Shift:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function(event) {
// 	if (event.ctrlKey) {
// 		console.log('нажат Ctrl');
// 	}
//
// 	if (event.altKey) {
// 		console.log('нажат Alt');
// 	}
//
// 	if (event.shiftKey) {
// 		console.log('нажат Shift');
// 	}
// });


// 1 Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет,
// но только если в момент клика нажата клавиша Alt.
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function (event) {
//     if (event.altKey) {
//         this.style.backgroundColor = 'red';
//     }
// });


// 2 Пусть у вас есть список ul с тегами li:
//
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl,
// и число 2, если нажата клавиша Shift.

// решение через потомков
// let lists = document.querySelectorAll('li');
//
// for (let list of lists) {
//     list.addEventListener('click', function (event) {
//         if (event.ctrlKey) {
//             this.textContent += 1;
//         } else if (event.shiftKey) {
//             this.textContent += 2;
//         }
//     });
// }


// альтернативное решение через родимтеля
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function (event) {
//     if (event.target.tagName === 'LI') {
//         if (event.ctrlKey) {
//             event.target.textContent += 1;
//         } else if (event.shiftKey) {
//             event.target.textContent += 2;
//         }
//     }
// });


// 420 Отмена действия по умолчанию / Отмена действия по умолчанию в JavaScript
//
