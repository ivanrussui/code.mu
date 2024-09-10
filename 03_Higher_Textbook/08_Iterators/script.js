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


// 65) Однократная работа итераторов / Однократная работа итераторов в JavaScript
//
// Каждый итератор может участвовать в цикле лишь один раз. Это немного неожиданно,
// но логично - ведь пройденный итератор устанавливает свое done в false, а значит не может больше перебираться.
//
// Давайте убедимся в этом. Пусть у нас есть следующий генератор:
// function *func() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }
//
// Сделаем итератор:
// let iter = func();
//
// Переберем итератор одним циклом:
// for (let elem of iter) {
// 	console.log(elem); // 1, 2, 3
// }
//
// А теперь переберем итератор двумя циклами:
// for (let elem of iter) {
// 	console.log(elem); // 1, 2, 3
// }
// for (let elem of iter) {
// 	console.log(elem); // не работает
// }
//
// Для решения проблемы нужно для каждого нового цикла создавать свой итератор:
// let iter1 = func();
// for (let elem of iter1) {
// 	console.log(elem); // 1, 2, 3
// }
//
// let iter2 = func();
// for (let elem of iter2) {
// 	console.log(elem); // 1, 2, 3
// }
//
// Можем упростить:
// for (let elem of func()) {
// 	console.log(elem); // 1, 2, 3
// }
//
// for (let elem of func()) {
// 	console.log(elem); // 1, 2, 3
// }


// 1 Исправьте ошибку, допущенную в следующем коде:
//
// function *func() {
// 	for (let i = 1; i <= 3; i++) {
// 		yield i;
// 	}
// }
//
// let elems = func();
// let elems2 = func();
//
// for (let elem of elems) {
// 	console.log(elem);
// }
// for (let elem of elems2) {
// 	console.log(elem);
// }


// 66) Итератор объекта / Итератор объекта в JavaScript
//
// Давайте создадим итератор, с помощью которого можно будет перебрать обьект.
// Для начала сделаем генератор, параметром принимающий объект и перебирающий его:
// function *func(obj) {
// 	for (let key in obj) {
// 		yield obj[key];
// 	}
// }
//
// Создадим теперь итератор:
// let iter = func({a: 1, b: 2, c: 3});
//
// Переберем итератор циклом:
// for (let elem of iter) {
// 	console.log(elem); // 1, 2, 3
// }


// 1 Сделайте итератор, который будет перебирать объект и каждым вызовом возвращать массив,
// в нулевом элементе которого будет лежать ключ, а в первом элементе - значение элемента объекта. Пример:
//
// function* func(obj) {
//     for (const objKey in obj) {
//         yield [objKey, obj[objKey]];
//     }
// }
//
// let iter = func({a: 1, b: 2, c: 3});
//
// for (let elem of iter) {
//     console.log(elem); // ['a', 1], ['b', 2], ['c', 3]
// }


// 67) Создание итерируемого объекта / Создание итерируемого объекта в JavaScript
//
// Давайте создадим настоящий итерируемый объект, который можно будет перебрать через цикл for-of.
// Для этого объекту нужно добавить соответствующую функцию в Symbol.iterator.
//
// Давайте реализуем. Пусть у нас есть следующий объект:
// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// };
//
// Добавим функцию в Symbol.iterator:
// obj[Symbol.iterator] = function() {
//
// }
//
// Превратим эту функцию в генератор:
// obj[Symbol.iterator] = function *() {
//
// }
//
// Внутри нашей функции this будет ссылаться на сам объект:
// obj[Symbol.iterator] = function *() {
// 	console.log(this); // сам объект
// }
//
// Запустим в итераторе перебор объекта:
// obj[Symbol.iterator] = function *() {
// 	for (let key in this) {
// 		yield obj[key];
// 	}
// }
//
// Все, объект можно перебирать циклом for-of:
// for (let elem of obj) {
// 	console.log(elem); // 1, 2, 3
// }


