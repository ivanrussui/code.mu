// let obj = {
//   '1a': 1,
//   'b2': 2,
//   'с-с': 3,
//   'd 4': 4,
//   'e5': 5
// };
//
// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['с-с']);
// console.log(obj['d 4']);
// console.log(obj.e5);


// let obj = {x: 1, y: 2, z: 3};
// console.log(obj.x * obj.x);
// console.log(obj.y = 2 * 2);
// console.log(obj.z *= obj.z);

// let obj = {}
// obj.x = 1
// obj.y = 2
// obj.z = 3
// console.log(obj);

// let obj = {1: 'a', 2: 'b', 3: 'c'};
//
// console.log(obj[1]); // выведет 'a'
// console.log(obj[2]); // выведет 'b'
// console.log(obj[3]); // выведет 'c'

// let obj = {3: 'c', 1: 'a', 2: 'b'};
//
// console.log(obj[1]); // выведет 'a'
// console.log(obj[2]); // выведет 'b'
// console.log(obj[3]); // выведет 'c'

// let obj = {7: 'a', 50: 'b', 23: 'c'};
// console.log(obj);

// let obj = {x: 1, y: 2, z: 3};
// let keys = Object.keys(obj)
// console.log(keys);

// let obj = {a: 1, b: 2, c: 3};
// console.log(obj.length); // выведет undefined
// console.log(Object.keys(obj).length); // выведет 3

// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);

// let obj = {a: 1, b: 2, c: 3};
// let key = 'a';
// console.log(obj[key]); // выведет 1

// let obj = {x: 1, y: 2, z: 3};
// let key = 'z';
// console.log(obj[key]);


// let key = 'x';
//
// let obj = {
//   [key]: 1,
//   y: 2,
//   z: 3
// };
//
// console.log(obj);
//
// // Дан объект:
//
// obj = {
//   x: 1,
//   y: 2,
//   z: 3
// };
// // Даны переменные:
//
// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';
// // Сделайте так, чтобы ключи объекта брались из этих переменных.
// console.log(obj);
//
// obj = {
//   [key1]: 1,
//   [key2]: 2,
//   [key3]: 3,
// }
//
// console.log(obj);

// let test = 1
//
// if (test != 10) {
//   console.log('+++'); // сработает это
// } else {
//   console.log('---');
// }

// let test1 = 'qq';
// let test2 = 'qq';

// let test1 = '123';
// let test2 = 123;
//
// if (test2 == test1) {
//   console.log('+++'); // сработает это
// } else {
//   console.log('---');
// }

// let num = 9;
//
// if (num >= 10 && num <= 20) {
//   console.log('+++');
// } else {
//   console.log('---');
// }
//
// let num1 = 1;
// let num2 = 2;
//
// if (num1 <= 1 && num2 >= 3) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let test = true;
//
// if ( !(test === false) ) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// 0, ' ', null, undefined, NaN

// let test = 3 * 'a';
//
// if (test == true) {
//   console.log('+++');
// } else {
//   console.log('---');
// }
//

// let test = 1;
//
// if (test > 0) console.log('+++')
// console.log(test);

// let day = 32;
//
// if (day <= 10) {
//   console.log('value1');
// } else if (day > 10 && day < 21) {
//   console.log('value2');
// } else if (day > 20 && day <= 31) {
//   console.log('value3');
// } else {
//   console.log('error');
// }

// let num = 55
// if (num === 10 || num <= 99) {
//   // let str = String(num)
//   // let str1 = str[0]
//   // let str2 = str[1]
//   // let sum = Number(str1) + Number(str2)
//   const sum = Math.floor(num / 10) + (num % 10);
//   console.log(sum);
//   if (sum < 9) {
//     console.log('сумма цифр однозначна');
//   } else {
//     console.log('сумма цифр двузначна');
//   }
// }



// if (lang == 'ru') {
//   console.log('рус');
// } else if (lang == 'en') {
//   console.log('анг');
// } else if (lang == 'de') {
//   console.log('нем');
// } else {
//   console.log('язык не поддерживается');
// }


