// Хранилище


// 82) Введение / Локальное хранилище браузера в JavaScript
//
// В браузере существует так называемое локальное хранилище,
// позволяющее хранить данные между заходами пользователя на сайт (5-10 мегабайт информации).
//
// Доступ к данным производится по ключу: вы сохраняете данные с каким-то ключом,
// а затем можете получить их по этому ключу или удалить. При этом разрешено сохранять только строки.
// Для работы с данными есть специальные методы. Давайте их рассмотрим.
//
// Для хранения данных используется два типа хранилищ: sessionStorage и localStorage.
// Первое хранит данные только до закрытия браузера, а второе - всегда.
//
// В следующих уроках мы будем разбираться с возможностями локального хранилища.


// 83) Хранилище в отладчике / Хранилище в отладчике в JavaScript
//
// Содержимое локального хранилища можно изучать и редактировать в отладчике браузера.
// Для этого нужно зайти во вкладку Application:
//
// Там нужно выбрать вкладку Local Storage:
//
// В этой вкладке вы увидите ключи ваших данных:
//
// И значения ваших данных:


// 84) Данные / Работа с данными в localStorage в JavaScript
//
// Метод setItem предназначен для сохранения данных. Первым параметром он принимает ключ, а вторым - значение.
// Метод getItem предназначен для получения данных. Он принимает один параметр - ключ, под которым эти данные были сохранены.
//
// Давайте попробуем эти методы на практике. Для начала давайте сохраним какую-нибудь строку с каким-нибудь ключом:
// localStorage.setItem('key', 'text');
//
// Давайте теперь получим нашу строку из локального хранилища:
// let str = localStorage.getItem('key');
// console.log(str); // выведет 'text'


// 1 Напишите скрипт, который сохранит в локальном хранилище три числа под тремя разными ключами.
// Запустите этот скрипт, чтобы данные сохранились.
// Затем напишите скрипт, который получит ваши три числа из локального хранилища и найдет их сумму.
// Запустите второй скрипт и убедитесь в его работоспособности.

// // через new Map
// const myMap = new Map([
//     ["key1", "1"],
//     ["key2", "2"],
//     ["key3", "3"]
// ]);
//
// function setItemsFromLocaleStorageMap(myMap) {
//     for (const myMapElement of myMap) {
//         localStorage.setItem(...myMapElement);
//     }
// }
// setItemsFromLocaleStorageMap(myMap);
//
// function getItemsFromLocaleStorageAndSumMap(keys) {
//     const numbers = [];
//     for (const key of keys) {
//         numbers.push(localStorage.getItem(key));
//     }
//     return numbers.reduce((acc, el) => +el + +el, 0);
// }
//
// const resMap = getItemsFromLocaleStorageAndSumMap(myMap.keys());
// console.log('resMap', resMap);
//
// // через Object
// const myObj = {'One': '1', 'Two': '2', 'Three': '3'};
//
// function setItemsFromLocaleStorageObj(obj) {
//     for (const objKey in obj) {
//         localStorage.setItem(objKey, obj[objKey]);
//     }
// }
//
// setItemsFromLocaleStorageObj(myObj);
//
// function getItemsFromLocaleStorageAndSumObj(keys) {
//     const nums = [];
//     keys.forEach(el => nums.push(localStorage.getItem(el)));
//     return nums.reduce((acc, el) => +el + +el);
// }
//
// const resObj = getItemsFromLocaleStorageAndSumObj(Object.keys(myObj));
// console.log('resObj', resObj);


// 85) Однократное сохранение / Однократное сохранение в localStorage в JavaScript
//
// Если попытаться прочитать ключ, для которого не были записаны данные, то результатом будет null.
// Это можно использовать для того, чтобы выполнить однократное сохранение данных.
//
// К примеру, давайте запишем в локальное хранилище момент первого захода пользователя на сайт.
// А если пользователь зайдет не первый раз, то ничего делать не будем:
// let time = localStorage.getItem('time');
//
// if (time === null) {
// 	let now = Date.now();
// 	localStorage.setItem('time', now);
// }
//
// Перепишем условие в более коротком виде:
// let time = localStorage.getItem('time');
//
// if (!time) {
// 	let now = Date.now();
// 	localStorage.setItem('time', now);
// }


