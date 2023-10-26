// cycles

// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// for (const string of arr) {
//     console.log(string)
// }
//
//
// let obj = {x: 1, y: 2, z: 3};
//
// for (const objKey in obj) {
//     console.log(objKey)
//     console.log(obj[objKey])
// }


// let num = 11
// while (num >= 11 && num <= 33 ) {
//     console.log(num);
//     num++
// }

// let num = 11
// while (num < 1000 ) {
//     console.log(num);
//     num *= 3
// }
// while (num >= 11 && num <= 33 )

// for (let i = 11; i >= 11 && i <= 33; i++) {
//     console.log(i); // выведет 1, 2... 9
// }
// for (let i = 0; i <= 100 ; i++) {
//     if (i % 2 === 0) {
//         console.log(i); // выведет 1, 2... 9
//     }
// }
// for (let i = 0; i <= 100 ; i++) {
//     if (i % 2 !== 0) {
//         console.log(i); // выведет 1, 2... 9
//     }
// }
// for (let i = 100; i >= 0; i--) {
//     console.log(i); // выведет 1, 2... 9
// }

// let arr = [1, 2, 3, 4, 88];
// // console.log(arr.length - 1)
// // console.log(arr[arr.length - 1])
//
// // for (let i = 0; i <= arr.length - 1; i++) {
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }
// // for (let i = arr.length - 1; i >= 0; i--) {
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// // // for (let i = 0; i < arr.length; i++) {
// // // for (let i = 0; i <= arr.length - 1; i++) {
// // // for (let i = 1; i < arr.length - 1; i++) {
// // for (let i = arr.length - 1; i >= 0; i--) {
// //     console.log(arr[i])
// // }
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [2, 5, 9, 15, 1, 4];
//
// for (const number of arr) {
//     if (number > 3 && number < 10) {
//         console.log(number)
//     }
// }
//
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
//
// for (const objKey in obj) {
//     if (obj[objKey] % 2 !== 0)
//     console.log(obj[objKey])
// }

// let res = 0

// for (let i = 2; i <= 100; i++) {
//     if (i % 2 === 0) {
//         res += i
//     }
// }

// for (let i = 1; i <= 99; i++) {
//     if (i % 2 !== 0) {
//         res += i
//     }
// }

// let res = 1
//
// for (let i = 1; i <= 20; i++) {
//         res *= i
// }
// console.log(res)


// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (const number of arr) {
//     res += number
// }
// for (const number of arr) {
//     if (number % 2 === 0)
//     res += number
// }
// for (const number of arr) {
//     let sq = number * number
//     res += sq
//
//     // res += number ** 2
// }

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 1
//
// for (const number of arr) {
//     res *= number
// }
// console.log(res)

// let str = ''
// for (let i = 0; i < 5; i++) {
//     str += '-'
// }
// for (let i = 1; i < 10; i++) {
//     str += i
// }
// for (let i = 9; i > 0; i--) {
//     str += i
// }
// for (let i = 1; i < 10; i++) {
//     str += '-' + i
// }
// console.log(str)


// for (let i = 10; i <= 1000; i++) {
//     let str = String(i)
//     // console.log(str[0])
//     // console.log(Number(str[0]) + Number(str[1]))
//
//     // if (str[0] === '1') {
//     //     console.log(str)
//     // }
//
//     if (Number(str[0]) + Number(str[1]) === 5) {
//         console.log(str)
//     }
// }

// 154 Инструкция break в JavaScript

// 1 Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль
// до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.
// let arr = [1, 2, 3, 4, 5, 0, 5, 6, 7, 8, 9];
// for (const number of arr) {
//     if (number === 0) {
//         break
//     }
//     console.log(number)
// }

// 2 Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.
// let arr = [1, 2, 3, 4, 5, 10, 0, -6, -7, -8, 5];
// let res = 0;
// for (const number of arr) {
//     if (number < 0) {
//         break
//     }
//     res += number
// }
// console.log(res)

// 3 Дан массив с числами. Найдите позицию первого числа 3 в этом массиве
// (считаем, что это число обязательно есть в массиве).
// for i
// let arr = [0, 1, 2, 3, 4, 5, 10, 0, -6, -7, -8, 5];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         console.log(i)
//         break
//     }
// }

// for of
// let index = 0
// for (const i of arr) {
//     if (i === 3) {
//         console.log(index)
//         break
//     }
//     index++
// }

