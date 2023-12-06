// 31_Practice_464-484
// Практика


// 464 Создание элементов из массива / Создание элементов из массива на JavaScript
//
// Пусть у нас есть некоторый массив:
//
// let arr = [1, 2, 3, 4, 5];
// Пусть также у нас есть некоторый элемент-родитель:
//
// <div id="parent"></div>
// Давайте добавим в наш родитель новые абзацы, текстом которых будут элементы нашего массива.
//
// Реализуем описанное:
//
// let parent = document.querySelector('#parent');
//
// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
//
// 	parent.appendChild(p);
// }


// 1 Модифицируйте мой код так, чтобы по клику на абзац к его содержимому прибавлялась единица.
//
// for (let elem of arr) {
//     let p = document.createElement('p');
//     p.textContent = elem;
//
//     parent.appendChild(p);
//
//     p.addEventListener('click', function () {
//         this.textContent++;
//     });
// }


// 465 Практика на создание списков ul / Практика на создание списков ul на JavaScript

// 1 Дан ul:
//
// <ul id="elem"></ul>
// Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
//
// let elem = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
//
// for (let number of arr) {
//     let li = document.createElement('li');
//     li.textContent = number.toString();
//     elem.append(li);
// }


// 2 Модифицируйте предыдущую задачу так,
// чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
//
// for (let number of arr) {
//     let li = document.createElement('li');
//     li.textContent = number.toString();
//     elem.append(li);
//
//     li.addEventListener('click', function () {
//         alert(this.textContent);
//     });
// }


// 3 Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
//
// for (let number of arr) {
//     let li = document.createElement('li');
//     li.textContent = number.toString();
//     elem.append(li);
//
//     li.addEventListener('click', function () {
//         this.textContent += '!';
//     });
// }


// 4 Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
//
// for (let number of arr) {
//     let li = document.createElement('li');
//     li.textContent = number.toString();
//     elem.append(li);
//
//     li.addEventListener('click', function addText() {
//         this.textContent += '!';
//
//         this.removeEventListener('click', addText);
//     });
// }


// 466 Создание таблиц / Создание HTML таблиц на JavaScript
//
// Пусть у нас есть вот такая пустая HTML таблица:
//
// <table id="table"></table>
// Давайте заполним эту таблицу рядами и колонками. Вот пример того, что у нас должно получится:
//
// <table id="table">
// 	<tr>
// 		<td></td>
// 		<td></td>
// 		<td></td>
// 	</tr>
// 	<tr>
// 		<td></td>
// 		<td></td>
// 		<td></td>
// 	</tr>
// 	<tr>
// 		<td></td>
// 		<td></td>
// 		<td></td>
// 	</tr>
// </table>
// Для решения задачи нам нужно два вложенных цикла. Первый цикл будет создавать ряды таблицы,
// а второй - ячейки в каждом ряду:
//
// let table = document.querySelector('#table');
//
// for (let i = 0; i < 3; i++) {
// 	let tr = document.createElement('tr');
//
// 	for (let i = 0; i < 3; i++) {
// 		let td = document.createElement('td');
// 		tr.appendChild(td);
// 	}
//
// 	table.appendChild(tr);
// }


// 1 Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
//
// let table = document.querySelector('#table');
//
// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');
//
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         tr.append(td);
//     }
//
//     table.append(tr);
// }


// 2 Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
//
// let table = document.querySelector('#table');
//
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         tr.append(td);
//     }
//
//     table.append(tr);
// }


// 3 Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.
//
// let table = document.querySelector('#table');
//
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
//
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//         td.textContent = 'x';
//         tr.append(td);
//     }
//
//     table.append(tr);
// }


