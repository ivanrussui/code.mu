// 20_Introduction_to_DOM_349-364
// Введение в DOM


// 349 Работа с текстовыми полями / Работа с текстовыми полями в JavaScript
//
// Сейчас мы с вами научимся получать текст от пользователей нашего сайта.
// Для этого в HTML предусмотрен специальный тег input, представляющий собой текстовое поле для ввода данных.
//
// <input>
// У данного тега есть специальный атрибут value, задающий начальный текст, который будет написан в инпуте по заходу на страницу:
//
// <input value="text">
// Пользователь нашего сайта после захода на страницу может поменять текст инпута. При этом, если у нас есть переменная,
// содержащая ссылку на этот инпут, то свойство value этой переменной всегда будет содержать текущее значение текста инпута.
//
// Попробуем на практике. Пусть у нас инпут с атрибутом value:
//
// <input id="elem" value="text">
// Получим ссылку на этот инпут в переменную:
//
// let elem = document.querySelector('#elem');
// А теперь выведем на экран текущий текст инпута:
//
// console.log(elem.value);
// А теперь поменяем текст инпута на другой:
//
// elem.value = 'new text';


// 1 Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
//
// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#button1');
//
// btn1.addEventListener('click', () => {
//    elem.value = 'Hi man';
// });


// 2 Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.
//
// let elem = document.querySelector('#elem');
// let paragraph = document.querySelector('#paragraph');
// let btn1 = document.querySelector('#button1');
//
// btn1.addEventListener('click', () => {
//    paragraph.textContent = elem.value;
// });


// 3 Даны два инпута и кнопка. В первый инпут пользователем вводится число.
// По нажатию на кнопку запишите во второй инпут квадрат введенного числа.
//
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let btn1 = document.querySelector('#button1');
//
// btn1.addEventListener('click', () => {
//    elem2.value = elem1.value * elem1.value;
//    // elem2.value = elem1.value ** 2;
//    // elem2.value = Math.pow(elem1.value, 2);
// });


// 4 Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута,
// а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.
//
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let btn1 = document.querySelector('#button1');
//
// function func() {
//     let text = elem1.value;
//     elem1.value = elem2.value;
//     elem2.value = text;
// }
//
// btn1.addEventListener('click', func);


// 5 Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа.
// По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.
//
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// let paragraph = document.querySelector('#paragraph');
// let btn1 = document.querySelector('#button1');
//
// btn1.addEventListener('click', function () {
//     paragraph.textContent = (+elem1.value + +elem2.value + +elem3.value + +elem4.value + +elem5.value) / 5;
// });


// 350 Фокус текстовых полей / Фокус текстовых полей в JavaScript
//
// Пусть у нас есть инпут. Вы можете нажать на этот инпут и после этого в нем заморгает курсор-палочка
// и можно будет вводить в него текст.
//
// Про такое состояние говорят, что инпут сейчас имеет фокус ввода. На практике это означает, что если начать
// вводить текст с клавиатуры, то этот текст будет попадать в тот инпут, который сейчас имеет фокус ввода.
// Если затем кликнуть куда-нибудь вне инпута, то этот инпут потеряет фокус ввода и в него нельзя будет вводить текст.
//
// Для того, чтобы поймать момент получения или потери фокуса инпутом, в JavaScript предусмотрены специальные события:
// событие focus позволяет отловить получение фокуса инпутом, а событие blur - потерю. Попробуем на практике.
// Пусть у нас инпут:
//
// <input id="elem" value="text">
// Получим ссылку на него в переменную:
//
// let elem = document.querySelector('#elem');
// А теперь сделаем так, чтобы по получению фокуса в консоль вывелся текущий текст инпута:
//
// elem.addEventListener('focus', function() {
// 	console.log(elem.value);
// });


// 1 Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
//
// let elem1 = document.querySelector('#elem1');
//
// elem1.addEventListener('focus', function () {
//     elem1.value = 1;
// });
//
// elem1.addEventListener('blur', function () {
//     elem1.value = 2;
// });