// 4 Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
// let number = 1
// let i
//
// for (i = 1; number <= 100; i++) {
//     number += i
// }
// console.log(i);


// let res = 0
// let count = 0
// for (let i = 1; res <= 45 ; i++) {
//     count++
//     res += i
// }
// console.log(count)
// console.log(res)

// Пусть у нас дан массив с числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и
// выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль. Вот решение описанной задачи:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// for (let elem of arr) {
//     let result;
//
//     if (elem % 2 === 0) {
//         result = elem * elem;
//
//     } else if (elem % 3 === 0) {
//         result = elem * elem * elem;
//     } else {
//         continue;
//     }
//     console.log(result);
// }
//
// // for i
// for (let i = 1; i <= arr.length; i++) {
//     let res;
//
//     if (i % 2 === 0) {
//         res = i * i
//
//     } else if (i % 3 === 0) {
//         res = i * i * i
//     } else {
//         continue
//     }
//     console.log(res)
// }

// 156
// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(i)
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1 ; j <= 3; j++) {
//         console.log(String(i) + String(j))
//     }
// }


// 159 Заполнение массива в JavaScript

// let arr = []

// 1 Используя цикл и метод push заполните массив числами от 1 до 10.
// for (let i = 1; i <= 10; i++) {
//     arr.push(i)
// }

// 2 Используя цикл и метод push заполните массив 10-ю буквами 'x'.
// for (let i = 1; i <= 10; i++) {
//     arr.push('x')
// }

// 3 Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
// let arr = [0, -1, 4, 3, -4, 6]
// let arrNew = []
// let arrNew2 = []
//
// // for i
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] >= 0) {
//         arrNew.push(arr[i])
//     }
// }
//
// // for of
// for (const elem of arr) {
//     if (elem >= 0) {
//         arrNew2.push(elem)
//     }
// }
//
// console.log(arrNew)
// console.log(arrNew2)


// 160 Изменение массива в цикле JavaScript

// 1 Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.
// let arr = [1, 2, 3, 4, 5];

// for i
// for (let i = 0; i < arr.length; i++) {
//     // arr[i] = arr[i] * arr[i]
//     arr[i] *= arr[i]
// }
// console.log(arr);

//for of
// let newArr = []
// for (let element of arr) {
//     element *= element;
//     newArr.push(element)
// }
// console.log(newArr);

// 2 Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.
// let arr = [1, 2, 3, 4, 5];

// for i
// for (let i = 0; i < arr.length; i++) {
//     arr[i] -= 1
// }
// console.log(arr);

// for of
// let newArr = [];
//
// for (let number of arr) {
//     number -= 1
//     newArr.push(number)
// }
// console.log(newArr);

// 3 Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
// let arr = [11, 21, 31, 41, 51];

// for i
// for (let i = 0; i < arr.length; i++) {
//     arr[i] += 10
// }
// console.log(arr)

// for of
// let newArr = []
// for (let number of arr) {
//     number += 10
//     newArr.push(number)
// }
// console.log(newArr)


// 161 Заполнение объектов через цикл в JavaScript

// 1 С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};

// for i
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = arr2[i]
// }

// for in
// for (let i in arr1) {
//     obj[arr1[i]] = arr2[i]
// }

// console.log(obj)

// 2 Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {};
//
// for (let objKey in obj) {
//     if (obj[objKey] % 2 === 0) {
//         newObj[objKey] = obj[objKey]
//     }
// }
//
// console.log(newObj)

// 3 Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта,
// а значениями - ключи старого объекта.
// вот верняк решение, заново реши еще  раз
// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {};
// let newObj2 = {};
//
// // for in
// for (let elem in obj) {
//     newObj[`${elem}: ${obj[elem]}`] = obj[elem]
// }
//
// console.log(newObj)
//
// // for i
// let keys = Object.keys(obj)
//
// for (let i = 0; i < keys.length; i++) {
//     newObj2[`${keys[i]}: ${obj[keys[i]]}`] = obj[keys[i]]
// }
//
// console.log(newObj2);


// 162 Изменение объектов через цикл в JavaScript
// let obj = {x: 1, y: 2, z: 3};
//
// for (const objKey in obj) {
//     // obj[objKey] = obj[objKey] ** 2
//     // obj[objKey] **= 2
//     // obj[objKey] = obj[objKey] + 1
//     // obj[objKey] += 1
//     obj[objKey]++
// }
//
// console.log(obj)


// 163 Работа с флагами в JavaScript
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false
//
// for (let arrKey of arr) {
//     if (arrKey === 'c') {
//         flag = true;
//         break;
//     }
// }
// if (flag) {
//     console.log('+++')
// } else {
//     console.log('---')
// }


// let arr = [4]
// let flag = false
//
// for (const number of arr) {
//     if (number % number === 0 || number % 1 === 0) {
//         flag = true
//         break;
//     }
// }
//
// if (flag) {
//     console.log('+++')
// } else {
//     console.log('---')
// }

// let arr = [9];
// let isPrime = true;
//
// for (const number of arr) {
//     if (number <= 1) {
//         isPrime = false;
//     } else {
//         for (let i = 2; i < number; i++) {
//             if (number % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }
// }
//
// if (isPrime && number > 1) {
//     console.log('+++');
// } else {
//     console.log('---');
// }


// console.log(2 / 2)


// 164
// let arr = [10, 20, 30, 40, 21, 32, 51];
// let res= 0

// for i
// for (let i = 0; i < arr.length; i++) {
//     let current = arr[i]
//     let str = current.toString()
//     let one = str[0]
//
//     if (one === '1' || one === '2') {
//         res += +one
//     }
// }

// for of
// for (let i of arr) {
//     let str = i.toString()
//     let one = str[0]
//
//     if (one === '1' || one === '2') {
//         res += +one
//     }
// }
// console.log(res)


//165
// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;
//
// for (let elem in obj) {
//     let str  = String(obj[elem])
//     if (str[0] === '1' || str[0] === '2') {
//         sum += +str;
//     }
// }
//
// console.log(sum);


//166
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// let res = 0;
// for (let i = 1; i <= 10; i++) {
//     res += i;
//     console.log(res)
// }
// console.log(res);


// let res = 1;
//
// for (let i = 1; i <= 10; i++) {
//     res *= i;
//     console.log(res)
// }
//
// console.log(res);


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let elem of arr) {
//     sum += +elem;
// }
//
// console.log(sum); // должно вывести 15


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let elem of arr) {
//     sum += +elem;
// }
//
// console.log(sum); // должно вывести 15


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let elem of arr) {
//     sum += +elem;
// }
//
// console.log(sum); // должно вывести 15


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
// }
//
// console.log(sum); // почему-то выводит NaN


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let i = 0; i < arr[arr.length - 1]; i++) {
// // for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
// }
//
// console.log(sum); // почему-то выводит не 15


// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
// }
//
// console.log(sum); // почему-то выводит не 15


// let arr = [1, 2, 3, 4, 5];
// let newArr = []
//
// for (let elem of arr) {
//     elem = elem ** 2;
//     newArr.push(elem)
// }
// console.log(newArr);


// let arr = [];
//
// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }
//
// console.log(arr);


// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
//
// for (let elem in obj) {
//     sum += obj[elem];
// }
//
// console.log(sum);


// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
//
// for (let key in obj) {
//     sum += obj[key];
// }
//
// console.log(sum);


// let arr = [1, 2, 3, 4, 5];
// let res = '';
//
// for (let elem of arr) {
//     if (elem === 3) {
//         res = '+++';
//         break
//     } else {
//         res = '---';
//     }
// }
//
// console.log(res);


// let arr= [];
//
// for (let i = 1; i <= 5; i++) {
//     arr.push(i);
// }
//
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
// let res = false;
//
// for (let elem of arr) {
//     if (elem === 3) {
//         res = true;
//         break;
//     }
// }
//
// console.log(res);


// let arr = [1, 2, 3, 4, 5];
//
// for (let elem of arr) {
//     if (elem % 2 === 0) {
//         console.log(elem);
//     }
// }


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let res = []
//
// for (let elem of arr) {
//     if (elem % 2 !== 0) {
//         res.push(elem);
//     }
// }
//
// console.log(res);


// 167

// Выведите с помощью цикла столбец чисел от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//     console.log(i)
// }


// Выведите с помощью цикла столбец чисел от 100 до 1.
// for (let i = 100; i >= 1; i--) {
//     console.log(i)
// }


// Выведите с помощью цикла столбец четных чисел от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0 ) {
//         console.log(i)
//     }
// }


// Заполните массив 10-ю иксами с помощью цикла.
// let arr = [];
// for (let i = 10; i > 0; i--) {
//     arr.push('x')
// }
// console.log(arr)


//Заполните массив числами от 1 до 10 с помощью цикла.
// let arr = [];
//
// for (let i = 1; i <= 10; i++) {
//     arr.push(i)
// }
// console.log(arr)


// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// let arr = [-1, -2, 3, 0, 5, 10, 9]
//
// for (let number of arr) {
//     if (number > 0 && number < 10) {
//         console.log(number)
//     }
// }


// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
// let arr = [-1, -2, 3, 0, 5, 10, 9]
// let flag = false
//
// for (let number of arr) {
//     if (number === 5) {
//         flag = true
//         break
//     }
// }
//
// if (flag) {
//     console.log('ok')
// }


//Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
// let arr = [1, 2, 3, 0, 5, 10, 9]
// let res = 0
//
// for (let number of arr) {
//     res += number
// }
// console.log(res)


//Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
// let arr = [1, 2, 3, 0, 5, 10, 9]
//
// for (let number of arr) {
//     number = number ** 2
//     console.log(number)
// }

// 10 Дан массив с числами. Найдите среднее арифметическое его элементов.
// let arr = [2, 4, 6, 8, 10]
// let sum = 0
// let res = 0;
//
// for (let number of arr) {
//     sum += number
//     res = sum / arr.length
// }
//
// console.log(sum)
// console.log(res)


// 11 Напишите скрипт, который будет находить факториал числа.
// Факториал - это произведение всех целых чисел от единицы до заданного числа.

// let num = 5;
// let res = 1;
//
// for (let i = 1; i <= num; i++) {
//     res *= i
// }
// console.log(res)


// 12 Заполните массив числами от 10 до 1 с помощью цикла.

// let arr = []
//
// for (let i = 1; i <= 10; i++) {
//     arr.push(i)
// }
// console.log(arr)


// 13 Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
// let arr = [0, 1, 2, -4, 3, -5, 4]
// let res = 0
//
// for (let number of arr) {
//     if (number > 0) {
//         res += number
//     }
// }
//
// console.log(res)


// 14 Дан массив числами, например:
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 50, 235, 3000, 2];
//
// for (let number of arr) {
//     let str = number.toString()
//     if (str[0] === '1' || str[0] === '2' || str[0] === '5') {
//         console.log(str)
//     }
// }


