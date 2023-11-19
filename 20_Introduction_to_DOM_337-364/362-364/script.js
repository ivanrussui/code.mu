// 20_Introduction_to_DOM_362-364
// Введение в DOM


// 362 Советы по написанию кода / Советы по написанию кода на примере DOM в JavaScript
//
// Пусть перед вами стоит задача достаточной сложности, для реализации которой нужно написать некоторое количество
// строк кода.
//
// Неправильным подходом будет пытаться написать весь код решения целиком, а потом начать его проверять.
// В этом случае высока вероятность, что у вас ничего не заработает, а ошибку придется искать в большом количестве кода.
//
// Правильным подходом является разбиение задачи на маленькие элементарные шаги, которые вы будете реализовывать и
// сразу проверять их правильность. В этом случае, даже если вы где-то ошибетесь, вы сразу заметите проблему и
// исправите ее.
//
// Давайте попробуем на практике. Пусть у вас есть абзацы:
//
// <p>1</p>
// <p>2</p>
// <p>3</p>
// <p>4</p>
// <p>5</p>
// <p>6</p>
// Пусть перед вами стоит задача найти абзацы с числами, кратными 3, и найти сумму их чисел.
//
// Первым маленьким шагом я бы предложил получить наши абзацы в виде массива и вывести этот массив в консоль,
// чтобы посмотреть, что мы все правильно получили. Сделаем это:
//
// let elems = document.querySelectorAll('p');
// console.log(elems);
// Следующим маленьким шагом нужно перебрать наши абзацы циклом и вывести каждый из них в консоль по отдельности:
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	console.log(elem);
// }
// А теперь в цикле выведем тексты наших абзацев:
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	console.log(elem.textContent);
// }
// Теперь давайте выведем тексты тех абзацев, чье число делится на 3:
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	let text = +elem.textContent;
//
// 	if (text % 3 === 0) {
// 		console.log(text);
// 	}
// }
// Убедившись, что мы получаем правильные абзацы, можно приступать к суммированию их чисел:
//
// let elems = document.querySelectorAll('p');
// let sum = 0;
//
// for (let elem of elems) {
// 	let text = +elem.textContent;
//
// 	if (text % 3 === 0) {
// 		sum += text;
// 	}
// }
//
// console.log(sum);


// 1 Дан список с годами:
//
// <ul>
// 	<li>2000</li>
// 	<li>2004</li>
// 	<li>2021</li>
// 	<li>2022</li>
// 	<li>2025</li>
// 	<li>2031</li>
// </ul>
//
// Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.
//
// let elems = document.querySelectorAll('li');
// let totalSum = 0;
//
// for (let elem of elems) {
//     let sum = 0;
//     let str = elem.textContent
//
//     // for i работаю со строками
//     // for (let i = 0; i < str.length; i++) {
//     //     sum += +str[i];
//     // }
//
//     // разбиваю на массив и перебираю через for of
//     let arr = str.split('');
//
//     for (let string of arr) {
//         sum += +string;
//     }
//
//     // в не зависимости от способа перебора вывожу результат по условию
//     if (sum === 6) {
//         console.log(elem.textContent);
//         totalSum += +elem.textContent;
//     }
// }
//
// console.log(`Сумма полученных годов: ${totalSum}`);


// 363 Практика на поиск ошибок / Поиск ошибок в коде с DOM в JavaScript
//
// В следующих задачах некоторый программист написал код и, возможно, допустил в нем ошибки.
// Вы должны проверить, делает ли код то, что описано. Если код работает некорректно, вы должны исправить ошибки.

// 1 Код должен добавить текст в конец каждого абзаца:
//
// <p>1</p>
// <p>2</p>
// <p>3</p>
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
//     elem.textContent += '!';
// }


// 2 По клику на абзац его значение должно увеличиться на единицу:
//
// <p>1</p>
// <p>2</p>
// <p>3</p>
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = Number(this.textContent) + Number(1);
// 	});
// }


// 3 По клику на кнопку текст абзаца должен стать жирным:
//
// <p>text</p>
// <button>click</button>
//
// let button = document.querySelector('button');
// let elem   = document.querySelector('p');
//
// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>text</b>';
// });


// 4 По клику на кнопку должна вывестись сумма чисел из абзацев:
//
// <p>1</p>
// <p>2</p>
// <p>3</p>
//
// <button>click</button>
//
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
//
// button.addEventListener('click', function() {
// 	let sum = 0;
//
// 	for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
//
// 	console.log(sum);
// });