// 4 Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
//
// let table = document.querySelector('#table');
// let width = document.querySelector('#width');
// let height = document.querySelector('#height');
// let btn = document.querySelector('input[type="button"]');
// let clear = true;
//
// function getTable() {
//     if (!clear) {
//         table.textContent = '';
//     }
//
//     if (width.value > 0 && height.value > 0) {
//         createTable();
//     } else {
//         table.append('Введите числа больше 0!');
//         table.style.color = 'red';
//     }
//
//     cleanValues();
// }
//
// function createTable() {
//     for (let i = 0; i < width.value; i++) {
//         let tr = document.createElement('tr');
//         table.append(tr);
//
//         for (let j = 0; j < height.value; j++) {
//             let td = document.createElement('td');
//             td.textContent = 'x';
//             tr.append(td);
//         }
//     }
//     table.style.color = 'green';
// }
//
// function cleanValues() {
//     width.value = '';
//     height.value = '';
//     clear = false;
// }
//
// btn.addEventListener('click', getTable);


// 467 Последовательное заполнение таблиц / Последовательное заполнение HTML таблиц
//
// Пусть у нас есть вот такая пустая HTML таблица:
//
// <table id="table"></table>
// Давайте заполним эту таблицу ячейками и сделаем так, чтобы в этих ячейках шли числа от 1 до 9.
// Вот пример того, что у нас должно получится:
//
// <table id="table">
// 	<tr>
// 		<td>1</td>
// 		<td>2</td>
// 		<td>3</td>
// 	</tr>
// 	<tr>
// 		<td>4</td>
// 		<td>5</td>
// 		<td>6</td>
// 	</tr>
// 	<tr>
// 		<td>7</td>
// 		<td>8</td>
// 		<td>9</td>
// 	</tr>
// </table>
// Давайте приступим к реализации.
//
// Для начала давайте просто сделаем таблицу размером 3 на 3, заполненную буквами 'x':
//
// let table = document.querySelector('#table');
//
// for (let i = 0; i < 3; i++) {
// 	let tr = document.createElement('tr');
//
// 	for (let i = 0; i < 3; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = 'x';
// 		tr.appendChild(td);
// 	}
//
// 	table.appendChild(tr);
// }
// Давайте теперь сделаем так, чтобы вместо букв 'x' в ячейки записывались числа по возрастанию.
//
// Для этого нам необходимо ввести еще один счетчик,
// который будет последовательно увеличивать свои значения в каждой итерации внутреннего цикла, вот так:
//
// let table = document.querySelector('#table');
//
// let k = 1; // начальное значение счетчика
// for (let i = 0; i < 3; i++) {
// 	let tr = document.createElement('tr');
//
// 	for (let i = 0; i < 3; i++) {
// 		let td = document.createElement('td');
//
// 		td.textContent = k; // записываем счетчик в ячейку
// 		k++; // увеличиваем счетчик
//
// 		tr.appendChild(td);
// 	}
//
// 	table.appendChild(tr);
// }


// 1 Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так,
// чтобы в ее ячейках последовательно стояли числа от 1 до 25.
//
// let table = document.querySelector('#table');
// let k = 1;
//
// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');
//     table.append(tr);
//
//     for (let j = 0; j < 5; j++) {
//         let td = document.createElement('td');
//
//         addZero(k, td);
//
//         tr.append(td);
//         k++;
//     }
// }
//
// function addZero(num, text) {
//     if (num < 10) {
//         return text.textContent = '0' + num;
//     } else {
//         return text.textContent = num;
//     }
// }


// 2 Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
//
// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');
//     table.append(tr);
//
//     for (let j = 0; j < 10; j++) {
//         let td = document.createElement('td');
//
//         addZero(k, td);
//
//         if (k % 2 === 0) {
//             tr.append(td);
//         }
//         k++;
//     }
// }


