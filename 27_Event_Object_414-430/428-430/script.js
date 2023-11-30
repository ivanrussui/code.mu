// 27_Event_Object_428-430
// Объект Event


// 428 Обработчики на новые элементы / Навешивание обработчиков на новые элементы в JavaScript
//
// Пусть у нас есть список ul и кнопка:
//
// <ul>
// 	<li>item</li>
// 	<li>item</li>
// 	<li>item</li>
// 	<li>item</li>
// 	<li>item</li>
// </ul>
//
// <button>add</button>
// Получим наши элементы в соответствующие переменные:
//
// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// Сделаем так, чтобы по клику на любую li ей в конец добавлялся восклицательный знак:
//
// for (let item of items) {
// 	item.addEventListener('click', function() {
// 		this.textContent = this.textContent + '!';
// 	});
// }
// Давайте теперь сделаем так, чтобы по нажатию на кнопку в конец списка добавлялся новая li:
//
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
// 	list.appendChild(item);
// });
// Мы, однако, получим проблему: клик на новую добавленную li не будет приводить к добавлению восклицательного знака в
// конец. Дело в том, что мы добавляем обработчик клика только на те li, которые существовали изначально, но не на новые.
//
// Исправим проблему, навесив на новую li обработчик клика:
//
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
//
// 	item.addEventListener('click', function() { // обработчик клика
// 		this.textContent = this.textContent + '!';
// 	});
//
// 	list.appendChild(item);
// });
// Однако, теперь код функции-обработчика дублируется в двух местах - для изначально существующих li и для новых.
// Исправим это, вынеся его в отдельную функцию:
//
// function handler() {
// 	this.textContent = this.textContent + '!';
// }
// Используем нашу функцию, чтобы избежать дублирования кода:
//
// for (let item of items) {
// 	item.addEventListener('click', handler);
// }
//
// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
//
// 	item.addEventListener('click', handler);
//
// 	list.appendChild(item);
// });
// Задача в общем-то решена и мы избежали дублирования кода функции-обработчика. Однако, навешивать обработчики событий
// нам все равно приходится в двух местах: и в цикле для существующих li, и в при клике на кнопку.
// В следующем уроке мы разберем способ избавится от этого неудобства.


// 429 Делегирование событий / Делегирование событий в JavaScript
//
// В предыдущем уроке была описана проблема, возникающая при добавлении новых элементов, и приведено ее решение.
// В данном уроке мы рассмотрим более удачный способ обойти проблему - делегирование событий. Давайте его разберем.
//
// Как вы уже знаете, кликая на li, мы одновременно кликаем и на ul. Это возможно благодаря всплытию событий.
// Мы можем использовать это для решения нашей задачи: навесим событие не на каждую li, а на их родителя ul:
//
// list.addEventListener('click', function() {
//
// });
// Теперь в обработчике события this будет указывать на элемент, к которому привязан обработчик,
// а event.target - на элемент, в котором случилось событие:
//
// list.addEventListener('click', function(event) {
// 	console.log(this);         // наш список
// 	console.log(event.target); // пункт списка
// });
// Сделаем так, чтобы li, на которой случился клик, в конец добавлялся восклицательный знак:
//
// list.addEventListener('click', function(event) {
// 	event.target.textContent = event.target.textContent + '!';
// });


// 1 Повторите приведенное решение. Убедитесь, что новые li также будут реагировать на клик.
//
// let button = document.querySelector('button');
// let list = document.querySelector('ul');
//
// list.addEventListener('click', function (event) {
//     event.target.textContent += '!';
// });
//
// button.addEventListener('click', function () {
//     let el = document.createElement('li');
//     el.textContent = 'item';
//     list.appendChild(el);
// });


// 430 Универсальное делегирование событий / Универсальное делегирование событий в JavaScript
//
// Приведенный в предыдущем уроке код рабочий, однако, не без недостатков.
// Давайте разберем эти недостатки и напишем более универсальное решение.
//
// Недостаток нашего кода проявится в том случае, когда внутри li будут какие-то вложенные теги.
// В нашем случае пусть это будут теги i:
//
// <ul>
// 	<li>item <i>italic</i> item</li>
// 	<li>item <i>italic</i> item</li>
// 	<li>item <i>italic</i> item</li>
// 	<li>item <i>italic</i> item</li>
// 	<li>item <i>italic</i> item</li>
// </ul>
// В этом случае нажатие на тег i приведет к добавлению восклицательного знака в конец тега i, а не тега li,
// как мы хотели бы - ведь в event.target попадает именно тот тег, в котором случилось событие.
//
// Решить проблему можно с помощью метода closest:
//
// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
//
// 	if (li) {
// 		li.textContent = li.textContent + '!';
// 	}
// });


// 1 Повторите приведенное решение.
//
// let button = document.querySelector('button');
// let list = document.querySelector('ul');
//
// list.addEventListener('click', function (event) {
//     let li = event.target.closest('li');
//
//     if (li) {
//         li.innerHTML += '!';
//     }
// });
//
// button.addEventListener('click', function () {
//     let el = document.createElement('li');
//     el.innerHTML = '<li>item <i>italic</i> item</li>';
//     list.appendChild(el);
// });

