// 13_IIFE_264-272
// IIFE


// 264 Вызов функции / Вызов функции на месте в JavaScript
//
// Сейчас мы разберем прием, который позволяет вызвать функцию прямо на месте ее объявления.
// Такая конструкция называется Immediately Invoked Function Expression (IIFE).
//
//     Давайте посмотрим на примере. Пусть у нас есть вот такое функциональное выражение:
//
//     let func = function() {
//         console.log('!');
//     };
//
// func(); // выведет '!'
// Давайте теперь не будем присваивать нашу функцию в переменную, а вызовем ее сразу же, "на месте".
// Для этого после функции поставим круглые скобки:
//
//     +function() {
//         console.log('!'); // выведет '!'
//     }();
// Наличие плюса в данном случае является обязательным условием, так как без него функция станет Function Declaration,
// а их на месте (да еще без имени) вызывать нельзя. Конечно же, вместо плюса может быть все, что угодно, - главное,
// чтобы наша функция была функциональным выражением.


// 265 Присваивание функции в переменную / Присваивание функции в переменную в JavaScript
//
// Пусть теперь наша вызываемая на месте функция не выводит что-то алертом в консоль, а возвращает через return:
//
// +function() {
//     return '!';
// }();
// Давайте присвоим результат работы нашей функции в переменную и выведем его в консоль.
// Так как в данном случае идет присваивание в переменную, то плюс уже не нужен:
//
//     let result = function() {
//         return '!';
//     }();
//
// console.log(result); // выведет '!'


// 266 Применение вызова функции на месте / Применение вызова функции на месте в JavaScript
//
// Давайте применим вызов функции на месте в качестве одного из слагаемых:
//
//     let sum = 1 + function() {
//         return 2;
//     }();
//
// console.log(sum); // выведет 3


// 267 Круглые скобки / Круглые скобки в IIFE в JavaScript
//
// Обычно при вызове функции на месте вместо плюса используются круглые скобки, так как такой способ оформления считается более очевидным:
//
//     (function() {
//         console.log('!');
//     }());
// Чаще всего круглые скобки вызова функции ставят снаружи, вот так:
//
//     (function() {
//         console.log('!');
//     })();


// 268 Параметры / Параметры функции при вызове на месте в JavaScript
//
// Пусть наша функция, которую мы собираемся вызывать на месте, параметром принимает строку для вывода алертом:
//
//     function(str) {
//         console.log(str);
//     }
// Давайте вызовем нашу функцию на месте, передав ей строку для вывода в консоль:
//
//     (function(str) {
//         console.log(str); // выведет '!!!'
//     })('!!!');


// 269 Множественные вызовы / Множественные вызовы IIFE в JavaScript
//
// Пусть вам предложат хитрую задачу: сделать несколько вызывающих скобок, вот так:
//
//     (function() {
//         // какой-то код
//     })()(); // несколько вызывающих скобок
// Если поразмыслить, то становится очевидно, что в данном случае вызов функции на месте должен возвращать анонимную функцию, вот так:
//
//     (function() {
//         return function() {
//             console.log('!');
//         };
//     })()(); // выведет '!'


// 1 Допишите следующий код так, чтобы его запуск алертом выводил '!':
//
// (function() {
// 	// какой-то код
// })()()();

// (function () {
//     return function () {
//         return function () {
//             console.log('!');
//         };
//     };
// })()()();


// 2 Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
//
// (function() {
// 	// какой-то код
// })(1)(2);

// (function(num1) {
// 	return function (num2) {
//         return console.log(num1 + num2);
//     }
// })(1)(2);


// 3 Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
//
// (function() {
// 	// какой-то код
// })(1)(2)(3);

// (function(num1) {
//     return function (num2) {
//         return function (num3) {
//             console.log(num1 + num2 + num3);
//         }
//     }
// })(1)(2)(3);