// let lang = 'ro';
//
// switch (lang) {
//   case 'ru':
//     console.log('рус');
//     break;
//   case 'en':
//     console.log('анг');
//     break;
//   case 'de':
//     console.log('нем');
//     break;
//   default:
//     console.log('язык не поддерживается');
//     break;
// }
//
// let num = 1;
// let res;
//
// switch (num) {
//   case 1:
//   case 2:
//     res = 'a';
//     break;
//   case 3:
//     res = 'b';
//     break;
// }
//
// console.log(res);


// let num = 1;
// let res;
//
// if (num == 1 || num == 2) {
//   res = 'a';
// }
//
// if (num == 3) {
//   res = 'b';
// }
//
// console.log(res);

// let num = 1;
// let res = num >= 0 ? '1' : '2'
// console.log(res);

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log(a == b);

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// console.log(a > b);
//
// let a = 2 ** 4;
// let b = 4 ** 2;
// console.log(a != b);

// let a = confirm('Вам есть 18?')
// if (a) {
//   alert('Порно можно смотреть!')
// } else {
//   alert('Подрости малыш!')
// }

// let age = 17;
// let adult;
//
// if (age >= 18) {
//   adult = true;
// } else {
//   adult = false;
// }
//
// console.log(adult);

// let age = 17;
// let adult;
//
// if (age >= 18) {
//   adult = true;
// } else {
//   adult = false;
// }
//
// console.log(adult);

// let age = 24;
// let res;
//
// if (age >= 18) {
//   if (age <= 23) {
//     res = 'от 18 до 23';
//   } else {
//     res = 'больше 23';
//   }
// } else {
//   res = 'меньше 18';
// }
//
// console.log(res);

// let age = 24;
// let res;
//
// if (age >= 18) {
//
//   if (age <= 23) {
//     res = 'от 18 до 23';
//   } else {
//     res = 'больше 23';
//   }
// } else {
//   res = 'меньше 18';
// }
//
// console.log(res);

// let min = 61;

// if (min >= 0 && min <= 19) {
//   console.log('1 треть');
// }
//
// if (min >= 20 && min <= 39) {
//   console.log('2 треть');
// }
//
// if (min >= 40 && min <= 60) {
//   console.log('3 треть');
// }

// if (min >= 0 && min <= 19) {
//   console.log('1 треть');
// } else if (min >= 20 && min <= 39) {
//   console.log('2 треть');
// } else if (min >= 40 && min <= 60) {
//   console.log('3 треть');
// } else {
//   console.log('Не треть!');
// }

// let arr = [10, 2, 3]
//
// if (arr.length === 3) {
//   console.log(arr[0] + arr[1] + arr[2]);
// }


// let a = 'abcx'
//
// let one = a[0] === 'a'
// if (one) {
//   console.log('aaa');
// }
//
// let last = a[a.length - 1]
// if (last) {
//   console.log('xxx');
// }
//
// let aOrB = a[0] === 'a' || a[0] === 'b'
// if (aOrB) {
//   console.log('a b');
// }


// 139 задача 1
// let num = 12345;

// const l = String(num)        // вариант в 2 строки
// const last = l[l.length - 1] //

// const last = String(num)[num.length - 1] // не верно
// const last = String(num)[String(num).length - 1] // верно



// 139 задача 2
// let num = 128;
// let last = String(num)[String(num).length - 1]
// let lastNum = Number(last)
// const lastIf = lastNum === 0 || lastNum === 2 || lastNum === 4|| lastNum === 6 || lastNum === 8
//
// if (lastIf) {
//   console.log('число четное');
// } else {
//    console.log('число не четное');
// }

// let num = 13
// let rest = num % 0
//
// if (rest === 0) {
//   console.log('число четное');
// } else {
//    console.log('число не четное, остаток:', + rest);
// }