//15 Дан массив с числами. Выведите элементы этого массива в обратном порядке.
// let arr = [10, 20, 30, 50, 235, 3000, 2];
//
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i])
// }


//16 Дан массив с числами. С помощью цикла выведите на экран все элементы,
// значение которых совпадает с их порядковым номером в массиве.
// let arr = [106, 1, 2, 50, 6, 5, 4, 7];

// for of
// for (let i of arr) {
//     if (arr[i] === i) {
//         console.log(i)
//     }
// }

// for i
// for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] === i) {
//         console.log(i)
//     }
// }


//17 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки.
// Используйте для этого тег br.
// let arr = [106, 1, 2, 50, 6, 5, 4, 7];

// for of
// for (let number of arr) {
//     document.write(number + '<br/>')
// }

// for i
// for (let i = 0; i < arr.length; i++) {
//     // document.write(arr[i] + '<br/>')
//     document.write(`${arr[i]}<br/>`)
// }


//18 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
// let arr = [106, 1, 2, 50, 6, 5, 4, 7];
//
// for (let number of arr) {
//     // document.write(`<p>${number}</p>`)
//     // document.write('<p>' + number + '</p>')
// }


//19 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']

// for of
// for (let string of arr) {
//     if (string === 'сб' || string === 'вс') {
//         document.write(`<p><b>${string}</b></p>`)
//     } else {
//         document.write(`<p>${string}</p>`)
//     }
// }

