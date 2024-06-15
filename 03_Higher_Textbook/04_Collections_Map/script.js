// Коллекции Map


// 24) Введение / Коллекции Map в JavaScript
//
// Коллекции Map представляют собой объекты, в которых в качестве ключей могут выступать как примитивы, так и объекты.
//
// Давайте попробуем на примере. Для начала создадим коллекцию с помощью следующей команды:
//
// let map = new Map;
//
// После этого в коллекцию можно будет добавлять элементы с помощью метода set и получать их с помощью метода get.
//
// Давайте попробуем. Пусть в качестве ключей мы хотим сделать два массива:
//
// let arr1 = [1, 2];
// let arr2 = [3, 4];
//
// Присвоим нашим ключам некие значения:
//
// map.set(arr1, 'data1');
// map.set(arr2, 'data2');
//
// А теперь прочитаем наши значения по ключам:
//
// console.log(map.get(arr1));
// console.log(map.get(arr2));


// 1 Пусть даны 3 массива.
// Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.
//
// let arr1 = [1, 2];
// let arr2 = [1, 2, 3];
// let arr3 = [1, 2, 3, 4];
//
// let map = new Map;
//
// map.set(arr1, 'arrayOne');
// map.set(arr2, 'arrayTwo');
// map.set(arr3, 'arrayThree');
//
// console.log(map.get(arr1));
// console.log(map.get(arr2));
// console.log(map.get(arr3));


// 2 Пусть даны 3 объекта и 3 массива.
// Создайте коллекцию Map, сделайте ключами коллекции объекты, а значениями - соответствующие массивы.
//
// let obj1 = {
//     a: 1,
//     b: 1
// }
// let obj2 = {
//     a: 2,
//     b: 2
// }
// let obj3 = {
//     a: 3,
//     b: 3
// }
//
// let arr1 = [1, 2];
// let arr2 = [1, 2, 3];
// let arr3 = [1, 2, 3, 4];
//
// let map = new Map;
//
// map.set(obj1, arr1);
// map.set(obj2, arr2);
// map.set(obj3, arr3);
//
// console.log(map.get(obj1));
// console.log(map.get(obj2));
// console.log(map.get(obj3));


// 33) Полезные возможности / Полезные возможности коллекций Map
//
// Коллекции Map имеют ряд полезных свойств и методов. Давайте их разберем.
//
// Размер коллекции
// В свойстве size содержится размер коллекции:
// console.log(map.size);
//
// Проверка наличия ключа
// Проверить наличие ключа в коллекции можно с помощью метода has:
// console.log(map.has(arr1));
//
// Удаление по ключу
// Удалить элемент из коллекции можно с помощью метода delete:
// map.delete(arr1);
//
// Очистка коллекции
// Очистить всю коллекцию можно с помощью метода clear:
// map.clear();


// 34) Перебор циклом / Перебор коллекций Map циклом
//
// Пусть у нас есть некоторая коллекция Map:
// let map = new Map;
//
// let arr1 = [1, 2];
// let arr2 = [3, 4];
//
// map.set(arr1, 'data1');
// map.set(arr2, 'data2');
//
// Эту коллекцию можно перебрать с помощью цикла for-of:
// for (let elem of map) {
//
// }
//
// При этом в elem будут попадать массивы пар ключ-значение. В первом элементе будет ключ, а во втором - значение:
// for (let elem of map) {
// 	console.log(elem); // сначала [[1, 2], 'data1'], потом [[3, 4], 'data2']
// }
//
// Можно отделить ключи и значения с помощью деструктуризации:
// for (let [key, elem] of map) {
// 	console.log(key);
// 	console.log(elem);
// }


// 35) Ключи и значения / Ключи и значения в коллекциях Map
//
// Чтобы получить только ключи или только значения, существуют специальные методы.
// Для получения значений метод values:
// let values = map.values();
//
// Аналогично с ключами:
// let keys = map.keys();
//
// Существует также метод entries, возвращает набор пар ключ-значение:
//
// let entries = map.entries();


// 1 Пусть дана коллекция Map. Получите массив ее ключей и переберите их циклом for-of.
//
// let obj1 = {
//     a: 1,
//     b: 1
// };
// let obj2 = {
//     a: 2,
//     b: 2
// };
// let obj3 = {
//     a: 3,
//     b: 3
// };
//
// let arr1 = [1, 2];
// let arr2 = [1, 2, 3];
// let arr3 = [1, 2, 3, 4];
//
// let map = new Map;
//
// map.set(obj1, arr1);
// map.set(obj2, arr2);
// map.set(obj3, arr3);
//
// let keys = map.keys();
// console.log(keys);
//
// for (let key of keys) {
//     console.log(key);
// }


// 2 Пусть дана коллекция Map. Получите массив ее элементов и переберите их циклом for-of.
//
// let values = map.values();
// console.log(values);
//
// for (let value of values) {
//     console.log(value);
// }


// 36) Применение Map / Применение коллекций Map
//
// Пусть у нас есть абзацы:
//
// <p>aaa</p>
// <p>bbb</p>
// <p>ccc</p>
// <p>ddd</p>
// <p>eee</p>
//
// Давайте сделаем так, чтобы по клику на каждый абзац ему в конец записывался его порядковый номер в списке абзацев.
// Решим задачу через Map.
//
// Приступим. Для начала получим наши абзацы в переменную:
// let elems = document.querySelectorAll('p');
//
// Создадим новую коллекцию Map:
// let map = new Map;
//
// Заполним нашу коллекцию так, чтобы ключами были наши абзацы, а их значениями - порядковые номера:
// let i = 1;
// for (let elem of elems) {
//     map.set(elem, i++);
// }
//
// Переберем абзацы циклом и повесим на них обработчик клика:
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
//
// 	});
// }
//
// Давайте теперь по клику будем добавлять порядковый номер в конец текста абзаца.
// При этом будем получать этот номер из нашей коллекции:
// for (let elem of elems) {
//     elem.addEventListener('click', function () {
//         this.textContent += map.get(this);
//     });
// }


// 1 Даны инпуты. Переберите эти инпуты циклом и создайте коллекцию Map,
// ключами в которой будут инпуты, а значением - их порядковый номер на странице.
// Сделайте так, чтобы по клику на любой инпут ему в value записывался его порядковый номер.

let inputs = document.querySelectorAll('input');

let map = new Map;

// let i = 1;
// for (let input of inputs) {
//     map.set(input, i++);
//     input.addEventListener('click', function () {
//         this.value += map.get(this);
//     });
// }


// 2 Даны инпуты. В каждый инпут можно ввести число. Пусть по нажатию на Enter инпут запоминает введенное число.
// Сделайте так, чтобы по потери фокуса в инпуте в консоль выводился массив всех введенных ранее в инпут чисел.

// for (let input of inputs) {
//     input.addEventListener('keydown', function (event) {
//         if (event.code === 'Enter') {
//             map.set(this, this.value);
//         }
//     });
//
//     input.addEventListener('blur', function () {
//         console.log(map.get(this).split(''));
//     });
// }


for (let input of inputs) {
    map.set(input, []);

    input.addEventListener('keydown', function (event) {
        if (event.code === 'Enter') {
            let currentValues = map.get(this);
            currentValues.push(this.value);
            map.set(this, currentValues);
        }
    });

    input.addEventListener('blur', function () {
        console.log(map.get(this));
    });
}