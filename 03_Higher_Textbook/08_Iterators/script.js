// Итераторы


// 60) Итерируемые объекты / Итерируемые объекты в JavaScript
//
// Любой объект, который можно перебрать через цикл for of, называется итерируемым.
//
// Массивы являются одним из частных случаев итерируемых объектов:
// let arr = [1, 2, 3];
//
// for (let elem of arr) {
// 	console.log(elem);
// }
//
// Коллекции Map также являются итерируемыми объектами:
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
//
// for (let elem of map) {
// 	console.log(elem);
// }
//
// Коллекции NodeList также являются итерируемыми объектами:
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	console.log(elem);
// }
//
// Кроме того, JavaScript позволяет сделать итерируемым все, что угодно.
// Для этого существуют специальные манипуляции, которые мы будем изучать в следующих уроках:
// let obj = {a: 1, b: 2, c: 3};
//
// // тут хитрые манипуляции
//
// for (let elem of obj) { // можно перебирать
// 	console.log(elem);
// }


// 1 Приведите еще примеры известных вам сущностей, которые являются итерируемыми объектами.

// Set
// const set = new Set([1, 2, 3]);
//
// for (const number of set) {
//     console.log(number);
// }

// HTMLCollection
// let elems = document.getElementsByTagName('p');
// for (let elem of elems) {
// 	console.log(elem);
// }


// string
// const string = 'string';
//
// for (const str of string) {
//     console.log(str);
// }


// 61) Функция итератора / Функция итератора в JavaScript
//
// Все итерируемые объекты имеют специальную структуру, которая называется итератор.
// Итератор представляет собой функцию, позволяющую перебирать объект.
//
// Давайте посмотрим на примере массива:
// let arr = [1, 2, 3];
//
// Функция итератора для любого итерируемого объекта хранится с ключом в виде хорошо известного символа Symbol.iterator:
// let func = arr[Symbol.iterator];
//
// Мы можем убедиться, что под данным ключом хранится функция (но ее код будет скрыт от нас браузером):
// console.log(func); // функция


// 1 Проверьте различные типы известных вам итерируемых объектов на предмет наличия в них описанной функции.

// NodeList
// const elems = document.querySelectorAll('p');
// const funcNodeList = elems[Symbol.iterator];
// console.log(funcNodeList);

// HTMLCollection
// let elems2 = document.getElementsByTagName('p');
// const funcHTMLCollection = elems2[Symbol.iterator];
// console.log(funcHTMLCollection);

// Map
// const map = new Map();
// const funcMap = map[Symbol.iterator];
// console.log(funcMap);

// Set
// const set = new Set([1, 2, 3]);
// const funcSet = set[Symbol.iterator];
// console.log(funcSet);

// String тут чуть по другому
// const string = 'string';
// const funcString = string[Symbol.iterator];
// console.log(funcString);

// Object тут нету функции
// const obj = {'a': 1}
// const funcObj = obj[Symbol.iterator]
// console.log(funcObj);


// 62 Вызовы итератора / Вызовы итератора в JavaScript
//
// Каждый последовательный вызов итератора должен возвращать объект специальной структуры. Давайте ее рассмотрим.
// Пусть у нас есть массив:
// let arr = [1, 2, 3];
//
// Получим итератор массива в переменную:
// let iter = arr[Symbol.iterator]();
//
// Теперь в этой переменной содержится объект с методом next. Этот метод будет возвращать объект с ключом value,
// содержащим значение элемента, и ключом done, содержащим информацию о том, закончился ли перебор или нет:
// console.log( iter.next() ); // {value: 1, done: false}
//
// Последовательный вызов метода next будет каждый раз выдавать следующий элемент:
// console.log( iter.next() ); // {value: 1, done: false}
// console.log( iter.next() ); // {value: 2, done: false}
// console.log( iter.next() ); // {value: 3, done: false}
//
// А как только элементы закончатся, мы увидим следующие значения:
// console.log( iter.next() ); // {value: undefined, done: true}


// 1 Получите итератор коллекции Map. Последовательно вызывайте его, пока элементы коллекции не закончатся.
//
// let map = new Map().set('a', 1).set('b', 2).set('c', 3);
// let iterMap = map[Symbol.iterator]();
// console.log(iterMap.next());
// console.log(iterMap.next());
// console.log(iterMap.next());
// console.log(iterMap.next());


// 2 Получите итератор коллекции NodeList. Последовательно вызывайте его, пока элементы коллекции не закончатся.
//
// const elems = document.querySelectorAll('p');
// const iterNodeList = elems[Symbol.iterator]();
// console.log(iterNodeList.next());
// console.log(iterNodeList.next());
// console.log(iterNodeList.next());
// console.log(iterNodeList.next());