// 1 По заходу пользователя на сайт запишите в локальное хранилище текущий момент времени.
// Затем по повторному заходу выведите, сколько прошло времени с предыдущего захода пользователя на сайт.
//
// const time = localStorage.getItem('time');
// const now = Date.now();
//
// if (!time) {
//     localStorage.setItem('time', String(now));
// } else {
//     const newNow = Date.now();
//     localStorage.setItem('time', String(newNow));
//     alert(`Прошло времени с предидущего захода на сайт: ${Number(newNow) - Number(time)} миллисекунд`);
// }


// 2 По заходу пользователя на сайт спросите у него дату рождения.
// При следующем заходе пользователя на сайт, если у него в этот день будет День Рождения - поздравьте его с этим праздником.

// const day = new Date().getDate();
// let month = new Date().getMonth() + 1;
//
// if (month < 10) {
//     month = '0' + month;
// }
//
// const date = `${day}.${month}`;
//
// const birthDayStorage = localStorage.getItem('birthday');
//
// if (!birthDayStorage) {
//     const birthDay = prompt('Введите день и месяц вашего рождения в формате: ', '20.10');
//     localStorage.setItem('birthday', birthDay);
// }
//
// if (date === birthDayStorage) {
//     alert('С днюхой бро!');
// }


// 3 Дан инпут. По потери фокуса в этом инпуте сохраните его значение в локальное хранилище.
// При следующем заходе пользователя на страницу установите в инпуте сохраненный ранее текст.

// const input = document.querySelector('input');
//
// const savedValue = localStorage.getItem('input');
//
// if (savedValue) {
//     input.value = savedValue;
// }
//
// input.addEventListener('blur', function () {
//     localStorage.setItem('input', this.value);
// });


// 86) Перезапись данных / Перезапись данных в localStorage в JavaScript
//
// Можно перезаписывать данные, хранящиеся в хранилище под определенным ключом. Давайте попробуем. Запишем какие-нибудь данные:
// localStorage.setItem('key', '1');
// let value1 = localStorage.getItem('key');
//
// console.log(value1); // выведет '1'
//
// А теперь перезапишем эти данные::
// localStorage.setItem('key', '2');
// let value2 = localStorage.getItem('key');
//
// console.log(value2); // выведет '2'


// 1 Пользователь заходит на сайт, затем обновляет страницу, затем еще раз обновляет и так далее.
// Сделайте счетчик обновления страницы. Каждый раз при обновлении выводите значение счетчика на экран.
//
// const div = document.querySelector('div');
// let count = localStorage.getItem('count');
//
// if (!count) {
//     count = 0;
//     localStorage.setItem('count', count);
// } else {
//     count++;
//     localStorage.setItem('count', count);
// }
// div.textContent = `Счетчик: ${count}`;


// 87) Удаление данных / Удаление данных в localStorage в JavaScript
//
// С помощью метода removeItem можно удалять данные и связанный с ними ключ.
// Давайте для примера удалим содержимое какого-нибудь ключа:
// localStorage.removeItem('key');
//
// Проверим теперь наличие данных:
//
// let value = localStorage.getItem('key');
// console.log(value); // выведет null


// 1 Сделайте счетчик обновления страницы. Пусть счетчик обнуляется после того, как дойдет до 10.
//
// const div = document.querySelector('div');
// let count = localStorage.getItem('count');
// const countMax = '10';
//
// const setItemToLocaleStorage = (key, value) => localStorage.setItem(key, value);
//
// if (!count) {
//     count = 0;
//     setItemToLocaleStorage('count', count);
// } else if (count === countMax) {
//     localStorage.removeItem('count');
//     setItemToLocaleStorage('count', '0');
// } else {
//     count++;
//     setItemToLocaleStorage('count', count);
// }
//
// div.textContent = `Счетчик: ${count === countMax ? '0': count}`;