// 1 Сделайте объект, который можно перебрать циклом for-of. Пусть в элемент цикла попадает объект,
// в ключе key которого будет ключ перебираемого объекта, а в ключе val - значение. Пример:
//
// let obj = {a: 1, b: 2, c: 3};
//
// obj[Symbol.iterator] = function* () {
//     for (const objKey in obj) {
//         yield {key: objKey, val: obj[objKey]};
//     }
// };
//
// for (let elem of obj) {
//     console.log(elem);
// }
//
// Выведет:
// {key: 'a', val: 1}
// {key: 'b', val: 2}
// {key: 'c', val: 3}


// 68) Генератор через вычисляемое свойство / Генератор через вычисляемое свойство в JavaScript
//
// В предыдущем уроке мы генератор для объекта присваивали отдельной командой. Таким был наш объект:
// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// };
//
// Так мы задавали генератор:
// obj[Symbol.iterator] = function *() {
// 	for (let key in this) {
// 		yield obj[key];
// 	}
// }
//
// На самом деле можно переписать наш код по-другому через вычисляемое свойство:
// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	[Symbol.iterator]: function *(){
// 		for (let key in this){
// 			yield this[key];
// 		}
// 	}
// };
//
// Проверим перебор:
// for (let elem of obj) {
// 	console.log(elem); // 1, 2, 3
// }