// 2 Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.
//
// let elem1 = document.querySelector('#elem1');
//
// elem1.addEventListener('blur', function () {
//     elem1.value *= elem1.value;
// });


// 3 Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.
//
// let elem1 = document.querySelector('#elem1');
//
// elem1.addEventListener('focus', function () {
//     elem1.value = '';
// });


// 351 Атрибуты-исключения / Исключения при работе с атрибутами в JavaScript
//
// При работе с атрибутами существует исключение - это атрибут class. Это слово является специальным в JavaScript
// и поэтому мы не можем просто написать elem.class, чтобы считать значение атрибута class.
// Вместо этого следует писать elem.className.
//
// Давайте посмотрим на примере. Пусть у нас дан вот такой инпут:
//
// <input id="elem" class="aaa bbb">
// Давайте выведем значение атрибута class для нашего инпута:
//
// let elem = document.querySelector('#elem');
// console.log(elem.className); // выведет 'aaa bbb'
//
// Существуют и другие исключения, например, атрибут for. К нему следует обращаться через htmlFor.


// 1 Дан див:
// <div id="elem" class="content no-gap"></div>
// Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
//
// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#button1');
//
// btn1.addEventListener('click', () => {
//     console.log(elem.className);
// });


// 2 Дан див:
// <div id="elem"></div>
// Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
//
// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#button1');
//
// btn1.addEventListener('click', () => {
//     elem.className = 'myClass';
//     console.log(elem.className);
// });


// 3 Дан див с несколькими CSS классами, записанными через пробел:
// <div id="elem" class="aaa bbb ccc"></div>
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
//
// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#button1');
//
// btn1.addEventListener('click', () => {
//     // классы разными элементами
//     let arr = elem.className.split(' ');
//
//     // классы одним элементом
//     // let arr = [];
//     // arr.push(elem.className);
//
//     console.log(arr);
// });


// 352 Цепочки методов и свойств / Цепочки методов и свойств в JavaScript
//
// Пусть у нас есть инпут:
//
// <input id="elem" value="text">
// Давайте выведем на экран текст инпута:
//
// let elem = document.querySelector('#elem');
// console.log(elem.value); // выведет 'text'
// Как вы видите, мы сначала получаем элемент по его id, записываем этот элемент в переменную elem,
// а затем выводим на экран свойство value из этой переменной.
//
// На самом деле можно не вводить переменную elem, а строить цепочку из точек таким образом:
//
// console.log( document.querySelector('#elem').value ); // выведет 'text'
// Таким же образом - цепочкой - можно производить и перезапись атрибутов:
//
// document.querySelector('#elem').value = 'www';


// 1 Дан следующий код:
//
// <img id="image" src="avatar.png">
//
// let image = document.querySelector('#image');
// console.log(image.src);
//
// Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.

// console.log(document.querySelector('#image').src);


// 353  Преимущества и недостатки цепочек / Преимущества и недостатки цепочек в JavaScript
//
// Не смотря на то, что цепочки сокращают код, в большинстве случаев введение переменной все-таки удобнее.
// Сравните два примера - сейчас я ввел переменную elem и могу записывать любое количество атрибутов,
// при этом querySelector вызывается только один раз:
//
// let elem = document.querySelector('#elem');
// elem.value = 'www';
// elem.type  = 'submit';
// А сейчас я не ввожу новую переменную и поэтому мне приходится вызывать querySelector два раза:
//
// document.querySelector('#elem').value = 'www';
// document.querySelector('#elem').type  = 'submit';
// На мой взгляд, этот код стал сложнее, хотя и занимает на одну строчку меньше. Кроме того, если я захочу сменить
// значение id с 'elem' на какое-то другое, мне придется делать это во многих местах, что не очень удобно.
//
// Есть и еще проблема - нагрузка на браузер. Поиск элементов по странице, который делает метод querySelector, является
// довольно медленной операцией (и вообще любая работа с элементами страницы - это медленная операция - запомните это).
//
// В нашем случае, если мы каждый раз используем querySelector, то браузер каждый раз будет обрабатывать HTML страницу
// и искать элемент с заданным id несколько раз (не важно, что id одинаковые - браузер проделает все действия
// несколько раз), совершая бесполезные операции, которые могут замедлить работу браузера.
//
// Если же мы используем переменную elem - никакого поиска по странице не происходит (элемент уже найден и
// ссылка на него лежит в переменной).


