// 22_Stylization_377-382
// Стилизация


// 377 Стилизация через атрибут style / Стилизация элементов через атрибут style в JavaScript
//
// Давайте теперь научимся добавлять CSS стили элементам. Это делается путем изменения атрибута style. К примеру,
// чтобы поменять цвет, нужно построить следующую цепочку: elem.style.color, и присвоить ей нужное значение цвета.
//
// Посмотрим на примере. Пусть у нас есть вот такой элемент:
//
// <p id="elem">text</p>
// Сделаем этот элемент красного цвета:
//
// let elem = document.querySelector('#elem');
// elem.style.color = 'red';


// 1 Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
//
// let div = document.querySelector('div');
// let button = document.querySelector('button');
//
// button.addEventListener('click', function () {
//     div.style.width = '2rem';
//     div.style.height = '1rem';
//     div.style.border = '.3rem solid indigo';
// });


// 378 Стилизация свойств с дефисом / Стилизация свойств с дефисом в JavaScript
//
// Свойства, которые записываются через дефис, например font-size, преобразуются в camelCase. То есть font-size станет fontSize:
//
// elem.style.fontSize = '20px';


// 1 Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.
//
// let div = document.querySelector('div');
// let button = document.querySelector('button');
//
// button.addEventListener('click', function () {
//     div.style.fontSize = '20px';
//     div.style.borderTop = '3px solid indigo';
//     div.style.backgroundColor = 'gold';
// });


// 379 Исключение при стилизации элементов / Исключение при стилизации элементов в JavaScript
//
// Свойство float является исключением, так как оно является специальным в JavaScript. Для него следует писать cssFloat:
//
// elem.style.cssFloat = 'right';


// 1 Дан список ul и кнопка. По клику на кнопку добавьте тегам li свойство float в значении left.
//
// let listItem = document.querySelectorAll('li');
// let button = document.querySelector('button');
//
// button.addEventListener('click', function () {
//     for (let listItemElement of listItem) {
//         listItemElement.style.cssFloat = 'left';
//     }
// });


// 380 Стилизация через CSS классы / Стилизация с помощью CSS классов на JavaScript
//
// В предыдущем уроке мы с вами научились менять CSS стили элементов через изменение атрибута style. Чаще всего
// это не очень хорошая идея. Дело в том, что, если раскидать CSS стили по JavaScript коду, в дальнейшем будет
// проблематично изменить дизайн сайта, так как придется ковырять JavaScript код в поисках зашитых туда стилей.
//
// Более удобно для дальнейшей поддержки будет добавлять или убирать элементу CSS классы, тем самым стилизуя их нужным образом.
//
// Давайте посмотрим на примере. Пусть у нас есть несколько абзацев:
//
// <p>text1</p>
// <p>text2</p>
// <p>text3</p>
// Давайте сделаем так, чтобы по клику на любой абзац, этот абзац красился в какой-нибудь цвет, например, в зеленый.
// Для этого в CSS файле сделаем специальный класс для окрашивания абзацев:
//
// .colored {
// 	color: green;
// }
// Преимущество использование класса в том, что теперь легко можно будет поменять желаемый цвет - для этого нужно будет
// просто внести изменение в CSS файл, не ковыряя JavaScript код. Особенно удобно это будет в том случае, если
// JavaScript код пишете вы, а в дальнейшем стилизовать его будет кто-то другой
// (возможно менее квалифицированный человек, умеющий работать только с CSS).
//
// Итак, теперь, после введения класса, по клику на любой абзац можно изменить его цвет, просто добавив ему наш класс:
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.classList.add('colored'); // добавляем абзацу класс
// 	});
// }


// 1 Объясните, почему я выбрал для названия класса слово colored, а не слово green, явно указывающее на желаемый нами цвет.
//
// Потому что в дальнейшем при изменении цвета, нам не надо будет лезть в JS
// colored лучше подойдет, тк нет привязки к конкретному цвету


// 2 Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'.
// Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).
//
// let p = document.querySelector('p');
//
// получаем каждый элемент отдельно и у каждого отдельная функция-обработчик
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// let btn3 = document.querySelector('#btn3');
//
// btn1.addEventListener('click', function () {
//    p.classList.add('decoration');
// });
//
// btn2.addEventListener('click', function () {
//     p.classList.add('weight');
// });
//
// btn3.addEventListener('click', function () {
//     p.classList.add('colored');
// });

// получаем все элементы и при переборе используем условия
// let buttons = document.querySelectorAll('button');
//
// for (let button of buttons) {
//     button.addEventListener('click', function () {
//         if (this.id === 'btn1') {
//             p.classList.add('decoration');
//         } else if (this.id === 'btn2') {
//             p.classList.add('weight');
//         } else if (this.id === 'btn3') {
//             p.classList.add('colored');
//         }
//     });
// }


// 381 Преимущество стилизации с помощью CSS классов / Преимущество стилизации с помощью CSS классов в JavaScript
//
// Использование классов вместо изменения стилей напрямую имеет еще одно преимущество.
// Легким движением руки можно сделать так, что стили элементов будут чередоваться.
//
// Например, можно сделать так, что при первом клике на абзац он будет красится в определенный цвет,
// а при повторном клике - возвращать себе исходный цвет. Для этого нужно просто метод add поменять на метод toggle:
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.classList.toggle('colored');
// 	});
// }

// 1 Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки.

// let p = document.querySelector('p');
// let buttons = document.querySelectorAll('button');
//
// for (let button of buttons) {
//     button.addEventListener('click', function () {
//         if (this.id === 'btn1') {
//             p.classList.toggle('decoration');
//         } else if (this.id === 'btn2') {
//             p.classList.toggle('weight');
//         } else if (this.id === 'btn3') {
//             p.classList.toggle('colored');
//         }
//     });
// }


// 382 Применение cтилизации / Применение cтилизации в JavaScript
//
// Давайте сделаем кнопку, по нажатию на которую элемент будет то показываться, то скрываться.
// Пусть по умолчанию элемент скрыт (это реализуем с помощью display: none), а покажется он с помощью
// добавления класса active. Этот класс будем то добавлять, то убирать с помощью classList.toggle:
//
// <button id="button">click me</button>
// <div id="elem"></div>
// #elem {
// 	display: none;
// 	width: 200px;
// 	height: 200px;
// 	border: 1px solid green;
// }
// #elem.active {
// 	display: block;
// }
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
//
// button.addEventListener('click', function() {
// 	elem.classList.toggle('active');
// });

