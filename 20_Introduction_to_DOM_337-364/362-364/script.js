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
