// 27_Event_Object_414-427
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


// альтернативное решение через родителя
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
// Иногда с помощью JavaScript требуется отменить действие тега по умолчанию. К примеру, по нажатию на ссылку отменить
// переход по этой ссылке. Как правило такое требуется в том случае, если эту ссылку мы используем просто для запуска
// какого-либо кода. В этом случае то, что при клике на ссылку произойдет переход по ней, нам совсем не нужно.
//
// Отмена действия по умолчанию производится с помощью объекта Event.
// Для этого у него есть специальный метод preventDefault(), который следует вызвать в любом месте обработчика события.
//
// Попробуем на практике. Пусть у нас есть вот такая ссылка:
//
// <a href="/" id="elem">ссылка</a>
// Давайте сделаем так, чтобы по клику на ссылку не происходило перехода на другую страницу:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	console.log('Вы не можете перейти по этой ссылке!');
// });


// 1 Даны ссылки.
// Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
//
// let link = document.querySelector('#link');
// let link2 = document.querySelector('#link2');
//
// function addHrefOfLink(event) {
//     event.preventDefault();
//     // this.textContent += ' ' + this.href;
//     this.textContent += ` ${this.href}`;
// }
//
// link.addEventListener('click', addHrefOfLink);
// link2.addEventListener('click', addHrefOfLink);


// 2 Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа.
// Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
//
// let inputs = document.querySelectorAll('input');
// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let paragraph = document.querySelector('p');
// let link = document.querySelector('#link');
//
// link.addEventListener('click', function (event) {
//     event.preventDefault();
//
//     // если получаем в 2 переменные 2 инпута
//     // paragraph.textContent = +input1.value + +input2.value;
//
//     // если получаем в 1 переменную несколько инпутов
//     let sum = 0;
//     for (let input of inputs) {
//         sum += +input.value;
//     }
//     paragraph.textContent += sum;
// });


// 421 Всплытие событий / Всплытие событий в JavaScript
//
// Представьте себе, что у вас есть несколько вложенных друг в друга блоков:
//
// <div id="elem1">
// 	<div id="elem2">
// 		<div id="elem3"></div>
// 	</div>
// </div>
// Получим ссылки на наши дивы в переменные:
//
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// А теперь навесим на них обработчики кликов:
//
// elem1.addEventListener('click', function() {
// 	alert('зеленый');
// });
// elem2.addEventListener('click', function() {
// 	alert('голубой');
// });
// elem3.addEventListener('click', function() {
// 	alert('красный');
// });
// Выведем наши блоки на экран, добавив им некоторый CSS:
//
//
// Нажмите теперь на самый внутренний красный блок - и вы увидите, как событие сначала сработает в красном блоке, потом
// в голубом, потом в зеленом. И это логично, ведь кликая на внутренний блок, вы одновременно кликаете на все внешние.
//
// То есть получается, что когда вы кликаете на самый внутренний блок, событие клика возникает сначала в нем,
// затем срабатывает в его родителе, в родителе его родителя и так далее, пока не дойдет до самого верха.
//
// Такое поведение называется всплытием (англ. bubbling) событий - по аналогии со всплытием пузырька воздуха со дна.
// Так же, как и пузырек, наше событие как будто выплывает наверх, каждый раз срабатывая на более высоких блоках.


// 1 Самостоятельно напишите код, который будет демонстрировать всплытие событий.
// Проверьте на нем всплытие различных типов событий.
//
// let elem = document.querySelector('#elem');
// let paragraph = document.querySelector('p');
// let input = document.querySelector('input');
//
// elem.addEventListener('click', function () {
//     alert('click div');
// });
//
// paragraph.addEventListener('click', function () {
//     alert('click p');
// });
//
// input.addEventListener('click', function () {
//     alert('click input');
// });

// elem.addEventListener('mouseover', function () {
//     alert('mouseover div');
// });
//
// paragraph.addEventListener('mouseover', function () {
//     alert('mouseover p');
// });
//
// input.addEventListener('mouseover', function () {
//     alert('mouseover input');
// });

// elem.addEventListener('mouseout', function () {
//     alert('mouseout div');
// });
//
// paragraph.addEventListener('mouseout', function () {
//     alert('mouseout p');
// });
//
// input.addEventListener('mouseout', function () {
//     alert('mouseout input');
// });

