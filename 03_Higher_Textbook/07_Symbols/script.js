// Символы


// 51) Введение в тип Symbol / Введение в тип Symbol в JavaScript
//
// Тип Symbol предназначен для создания уникальных идентификаторов.
// Эти идентификаторы могут быть использованы для создания уникальных ключей объектов.
//
// Давайте для примера создадим символ:
// let sym = Symbol();
// console.log(sym);
//
// Можно создать несколько символов:
// let sym1 = Symbol();
// let sym2 = Symbol();
//
// console.log(sym1, sym2);
//
// Созданные нами символы будут уникальными. Это значит, что при сравнении они не будут равны:
// let sym1 = Symbol();
// let sym2 = Symbol();
//
// console.log(sym1 === sym2); // false

// 1 Создайте несколько символов.
//
// console.log(Symbol());
// console.log(Symbol());


// 52) Описания символа / Описания символа в JavaScript
//
// Символам можно добавлять описания.
// Эти описания ни на что не влияют, просто являются подсказкой о том, что содержится в символе:
// let sym = Symbol('текстовое описание');
// console.log(sym);

// 1 Создайте несколько символов, добавив им описания.
//
// let sym1 = Symbol('One');
// let sym2 = Symbol('Two');
//
// console.log(sym1, sym2);


// 53) Символы ключи объектов / Символы ключи объектов в JavaScript
//
// Давайте для какого-нибудь объекта добавим ключ с типом Symbol. Пусть для примера у нас есть следующий объект:
// let obj = {a: 1, b: 2, c: 3};
//
// Добавим в этот объект новый элемент с ключом из символа:
// let sym = Symbol();
// obj[sym] = 'text';

// 1 Сделайте объект, у которого одним из ключей будет символ.
//
// let obj = {'1': 'a', '2': 'b'};
// let sym = Symbol('3');
// obj[sym] = 'c';

// 2 Выведите созданный вами объект в консоль.
//
// console.log(obj);


// 54) Перебор объекта с символами / Перебор объекта с символами в JavaScript
//
// Преимуществом типа Symbol в качестве ключа объекта является то, что такие ключи не будут участвовать в переборе циклом.
//
// Давайте посмотрим на примере. Пусть у нас есть следующий объект:
// let obj = {a: 1, b: 2, c: 3};
//
// Добавим в этот объект новый элемент с ключом из символа:
// let sym = Symbol();
// obj[sym] = 'text';
//
// Переберем этот объект циклом. В результате мы увидим все элементы, кроме нашего с ключом из символа:
// for (let key in obj) {
// 	console.log(obj[key]); // 1, 2, 3
// }

// 1 Сделайте объект с ключом из символа. Переберите его циклом. Убедитесь, что символ не участвует в переборе.
//
// let obj = {'1': 'a'};
//
// let sym = Symbol('0');
// obj[sym] = 'z';
//
// for (let key in obj) {
//     console.log(key);
// }


// 55) Функция в объекте / Функция в объекте в JavaScript
//
// С помощью символов в объекты можно добавлять функции и эти функции не будут участвовать в переборе.
// Давайте попробуем. Пусть у нас есть объект:
// let obj = {a: 1, b: 2, c: 3};
//
// Создадим символ:
// let sym = Symbol();
//
// Запишем в объект функцию с ключом в виде нашего символа:
// obj[sym] = function() {
// 	console.log('!!!');
// };
//
// При переборе объекта наша функция перебираться не будет:
// for (let key in obj) {
// 	console.log(obj[key]); // 1, 2, 3
// }
//
// Получим нашу функцию, в качестве ключа передав наш символ (ту же переменную):
// let func = obj[sym];
// func();
//
// Можно сократить код:
// obj[sym]();

// 1 Добавьте в объект функцию, которая будет выводить текущее время. Вызовите эту функцию.
//
// let sym = Symbol('date');
//
// let obj = {};
// obj[sym] = function () {
//     console.log(new Date());
// };
//
// let getDate = obj[sym];
// getDate();

// альтернативный синтаксис
// let sym = Symbol('date');
//
// let obj = {
//     [sym]: function () {
//         console.log(new Date());
//     }
// };
//
// obj[sym]();


// 56) Операции с объектами в функции / Операции с объектами в функции в JavaScript
//
// Давайте добавим в объект функцию, которая будет выполнять некоторую полезную операцию.
// Например, будет находить сумму элементов объекта.
//
// Пусть у нас есть объект:
// let obj = {a: 1, b: 2, c: 3};
//
// Создадим символ:
// let sym = Symbol();
//
// Запишем функцию:
// obj[sym] = function() {
//
// };
//
// В функции, привязанной к объекту this будет указывать на сам объект:
// obj[sym] = function() {
// 	console.log(this); // {a: 1, b: 2, c: 3}
// };
//
// Найдем с помощью нашей функции сумму элементов объекта:
// obj[sym] = function() {
// 	let sum = 0;
//
// 	for (let key in this) {
// 		sum += this[key];
// 	}
//
// 	return sum;
// };
//
// Вызовем нашу функцию, получив сумму элементов объекта:
// let sum = obj[sym]();
// console.log(sum); // выведет 6