// 1 Дан следующий код:
//
// <img id="image" src="avatar.png" width="300" height="500">
//
// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);
//
// Укажите на недостатки данного кода. Исправьте их.

// Недостатки:
// 1 Каждый раз используется метод querySelector() что нагружает браузер
// 2 Каждый раз пишем длинный код чтобы обратитьтся к атрибутам элемента
// 3 Код сложнее, при изменении id придется его менять в 3х местах
//
// let img = document.querySelector('#image');
//
// console.log(img.src);
// console.log(img.width);
// console.log(img.height);


// 354 Объект this / Объект this в JavaScript
//
// Сейчас мы с вами будем работать со специальным объектом this, доступным в функции-обработчике события.
// Этот объект указывает на элемент, в котором произошло событие.
//
// Объект this удобен, когда элемент, в котором произошло событие, и элемент,
// с которым совершаются действия в результате события, - это один и тот же элемент.
//
// Например, если у нас есть инпут, мы можем привязать к нему обработчик потери фокуса и по наступлению этого события
// что-то сделать с текстом инпута. Давайте сделаем описанное. Пусть у нас дан инпут:
//
// <input id="elem" value="text">
// Давайте получим ссылку на него в переменную elem:
//
// let elem = document.querySelector('#elem');
// Привяжем к нему функцию-обработчик события blur:
//
// elem.addEventListener('blur', func);
// Внутри этой функции func будет доступен объект this, указывающий на наш инпут:
//
// function func() {
// 	console.log(this); // содержит ссылку на наш элемент
// }
// Выведем содержимое атрибута value нашего инпута:
//
// function func() {
// 	console.log(this.value); // выведем содержимое атрибута
// }
// Ну, а теперь запишем в инпут какой-нибудь текст:
//
// function func() {
// 	this.value = '!!!';
// }
// Можно использовать и анонимную функцию:
//
// elem.addEventListener('blur', function() {
// 	this.value = '!!!';
// });


// 1 Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2.
// Для обращения у инпуту внутри функции-обработчика используйте объект this.
//
// let elem1 = document.querySelector('#elem1');
//
// function func1() {
//     this.value = 1;
// }
//
// function func2() {
//     this.value = 2;
// }
//
// elem1.addEventListener('focus', func1);
// elem1.addEventListener('blur', func2);


// 2 Дана кнопка, значением которой служит число 1.
// Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
//
// let btn = document.querySelector('#btn');
//
// btn.addEventListener('click', function () {
//     this.value++;
// });


// 355 Преимущество this / Преимущество this в JavaScript
//
// Из сказанного ранее пока не очевидно особое преимущество this. Ведь внутри функции-обработчика и
// так будет доступен наш элемент - ведь переменная elem будет глобальной для нашей функции func:
//
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
//
// function func() {
// 	// здесь доступна переменная elem с нашим элементом
// }
// И, несложно сообразить, что содержимое this и содержимое переменной elem в нашем случае равны:
//
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
//
// function func() {
// 	console.log(elem === this); // выведет true
// }
// В чем же особое преимущество this? Оно проявляется, когда у нас несколько элементов, и к каждому привязана одна и
// та же функция.
//
// Посмотрим на примере. Пусть у нас есть 3 кнопки:
//
// <input id="button1" type="submit" value="text1">
// <input id="button2" type="submit" value="text2">
// <input id="button3" type="submit" value="text3">
// Получим ссылки на них в переменные:
//
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// Привяжем к этим кнопкам одну и ту же функцию:
//
// button1.addEventListener('click', func);
// button2.addEventListener('click', func);
// button3.addEventListener('click', func);
// А внутри функции будем выводить this.value:
//
// function func() {
// 	console.log(this.value);
// }
// Получится, что у нас есть три кнопки. Нажатие на каждую кнопку будет приводить к вызову функции func.
// При этом при каждом клике this будет содержать ссылку на ту кнопку, в которой произошло событие.
//
// То есть каждое нажатие будет выводить в консоль value той кнопки, на которой произошло нажатие,
// но делать это будет одна и та же функция func! Вот в чем преимущество использования this.