// 3 Получите итератор коллекции HTMLCollection. Последовательно вызывайте его, пока элементы коллекции не закончатся.
//
// const elems2 = document.getElementsByTagName('p');
// const iterHTMLCollection = elems[Symbol.iterator]();
// console.log(iterHTMLCollection.next());
// console.log(iterHTMLCollection.next());
// console.log(iterHTMLCollection.next());
// console.log(iterHTMLCollection.next());


// 63 Генераторы / Генераторы в JavaScript
//
// Существуют специальные функции, с помощью которых можно создавать свои итераторы.
// Такие функции называются генераторы. Имена таких функций должны начинаться со звездочки:
// function *func() {
//
// }
//
// Внутри генераторов используется ключевое слово yield, указывающее то, что должен вернуть итератор на следующем вызове.
// Для примера давайте сделаем так, чтобы первый вызов возвращал 1, второй - 2, а третий - 3:
// function *func() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }
//
// Генератор своим результатом возвращает итератор:
// let iter = func();
//
// Давайте проверим работу нашего итератора:
// console.log(iter.next()); // {value: 1, done: false}
// console.log(iter.next()); // {value: 2, done: false}
// console.log(iter.next()); // {value: 3, done: false}
// console.log(iter.next()); // {value: undefined, done: true}


// 1 Создайте итератор, каждый вызов которого будет возвращать числа от 5 до 1.
//
// function *func() {
//     yield 5;
//     yield 4;
//     yield 3;
//     yield 2;
//     yield 1;
// }

// альтернативный синтаксис
// const iter = (function* func() {
//     yield 5;
//     yield 4;
//     yield 3;
//     yield 2;
//     yield 1;
// })();
//
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// 64) Циклы в генераторах / Циклы в генераторах в JavaScript
//
// Внутри генераторов можно использовать циклы. При этом мы можем ставить циклы на паузу с помощью yield.
// Давайте посмотрим на примере. Будем ставить цикл на паузу каждую итерацию:
//
// function *func() {
// 	for (let i = 1; i <= 3; i++) {
// 		yield i;
// 	}
// }
//
// Получим итератор:
// let iter = func();
//
// Проверим работу нашего итератора:
// console.log(iter.next()); // {value: 1, done: false}
// console.log(iter.next()); // {value: 2, done: false}
// console.log(iter.next()); // {value: 3, done: false}
// console.log(iter.next()); // {value: undefined, done: true}


// 1 Создайте итератор, каждый вызов которого будет возвращать числа от 10 до нуля.
//
// function* func() {
//     for (let i = 10; i >= 0; i--) {
//         yield i;
//     }
// }
//
// const iter = func();
//
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// 2 Сделайте генератор, который параметром будет принимать число.
// Пусть каждый вызов итератора уменьшает число на единицу, пока не будет достигнут ноль.
//
// function *func(num) {
//     for (let i = 0; i <= num; num--) {
//         yield num
//     }
// }
//
// const iter = func(3);
//
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// 3 Сделайте генератор, который параметром будет принимать число. Пусть каждый вызов итератора
// уменьшает число в два раза и возвращает результат. И так, пока число не станет меньше единицы.
//
// function* reduceTheNumberBy2Times(number) {
//     while (number > 1) {
//         yield number;
//         number /= 2;
//     }
// }
//
// const iterFunc = reduceTheNumberBy2Times(10);
//
// console.log(iterFunc.next());
// console.log(iterFunc.next());
// console.log(iterFunc.next());
// console.log(iterFunc.next());
// console.log(iterFunc.next());


// 4 Сделайте итератор, каждый вызов которого будет возвращать следующую степень двойки.
//
// function* getTheNextDegree(num) {
//     let degree = 0;
//
//     while (true) {
//         yield Math.pow(num, degree);
//         degree++;
//     }
// }
//
// const iterFunc = getTheNextDegree(2);
//
// console.log(iterFunc.next());
// console.log(iterFunc.next());
// console.log(iterFunc.next());
// console.log(iterFunc.next());
// console.log(iterFunc.next());


// 5 Сделайте итератор, каждый вызов которого будет возвращать следующее число Фибоначчи.

// gpt помог
// function *getTheNextNumberFibonacci() {
//     let a = 0, b = 1;
//
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b]
//     }
// }
//
// const iterFunc = getTheNextNumberFibonacci();
//
// console.log(iterFunc.next());
// console.log(iterFunc.next());
// console.log(iterFunc.next());
// console.log(iterFunc.next());
// console.log(iterFunc.next());


// 65)