//for i
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'сб' || arr[i]  === 'вс') {
//         document.write(`<p><b>${arr[i]}</b></p>`)
//     } else {
//         document.write(`<p>${arr[i]}</p>`)
//     }
// }
//
// console.log(arr)


// 20 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом.
// Номер текущего дня должен храниться в переменной day.

// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']
// let day = 'вс'
// let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', day]

// for (let el of arr) {
//     if (el === day) {
//         document.write(`<p><i>${el}</i></p>`)
//     } else {
//         document.write(`<p>${el}</p>`)
//     }
// }


//21 Дан следующий объект с работниками и их зарплатами:
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// Увеличьте зарплату каждого работника на 10%.

// for in
// for (let objKey in obj) {
//     let proc = obj[objKey] / 10
//     obj[objKey] = obj[objKey] + proc
// }

// for i
// let keys = Object.keys(obj)
// for (let i = 0; i < keys.length; i++) {
//     let proc = obj[keys[i]] / 10
//     obj[keys[i]] = obj[keys[i]] + proc
// }
//
// console.log(obj)


//22 Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам,
// у которых она меньше или равна 400.
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };

// for in
// for (let objKey in obj) {
//     let proc = obj[objKey] / 10
//     if (obj[objKey] <= 400) {
//         obj[objKey] += proc
//     }
// }