// 88) Очистка хранилища / Очистка хранилища в localStorage в JavaScript
//
// С помощью метода clear можно очистить все хранилище. Смотрите пример:
// localStorage.clear();


// 1 Очистите хранилище. Проверьте, что все ранее установленные вами ключи пропали.
//
// localStorage.clear();


// 89) Количество записей / Количество записей в localStorage в JavaScript
//
// С помощью свойства length можно узнать количество записей в локальном хранилище:


// 1 По нажатию на кнопку выведите количество записей в локальном хранилище.
//
// const div = document.querySelector('div');
// const button = document.querySelector('button');
//
// button.addEventListener('click', () => {
//     div.textContent = `Количество записей в локальном хранилище: ${localStorage.length}`;
// });


// 2 По нажатию на кнопку узнайте количество записей в локальном хранилище и, если их больше 10, очистите хранилище.
//
// const div = document.querySelector('div');
// const button = document.querySelector('button');
//
// button.addEventListener('click', () => {
//     div.textContent = `Количество записей в локальном хранилище: ${localStorage.length}`;
//     localStorage.length > 10 && localStorage.clear();
// });


// 90) Получение ключа по номеру / Получение ключа по номеру в localStorage в JavaScript
//
// Каждая запись в локальном хранилище имеет свой номер. По номеру можно получить ключ этой записи:
// let key = localStorage.key(5);
// console.log(key);
//
// Зная ключ, можно получить значение этой записи:
// let key = localStorage.key(0);
// let val = localStorage.getItem(key);
// console.log(val);

// 1 Получите значение записей с различными номерами.
// localStorage.setItem('key1', 'One');
// localStorage.setItem('key2', 'Two');
// localStorage.setItem('key3', 'Three');
//
// const key1 = localStorage.key(0);
// const key2 = localStorage.key(1);
// const key3 = localStorage.key(2);
//
// const value1 = localStorage.getItem(key1)
// const value2 = localStorage.getItem(key2)
// const value3 = localStorage.getItem(key3)
//
// console.log(key1, value1);
// console.log(key2, value2);
// console.log(key3, value3);


// 91) Перебор хранилища по индексам / Перебор хранилища по индексам в JavaScript
//
// Объект localStorage не является итерируемым. Тем не менее в нем есть индексы и длина.
//
// Это значит, что можно выполнить перебор записей через обычный цикл for со счетчиком:
// for (let i = 0; i < localStorage.length; i++) {
// 	let key = localStorage.key(i);
// 	let val = localStorage.getItem(key);
//
// 	console.log(val);
// }

// 1 По нажатию на кнопку выведите циклом все записи из локального хранилища.
// const btn = document.querySelector('button');
// const div = document.querySelector('div');
//
// btn.addEventListener('click', () => {
//     div.innerHTML = '';
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const value = localStorage.getItem(key);
//         div.innerHTML += `<p>${key}: ${value}</p>`;
//     }
// });


// 92) Массивы ключей и значений хранилища / Массивы ключей и значений хранилища в JavaScript
//
// Можно получить массив ключей всех записей из локального хранилища:
// let keys = Object.keys(localStorage);
//
// Можно также получить массив значений всех записей из локального хранилища:
// let values = Object.values(localStorage);


// 1 По нажатию на кнопку выведите циклом ключи всех записей из локального хранилища.

// const btn = document.querySelector('button');
// const div = document.querySelector('div');

// btn.addEventListener('click', () => {
//     div.innerHTML = '';
//     const keys = Object.keys(localStorage);
//
//     keys.forEach(el => div.innerHTML += `<p>${el}</p>`); // forEach
// });

// btn.addEventListener('click', () => {
//     div.textContent = '';
//     const keys = Object.keys(localStorage);
//     div.textContent +=  keys;
// });


// 2 По нажатию на кнопку выведите циклом значения всех записей из локального хранилища.

// btn.addEventListener('click', () => {
//     div.innerHTML = '';
//     const values = Object.values(localStorage);
//
//     // for (const value of values) { // for of
//     //     div.innerHTML += `<p>${value}</p>`
//     // }
//
//     return values.map(el => div.innerHTML += `<p>${el}</p>`); // map
// });