// 468 Создание таблицы из массива / Создание HTML таблицы из массива на JavaScript
//
// Пусть у нас есть некоторая пустая таблица:
//
// <table id="table"></table>
// Пусть у нас также дан некоторый двухмерный массив, например, такой:
//
// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// Давайте на основе этого массива сделаем HTML таблицу, заполненную элементами данного массива.
// То есть у нас получится таблица с тремя рядами, в каждом из которых будет по 4 ячейки.
//
// Решим задачу с помощью двух вложенных циклов for-of:
//
// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// let table = document.querySelector('#table');
//
// for (let subArr of arr) {
//     let tr = document.createElement('tr');
//
//     for (let elem of subArr) {
//         let td = document.createElement('td');
//         td.textContent = elem;
//         tr.appendChild(td);
//     }
//
//     table.appendChild(tr);
// }
// Как вы видите, наше решение получилось универсальным и не зависит от количества подмассивов и количества элементов
// в каждом подмассиве. Единственное условие - чтобы в подмассивах было одинаковое количество элементов.


// 1 Дан массив:
//
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
//
// let table = document.getElementById('table');
//
// for (let subArr of arr) {
//     let tr = document.createElement('tr');
//     table.append(tr);
//
//     for (let elem of subArr) {
//         let td = document.createElement('td');
//         td.textContent = String(elem);
//         tr.append(td);
//     }
// }


// 2 Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.
//
// for (let subArr of arr) {
//     let tr = document.createElement('tr');
//     table.append(tr);
//
//     for (let elem of subArr) {
//         let td = document.createElement('td');
//         td.textContent = String(elem ** 2);
//         tr.append(td);
//     }
// }


// 469 Создание таблицы из массива объектов / Создание HTML таблицы из массива объектов
//
// Пусть у нас дан некторый массив объектов, например, вот такой массив с юзерами:
//
// let users = [
// 	{
// 		name: 'name1',
// 		surname: 'surname1',
// 		patronymic: 'patronymic1'
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		patronymic: 'patronymic2'
// 	},
// 	{
// 		name: 'name3',
// 		surname: 'surname3',
// 		patronymic: 'patronymic3'
// 	},
// ];
// Давайте сделаем из этого массива HTML таблицу, в каждый ряд который запишем данные отдельного юзера.
//
// При такой структуре хранения данных обычно запускают один цикл по массиву и
// создают каждую ячейку таблицы в ручную, вот так:
//
// <table id="table"></table>
// let table = document.getElementById('table');
//
// for (let user of users) {
// 	let tr = document.createElement('tr');
//
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
//
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.surname;
// 	tr.appendChild(td2);
//
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.patronymic;
// 	tr.appendChild(td3);
//
// 	table.appendChild(tr);
// }
// Такой подход дает большую гибкость - мы можем сами регулировать порядок расположения данных по ячейкам таблицы
// (можем, к примеру, поменять местами имя и фамилию).
//
// Кроме того, при желании мы можем навешивать события на определенные ячейки.
// К примеру, можно на ячейку с фамилией навесить какое-то действие по клику и так далее.


// // 1 Дан следующий массив с работниками:
// //
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// // Выведите элементы этого массива в виде HTML таблицы.
//
// let table = document.querySelector('#table');
//
// for (let employee of employees) {
//     let tr = document.createElement('tr');
//     table.append(tr);
//
//     let td1 = document.createElement('td');
//     td1.textContent = employee.name;
//
//     let td2 = document.createElement('td');
//     td2.textContent = employee.age;
//
//     let td3 = document.createElement('td');
//     td3.textContent = employee.salary;
//
//     tr.append(td1, td2, td3);
//
//     td2.addEventListener('click', incrementAge);
//     td3.addEventListener('click', increasePercent);
// }
//
//
// // 2 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.
//
// function incrementAge() {
//     this.textContent++;
// }
//
//
// // 3 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
//
// function increasePercent() {
//     this.textContent = +this.textContent + this.textContent / 10;
//     // this.textContent = Math.round(+this.textContent + this.textContent / 10);
//     // this.textContent = ((+this.textContent) + (this.textContent / 10)).toFixed(2);
// }