// for i
// let keys = Object.keys(obj)
// for (let i = 0; i < keys.length; i++) {
//     let proc = obj[keys[i]] / 10
//     if (obj[keys[i]] <= 400) {
//         obj[keys[i]] += proc
//     }
// }

// console.log(obj)


//23 Даны следующие массивы:
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива,
// а значениями - элементы второго.

// let obj = {}

// for i
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr1[i]] = arr2[i]
// }

// for in
// for (let i in arr1) {
//     obj[arr1[i]] = arr2[i]
// }
//
// console.log(obj)


//24  Дан следующий объект:
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// // Найдите сумму ключей этого объекта и поделите ее на сумму значений.
// let sumKeys = 0
// let sumValues = 0
// let sum
//
// // for in
// // for (let i in obj) {
// //     sumKeys += +i
// //     sumValues += obj[i]
// //     sum = sumKeys / sumValues
// // }
//
// // for i
// let keys = Object.keys(obj)
// for (let i = 0; i < keys.length; i++) {
//     sumKeys += +keys[i]
//     sumValues += obj[keys[i]]
//     sum = sumKeys / sumValues
// }
//
// console.log(sumKeys)
// console.log(sumValues)
// console.log(sum)


// 25 Дан следующий объект:
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// // Запишите ключи этого объекта в один массив, а значения - в другой.
//
// let arr1 = []
// let arr2 = []
//
// // for in
// // for (let i in obj) {
// //     arr1.push(i)
// //     arr2.push(obj[i])
// // }
//
// // for i
// let keys = Object.keys(obj)
// let values = Object.values(obj)
// for (let i = 0; i < keys.length ; i++) {
//     arr1.push(keys[i])
//     arr2.push(values[i])
//     // arr2.push(obj[keys[i]])
// }
//
// console.log(arr1)
// console.log(arr2)


// 26 Дан следующий объект:
// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.
// То есть у вас в результате получится вот такой массив:
// [
// 	125,
// 	225,
// 	128,
// 	145,
// 	281,
// ];

// let arr = []

// for in
// for (let i in obj) {
//     let strOne = obj[i].toString()[0]
//     if (strOne === '1' || strOne === '2') {
//         arr.push(obj[i])
//         // arr.push(i)
//         // arr.push(strOne)
//         console.log(obj[i])
//     }
// }

// for i
// let keys = Object.keys(obj)
//
// for (let i = 0; i < keys.length; i++) {
//     let strOne = obj[keys[i]].toString()[0]
//     if (strOne === '1' || strOne === '2') {
//         arr.push(obj[keys[i]])
//     }
// }
//
// console.log(arr)


// 27 Дан следующий массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
// // // Создайте из этого массива следующий объект:
// // // {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
// //
// let obj = {}
//
// // for i
// // for (let i = 0; i < arr.length; i++) {
// //     let keys = (i + 1)
// //     obj[keys] = arr[i]
// // }
// //
// // for of
// let index = 1;
//
// for (let i of arr) {
//     obj[index] = i
//     index++
// }
// //
// console.log(obj)


// 28 Дан следующий массив:
// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// // Создайте из этого массива следующий объект:
// // {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
//
// let obj = {}
//
// // for i
// // for (let i = 0; i < arr.length; i++) {
// //     let values = i + 1
// //     obj[arr[i]] = values
// // }
//
// // for of
// let index = 1;
//
// for (let i of arr) {
//     obj[i] = index
//     index++
// }
//
// console.log(obj)

