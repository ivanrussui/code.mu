// 08_Custom_Functions_200-215
// Пользовательские функции


// 211 Флаги в функциях

// 1 Сделайте функцию, которая параметром будет принимать массив с числами, и проверять,
// что все элементы в этом массиве являются четными числами.

// let arr = [2, 4, 7]
// function func(num) {
//     for (let el of num) {
//         if (el % 2 !== 0) {
//             return false;
//         }
//     }
//
//     return true;
// }
//
// console.log(func(arr));


// 2 Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

// function func(num) {
//     if (num % 2 === 0) {
//         return false;
//     }
//
//     return true;
// }
//
// console.log(func(1));
// console.log(func(2));


// 3 Сделайте функцию, которая параметром будет принимать массив и проверять,
// есть ли в этом массиве два одинаковых элемента подряд.

// function func(arr) {
//     for (let el of arr) {
//         if (arr[el] === arr[el - 1]) {
//             return true;
//         }
//     }
//
//     return false;
// }
//
// console.log(func([1, 2, 3, 4, 4]));
// console.log(func([1, 2, 3]));


// 212 Логические операторы в функциях

// 1 Дана следующая функция:
//
// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// Перепишите ее код в сокращенной форме согласно изученной теории.

// function func(a, b) {
//     return a == b;
// }
//
// console.log(func(1, 2));
// console.log(func(3, 3));


// 2 Дана следующая функция:
//
// function func(a, b) {
// 	if (a != b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

// function func(a, b) {
//     return a != b;
// }
//
// console.log(func(1, 1));
// console.log(func(1, 2));


// 3 Дана следующая функция:
//
// function func(a, b) {
// 	if (a + b >= 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

// function func(a, b) {
//     return a + b >= 10;
// }
//
// console.log(func(8, 2));
// console.log(func(5, 3));


// 4 Дана следующая функция:
//
// function func(num) {
// 	if (num >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

// function func(num) {
//     return num >= 0;
// }
//
// console.log(func(8));
// console.log(func(-2));


// 213 Советы по функциям

// 1) Имена функций должны быть глаголами.
// 2) Имя каждой функции должно точно отражать то, что функция делает.
// 3) Функция должна делать только то, что явно подразумевается её названием, и не делать другого.
// 4) Каждая функция должна выполнять только одно действие.
// 5) Используйте внутри функций вспомогательные функции.
// 6) Код функций лучше не делать длиннее 10-15 строк.
// 7) Длинные функции лучше разбивать на ряд вспомогательных.
// 8) Используйте общепринятые префиксы в именах функций: show, get, set, calc, create, change, check.
// 9) Выносите дублирующийся код в функции.

// 1 Напишите, какие недостатки у следующего кода, и исправьте их:
//
// function sum(arr) {
// 	let res = 0;
//
// 	for (let elem of arr) {
// 		res += elem;
// 	}
//
// 	return res / arr.length;
// }

// 1) Имена функций должны быть глаголами.
// 3) Функция должна делать только то, что явно подразумевается её названием, и не делать другого.
// 4) Каждая функция должна выполнять только одно действие.
// 8) Используйте общепринятые префиксы в именах функций: show, get, set, calc, create, change, check.

// function getSumArr(arr) {
//     let res = 0;
//
//     for (let elem of arr) {
//         res += elem;
//     }
//
//     return res;
// }

// let arr = [1, 2, 3];
// console.log(getSumArr(arr));
//
//
// function getPrivate(num1, num2) {
//     return num1 / num2;
// }
//
// console.log(getPrivate(getSumArr(arr), arr.length));


// 2 Напишите, какие недостатки у следующего кода, и исправьте их:
//
// function func(arr1, arr2) {
// 	let res1 = 0;
//
// 	for (let elem of arr) {
// 		res1 += elem;
// 	}
//
// 	let res2 = 0;
//
// 	for (let elem of arr) {
// 		res2 += elem;
// 	}
//
// 	return res1 / res2;
// }

// 1) Имена функций должны быть глаголами.
// 2) Имя каждой функции должно точно отражать то, что функция делает.
// 4) Каждая функция должна выполнять только одно действие.
// 9) Выносите дублирующийся код в функции.


// let arr1 = [3, 5, 6, 7];
// let arr2 = [3, 4];
//
// let sumArr1 = getSumArr(arr1);
// let sumArr2 = getSumArr(arr2);
//
// console.log(sumArr1);
// console.log(sumArr2);
//
// console.log(getPrivate(sumArr1, sumArr2));


// 3 Напишите, какие недостатки у следующего кода, и исправьте их:
//
// function getSum(arr) {
// 	let res = 0;
//
// 	for (let elem of arr) {
// 		res *= elem;
// 	}
//
// 	return res;
// }

// 2) Имя каждой функции должно точно отражать то, что функция делает.
// 3) Функция должна делать только то, что явно подразумевается её названием, и не делать другого.

// function calcSumArr(arr) {
//     let res = 1;
//
//     for (let elem of arr) {
//         res *= elem;
//     }
//
//     return res;
// }
//
// console.log(calcSumArr([2, 5, 3]));


// 214 Практика на поиск ошибок

// 1 Код должен найти сумму результатов работы двух функций:
//
// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }
//
// console.log( func1() + func2() );