// let num = 17
// let num2 = 3
// let rest = num % num2
//
// if (rest === 0) {
//   console.log('число четное');
// } else {
//    console.log('число не четное, остаток:', + rest);
// }



// let num1 = 1;
// let num2 = 2;
//
// if (num1 + num2 === 3) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num1 = '1';
// let num2 = '2';
// let numSum = Number(num1) + Number(num2)
//
// if (numSum === 3) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num1 = '1';
// let num2 = '2';
//
// if (Number(num1) + Number(num2) === 3) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// let num = 123;
// let a = String(num)[0]
// console.log(a);
//
// if (Number(a) === 1) {
//   console.log('+++');
// } else {
//   console.log('---');
// }


// 141    / 5
// let num = 123;
// let a  = Number(String(num)[0])
// console.log(a);
//
// if (a === 1) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// 6
// let num = 123;
//
// if (Number(String(num)[0]) === 1) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// 7
// let num = 123;
// let first = String(num)[0];
//
// if (Number(first) === 1) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// 8 ok
// let num = 12;
// let a = String(num).length
// console.log(typeof a);
//
// if (a % 2 === 0) {
//   console.log(a);
//   console.log('+++');
// } else {
//   console.log('---');
// }

// 9
// let num = 12;
// let str = String(num);
//
// if (str.length === 2) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// 10
// let num = 12;
// let a = String(num).length
// console.log(a);
// if (a === 2) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

// 11
// let num = 12;
//
// if (String(num).length === Number(2)) {
//   console.log('+++');
// } else {
//   console.log('---');
// }

//12
// let num = 12;
//
// if (String(num).length === 2) {
//   console.log('+++');
// } else {
//   console.log('---');
// }


// 13
// let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам
//
// let sum1 = Number(num[0]) + Number(num[1]) + Number(num[2]);
// let sum2 = Number(num[3]) + Number(num[4]) + Number(num[5]);
// console.log(sum1);
// console.log(sum2);
// if (sum1 == sum2) {
//   console.log('суммы равны');
// } else {
//   console.log('суммы не равны');
// }


// practice
// 1
// let mounth = 12;
// if (mounth > 0 && mounth <= 2 || mounth === 12) {
//   console.log('Зима');
// } else if (mounth >= 3 && mounth <= 5) {
//   console.log('Весна');
// } else if (mounth >= 6 && mounth <= 8) {
//   console.log('Лето');
// } else if (mounth >= 9 && mounth <= 11) {
//   console.log('Осень');
// } else {
//   console.log('ХЗ');
// }

// 2
// let str = 'abcde';
// let strFirst = str[0]
// console.log(strFirst);
//
// if (strFirst === 'a') {
//   console.log('yes');
// } else {
//   console.log( 'no');
// }

// 3
// let num = 12345;
// let str = String(num)[0]
// console.log(typeof str);
// if (Number(str) === 1 || Number(str) === 2 || Number(str) === 3) {
//   console.log('yes');
// } else {
//   console.log('no');
// }

// 4
// let num = 354;
// let str = String(num)
// let sum = +str[0] + +str[1] + +str[2]
// console.log(sum);

// 5
// let num = 123006
// let str = String(num)
// let str1 = Number(str[0]) + Number(str[1]) + Number(str[2])
// let str2 = Number(str[3]) + Number(str[4]) + Number(str[5])
// console.log(str1);
// console.log(str2);
// if (str1 === str2) {
//   console.log('yes');
// } else {
//   console.log('no');
// }


// циклы
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (const elem of arr) {
//   console.log(elem);
// }

// let obj = {x: 1, y: 2, z: 3};
// for (const key in obj) {
//   console.log(key);
// }
// for (const key in obj) {
//   console.log(obj[key]);
// }

// let num = 11
// while (num <= 100) {
//   console.log(num);
//   num++;
// }
// while (num < 34) {
//   console.log(num);
//   num++
// }

let num2 = 10

while(num2 < 1000) {
  num2 *= 3
  console.log(num2)
}