// elem.addEventListener('change', function (event) {
//     // alert('change div');
//     console.log(event);
// });
//
// paragraph.addEventListener('change', function (event) {
//     // alert('change p');
//     console.log(event);
// });
//
// input.addEventListener('change', function (event) {
//     // alert('change input');
//     console.log(event);
// });

// elem.addEventListener('input', function () {
//     alert('input div');
// });
//
// paragraph.addEventListener('input', function () {
//     alert('input p');
// });
//
// input.addEventListener('input', function () {
//     alert('input input');
// });


// 2 Всплывать могут не все события. Экспериментально найдите хотя бы одно событие, которое не будет всплывать.
//
// elem.addEventListener('focus', function (event) {
//     console.log(event);
//     // alert('focus div');
// });
//
// paragraph.addEventListener('focus', function (event) {
//     console.log(event);
//     // alert('focus p');
// });
//
// input.addEventListener('focus', function (event) {
//     console.log(event);
//     // alert('focus input');
// });
//
// elem.addEventListener('blur', function (event) {
//     console.log(event);
//     // alert('blur div');
//
// });
//
// paragraph.addEventListener('blur', function (event) {
//     console.log(event);
//     // alert('blur p');
//
// });
//
// input.addEventListener('blur', function (event) {
//     console.log(event);
//     // alert('blur input');
// });


// 422 Целевой элемент при всплытии / Получение целевого элемента при всплытии событий
//
// Пусть у нас есть два элемента: div и абзац p, лежащий внутри этого дива:
//
// <div>
// 	<p></p>
// </div>
// Получим ссылку на наш див в переменную:
//
// let div = document.querySelector('div');
// Добавим нашим тегам некоторые стили:
//
// div {
// 	padding: 20px;
// 	border: 1px solid red;
// }
//
// p {
// 	width: 200px;
// 	height: 200px;
// 	border: 1px solid green;
// }
// Пусть теперь на див навешен обработчик клика:
//
// div.addEventListener('click', function() {
// 	console.log('click');
// });
// Из-за того, что наш див имеет padding, то, когда мы кликаем на див, мы можем попасть по абзацу,
// а можем попасть в место, где этого абзаца нет, то есть непосредственно по диву.
//
// При этом в обработчике клика this всегда будет указывать на тот элемент, на который навешан обработчик.
// В нашем случае это наш див:
//
// div.addEventListener('click', function() {
// 	console.log(this); // див
// });
// Однако, мы можем получить именно тот тег, в котором случилось событие.
// Для этого мы можем посмотреть, что лежит в event.target:
//
// div.addEventListener('click', function(event) {
// 	console.log(event.target); // или див, или абзац
// });
// Можно различить эти два варианта с помощью условий:
//
// let div = document.querySelector('div');
//
// div.addEventListener('click', function(event) {
// 	if (event.target.tagName === 'DIV') {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.tagName === 'P') {
// 		console.log('клик именно по абзацу');
// 	}
// });
// Можно вместо tagName использовать matches:
//
// let div = document.querySelector('div');
//
// div.addEventListener('click', function(event) {
// 	if (event.target.matches('div')) {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.matches('p')) {
// 		console.log('клик именно по абзацу');
// 	}
// });


// 1 Даны следующие элементы:
//
// <div>
// 	<ul>
// 		<li>1</li>
// 		<li>2</li>
// 		<li>3</li>
// 	</ul>
// </div>
// div, ul, li {
// 	padding: 20px;
// }
//
// div {
// 	border: 1px solid red;
// }
// ul {
// 	border: 1px solid orange;
// }
// li {
// 	border: 1px solid green;
// }
// Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.

// let div = document.querySelector('div');
//
// div.addEventListener('click', function (event) {
//     let li = div.querySelectorAll('ul > li');
//
//     if (event.target.matches('div')) {
//         console.log('клик именно по div');
//     }
//
//     if (event.target.matches('ul')) {
//         console.log('клик именно по ul');
//     }
//
//     if (event.target.matches('li')) {
//         li.forEach((item, index) => {
//             if (event.target === item) {
//                 console.log(`клик именно по li ${index + 1}`);
//             }
//         });
//     }
// });


// 2 Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак,
// а при клике на ul в консоль выводилась информация об этом.

// div.addEventListener('click', function (event) {
//     let li = div.querySelectorAll('ul > li');
//
//     if (event.target.matches('div')) {
//         console.log('клик именно по div');
//     }
//
//     if (event.target.matches('ul')) {
//         console.log('клик именно по ul');
//     }
//
//     li.forEach((item, index) => {
//         if (event.target === item) {
//             event.target.textContent += '!';
//             console.log(`клик именно по li ${index + 1}`);
//         }
//     });
// });


