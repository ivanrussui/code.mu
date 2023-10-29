// 09_Custom_Functions_200-215
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