// 1 Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
//
// let paragraph1 = document.querySelector('#paragraph1');
// let paragraph2 = document.querySelector('#paragraph2');
// let paragraph3 = document.querySelector('#paragraph3');
// let paragraph4 = document.querySelector('#paragraph4');
// let paragraph5 = document.querySelector('#paragraph5');
//
// function func() {
//     this.textContent += '!';
// }
//
// paragraph1.addEventListener('click', func);
// paragraph2.addEventListener('click', func);
// paragraph3.addEventListener('click', func);
// paragraph4.addEventListener('click', func);
// paragraph5.addEventListener('click', func);


// 2 Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем
// число в квадрат.
//
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
//
// function func() {
//     this.value **= 2;
//     // this.value *= this.value;
// }
//
// elem1.addEventListener('blur', func);
// elem2.addEventListener('blur', func);
// elem3.addEventListener('blur', func);


// 356 Получение группы элементов / Получение группы элементов в JavaScript
//
// В предыдущих уроках мы с помощью метода querySelector получали один элемент страницы.
// Теперь пришло время научится получать группу элементов и проделывать какие-нибудь операции сразу со многими элементами.
//
// Для этого существует метод querySelectorAll, получающий все теги, подпадающие под CSS селектор,
// в виде массива элементов. Чтобы сделать что-нибудь с найденными элементами, нужно поработать с полученным массивом,
// например, перебрать его циклом и в цикле выполнить какую-либо операцию с каждым элементом по отдельности.
//
// Пусть, к примеру, у нас даны абзацы с классом www:
//
// <p class="www">text1</p>
// <p class="www">text2</p>
// <p class="www">text3</p>
// Давайте получим массив этих абзацев, переберем их циклом и в цикле выведем тексты найденных абзацев в консоль:
//
// let elems = document.querySelectorAll('.www');
//
// for (let elem of elems) {
// 	console.log(elem.textContent);
// }
// А теперь давайте в конец текста каждого абзаца добавим восклицательный знак:
//
// let elems = document.querySelectorAll('.www');
//
// for (let elem of elems) {
// 	elem.textContent = elem.textContent + '!';
// }


// 1 Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы,
// переберите их циклом и установите текст каждого абзаца в значение 'text'.
//
// let btn = document.querySelector('#btn');
//
// function func() {
//     let elems = document.querySelectorAll('.www');
//
//     for (let elem of elems) {
//         elem.textContent = 'text';
//     }
// }
//
// btn.addEventListener('click', func);


// 2 Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.
//
// let btn = document.querySelector('#btn');
// let elems = document.querySelectorAll('.www');
//
// function func() {
//     // for i
//     for (let i = 0; i < elems.length; i++) {
//         elems[i].textContent += ' ' + (i + 1);
//     }
//
//     // forEach
//     // elems.forEach((elem, index) => {
//     //     elem.textContent += ' ' + (index + 1);
//     // });
// }
//
// btn.addEventListener('click', func);


// 3 Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в
// текст абзаца.
//
// let btn = document.querySelector('#btn');
// let paragraph = document.querySelector('.www');
// let elems = document.querySelectorAll('.inputs');
//
// btn.addEventListener('click', () => {
//     let sum = 0;
//
//     // for of
//     // for (let elem of elems) {
//     //     sum += +elem.value;
//     // }
//
//     // forEach
//     // elems.forEach(elem => {
//     //     sum += +elem.value;
//     // });
//
//     // for i
//     for (let i = 0; i < elems.length; i++) {
//         sum += +elems[i].value;
//     }
//
//     paragraph.textContent = sum;
// });


// 357 Именованные обработчики в цикле / Добавление обработчиков в цикле в JavaScript
//