// 2 Код должен найти сумму элементов массива:
//
// function sum(arr) {
//     let res = 0;
//
//     for (let elem of arr) {
//         res += elem;
//     }
//     return res;
// }
//
// console.log(sum([1, 2, 3, 4, 5]));


// 3 Код должен найти сумму элементов массива, однако, ничего не выводит в консоль:
//
// let arr = [1, 2, 3, 4, 5];
//
// function func(arr) {
// 	let res = 0;
//
// 	for (let elem of arr) {
// 		res += elem;
// 	}
//
// 	return res;
// }
// console.log(func(arr));


// 4 Код должен найти сумму результатов работы двух функций:
//
// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }
//
// console.log( func1() + func2() );


// 5 Код должен найти сумму элементов массива:
//
// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);
//
// function sum(arr) {
// 	let sum = 0;
//
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
//
// 	return sum;
// }


// 6 Код должен найти сумму элементов массива:
//
// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);
//
// function sum(arr) {
// 	let sum = 0;
//
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
//
// 	return sum;
// }


// 7 Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:
//
// function add(num) {
//     if (num <= 9) {
//         return '0' + num;
//     }
//
//     return num;
// }
//
// console.log(add( 9));


// 8 Код должен найти сумму элементов массива:
//
// let arr = [1, 2, 3, 4, 5];
// let res = sum(arr);
// console.log(res);
//
// function sum(arr) {
// 	let res = 0;
//
// 	for (let elem of arr) {
// 		res += elem;
// 	}
//
// 	return res;
// }


// 9 Код должен найти сумму цифр числа:
//
// let num = 12345;
// let res = getDigitsSum(num);
// console.log(res);
//
// function getDigitsSum(num) {
// 	let arr = num.toString().split('');
// 	let sum = 0;
//
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
//
// 	return sum;
// }


// 10 Код должен проверить число на то, что оно является простым:
//
// console.log(isPrime(13)); // должен вывести true
//
// function isPrime(num) {
// 	if (num <= 1) {
// 		return false;
// 	}
//
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 	}
//
// 	return true;
// }


// 215 Практика на функции

// 1 Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
// function getSum(arr) {
//     let res = 0;
//
//     for (let el of arr) {
//         res += el;
//     }
//
//     return res;
// }
//
// let arr = [1, 2, 3, 4, 5];
//
// console.log(getSum(arr));


// 2 Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

// function getDivisorsArray(num) {
//     let arr = [];
//
//     for (let i = 1; i <= num ; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//
//     return arr;
// }
//
// console.log(getDivisorsArray(12));


// 3 Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

// function getCharacterArray(str) {
//     let arr = [];
//
//     for (let el of str) {
//         arr.push(el)
//     }
//
//     return arr;
// }
//
// console.log(getCharacterArray('spider'));

// 4 Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.

// function getReverseString(str) {
//     // решение через цикл
//     // let reverseString = '';
//     // let arr = str.split('')
//     //
//     // for (let i = arr.length - 1; i >= 0; i--) {
//     //     reverseString += arr[i];
//     // }
//     //
//     // return reverseString
//
//     // решение через reverse и join
//     return str.split('').reverse().join('')
// }
//
// console.log(getReverseString('USSR'));


// 5 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

// function changeToCapitalizeFirstLetter(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }
//
// console.log(changeToCapitalizeFirstLetter('melissa'));


// 6 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.

// function changeToCapitalizeFirstLetterWord(str) {
//     let arr = str.split(' ');
//     let newArr = [];
//
//     for (let el of arr) {
//         newArr.push(el[0].toUpperCase() + el.slice(1));
//     }
//
//     return newArr.join(' ');
// }
//
// console.log(changeToCapitalizeFirstLetterWord('anna ivan'));


// 7 Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

// function getIntegerFloorNumber(num) {
//     return Math.floor(num);
// }
//
// console.log(getIntegerFloorNumber(8,6));
//
// function fillArrayWithIntegers(num) {
//     let arr = [];
//     console.log(getIntegerFloorNumber(num));
//
//     for (let i = 1; i <= num; i++) {
//             arr.push(i);
//     }
//
//     return arr;
// }
//
// console.log(fillArrayWithIntegers(5.5));


// 8 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

// function getSumOfDigits(num) {
//     let str = num.toString();
//     let res = 0;
//
//     for (let el of str) {
//         res += +el;
//     }
//
//     return res;
// }
//
// console.log(getSumOfDigits(15));


// 9 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.

// function checkLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return 'Год високосный'
//     } else {
//         return 'Год не високосный'
//     }
// }
//
// console.log(checkLeapYear(1900));


// 10 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

// function getDaysOfSeconds(seconds) {
//     return Math.ceil(seconds / 60 / 60 / 24)
// }
//
// console.log(getDaysOfSeconds(1000000));


// 11 Сделайте функцию, которая будет возвращать случайный элемент из массива.

// function getRandomElementFromArray(arr) {
//     let random = Math.floor(Math.random() * arr.length);
//     return arr[random];
// }
//
// console.log(getRandomElementFromArray([1, 'e', '5', 'x', 8, 'z']));


// 12 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.

// function checkIsPrimeNumber(num) {
//     if (num < 1) {
//         return `Число ${num} - не простое`;
//     }
//
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return `Число ${num} - не простое`;
//         }
//     }
//
//     return `Число ${num} - простое`;
// }
//
// console.log(checkIsPrimeNumber(7));