// btn.addEventListener('click', () => {
//     div.textContent = '';
//     const values = Object.values(localStorage);
//     div.textContent +=  values;
// });


// 93) Хранение структур / Хранение структур в localStorage в JavaScript
//
// В локальном хранилище можно хранить только строки.
// Однако, есть возможность хранить массивы и объекты - для этого просто можно использовать формат JSON.
//
// Давайте сохраним массив:
// let arr = [1, 2, 3, 4, 5];
// localStorage.setItem('arr', JSON.stringify(arr));
//
// А теперь получим его обратно:
// let str = localStorage.getItem('arr');
// let res = JSON.parse(str);
//
// console.log(res);


// // 1 Даны инпуты и кнопка.
// // По нажатию на кнопку получите тексты всех инпутов в виде массива и сохраните этот массив в локальное хранилище.
//
// const btn = document.querySelector('button');
// const inputOne = document.querySelector('#inputOne');
// const inputTwo = document.querySelector('#inputTwo');
// const inputs = document.querySelectorAll('input');


// btn.addEventListener('click', () => {
//     // inputOne & inputTwo
//     // const arrInput = [inputOne.value, inputTwo.value];
//     // localStorage.setItem('arrInput', JSON.stringify(arrInput));
//
//     // inputs
//     const arrInputs = Array.from(inputs).map(el => el.value);
//     localStorage.setItem('arrInputs', JSON.stringify(arrInputs));
// });


// 2 Модифицируйте предыдущую задачу.
// Сделайте так, чтобы при следующем заходе на страницу в инпутах стояли сохраненные в локальном хранилище значения.

// inputOne & inputTwo
// const resArrInput = JSON.parse(localStorage.getItem('arrInput'));
// if (resArrInput) {
//     inputOne.value = resArrInput[0];
//     inputTwo.value = resArrInput[1];
// }

// inputs
// const resArrInputs = JSON.parse(localStorage.getItem('arrInputs'));
// if (resArrInputs) {
//     resArrInputs.forEach((el, index) => inputs[index].value = el);
// }


// 94) Модификация хранимых структур / Модификация хранимых структур в localStorage в JavaScript
//
// Пусть в локальном хранилище хранится некоторый массив:
// let arr = [1, 2, 3, 4, 5];
// localStorage.setItem('data', JSON.stringify(arr));
//
// Пусть теперь нам понадобилось как-то модифицировать этот массив, например,
// добавить ему в конец еще один элемент или изменить уже существующий.
//
// Для решения задачи получим хранящуюся в хранилище строку с массивом, преобразуем эту строку в массив,
// проделаем с этим массивом необходимые манипуляции, преобразуем этот массив обратно в строку и запишем назад в хранилище:
// let json = localStorage.getItem('data');
// let data = JSON.parse(json);
//
// data.push(6);
// data[0] = '!';
//
// localStorage.setItem('data', JSON.stringify(data));


// 1 Дан следующий массив с юзерами:
let users = [
    {
        surn: 'surn1',
        name: 'name1',
        age: 31,
    },
    {
        surn: 'surn2',
        name: 'name2',
        age: 32,
    },
    {
        surn: 'surn',
        name: 'name3',
        age: 33,
    },
];
// Сохраните его в локальное хранилище. Затем сделайте 3 инпута и кнопку. Пусть в инпуты вводятся фамилия, имя и возраст.
// По нажатию на кнопку запишите нового юзера в конец сохраненного в хранилище массива.

localStorage.setItem('data', JSON.stringify(users));

const btn = document.querySelector('button');
const inputs = document.querySelectorAll('input');

btn.addEventListener('click', () => {
    const user = {
        surn: '',
        name: '',
        age: ''
    };

    let i = 0;

    for (const userKey in user) {
        user[userKey] = inputs[i].value;
        if (userKey === 'age') {
            user[userKey] = +inputs[i].value;
        }
        i++;
    }

    const data = JSON.parse(localStorage.getItem('data'));
    const users = [...data, user];
    localStorage.setItem('data', JSON.stringify(users));
});