// 1 Перепишите решение задачи из предыдущего урока через вычисляемое свойство.
//
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     [Symbol.iterator]: function* () {
//         for (const objKey in this) {
//             yield {key: objKey, val: this[objKey]};
//         }
//     }
// };
//
// for (let elem of obj) {
//     console.log(elem);
// }


// 69) Встроенный итератор values / Встроенный итератор values в JavaScript
//
// Все итерируемые объекты имеют встроенный итератор values, позволяющий перебирать значения.
// Давайте проверим его на коллекции Map:
// let map = new Map;
//
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
//
// Получим итератор:
// let iter = map.values();
//
// Переберем его циклом:
// for (let elem of iter) {
//     console.log(elem); // 1, 2, 3
// }


// 1 Проверьте работу данного итератора на массиве.
//
// const arr = [1, 2, 3];
//
// const iterArr = arr.values();
//
// for (const number of iterArr) {
//     console.log(number);
// }


// 2 Проверьте работу данного итератора на коллекции Set.
//
// const set = new Set([1, 2, 3]);
//
// const iterSet = set.values();
//
// for (const number of iterSet) {
//     console.log(number);
// }


// 70) Встроенный итератор keys / Встроенный итератор keys в JavaScript
//
// Все итерируемые объекты имеют встроенный итератор keys, позволяющий перебирать ключи.
// Давайте проверим его на массиве:
// let arr = ['a', 'b', 'c'];
//
// Получим итератор:
// let iter = arr.keys();
//
// Переберем его циклом:
// for (let elem of iter) {
// 	console.log(elem); // 0, 1, 2
// }


// 1 Проверьте работу данного итератора на коллекции Map.
//
// const map = new Map();
//
// map.set(0, 'a');
// map.set(1, 'b');
// map.set(2, 'c');
//
// const iterMap = map.keys();
//
// for (const el of iterMap) {
//     console.log(el);
// }


// 2 Проверьте работу данного итератора на коллекции Set.
//
// const set = new Set([0, 1, 2]);
//
// const iterSet = set.keys();
//
// for (const string of iterSet) {
//     console.log(string);
// }


// 71) Встроенный итератор entries / Встроенный итератор entries в JavaScript
//
// Все итерируемые объекты имеют встроенный итератор entries, позволяющий перебирать пары ключ-значение.
// Давайте проверим его на массиве:
// let arr = ['a', 'b', 'c'];
//
// Получим итератор:
// let iter = arr.entries();
//
// Переберем его циклом:
// for (let entry of iter) {
// 	console.log(entry); // [0, 'a'], [1, 'b'], [2, 'c']
// }
//
// Выполним деструктуризацию при переборе:
// for (let [key, value] of iter) {
// 	console.log(key);   // 0, 1, 2
// 	console.log(value); // 'a', 'b', 'c'
// }


// 1 Проверьте работу данного итератора на коллекции Map.
//
// const map = new Map();
//
// map.set(0, 'a');
// map.set(1, 'b');
// map.set(2, 'c');
//
// const iterMap = map.entries();
//
// for (const el of iterMap) {
//     console.log(el);
// }
//
// for (const [key, value] of iterMap) {
//     console.log(key);
//     console.log(value);
// }


// 2 Проверьте работу данного итератора на коллекции Set.
//
// const set = new Set(['a', 'b', 'c']);
// const set = new Set([0, 1, 2]);
//
// const iterSet = set.entries();
//
// for (const el of iterSet) {
//     console.log(el);
// }
//
// for (const [key, value] of iterSet) {
//     console.log(key);
//     console.log(value);
// }


// 3 Проверьте работу данного итератора на коллекции NodeList.

// const elems = document.querySelectorAll('.p');

// const iterElems = elems.entries();
//
// for (const el of iterElems) {
//     console.log(el);
// }
//
// for (const [key, value] of iterElems) {
//     console.log(key);
//     console.log(value);
// }


// HTMLCollection
// const elems = document.getElementsByClassName('p');
//
// // для HTMLCollection надо сначала преобразовать в массив
// const iterElems = Array.from(elems).entries();
//
// for (const el of iterElems) {
//     console.log(el);
// }

// for (const [key, value] of iterElems) {
//     console.log(key);
//     console.log(value);
// }


// 72) Три встроенных итератора / Три встроенных итератора в JavaScript
//
// На самом деле каждый итерируемый объект содержит не один итератор, а три: values, keys и entries.
// Для каждого типа объектов по умолчанию применяется свой итератор.
// Для массивов - это values, а, например, для коллекции Map, это entries.
//
// Обладая этими знаниями, мы теперь можем применить этот принцип к любой коллекции.
// Например, пусть у нас есть коллекция Map:
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
//
// По умолчанию для этой коллекции применяется итератор entries:
// for (let elem of map) {
// 	console.log(elem); // ['a', 1], ['b', 2], ['c', 3]
// }
//
// Но мы легко можем получить ключи нашей коллекции:
// for (let elem of map.keys()) {
// 	console.log(elem); // 'a', 'b', 'c'
// }
//
// Также можем получить и значения:
// for (let elem of map.values()) {
// 	console.log(elem); // 1, 2, 3
// }


// 1 Какой итератор по умолчанию действует в коллекции Set?
//
// values
// const set = new Set([11, 2, 3]);
//
// for (const number of set.values()) {
//     console.log(number);
// }


// 73) Оператор spread и итераторы / Оператор spread и итераторы в JavaScript
//
// Оператор spread разлагает любой объект, у которого есть итератор. При этом будет браться итератор по умолчанию.
// Давайте посмотрим на примере. Пусть у нас есть следующая коллекция Map:
// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
//
// По умолчанию при разложении получится двухмерный массив:
// let arr = [...map];
// console.log(arr); // [['a', 1], ['b', 2], ['c', 3]]
//
// Для получения массива ключей разложим соответствующий итератор:
// let arr = [...map.keys()];
// console.log(arr); // ['a', 'b', 'c']
//
// Аналогично поступим для получения массива значений:
// let arr = [...map.values()];
// console.log(arr); // [1, 2, 3]


// 1 Разложите спредом следующий объект:
//
// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	[Symbol.iterator]: function *(){
// 		for (let key in this){
// 			yield this[key];
// 		}
// 	}
// };
//
// console.log({...obj});


// 74) Встроенные итераторы строк / Встроенные итераторы строк в JavaScript
//
// Строки также имеют встроенный итератор. Давайте для примера переберем символы строки циклом:
// for (let elem of 'abc') {
// 	console.log(elem); // 'a', 'b', 'c'
// }
//
// А теперь разложим строку через оператор spread:
// console.log([...'abc']); // ['a', 'b', 'c']


// 1 Дана строка с цифрами:
// let str = '12345';
// // Перебирите циклом цифры этого числа и найдите их сумму.
//
// let sum = 0;
//
// for (const strElement of str) {
//     sum += +strElement;
// }
//
// console.log(sum);


// 75) Массив цифр числа / Массив цифр числа в JavaScript
//
// Давайте получим массив цифр числа. Пусть дано следующее число:
// let num = 12345;
//
// Попытка разложить число через spread приведет к ошибке, так как числа не итерируемы:
// let num = 12345;
// let arr = [...num]; // ошибка
// console.log(arr);
//
// Для решения проблемы преобразуем число в строку:
// let num = 12345;
// let arr = [...String(num)];
// console.log(arr); // ['1', '2', '3', '4', '5']
//
// У нас, однако, получился массив строк, а не чисел. Исправим проблему с помощью хитрого приема, используя метод map:
// let num = 12345;
// let arr = [...String(num)].map(Number);
// console.log(arr); // [1, 2, 3, 4, 5]


// 1 Дано число. Найдите сумму его цифр.
//
// const num = 125;

// cycle
// const arr = [...String(125)].map(Number);
// const arr = [...String(125)].map(elem => +elem); // альтернатива

// let res = 0
//
// for (const number of arr) {
//     res += number
// }

// reduce
// const arr = [...String(125)].reduce((acc, el) => acc + +el, 0);

// console.log(arr);


// 76) Нумерация DOM элементов / Нумерация DOM элементов в JavaScript
//
// Понимания итераторов позволяет легко добавить номера DOM элементам. Пусть, к примеру, у нас есть абзацы:
// <p>text</p>
// <p>text</p>
// <p>text</p>
//
// Давайте получим коллекцию этих абзацев в переменную:
// let elems = document.querySelectorAll('p');
//
// Воспользуемся для перебора встроенным итератором entries:
// for (let entry of elems.entries()) {
// 	console.log(entry);
// }
//
// Воспользуемся деструктуризацией, чтобы отделить номера от элементов:
// for (let [num, elem] of elems.entries()) {
// 	console.log(num, elem);
// }
//
// Добавим каждому абзацу в конец его порядковый номер:
// for (let [num, elem] of elems.entries()) {
// 	elem.textContent += num;
// }


// 1 Дана HTML таблица. Пронумеруйте каждую ячейку этой таблицы.
//
// const tds = document.querySelectorAll('td');
//
// for (const [key, value] of tds.entries()) {
//     value.textContent += key;
// }


// 77) Получение данных DOM элементов / Получение данных DOM элементов в JavaScript
//
// Деструктуризация позволяет нам получать текст и значения атрибутов DOM прямо в цикле.
// Давайте разберемся, как это работает. Пусть у нас есть следующие абзацы:
// <p id="id1">text1</p>
// <p id="id2">text2</p>
// <p id="id3">text3</p>
//
// Давайте получим коллекцию этих абзацев в переменную:
// let elems = document.querySelectorAll('p');
//
// Переберем элементы циклом, отделив номера и сами элементы:
// for (let [key, elem] of elems.entries()) {
// 	console.log(key, elem);
// }
//
// А теперь давайте выполним деструктуризацию элементов, получив из них их id и тексты:
// for (let [key, {id, textContent}] of elems.entries()){
// 	console.log(key, id, textContent);
// }


// 1 Дан следующий код:
//
// <input id="id1" value="111">
// <input id="id2" value="222">
// <input id="id3" value="333">
//
// Получите номера, id и value инпутов.

const inputs = document.querySelectorAll('input');

// for (const [key, {id, value}] of inputs.entries()) {
//     console.log(id, value);
// }

// можно сразу только values получив
for (const {id, value} of inputs.values()) {
    console.log(id, value);
}