// 423 Прекращение всплытия событий / Прекращение всплытия событий в JavaScript
//
// Всплытие события можно остановить на любой элемент, через который всплывает событие. Для этого в коде элемента
// следует вызвать метод stopPropagation объекта Event.
//
// В следующем примере клик по красному блоку сработает на нем самом, затем на голубом блоке и все - голубой блок
// прекращает дальнейшее всплытие и зеленый блок уже никак не отреагирует:
//
// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function(event) {
// 	console.log('голубой');
// 	event.stopPropagation(); // остановим всплытие
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });
// Можете проверить:


// 424 Несколько обработчиков на элементе / Несколько обработчиков на элементе
//
// Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены.
// То есть, stopPropagation препятствует продвижению события дальше, но на текущем элементе все обработчики отработают.
// Смотрите пример:
//
// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function(event) {
// 	console.log('голубой - первый обработчик');
// 	event.stopPropagation(); // остановим всплытие
// });
// elem2.addEventListener('click', function() {
// 	console.log('голубой - второй обработчик'); // все равно сработает
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });
// Можете проверить:


// 425 Немедленное прекращение всплытия / Немедленное прекращение всплытия в JavaScript
//
// Для того, чтобы полностью остановить обработку, современные браузеры поддерживают метод stopImmediatePropagation.
// Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе. Давайте его применим:
//
// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function(event) {
// 	console.log('голубой - первый обработчик');
// 	event.stopImmediatePropagation();     // остановим всплытие
// });
// elem2.addEventListener('click', function() {
// 	console.log('голубой - второй обработчик'); // уже не сработает
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });
// Можете проверить:


// 426 Применение прекращения всплытия событий / Применение прекращения всплытия событий в JavaScript
//
// Пусть внутри одного родителя у нас есть кнопка и некоторый блок:
//
// <div id="parent">
// 	<button>click me</button>
// 	<div id="block">
// 		text
// 	</div>
// </div>
// Получим ссылки на наши элементы в переменные:
//
// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
// Пусть наш блок изначально скрыт:
//
// #block:not(.active) {
// 	display: none;
// }
// Сделаем так, чтобы по клику на кнопку наш блок показался:
//
// button.addEventListener('click', function() {
// 	block.classList.add('active');
// });
// А теперь сделаем так, чтобы по клику на любое место родителя наш блок скрывался:
//
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });
// Нас, однако, ждет неожиданный сюрприз: так как кнопка находится внутри родителя, то клик по кнопке одновременно
// означает и клик по родителю. Это значит, что сначала наш блок покажется, а затем из-за всплытия события сработает
// обработчик в родителе и наш блок скроется.
//
// Вот тут-то нам и пригодится возможность отменить всплытие: мы можем сделать так,
// чтобы при клике на кнопку отменить всплытие, родитель не реагировал на этот клик.


// 1 Самостоятельно реализуйте корректную работу описанной задачи.
//
// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
//
// button.addEventListener('click', function(event) {
// 	block.classList.add('active');
//     event.stopPropagation();
// });
//
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });


// 427 Погружение событий / Погружение событий в JavaScript
//
// Кроме всплытия событий есть еще и погружение. На самом деле событие сначала идет сверху вниз (стадия перехвата),
// доходит до нашего элемента (стадия цели) и только потом начинает всплывать (стадия всплытия).
//
// Для того, чтобы повесить обработчик события с учетом стадии перехвата в addEventListener есть
// третий необязательный параметр. Если он равен true - событие сработает на стадии перехвата,
// а если false - на стадии всплытия (это по умолчанию). Давайте посмотрим на примере:
//
// elem1.addEventListener('click', function() {
// 	console.log('зеленый - погружение');
// }, true);
// elem1.addEventListener('click', function() {
// 	console.log('зеленый - всплытие');
// }, false);
//
// elem2.addEventListener('click', function() {
// 	console.log('голубой - погружение');
// }, true);
// elem2.addEventListener('click', function() {
// 	console.log('голубой - всплытие');
// }, false);
//
// elem3.addEventListener('click', function() {
// 	console.log('красный - погружение');
// }, true);
// elem3.addEventListener('click', function() {
// 	console.log('красный- всплытие');
// }, false);
// Можете проверить:

