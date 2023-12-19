// 25_Forms_396-404
// Формы


// 396 Работа с текстареа / Работа с текстареа в JavaScript
//
// В данном разделе учебника мы с вами изучим работу с более сложными возможностями форм.
// Начнем изучение с тега textarea, представляющего собой многострочное поле ввода.
//
// При работе с данным тегом есть некоторый нюанс. Суть в следующем: текст, который будет стоять в теге по умолчанию,
// располагается между открывающем и закрывающем тегом textarea:
//
// <textarea id="elem">text</textarea>
// Результат выполнения кода:
//
//
// Однако, не смотря на это, прочитывать и записывать текст тега следует не через свойство innerHTML, а через value.
// Для примера выведем текст приведенного выше textarea:
//
// let elem = document.querySelector('#elem');
// console.log(elem.value); // выведет 'text'


// 1 Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац
//
// let textarea = document.querySelector('textarea');
// let paragraph = document.querySelector('p');
//
// textarea.addEventListener('blur', function () {
//    paragraph.textContent = textarea.value;
// });


// 397 Блокировка элементов / Атрибут disabled в JavaScript
//
// В HTML существуют специальные атрибуты без значений, например, атрибут disabled,
// используемый для блокировки элементов. Для того, чтобы установить такой атрибут,
// соответствующему свойству требуется присвоить значение true, а чтобы убрать - значение false.
//
// Давайте посмотрим на практике. Пусть у нас есть заблокированый инпут:
//
// <input id="elem" disabled>
// Давайте выведем значение атрибута disabled этого инпута:
//
// let elem = document.querySelector('#elem');
// console.log(elem.disabled); // выведет true
// А теперь давайте отблокируем его:
//
// let elem = document.querySelector('#elem');
// elem.disabled = false;


// 1 Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
//
// let input = document.querySelector('input');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', () => {
//    input.disabled = true;
// });


// 2 Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
//
// let input = document.querySelector('input');
// let btnOn = document.querySelector('#on');
// let btnOff = document.querySelector('#off');
//
// btnOn.addEventListener('click', function () {
//    input.disabled = true;
// });
//
// btnOff.addEventListener('click', function () {
//     input.disabled = false;
// });


// 3 Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.
//
// let input = document.querySelector('input');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', () => {
//     console.log(input.disabled);
// });


// 398 Работа с чекбоксами / Работа с чекбоксами в JavaScript
//
// Сейчас мы с вами научимся работать с чекбоксами. Чекбокс представляет собой специальную галочку,
// которая может находится в двух состояниях: отмечено и нет.
//
// Чекбокс создается следующим образом:
//
// <input type="checkbox" id="elem">
// Чтобы сделать чекбокс отмеченным - ему нужно написать атрибут checked:
//
// <input type="checkbox" checked id="elem">
// Давайте для примера узнаем состояние нашего чекбокса:
//
// let elem = document.querySelector('#elem');
// console.log(elem.checked);


// 1 Дан чекбокс и две кнопки.
// По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
//
// let checkbox = document.querySelector('#checkbox');
// let btnOn = document.querySelector('#on');
// let btnOff = document.querySelector('#off');
//
// btnOn.addEventListener('click', function () {
//    checkbox.checked = true;
// });
//
// btnOff.addEventListener('click', function () {
//     checkbox.checked = false;
// });


// 2 Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен,
// выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.
//
// let checkbox = document.querySelector('#checkbox');
// let btn = document.querySelector('button');
// let paragraph = document.querySelector('p');
//
// btn.addEventListener('click', function () {
//     if (checkbox.checked) {
//         paragraph.textContent = 'привет';
//     } else {
//         paragraph.textContent = 'пока';
//     }
// });