// Справочка
// let obj = {a: 1, b: 2, c: 3};
// let sym = Symbol();
//
// obj[sym] = function() {
//     let sum = 0;
//
//     for (let key in this) {
//         sum += this[key];
//     }
//
//     return sum;
// };
//
// // если присваиваешь результат работы в переменную, то теряется контекст this, по сему байндить надо obj
// let sum = obj[sym].bind(obj);
// console.log(sum()); // выведет 6


// 1 Дан массив:
// let arr = [1, 2, 3];
//
// Описанным в уроке способом добавьте в массив функцию, которая будет возвращать сумму элементов массива.
//
// let symArr = Symbol();
//
// arr[symArr] = function () {
//     let sum = 0;
//
//     // for (let number of arr) {
//     //     sum += number;
//     // }
//     for (let value of this) {
//         sum += value;
//     }
//
//     return sum;
// };

// 2 Вызовите созданную функцию и убедитесь, что она верно находит сумму.
//
// console.log(arr[symArr]());

// 3 Добавьте в массив несколько элементов с помощью метода push.
// Убедитесь, что функция будет находить сумму с учетом новых элементов.
//
// arr.push(4, 5);
// console.log(arr[symArr]());


// 57) Глобальные символы / Глобальные символы в JavaScript
//
// С помощью метода Symbol.for можно создавать символы с именем.
// Эти символы будут сохранены в глобальный реестр символов и доступ к ним можно будет получить из любого места кода.
//
// Давайте посмотрим, как это работает. В одной функции создадим символ:
// function func1() {
//     let sym = Symbol.for('test');
//     return sym;
// }
//
//
// Теперь в другой функции получим доступ к этому символу по его имени:
// function func2() {
//     let sym = Symbol.for('test');
//     return sym;
// }
//
// Проверим, что обе функции содержат один и тот же символ. Вызовем наши функции:
// let sym1 = func1();
// let sym2 = func2();
//
// Сравним символы:
// console.log(sym1 === sym2); // true


// 1 Пусть у вас есть несколько объектов. Добавьте каждому из них ключ в виде символа с именем 'sum'.
// Сделайте в этом ключе функцию, которая будет возвращать сумму элементов объекта.

// 1 вариант
// let sym1 = Symbol.for('sum');
// let sym2 = Symbol.for('sum');
//
// let obj1 = {a: 1, b: 2};
//
// obj1[sym1] = function f() {
//     let sum = 0;
//     for (let key in this) {
//         sum += this[key];
//     }
//     return sum;
// };
//
// let obj2 = {
//     c: 3,
//     d: 4,
//     [sym2]: function f() {
//         let sum = 0;
//         for (let key in this) {
//             sum += this[key];
//         }
//         return sum;
//     }
// };
//
// console.log(obj1[sym1]());
// console.log(obj2[sym2]());

// 2 вариант
// let sym1 = Symbol.for('sum');
// let sym2 = Symbol.for('sum');
//
// function f() {
//     let sum = 0;
//     for (let key in this) {
//         sum += this[key];
//     }
//     return sum;
// }
//
// let obj1 = {a: 1, b: 2};
//
// obj1[sym1] = f;
//
// let obj2 = {
//     c: 3,
//     d: 4,
//     [sym2]: f
// };
//
// console.log(obj1[sym1]());
// console.log(obj2[sym2]());

// 3 вариант
// let obj1 = {a: 1, b: 2};
// let obj2 = {c: 3, d: 4};
//
// let sumSymbol = Symbol.for('sum');
//
// function getSumObject(obj) {
//     obj[sumSymbol] = function () {
//         let res = 0;
//         for (let key in this) {
//             res += this[key];
//         }
//         return res;
//     };
//     return obj;
// }
//
// obj1 = getSumObject(obj1);
// obj2 = getSumObject(obj2);
// console.log(obj1[sumSymbol]());
// console.log(obj2[sumSymbol]());


// 58) Получение имени символа / Получение имени символа в JavaScript
//
// Имея переменную с символом, можно получить его имя в глобальном реестре.
// Это делается с помощью метода Symbol.keyFor. Давайте попробуем. Создадим символ с именем:
// let sym = Symbol.for('test');
//
// Получим его имя по его переменной:
// let key = Symbol.keyFor(sym);
// console.log(key); // выведет 'test'

// 1 Даны два символа:
// let sym1 = Symbol.for('test1');
// let sym2 = Symbol.for('test2');
//
// Получите их имена.
//
// console.log(Symbol.keyFor(sym1));
// console.log(Symbol.keyFor(sym2));


// 59) Хорошо известные символы / Хорошо известные символы в JavaScript
//
// Существуют специальные встроенные символы, которые используются JavaScript в служебных целях.
// Такие символы называются well-known symbols (хорошо известные символы).
//
// Примером такого символа служит Symbol.iterator, содержащий в себе функцию, перебирающую массивы.
// Проверим ее наличие в каком-нибудь массиве:
let arr = [1, 2, 3];
let func = arr[Symbol.iterator];
console.log(func);


// 1 Сделайте коллекцию Map. Проверьте, есть ли у нее ключ Symbol.iterator.
let map = new Map;
let funcMap = map[Symbol.iterator];
console.log(funcMap);


// 2 Сделайте коллекцию Set. Проверьте, есть ли у нее ключ Symbol.iterator.
let set = new Set;
let funcSet = set[Symbol.iterator];
console.log(funcSet);