// 5 По клику на абзац ему в конец должен добавиться заданный текст:
//
// <p>1</p>
// <p>2</p>
// <p>3</p>
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	elem.addEventListener('click', function () {
// 		this.textContent += '!';
// 	});
// }


// 6 По клику на кнопку текст каждого абзаца должен стать жирным:
//
// <p>text1</p>
// <p>text2</p>
// <p>text3</p>
// <button>click</button>
//
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
//
// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = `<b>${elem.textContent}</b>`;
// 		// elem.innerHTML = `<b>${elem.innerHTML}</b>`;
// 	}
// });


// 7 По клику на кнопку в консоль должна вывестись сумма чисел из абзацев:
//
// <p>1</p>
// <p>2</p>
// <p>3</p>
//
// <button>click</button>
//
// let button = document.querySelector('button');
// let elems = document.querySelectorAll('p');
// let sum = 0;
//
// for (let elem of elems) {
//     sum += +elem.textContent;
// }
//
// button.addEventListener('click', function () {
//     console.log(sum);
// });


// 8 В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма чисел из инпутов:
//
// <input>
// <input>
// <input>
//
// <button>click</button>

// let button = document.querySelector('button');
// let elems = document.querySelectorAll('input');
// let sum = 0;
//
// button.addEventListener('click', function () {
//     for (let elem of elems) {
//         sum += +elem.value;
//     }
//     console.log(sum);
// });


// 9 В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
//
// <input id="inp1">
// <input id="inp2">
// <input id="inp3">
//
// <button id="btn">click</button>
//
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
//
// btn.addEventListener('click', function() {
// 	inp3.value = +inp1.value + +inp2.value;
// });


// 10 В первые два инпута вводятся числа. По клику на кнопку в абзац должна вывестись сумма этих чисел:
//
// <input id="inp1">
// <input id="inp2">
// <p id="res"></p>
//
// <button id="btn">click</button>
//
// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
//
// btn.addEventListener('click', function() {
// 	res.textContent = +inp1.value + +inp2.value;
// });


// 11 По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом его data атрибута:
//
// <input data-text="text1">
// <input data-text="text2">
// <input data-text="text3">
//
// <button id="btn">click</button>
//
// let inputs = document.querySelectorAll('input');
// let button = document.querySelector('#btn');
//
// button.addEventListener('click', function () {
//     for (let input of inputs) {
//         if (input.value === input.dataset.text) {
//             input.classList.add('right');
//         } else {
//             input.classList.add('wrong');
//         }
//     }
// });


// 12 По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом соответствующего
// элемента массива:
//
// <input>
// <input>
// <input>
//
// <button id="btn">click</button>
//
// let inputs = document.querySelectorAll('input');
// let button = document.querySelector('#btn');
//
// let texts = [
//     'text1',
//     'text2',
//     'text3',
// ];
//
// button.addEventListener('click', function () {
//     let index = 0;
//
//     for (let input of inputs) {
//         if (input.value === texts[index]) {
//             input.classList.add('right');
//         } else {
//             input.classList.add('wrong');
//         }
//         index++;
//     }
// });


// 13 В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма введенных чисел:
//
// <input>
// <input>
// <input>
//
// <button id="btn">click</button>
//
// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;
//
// btn.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		sum += Number(input.value);
// 	}
//
// 	console.log(sum);
// });


// 14 В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
//
// <input id="inp1">
// <input id="inp2">
// <input id="inp3">
//
// <button id="btn">click</button>
//
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
//
// btn.addEventListener('click', function() {
//     inp3.value  = +inp1.value + +inp2.value;
// });


// 15 В инпут вводится число. По потери фокуса в консоль должна вывестись сумма цифр этого числа:
//
// <input id="inp">
//
// let inp = document.querySelector('#inp');
//
// inp.addEventListener('blur', function () {
//     let sum = 0;
//     let digits = this.value.split('');
//
//     for (let digit of digits) {
//         sum += +digit;
//     }
//
//     console.log(sum);
// });


// 364 Практикум / Отработка изученного материала на работу с DOM

// 1 Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
//
// let input = document.querySelector('input');
// let paragraph = document.querySelector('p');
//
// function func() {
//     paragraph.textContent += input.value;
//     input.value = '';
// }
//
// input.addEventListener('blur', func);


// 2 Дано несколько инпутов, абзац и кнопка.
// По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
//
// let inputs = document.querySelectorAll('input');
// let paragraph = document.querySelector('p');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//    let sum = 0;
//
//     for (let input of inputs) {
//         sum += +input.value;
//     }
//
//     paragraph.textContent = sum.toString();
// });


// 3 Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
//
// let input = document.querySelector('input');
//
// function func() {
//     let sum = 0;
//     let arr = this.value.split('');
//
//     arr.forEach(el => {
//         sum += +el;
//     });
//
//     console.log(sum);
// }
//
// input.addEventListener('blur', func);


// 4 Дан инпут. В него вводятся числа через запятую.
// По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
//
// let input = document.querySelector('input');
//
// input.addEventListener('blur', function () {
//     let sum = 0;
//     let arr = this.value.split(',');
//
//     for (let el of arr) {
//         sum += +el;
//     }
//
//     console.log(sum / arr.length);
// });


// 5 Даны 4 инпута. В первый инпут вводится ФИО через пробел.
// По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
//
// let input = document.querySelector('#input');
// let inputs = document.querySelectorAll('.input');
//
// input.addEventListener('blur', function () {
//     // ФИО полностью в 3 инпута
//     // for (let input of inputs) {
//     //     input.value = this.value;
//     // }
//
//     // ФИО в разные инпуты
//     let arr = this.value.split(' ');
//
//     // for of
//     // let index = 0;
//     //
//     // for (let input of inputs) {
//     //     if (this.value) { // проверка на undefined
//     //         input.value = arr[index];
//     //     }
//     //     index++;
//     // }
//
//     // forEach
//     inputs.forEach((el, index) => {
//         if (this.value) {
//             el.value = arr[index];
//         }
//     });
//
//     this.value = ''; // очистка 1 инпута
//
// });


// 6 Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса
// инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
//
// let input = document.querySelector('#input');
//
// input.addEventListener('blur', function () {
//     let arr = this.value.split(' ');
//     let newArr = [];
//
//     for (let el of arr) {
//         newArr.push(el[0].toUpperCase() + el.slice(1));
//     }
//
//     this.value = newArr.join(' ');
// });


// 7 Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
//
// let input = document.querySelector('#input');
//
// input.addEventListener('blur', function () {
//     let arr = this.value.split(' ');
//     let index = arr.length;
//
//     // альтернатива
//     // let index = 0;
//     //
//     // for (let arrElement of arr) {
//     //     index++;
//     // }
//
//     console.log(index);
// });


// 8 Дан инпут. В него вводится дата в формате 31.12.2016.
// По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
//
// let input = document.querySelector('#input');
//
// function func() {
//     this.value = this.value.split('.').reverse().join('-');
// }
//
// input.addEventListener('blur', func);


// 9 Дан инпут. В него вводится слово.
// По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
//
// let input = document.querySelector('#input');
// let btn = document.querySelector('button');
//
// function func() {
//     let inputReverse = input.value.split('').reverse().join('');
//
//     if (inputReverse === input.value) {
//         console.log('это слово читается с начала и с конца одинаково');
//     } else {
//         console.log('это слово не читается с начала и с конца одинаково');
//     }
//
// }
//
// btn.addEventListener('click', func);


// 10 Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
//
// let input = document.querySelector('#input');
//
// input.addEventListener('blur', function () {
//     if (this.value.includes(3)) {
//         console.log('число содержит внутри себя цифру 3');
//     }
// });


// 11 Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
//
// let btn = document.querySelector('button');
// let paragraph = document.querySelectorAll('p');
//
// btn.addEventListener('click', function () {
//     paragraph.forEach((item, index) => {
//         if (!item.textContent.includes(index + 1)) {
//             item.textContent += ' ' + (index + 1);
//         }
//     });
// });


// 12 Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
//
// let links = document.querySelectorAll('a');
//
// links.forEach(item => {
//     item.textContent +=` (${item.href})`;
// });


// 13 Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
//
// let links = document.querySelectorAll('a');
//
// links.forEach(item => {
//     // if (item.href.includes('http://')) {
//     if (item.href.startsWith('http://')) {
//         item.innerHTML += '&rarr;';
//     }
// });


// 14 Даны несколько абзацев с числами.
// По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
//
// let paragraphs = document.querySelectorAll('p');
//
// paragraphs.forEach(item => {
//     item.addEventListener('click', function func() {
//         this.textContent **= 2;
//         this.removeEventListener('click', func);
//     });
// });


// 15 Дан инпут. В него вводится дата в формате 31.12.2016.
// По потери фокуса узнайте день недели (словом), который приходится на эту дату.
//
// let input = document.querySelector('input');
// let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
// input.addEventListener('blur', function () {
//     let arr = this.value.split('.');
//     let date = new Date(arr[2], arr[1] - 1, arr[0]);
//     let dayOfWeek = date.getDay();
//
//     console.log(`На ${this.value} приходится день недели - ${days[dayOfWeek]}.`);
// });


// 16 Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута.
// Сделайте так, чтобы это значение не могло стать меньше нуля.
//
// let input = document.querySelector('input');
// let btnPlus = document.querySelector('#plus');
// let btnMinus = document.querySelector('#minus');
//
// function increaseOne() {
//     input.value = +input.value + 1;
// }
//
// btnPlus.addEventListener('click', increaseOne);
// btnMinus.addEventListener('click', reduceOne);
//
// function reduceOne() {
//     if (input.value > 0) {
//         input.value -= 1;
//     } else {
//         console.log('Значение инпута не может быть меньше нуля');
//     }
// }
//
// input.addEventListener('change', () => {
//     if (input.value < 0) {
//         input.value = 0;
//         console.log('Значение инпута не может быть меньше нуля');
//     }
// });


// 17 Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// let input = document.querySelector('input');
// let paragraphs = document.querySelectorAll('p');
// let counter = 0;
// input.value = counter;
//
// paragraphs.forEach(item => {
//     item.addEventListener('click', () => {
//         counter++;
//         input.value = counter;
//     });
// });


// 18 На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так,
// чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
//
// let divs = document.querySelectorAll('div');
//
// for (let div of divs) {
//     if (div.textContent.length > 10) {
//         div.textContent = div.textContent.slice(0, 10) + '...';
//     }
// }