// 399 Чередование атрибутов без значений
//
// Пусть дан заблокированный инпут и кнопка:
//
// <input id="elem" disabled>
// <input id="button" type="submit">
// Давайте сделаем так, чтобы каждое нажатие на кнопку приводило к смене состояния инпута - с заблокированного
// на разблокированное и наоборот. Для начала получим ссылки на наши элементы в переменные:
//
// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');
// А теперь реализуем задуманное:
//
// button.addEventListener('click', function() {
// 	if (elem.disabled) {
// 		elem.disabled = false;
// 	} else {
// 		elem.disabled = true;
// 	}
// });
// Задачу, однако, можно решить меньшим количеством кода:
//
// button.addEventListener('click', function() {
// 	elem.disabled = !elem.disabled;
// });


// 1 Объясните, как работает приведенный код.
//
// если значение true то мы его делаем false и наоборот
// более краткий код работает тк elem.disabled это псевдоистина, а !elem.disabled это псевдоложь


// 2 Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
//
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function () {
//    elem.checked = !elem.checked;
// });


// 400 Работа с радиокнопками / Работа с радиокнопками в JavaScript
//
// Давайте теперь поработаем с радиокнопками. Они представляют собой группу переключателей, из которых может быть
// выбран только один. Чтобы несколько радиокнопочек были группой, они должны иметь одинаковое значение атрибута name:
//
// <input type="radio" name="elem">
// <input type="radio" name="elem">
// <input type="radio" name="elem">
// А чтобы отличить на JavaScript, какая именно кнопка была выбрана,
// каждой радиокнопке в группе добавляют атрибуты value с различным значением:
//
// <input type="radio" name="elem" value="1">
// <input type="radio" name="elem" value="2">
// <input type="radio" name="elem" value="3">
// Чтобы сделать какую-нибудь радиокнопку отмеченной по умолчанию, ей необходимо задать атрибут checked:
//
// <input type="radio" name="elem" value="1" checked>
// <input type="radio" name="elem" value="2">
// <input type="radio" name="elem" value="3">
// Давайте посмотрим на практике, как работать с такими кнопками на JavaScript.
// Пусть у нас есть представленная выше группа радиокнопок, а также обычная кнопка:
//
// <input type="submit" id="button">
// Давайте сделаем так, чтобы по нажатию на кнопку на экран вывелось value той радиокнопочки,
// которая отмечена в данный момент.
//
// Для решения задачи необходимо перебрать все наши радиокнопочки циклом и определить, какая из них выбрана.
// Для этого нужно прочитывать значение свойства checked каждой из перебираемых радиокнопок.
// У которой это свойство равно true - та радиокнопочка и выбрана.
//
// Реализуем описанное:
//
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function() {
// 	for (let radio of radios) {
// 		if (radio.checked) {
// 			console.log(radio.value);
// 		}
// 	}
// });


// 1 Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
//
// let radios = document.querySelectorAll('input[type="radio"]');
// let paragraph = document.querySelector('p');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     for (let radio of radios) {
//         if (radio.checked) {
//             paragraph.textContent = `value отмеченной радиокнопки = ${radio.value}`;
//         }
//     }
// });


// 401 Событие change / Событие change в JavaScript
//
// В данном уроке мы с вами разберем событие change, возникающее в полях ввода при их изменениях.
// Что это значит? Пусть, к примеру, у вас есть инпут и в нем есть какой-то текст.
// Если вы измените этот текст, то в этом случае и возникнет это событие.
//
// Давайте посмотрим на примере. Пусть у нас есть инпут:
//
// <input id="elem" value="text">
// Давайте по его изменению выведем в консоль его новое значение:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('change', function() {
// 	console.log(this.value);
// });


// 1 Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
//
// let input = document.querySelector('input');
// let paragraph = document.querySelector('p');
//
// input.addEventListener('change', function () {
//    paragraph.textContent = input.value;
//     console.log(input.value)
// });


// 2 Дан чекбокс. По изменению чекбокса выведите на экран его новое состояние.
//
// let checkbox = document.querySelector('#checkbox');
//
// checkbox.addEventListener('change', function () {
//     console.log(`Состояние чекбокса - ${checkbox.checked}`);
// });


// 3 Расскажите, в чем разница между событиями blur и change.
//
// blur срабатывает в момент потери фокуса
// change срабатывает в момент изменения


// 4 Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет.
// Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.
//
// let input = document.querySelector('input[type="text"]');
//
// input.addEventListener('change', function () {
//     if (this.value.length < 5) {
//         this.style.border = '3px solid green';
//     } else if (this.value.length > 5) {
//         this.style.border = '3px solid red';
//     } else {
//         this.style.border = '3px solid blue';
//     }
// });


// 402 Событие input / Событие input в JavaScript
//
// Следующее событие, которое мы с вами изучим, называется input. Оно возникает каждый раз
// при вводе нового символа в инпут или textarea. Посмотрим на примере. Пусть у нас есть инпут:
//
// <input id="elem">
// Давайте при каждом нажатии кнопки на клавиатуре будем выводить в консоль текущее содержимое инпута:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('input', function() {
// 	console.log(this.value);
// });


// 1 Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('input', function () {
//     if (this.value.length >= 5) {
//         // console.log('Вы ввели 5 или более символов');
//         document.write('Вы ввели 5 символов');
//     }
// });


// 2 Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац.
// По мере ввода символов в инпут пишите, сколько еще символов можно ввести.
// Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
//
// let elem = document.querySelector('#elem');
// let paragraph = document.querySelector('p');
// let count = 5;
//
// elem.addEventListener('input', function () {
//     count--;
//     paragraph.textContent = `Еще можно ввести ${count} символов`;
//     if (count < 0) {
//         paragraph.textContent = `Длина превышена на ${Math.abs(count)} символов`;
//     }
// });


// 403 Методы focus и blur / Методы focus и blur в JavaScript
//
// Вы уже знаете, что такое фокус ввода. Вы также знаете, как установить или потерять фокус:
// для установки нужно нажать в поле ввода, а для потери - в какое-то другое место.
//
// В JavaScript, однако, существуют специальные методы,
// которые позволяют принудительно установить фокус в инпут или убрать его оттуда. Это методы focus и blur.
//
// Давайте посмотрим их работу на примере. Пусть у нас есть вот инпут и кнопка:
//
// <input id="elem" value="text">
// <input type="submit" id="button">
// Давайте по нажатию на кнопку установим фокус ввода на наш инпут:
//
// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function() {
// 	elem.focus();
// });


// 1 Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту,
// а после ввода двух символов в этот инпут - фокус из него убирался.
//
// let elem = document.querySelector('#elem');
// let elem2 = document.querySelector('#elem2');
//
// // используя одну функцию
// function changeFocus() {
//     if (elem.value.length === 2) {
//         elem2.focus();
//         if (elem2.value.length === 2) {
//             elem2.blur();
//         }
//     }
// }
//
// // используя две функции
// // function changeFocus() {
// //     if (elem.value.length === 2) {
// //         elem2.focus();
// //     }
// // }
// //
// // function stopFocus() {
// //     if (elem2.value.length === 2) {
// //         elem2.blur();
// //     }
// // }
//
// elem.addEventListener('input', changeFocus);
// elem2.addEventListener('input', changeFocus);
// // elem2.addEventListener('input', stopFocus);


// 404 Практика на поиск ошибок / Поиск ошибок в коде с формами в JavaScript
//
// В следующих задачах некоторый программист написал код и, возможно, допустил в нем ошибки.
// Вы должны проверить, делает ли код то, что описано. Если код работает некорректно, вы должны исправить ошибки.


// 1 По потери фокуса текст из textarea должен записаться в див:
//
// <textarea></textarea>
// <div></div>
//
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
//
// textarea.addEventListener('blur', function() {
// 	div.textContent = textarea.value;
// });


// 2 По клику на кнопку в див должно записаться или одно, или другое значение:
//
// <input type="checkbox">
// <div></div>
// <button>button</button>
//
// let checkbox = document.querySelector('input[type="checkbox"]');
// let button = document.querySelector('button');
// let div = document.querySelector('div');
//
// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		div.textContent = '111';
// 	} else {
// 		div.textContent = '222';
// 	}
// });


// 3 По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое:
//
// <input type="checkbox">
// <button>button</button>
//
// let checkbox = document.querySelector('input[type="checkbox"]');
// let button = document.querySelector('button');
//
// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// });

