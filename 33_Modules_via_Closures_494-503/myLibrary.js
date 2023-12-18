// myLibrary моя библиотека на основе underscore.js
// важно, я тут не открываю исходный код underscore и переписываю.
// я обращаюсь к библиотеке и пытаюсь реализовать логику так, чтобы на выходе получать те же данные

import _, {each, first, map, reduce, reduceRight} from "./underscore-esm.js";

;(function () {
    function each(list, callBack) {
        if (Array.isArray(list)) {
            callBackForArray(list, callBack);
        } else {
            callBackForObject(list, callBack);
        }
    }

    function map(list, callBack) {
        let newArr = [];
        if (callBack) { // логика обработки есть/нет callBack
            if (Array.isArray(list)) {
                callBackForArray(list, callBack, newArr);
            } else {
                callBackForObject(list, callBack, newArr);
            }
        } else {
            newArr.push(...list);
        }
        return newArr;
    }

    // такой вариант работает кроме когда first внутри map где внутри массива несколько массивов
    // на самом деле функция работает как надо, чтобы многомерный массив внутри map работал, надо переписывать логику map
    function first(array, n) {
        if (!n) {
            return array[0]; // данная строка без условия работает если first внутри map
        }
        return array.slice(0, n);
    }

    function reduce(list, callBack, memo) { // а вот редьюс работает с многомерными структурами так же как из underscore
        // for (let el of list) { // for of
        //     memo = callBack(memo, el);
        // }
        for (let i = 0; i < list.length; i++) { // for i
            memo = callBack(memo, list[i]);
        }
        return memo;
    }

    function reduceRight(list, callBack, memo) {
        for (let i = list.length - 1; i >= 0; i--) {
            memo = callBack(memo, list[i]);
        }
        return memo;
    }

    // вспомогательные функции

    function callBackForArray(list, callBack, newArr) {
        for (let i = 0; i < list.length; i++) {
            let logic = callBack(list[i], i, list);
            newArr ? newArr.push(logic) : logic;
        }
    }

    function callBackForObject(list, callBack, newArr) {
        let entries = Object.entries(list);

        // for i
        for (let i = 0; i < entries.length; i++) {
            let logic = callBack(entries[i][1], entries[i][0], list);
            newArr ? newArr.push(logic) : logic;
        }

        // for of
        // for (let el in entries) {
        //     let logic = callBack(entries[el][1], entries[el][0], list);
        //     newArr ? newArr.push(logic) : logic;
        // }
    }

    window.myLibrary = {each, map, first, reduce, reduceRight};
})();
//
// let list = [[0, 1], [2, 3], [4, 5]];
// let flat = reduceRight(list, function (a, b) {
//     return a.concat(b);
// }, []);
// console.log(flat);
//
// let flat2 = myLibrary.reduceRight(list, function (a, b) {
//     return a.concat(b);
// }, []);
// console.log(flat2);

// let sum = reduce([[1, 2], [3, 4]], function (memo, num) {
//     return memo + num;
// }, 10);
// console.log(sum);
//
// let sum2 = myLibrary.reduce([[1, 2], [3, 4]], function (memo, num) {
//     return memo + num;
// }, 10);
// console.log(sum2);

// console.log(map([[1, 2], [3, 4]], first));
// // // тут еще не реализовал внтури map first
// тут нужно копать map если ты сразу в first передашь такую структуру то в underscore тож не робит
// console.log(myLibrary.map([[1, 2], [3, 4]], myLibrary.first));
//
// console.log(first([5, 4, 3, 2, 1], 3));
// console.log(myLibrary.first([5, 4, 3, 2, 1], 3));
// console.log(first([5, 4, 3, 2, 1]));
// console.log(myLibrary.first([5, 4, 3, 2, 1]));


// each([1, 2, 3], console.log);
// myLibrary.each([1, 2, 3], console.log);

// map([[1, 2], [3, 4]], console.log);
// myLibrary.map([[1, 2], [3, 4]], function (list) {
//     return list
// });

//
// let a = [1, 2];
// let res = myLibrary.map(a);
// console.log(a === res);

// _.each({one: 1, two: 2, three: 3}, console.log);
// myLibrary.each({one: 1, two: 2, three: 3}, console.log);

// _.each([1, 2, 3], function (num, key) {
//     console.log(num * 3 + key);
// });
// myLibrary.each([1, 2, 3], function (num, key) {
//     console.log(num * 3 + key);
// });


// console.log(_.map([1, 2, 3], function (num, key) {
//     return num * 3 + key;
// }));
// console.log(myLibrary.map([1, 2, 3], function (num, key) {
//     return num * 3 + key;
// }));
//
// console.log(map([[1, 2], [3, 4]]));
// console.log(myLibrary.map([[1, 2], [3, 4]]));


// _.each({one: 1, two: 2, three: 3}, function (num, key) {
//     console.log(num * 3 + key);
// });
// myLibrary.each({one: 1, two: 2, three: 3}, function (num, key) {
//     console.log(num * 3 + key);
// });


// console.log(_.map({one: 1, two: 2, three: 3}, function (num, key) {
//     return num * 3 + key;
// }));
// console.log(myLibrary.map({one: 1, two: 2, three: 3}, function (num, key) {
//     return num * 3 + key;
// }));

