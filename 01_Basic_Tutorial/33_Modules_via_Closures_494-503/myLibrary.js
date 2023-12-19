// myLibrary моя библиотека на основе underscore.js
// важно, я тут не открываю исходный код underscore и переписываю.
// я обращаюсь к библиотеке и пытаюсь реализовать логику так, чтобы на выходе получать те же данные

// import _, {each, first, map, reduce, reduceRight} from "./underscore-esm.js";

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

    function find(list, callBack, predicate) {
        for (let el of list) {
            if (callBack) {
                predicate = callBack(el);
                if (predicate) {
                    return el;
                }
            } else if (el) {
                return el;
            }
        }
    }

    function filter(list, callBack, predicate) {
        let newArr = [];
        for (let el of list) {
            // думал тут юзать функцию callBackForArray, но она тогда получается очень умной
            // наверное callBackForArray надо переписать, чтобы была проще
            if (callBack) {
                predicate = callBack(el);
                if (predicate) {
                    newArr.push(el);
                }
            } else {
                return list;
            }
        }
        return newArr;
    }

    function every(list, callBack, predicate) {
        predicate = true;
        for (let el of list) {
            if (callBack) {
                predicate = callBack(el);
            }
            if (!el) {
                return predicate = false;
            }
        }
        return predicate;
    }

    function some(list, callBack, predicate) {
        predicate = false;
        for (let el of list) {
            if (callBack) {
                if (callBack(el)) {
                    predicate = true;
                }
            } else if (el) {
                predicate = true;
            }
        }
        return predicate;
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

        for (let i = 0; i < entries.length; i++) {  // for i
            let logic = callBack(entries[i][1], entries[i][0], list);
            newArr ? newArr.push(logic) : logic;
        }

        // for (let el in entries) { // for of
        //     let logic = callBack(entries[el][1], entries[el][0], list);
        //     newArr ? newArr.push(logic) : logic;
        // }
    }

    window.myLibrary = {each, map, first, reduce, reduceRight, find, filter, every, some};
})();

// console.log(_.some([null, 0, 'yes', false]));
// console.log(myLibrary.some([null, 0, 'yes', false]));
// console.log(_.some([1, 21, 3, 5], function (num) {
//     return num % 2 === 0;
// }));
// console.log(myLibrary.some([1, 21, 3, 5], function (num) {
//     return num % 2 === 0;
// }));

// console.log(_.every([true, 'yes', 2, '']));
// console.log(myLibrary.every([true, 'yes', 2, '']));
// console.log(_.every([2, 4, 5], function(num) { return num % 2 === 0; }));
// console.log(myLibrary.every([2, 4, 5], function(num) { return num % 2 === 0; }));

// console.log(_.filter([1, 2, 3, 4, 5, 6], function(num){ return num + 2 === 6; }));
// console.log(myLibrary.filter([1, 2, 3, 4, 5, 6], function(num){ return num + 2 === 6; }));
// console.log(_.filter([1, 2, 3, 4, 5, 6]));
// console.log(myLibrary.filter([1, 2, 3, 4, 5, 6]));

// console.log(_.find([null, 2, 3, 4, 5, 6]));
// console.log(myLibrary.find([null, 2, 3, 4, 5, 6]));
// console.log(_.find([1, 2, 3, 4, 5, 6], function (num) {
//     return num + 3 === 7 ;
// }));
// console.log(myLibrary.find([1, 2, 3, 4, 5, 6], function (num) {
//     return num + 3 === 7 ;
// }));

// let list = [[0, 1], [2, 3], [4, 5]];
// let flat = _.reduceRight(list, function (a, b) {
//     return a.concat(b);
// }, []);
// console.log(flat);
//
// let flat2 = myLibrary.reduceRight(list, function (a, b) {
//     return a.concat(b);
// }, []);
// console.log(flat2);

// let sum = _.reduce([[1, 2], [3, 4]], function (memo, num) {
//     return memo + num;
// }, 10);
// console.log(sum);
//
// let sum2 = myLibrary.reduce([[1, 2], [3, 4]], function (memo, num) {
//     return memo + num;
// }, 10);
// console.log(sum2);

// console.log(_.map([[1, 2], [3, 4]], _.first));
// тут еще не реализовал внтури map first
// тут нужно копать map если ты сразу в first передашь такую структуру то в underscore тож не робит
// console.log(myLibrary.map([[1, 2], [3, 4]], myLibrary.first));
//
// console.log(_.first([5, 4, 3, 2, 1], 3));
// console.log(myLibrary.first([5, 4, 3, 2, 1], 3));
// console.log(_.first([5, 4, 3, 2, 1]));
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

