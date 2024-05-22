// Метрики элементов


// 14) Расширение элементов в CSS / Расширение элементов в CSS для JavaScript
//
// Задание CSS свойств width и height не гарантирует того, что элемент станет заданного размера.
// Давайте посмотрим на примерах.
//
// Пример
// Сейчас размеры элемента совпадают с заданными:
//
// <div id="elem">
// 	text
// </div>
// #elem {
// 	width: 200px;
// 	height: 200px;
// 	margin: 50px auto;
// 	background: #CFF5BF;
// }
//
//
// Пример
// А теперь давайте зададим элементу свойство padding.
// В результате реальная ширина элемента станет больше и расширится на заданное значение внутреннего отступа:
//
// <div id="elem">
// 	text
// </div>
// #elem {
// 	padding: 25px;
// 	width: 200px;
// 	height: 200px;
// 	margin: 50px auto;
// 	background: #CFF5BF;
// }
//
//
// Пример
// Наличие границы также расширяет элемент:
//
// <div id="elem">
// 	text
// </div>
// #elem {
// 	width: 200px;
// 	height: 200px;
// 	margin: 50px auto;
// 	background: #CFF5BF;
// 	border: 20px solid #F0D7A1;
// }
//
//
// Пример
// Свойство box-sizing позволяет изменять описанное выше поведение. Можно сделать так, чтобы ни внутренний отступ,
// ни граница не расширяли элемент. Для этого этому свойству нужно задать значение border-box:
//
// <div id="elem">
// 	text
// </div>
// #elem {
// 	box-sizing: border-box;
// 	padding: 20px;
// 	width: 200px;
// 	height: 200px;
// 	margin: 50px auto;
// 	background: #CFF5BF;
// 	border: 20px solid #F0D7A1;
// }
//
//
// Важность описанного
// С точки зрения JavaScript описанная ситуация не очень удобна. Ведь получается,
// что прочитав значение свойства width мы совсем не можем быть уверенными в том, что элемент будет именно этой ширины.


// 15) Тестовый элемент / Тестовый элемент в JavaScript
//
// Давайте создадим тестовый элемент, на примере которого мы будем изучать различные метрики в следующих уроках.
// Этот элемент мы организуем так, чтобы в нем были границы, внутренний отступ, а также полосы прокрутки:
//
// <div id="elem">
// 	некий длинный текст
// </div>
//
// #elem {
// 	width: 300px;
// 	height: 150px;
// 	margin: 50px auto;
// 	padding: 25px;
// 	background: #CFF5BF;
// 	border: 25px solid #F0D7A1;
// 	overflow: auto;
// 	text-align: justify;
// }
//
// Получим ссылку на этот элемент в переменную:
//
// let elem = document.querySelector('#elem');

// 1 Сделайте себе аналогичный тестовый элемент. Проверяйте на нем свойства, которые будут изучаться в следующих уроках.


// 16) Клиентский размер элемента / Клиентский размер элемента в JavaScript
//
// Следующие свойства содержат клиентский размер элемента, включающий в себя размер содержимого и внутреннего отступа,
// и не включающего в себя полосу прокрутки:
//
// console.log(elem.clientWidth);  // ширина
// console.log(elem.clientHeight); // высота

// 1 Дан элемент и кнопка. По нажатию на кнопку выведите в консоль клиентскую ширину и высоту элемента.
//
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', () => {
//     console.log(elem.clientWidth);
//     console.log(elem.clientHeight);
// });


// 17) Полный размер элемента / Полный размер элемента в JavaScript
//
// Следующие свойства содержат полный размер элемента:
//
// console.log(elem.offsetWidth);  // ширина
// console.log(elem.offsetHeight); // высота

// 1 Дан элемент и кнопка. По нажатию на кнопку выведите в консоль полную ширину и высоту элемента.
//
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', () => {
//     console.log(elem.offsetWidth);
//     console.log(elem.offsetHeight);
// });


// 2 Если отнять от полной ширины клиентскую ширину, то получится некоторое число. Какие размеры оно содержит в себе?
//
// размеры бордера. 50 к ширине и 50 к высоте
//
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', () => {
//     console.log(elem.offsetWidth - elem.clientWidth);
//     console.log(elem.offsetHeight - elem.clientHeight);
// });


// 18) Размеры элемента с прокруткой / Размеры элемента с прокруткой в JavaScript
//
// Следующие свойства содержат размеры элемента с учетом спрятанной под прокруткой части:
//
// console.log(elem.scrollWidth);  // ширина
// console.log(elem.scrollHeight); // высота

// 1 Дан элемент и кнопка. По нажатию на кнопку выведите в консоль ширину и высоту элемента с прокруткой.
//
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', () => {
//     console.log(elem.scrollWidth);
//     console.log(elem.scrollHeight);
// });


// 2 Если отнять от высоты с прокруткой полную высоту, то получится некоторое число. Какие размеры оно содержит в себе?
//
// содержит размеры скрытого текста
//
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', () => {
//     console.log(elem.scrollHeight - elem.offsetHeight);
// });


// 19) Прокрутка элементов в JavaScript
//
// Следующие свойства содержат то, на сколько прокручен элемент:
//
// console.log(elem.scrollTop);  // сверху
// console.log(elem.scrollLeft); // слева