// 270 Подводные камни / Подводные камни IIFE в JavaScript
//
// Давайте рассмотрим два кусочка кода.
//
//     Первый:
//
// let result = 1
//     +function() {
//         return 2;
//     }();
//
// console.log(result);
// Второй:
//
//     let result = 1;
// +function() {
//     return 2;
// }();
//
// console.log(result);
// Эти два кусочка кода практически одинаковы, но если их запустить - результат будет отличаться.
// Первый код выведет в консоль число 3, а второй - число 1.
//
// Почему получилась такая разница: все дело в том, что в одном случае в первой строке кода в конце отсутствует
// точка с запятой, а во втором случае - присутствует.
//
//     Вы можете спросить: как же так, ведь в JavaScript точка с запятой в конце команды не является обязательной!
//     На самом деле это не совсем так. Давайте разберемся, что у нас на самом деле происходит.
//
//     Первый код можно переписать вот так:
//
//     let result = 1 + function() {
//         return 2;
//     }();
//
// console.log(result); // выведет 3
// Теперь сразу становится очевидным, что к единице прибавляется результат вызова функции на месте, то есть 2.
// Поэтому итоговый результат будет 3.
//
// Если же после единицы поставить точку с запятой, то код будет воспринят интерпретатором по-другому:
//
// // Первая команда:
// let result = 1;
//
// // Вторая команда:
// +function() {
//     return 2;
// }();
//
// // Третья команда:
// console.log(result); // выведет 1
// То есть присваивание в переменную и вызов функции на месте станут разными командами. И все из-за наличия точки с запятой!
//
//     Получается, что в данном случае вызов функции на месте вообще ничего не делает - просто вникуда возвращает число 2,
//     которое никак не влияет на переменную result.
//
//     Давайте тогда разберемся, а почему мы вообще можем не писать точку с запятой в JavaScript. Пусть у нас
//     есть такой код без точек с запятыми:
//
//     let result = 1 // в result запишется 1
// let test = 2   // в test запишется 2
// Он работает корректно, так как интерпретатор сам расставил в конце каждой строки точку с запятой.
//
//     Но посмотрите на такой код:
//
//     let result = 1
//         + 2; // в result запишется 3
// Теперь точка с запятой в конце первой строки не поставится автоматически, так как интерпретатор понимает,
// что команда второй строки - это часть команды первой строки.
//
//     Но если мы сами поставим точку с запятой - результат будет совсем другим:
//
//     let result = 1; // в result запишется 1
// + 2; // команда ничего не делает, но и ошибки не будет
// Получается, что интерпретатор сам ставит точку с запятой, только если следующая команда не является частью предыдущей.
//
//     А теперь посмотрите на этот код:
//
//     let result = 1
//         +function() {
//             return 2;
//         }();
//
// console.log(result);
// Действительно, вторая строка - просто продолжение команды первой строки и интерпретатор не ставит точку с запятой автоматически.
// Именно поэтому, если мы сами напишем точку с запятой в конце первой строки - результат будет совсем другим.
// Это говорит о том, что лучше всего всегда ставить точку с запятой в нужных местах, во избежание проблем.


// 271 Точка с запятой для безопасности / Точка с запятой для безопасности в IIFE
//
// Пусть теперь наша вызывающаяся на месте функция будет не с плюсом в начале, а обернута круглыми скобками, вот так:
//
//     (function() {
//         console.log(1); // выведет 1
//     })();
// Пусть переменная num задается снаружи функции:
//
//     let num = 1; // точка с запятой стоит
//
// (function() {
//     console.log(num); // выведет 1
// })();
// Пусть теперь мы забыли поставить точку с запятой:
//
//     let num = 1
//
//     (function() {
//         console.log(num); // выдаст ошибку
//     })();
// Получается, что такой код выдаст ошибку, так как JavaScript воспринимает нашу функцию как продолжение команды первой строки.
//
//     Чтобы избежать таких проблем, перед вызовом функции на месте всегда необходимо ставить точку с запятой, вот так:
//
//     let num = 1
//
//     ;(function() {
//     console.log(num); // выведет 1
// })();
// Кажется, что проблема несколько надуманна. На самом деле, это не так. Может быть такая ситуация,
// что у вас на странице подключаются несколько скриптов из отдельных файлов.
// В этом случае в конце одного файла может быть опущена точка с запятой и это автоматически приведет к проблеме,
// если второй файл начинается с вызова функции на месте.
//
//     Поэтому, всегда-всегда ставьте точку с запятой перед вызовом функции на месте,
//     даже если вы на данный момент уверены, что проблем не будет. Они могут возникнуть потом.
//
//     Применим сказанное выше и вызовем функцию на месте, поставив в начале точку с запятой:
//
//     ;(function() {
//     console.log(1); // выведет 1
// })();


// 272 Замыкания и IIFE / Замыкания и вызов функции на месте в JavaScript
//
// Как вы уже знаете, можно вызвать анонимную функцию на месте и присвоить результат работы какой-либо переменной:
//
//     let result = function() {
//         return '!';
//     }();
//
// console.log(result); // выведет '!'
// Часто функцию, вызывающуюся на месте, в таком случае берут в круглые скобки, хотя в этом и нет нужды.
// Это делается для того, чтобы сразу было видно, что функция вызывается на месте:
//
//     let result = (function() {
//         return '!';
//     })();
//
// console.log(result); // выведет '!'
// Пусть теперь результатом вызванной на месте функции будет анонимная функция:
//
//     let func = (function() {
//         return function() {
//             console.log('!');
//         }
//     })();
//
// func(); // выведет '!'
// Давайте сделаем так, чтобы возвращаемая функция хранила в замыкании переменную num:
//
//     let func = (function() {
//         let num = 1;
//
//         return function() {
//             console.log(num);
//         }
//     })();
// Если добавить еще num++, то функция func станет готовым счетчиком:
//
//     let func = (function() {
//         let num = 1;
//
//         return function() {
//             console.log(num);
//             num++;
//         }
//     })();
//
// func(); //выведет 1
// func(); //выведет 2
// func(); //выведет 3
// func(); //выведет 4
// func(); //выведет 5


// 1 Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.
//
// let res = (function () {
//     let counter = 1;
//
//     return function () {
//         console.log(counter);
//         counter++;
//     };
// })();
//
// res();
// res();
// res();
// res();
// res();
// res();


// 2 Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.
//
// let res = (function () {
//     let counter = 1;
//
//     return function () {
//         if (counter > 5) {
//             counter = 1;
//         }
//
//         console.log(counter);
//         counter++;
//     };
// })();
//
// res();
// res();
// res();
// res();
// res();
// res();
// res();
// res();
