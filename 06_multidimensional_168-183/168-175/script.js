// 06_multidimensional_168-175

// 168 Многомерные массивы в JavaScript


// 1 Дан следующий массив:
// let arr = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
//     ['j', 'k', 'l'],
// ];
// // Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
//
// console.log(arr[3][2])
// console.log(arr[1][1])
// console.log(arr[2][0])
// console.log(arr[0][0])


// 2 Дан следующий массив:
// let arr = [[1, 2], [3, 4], [5, 6]];
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.

// не используя циклы
// let sum1 = arr[0][0] + arr[0][1]
// let sum2 = arr[1][0] + arr[1][1]
// let sum3 = arr[2][0] + arr[2][1]
// console.log(sum1 + sum2 + sum3)

// for of
// let res = 0
//
// for (let i of arr) {
//     // можно так
//     console.log(i[0])
//     console.log(i[1])
//     res += i[0] + i[1]
//
//     // а можно так и будет тоже самое
//     // console.log([i][0][0])
//     // console.log([i][0][1])
//     // res += [i][0][0] + [i][0][1]
// }

// for i
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//     res += arr[i][0] + arr[i][1]
// }

// for i ультра извращенский вариант
// for (let i = 0; i < arr.length - 1; i++) {
//     // console.log([arr][0][2][i])
//     res += [arr][0][0][i] + [arr][0][1][i] + [arr][0][2][i]
// }

// console.log(res)


// 169 Трехмерный массив в JavaScript

// 1 Дан следующий массив:
// let arr = [
//     [
//         [1, 2],
//         [3, 4],
//     ],
//     [
//         [5, 6],
//         [7, 8],
//     ],
// ];
// Обращаясь к каждому элементу массива найдите сумму всех его элементов.

// без циклов
// let sum1 = arr[0][0][0] + arr[0][0][1]
// let sum2 = arr[0][1][0] + arr[0][1][1]
// let sum3 = arr[1][0][0] + arr[1][0][1]
// let sum4 = arr[1][1][0] + arr[1][1][1]
//
// console.log(sum1 + sum2 + sum3 + sum4)

// let res = 0
//
// // for of
// // for (let i of arr) {
// //     // console.log(i[0][0] + i[0][1])
// //     // console.log(i[1][0] + i[1][1])
// //     res += i[0][0] + i[0][1] + i[1][0] + i[1][1]
// // }
//
// // for i
// // // for (let i = 0; i < arr.length; i++) {
// //     // console.log(arr[i][0][0] + arr[i][0][1])
// //     // console.log(arr[i][1][0] + arr[i][1][1])
// //     // res += arr[i][0][0] + arr[i][0][1] + arr[i][1][0] + arr[i][1][1]
// // }
//
// console.log(res)


// 170 Произвольные массивы в JavaScript

//1 Дан следующий массив:
// let arr = [
//     [
//         1, 2, 3, [4, 5, [6, 7]]
//     ],
//     [
//         8, [9, 10]
//     ]
// ];
// // Вручную, без цикла, найдите сумму элементов этого массива.
//
// let sum1 = arr[0][0] + arr[0][1] + arr[0][2]
// let sum2 = arr[0][3][0] + arr[0][3][1]
// let sum3 = arr[0][3][2][0] + arr[0][3][2][1]
// let sum4 = arr[1][0] + arr[1][1][0] + arr[1][1][1]
// console.log(sum1 + sum2 + sum3 + sum4)


// 171 Перебор многомерных массивов в JavaScript

// 1 Дан двухмерный массив с числами:
// let arr = [ [1, 2, 3], [4, 5], [6] ];
// // // С помощью вложенных циклов найдите сумму элементов этого массива.
// //
// let res = 0;
//
// // for of
// for (let arrElement of arr) {
//     console.log(arrElement)
//     for (let number of arrElement) {
//         console.log(number)
//         res += number
//     }
// }
//
// console.log(res);

// // for i
// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     for (let j = 0; j < arr[i].length; j++) {
//         // console.log(arr[i][j])
//         res += arr[i][j]
//     }
// }
//
// console.log(res)


// 2 Дан трехмерный массив с числами:
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// С помощью вложенных циклов найдите сумму элементов этого массива.

// let res = 0

// for of
// for (let arrElement of arr) {
//     for (let element of arrElement) {
//         for (let number of element) {
//             console.log(number)
//             res += number
//         }
//     }
// }

// for i
// for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     for (let j = 0; j < arr[i].length; j++) {
//         // console.log(arr[i][j])
//         for (let k = 0; k < arr[j].length; k++) {
//             // console.log(arr[i][j][k])
//             res += arr[i][j][k]
//         }
//     }
// }
//
// console.log(res)


// 172 Перебор через обычный for в JavaScript

// 1 Решите предыдущие две задачи через цикл for
// решал выше


// 173 Заполнение многомерных массивов JavaScript

// 1 Сформируйте с помощью двух вложенных циклов следующий массив:
//     [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

// let arr = []
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = []
//
//     for (let j = 0; j < 5; j++) {
//         arr[i].push(j + 1)
//     }
// }
//
// console.log(arr)


// 2 Сформируйте с помощью двух вложенных циклов следующий массив:
// [
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x']
// ]

// let arr = []
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = []
//
//     for (let j = 0; j < 4; j++) {
//         arr[i].push('x')
//     }
// }
//
// console.log(arr)


// 3 Сформируйте с помощью трех вложенных циклов следующий массив:
// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]

// let arr = []
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = []
//
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = []
//
//         for (let k = 0; k < 5; k++) {
//             arr[i][j].push(k + 1)
//         }
//     }
// }
//
// console.log(arr)


// 174 Проблемы при заполнении многомерных массивов в JavaScript

// 1
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = []
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);


// 2
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);


//3
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);


//4
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);


// 5
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);


// 6
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     }
// }
//
// console.log(arr);


// 175 Заполнение многомерных массивов по порядку в JavaScript

//1 Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2], [3, 4], [5, 6], [7, 8]]

// let arr = [];
//
// for (let i = 0, k = 1; i < 4; i++) {
//     arr[i] = []
//
//     for (let j = 0; j < 2; j++) {
//         arr[i].push(k++)
//     }
// }
//
// console.log(arr);


// 2 Сформируйте с помощью двух вложенных циклов следующий массив:
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

// let arr = [];
// let k = 2;
//
// for (let i = 0; i < 4; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 6; j++) {
//         if (k % 2 === 0) {
//             arr[i].push(k);
//         }
//         k++;
//     }
// }
//
// console.log(arr);


// 3 Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// let arr = [];
//
// for (let i = 0, k = 1; i < 2; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//
//         for (let c = 0; c < 2; c++) {
//             arr[i][j].push(k++);
//
//             // альтернатива
//             // arr[i][j][c] = k++;
//         }
//     }
// }

// console.log(arr);


// 4
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);


// 5
// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);


// 6
// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);


// 7
// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);


// 8
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);


// 9
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);


// 10
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);


// 11
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);


// 12
// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k;
//         k++;
//     }
// }
//
// console.log(arr);


// 13
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
//     arr[i] = [];
//
//     for (let j = 0; j < 3; j++) {
//         arr[i][j] = k++;
//     }
// }
//
// console.log(arr);