// 1 Дан элемент и кнопка. По нажатию на кнопку узнайте на сколько прокручен элемент по вертикали.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     console.log(elem.scrollTop);
// });


// 2 Дан элемент и кнопка. По нажатию на кнопку проверьте, прокручен ли элемент по вертикали.

// btn.addEventListener('click', () => {
//     if (elem.scrollTop) {
//         return console.log(true);
//     }
//     console.log(false);
// });


// 3 Прокрутите элемент до конца. Нажмите на кнопку, чтобы вывелась величина полной прокрутки.

// btn.addEventListener('click', () => {
//     console.log(elem.scrollTop);
// });


// 4 Получите scrollHeight элемента и отнимите от него величину полной прокрутки (из предыдущей задачи).
// Какое значение получится? Какие размеры оно содержит в себе?

// дает нам высоту части содержимого элемента, начиная от текущего положения прокрутки до самого низа элемента

// btn.addEventListener('click', () => {
//     console.log(elem.scrollHeight - elem.scrollTop);
// });


// 5 Сложите offsetHeight и величину полной прокрутки. Отнимите эту сумму от значения scrollHeight.
// Какое число получится?

// -66

// btn.addEventListener('click', () => {
//     let sumHeight = elem.offsetHeight + elem.scrollTop
//     let subHeight = elem.scrollHeight - sumHeight
//     console.log(subHeight);
// });


// 20) Изменение прокрутки элемента / Изменение прокрутки элемента в JavaScript
//
// Свойства, содержащие прокрутку элементов, можно изменять. В этом случае элемент
// будет прокручиваться к указанному значению. Давайте например прокрутим элемент на позицию 200px сверху:
//
// elem.scrollTop = 200;
// А теперь прокрутим элемент на 100px вниз от текущего значения:
//
// elem.scrollTop = elem.scrollTop + 100;
// А теперь прокрутим элемент в конец:
//
// elem.scrollTop = elem.scrollHeight - elem.clientHeight;

// 1 Дан элемент и кнопка.
// По нажатию на кнопку прокрутите элемент на положение прокрутки 100px по вертикали и 50px по горизонтали.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     elem.scrollTop = 100;
//     elem.scrollLeft = 50;
// });


// 2 Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент на 50px вниз от текущего положения прокрутки.

// btn.addEventListener('click', () => {
//     elem.scrollTop = elem.scrollTop + 50;
// });


// 3 Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент в самый верх.

// btn.addEventListener('click', () => {
//     elem.scrollTop = 0;
// });


// 4 Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент в самый низ.

// btn.addEventListener('click', () => {
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// });


// 21) Прокрутка элемента до конца / Прокрутка элемента до конца в JavaScript
//
// Прокрутим элемент до самого низа:
//
// elem.scrollTop = elem.scrollHeight - elem.clientHeight;

// 1 Дан элемент и кнопка. По нажатию на кнопку прокрутите элемент до самого низа.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// });


// 2 Дан элемент и кнопка. По нажатию на кнопку проверьте, прокручен ли элемент до конца по вертикали.

// btn.addEventListener('click', () => {
//     let allHeight = Math.ceil(elem.scrollTop + elem.clientHeight) + 1;
//     console.log(allHeight);
//     if (allHeight >= elem.scrollHeight) {
//         console.log('finish scroll');
//     } else {
//         console.log('not finish scroll');
//     }
//     // console.log('scrollHeight', elem.scrollHeight);
//     // console.log('scrollTop', elem.scrollTop);
//     // console.log('clientHeight', elem.clientHeight);
//     // console.log('offsetHeight', elem.offsetHeight);
// });


// 22) Распахивание элемента / Распахивание элемента в JavaScript
//
// Распахнем элемент на всю высоту:
//
// elem.style.height = elem.scrollHeight + 'px';
// Распахнем элемент на всю ширину:
//
// elem.style.width = elem.scrollWidth + 'px';

// 1 Дан элемент и кнопка. По нажатию на кнопку распахните элемент на всю высоту.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', () => {
//     elem.style.height = elem.scrollHeight + 'px';
//     elem.style.width = elem.scrollWidth + 'px';
// });


// 23) Ширина полосы прокрутки / Ширина полосы прокрутки в JavaScript
//
//  Ширина полосы прокрутки зависит от браузера. Мы можем получить значение этой ширины.
//  Для этого создадим элемент с прокруткой, но без границ и внутренних отступов:
//
// let div = document.createElement('div');
// Добавим ему некоторые стили:
//
// div.style.overflowY = 'scroll';
// div.style.width = '50px';
// div.style.height = '50px';
// Вставим элемент в документ, иначе размеры будут равны нулю:
//
// document.body.append(div);
// Получим размер полосы прокрутки:
//
// let scrollWidth = div.offsetWidth - div.clientWidth;
// Удалим элемент:
//
// div.remove();

// 1 Дана кнопка. По нажатию на кнопку получите ширину полосы прокрутки в вашем браузере.

let btn = document.querySelector('button');
let div = document.createElement('div');

btn.insertAdjacentElement('beforebegin', div);
div.style.overflowY = 'scroll'
div.style.width = '50px';
div.style.height = '50px';

btn.addEventListener('click', () => {
    console.log(div.offsetWidth - div.clientWidth);
});