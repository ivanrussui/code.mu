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

const input = document.querySelector('input');

const savedValue = localStorage.getItem('input');

if (savedValue) {
    input.value = savedValue;
}

input.addEventListener('blur', function () {
    localStorage.setItem('input', this.value);
});
