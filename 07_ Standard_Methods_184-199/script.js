// 07_ Standard_Methods_184-199


// 184 Степень и корень в JavaScript

// 1 Возведите 2 в 10 степень.
// console.log(Math.pow(2, 10));


// 2 Найдите квадратный корень из 245.
// console.log(Math.sqrt(245));


// 3 Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
// let arr = [4, 2, 5, 19, 13, 0, 10];
// let cubeSum = 0;

// for of
// for (let number of arr) {
//     let cube = Math.pow(number, 3);
//     console.log(cube);
//     cubeSum += cube;
// }

// for i
// for (let i = 0; i < arr.length; i++) {
//     let cube = Math.pow(arr[i], 3);
//     console.log(cube);
//     cubeSum += cube;
// }

// console.log(cubeSum);
// let squareRoot = Math.sqrt(cubeSum)
// console.log(squareRoot);


// 185 Функции округления в JavaScript

// 1 Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

// let number = 379;
// let sqrt = Math.sqrt(number);
// console.log(sqrt);
//
// let round = Math.round(sqrt);
// console.log(round);
//
// let tenths = sqrt.toFixed(1);
// console.log(tenths);
//
// let tenthsP = sqrt.toPrecision(3);
// console.log(tenthsP);
//
// let hundredths = sqrt.toFixed(2);
// console.log(hundredths);
//
// let hundredthsP = sqrt.toPrecision(4);
// console.log(hundredthsP);


// 2 Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
// запишите результаты округления в объект с ключами 'floor' и 'ceil'

// let sqrt = Math.sqrt(587);
// console.log(sqrt);
//
// let floor = Math.floor(sqrt)
// console.log(floor);
//
// let ceil = Math.ceil(sqrt)
// console.log(ceil);
//
// let obj = { 'floor': floor, ceil }
// console.log(obj);


// 186 Экстремальные числа в JavaScript

// 1 Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
// let arr = [4, -2, 5, 19, -130, 0, 10];
//
// console.log(Math.max(...arr));
// console.log(Math.max.apply(null, arr));
//
// console.log(Math.min(...arr));
// console.log(Math.min.apply(null, arr));


// 187 Рандом в JavaScript

// Теория
// Метод Math.random возвращает случайное дробное число от 0 до 1.
// console.log(Math.random());

// Получение случайного дробного числа между min и max
// function getRandomArbitary(min, max) {
//     return Math.random() * (max- min) + min;
// }
//
// console.log(getRandomArbitary(22, 44));

// Получение случайного целого числа между min и max
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// console.log(getRandomInt(22, 44));


// 1 Выведите на экран случайное целое число от 1 до 100.
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// console.log(getRandomInt(1, 100));


// 2 С помощью цикла заполните массив 10-ю случайными целыми числами.
// let arr = [];
//
// function getRandomInt(min, max) {
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
//     }
// }
// getRandomInt(1, 100)
// console.log(arr);


// 188 Модули в JavaScript

// Теория
// Метод Math.abs возвращает модуль числа, то есть из отрицательного числа делает положительное.

// 1 Даны переменные a и b. Найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
// let a = -2;
// let b = 9;
//
// console.log(Math.abs(a));
// console.log(Math.abs(b));
//
// let difference = a * b;
//
// console.log(Math.abs(difference));


// 189
