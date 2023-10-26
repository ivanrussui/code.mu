// 06_multidimensional_176-183

// 176 Многомерные объекты в JavaScript

// 1 Найдите сумму элементов приведенного объекта.
// let obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
//
// let obj1Sum = obj.key1.key1 + obj.key1.key2 + obj.key1.key3
// let obj2Sum = obj["key2"]["key1"] + obj["key2"]["key2"] + obj["key2"]["key3"]
// let obj3Sum = obj.key3["key1"] + obj["key3"].key2 + obj.key3.key3
// let res = obj1Sum + obj2Sum + obj3Sum;
//
// console.log(res);


// 2 Выведите на экран элемент 'b2' и элемент 'c1'.
// let obj = {
//     1: {
//         1: 'a1',
//         2: 'a2',
//         3: 'a3',
//     },
//     2: {
//         1: 'b1',
//         2: 'b2',
//         3: 'b3',
//     },
//     3: {
//         1: 'c1',
//         2: 'c2',
//         3: 'c3',
//     },
// }
//
// console.log(obj["2"]["2"]);
// console.log(obj["3"]["1"]);


// 3 Вручную, без цикла, найдите сумму всех элементов-чисел.
// let obj = {
//     key1: {
//         a: 1, b: 2, c: {
//             d: 3,
//             e: 4,
//         }, f: 5,
//     },
//     key2: {
//         g: 6, h: 7,
//     },
// }
//
// let key1Sum = obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e + obj.key1.f
// let key2Sum = obj.key2.g + obj.key2.h
// console.log(key1Sum + key2Sum);


// 177 Перебор многомерных объектов в JavaScript

// 1 Используя циклы, найдите сумму элементов этого объекта.
// let obj = {
//     1: {
//         1: 11,
//         2: 12,
//         3: 13,
//     },
//     2: {
//         1: 21,
//         2: 22,
//         3: 23,
//     },
//     3: {
//         1: 24,
//         2: 25,
//         3: 26,
//     },
// }
//
// let res = 0

// for in
// for (let objKey in obj) {
//     let subObj = obj[objKey]
//     console.log(subObj);
//
//     for (let subObjKey in subObj) {
//         res += subObj[subObjKey]
//     }
// }

// for i
// let keys = Object.keys(obj)
//
// for (let i = 0; i < keys.length; i++) {
//     let keys2 = obj[keys[i]]
//     console.log(keys2);
//
//     let keys3 = Object.keys(keys2)
//     console.log(keys3);
//
//     for (let j = 0; j < keys3.length; j++) {
//         res += +keys2[keys3[j]]
//         console.log(keys2[keys3[j]]);
//     }
// }
//
// console.log(res);


// 2 Используя циклы, найдите сумму элементов этого объекта.
// let obj = {
//     1: {
//         1: {
//             1: 111,
//             2: 112,
//             3: 113,
//         },
//         2: {
//             1: 121,
//             2: 122,
//             3: 123,
//         },
//     },
    // 2: {
    //     1: {
    //         1: 211,
    //         2: 212,
    //         3: 213,
    //     },
    //     2: {
    //         1: 221,
    //         2: 222,
    //         3: 223,
    //     },
    // },
    // 3: {
    //     1: {
    //         1: 311,
    //         2: 312,
    //         3: 313,
    //     },
    //     2: {
    //         1: 321,
    //         2: 322,
    //         3: 323,
    //     },
    // },
// };
//
// let res = 0;

// for in
// for (let objKey in obj) {
//     let subObj = obj[objKey]
//
//     for (let subObjKey in subObj) {
//         let subSubObj = subObj[subObjKey]
//
//         for (let subSubObjKey in subSubObj) {
//             res += subSubObj[subSubObjKey]
//         }
//     }
// }

// for i
// let keys = Object.keys(obj)
// console.log(keys);

// 1 вариант
// for (let i = 0; i < keys.length; i++) {
//     let keys2 = Object.keys(obj[keys[i]])
//     console.log(keys2);
//
//     for (let j = 0; j < keys2.length; j++) {
//         let keys3 = Object.keys(obj[keys[i]][keys2[j]])
//         console.log(keys3);
//
//         for (let k = 0; k < keys3.length; k++) {
//             res += obj[keys[i]][keys2[j]][keys3[k]];
//             console.log(obj[keys[i]][keys2[j]][keys3[k]]);
//         }
//     }
// }

// 2 вариант
// for (let i = 1; i <= keys.length; i++) {
//     let keys2 = Object.keys(obj[i])
//     console.log(keys2);
//
//     for (let j = 1; j <= keys2.length; j++) {
//         let keys3 = Object.keys(obj[i][j])
//         console.log(keys3);
//
//         for (let k = 1; k <= keys3.length; k++) {
//             res += obj[i][j][k];
//             console.log(obj[i][j][k]);
//         }
//     }
// }

// console.log(res);


// 178 Многомерные структуры в JavaScript

// 1 Выведите на экран первого студента из третьей группы.
// let students = {
//     'group1': ['name11', 'name12', 'name13'],
//     'group2': ['name21', 'name22', 'name23'],
//     'group3': ['name31', 'name32', 'name33'],
// };
//
// console.log(students['group3'][0]);


// 179 Перебор многомерных структур JavaScript

// 1 С помощью вложенных циклов выведите на экран все строки с данными.
// let data = {
//     1: [
//         'data11',
//         'data12',
//         'data13',
//     ],
//     2: [
//         'data21',
//         'data22',
//         'data23',
//     ],
//     3: [
//         'data31',
//         'data32',
//         'data33',
//     ],
//     4: [
//         'data41',
//         'data42',
//         'data43',
//     ],
// };
//
// // for in
// for (let dataKey in data) {
//     console.log(dataKey);
//     for (let dataEl of data[dataKey]) {
//         console.log(dataEl);
//     }
// }
//
// // for i на втором цикле (вложенном запросил поддержку у гпт))))
// let keys = Object.keys(data)
// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
//
//     for (let j = 0; j < data[keys[i]].length; j++) {
//         console.log(data[keys[i]][j]);
//     }
// }


// 2 С помощью вложенных циклов выведите на экран все строки с данными.
// let data = [
//     {
//         1: 'data11',
//         2: 'data12',
//         3: 'data13',
//     },
//     {
//         1: 'data21',
//         2: 'data22',
//         3: 'data33',
//     },
//     {
//         1: 'data31',
//         2: 'data32',
//         3: 'data33',
//     },
// ];
//
// // for of
// for (let datum of data) {
//     console.log(datum);
//     for (let datumKey in datum) {
//         console.log(datum[datumKey]);
//     }
// }
//
// // for i
// for (let i = 0; i < data.length; i++) {
//     // console.log(data[i]);
//     let keys = Object.keys(data[i])
//     // console.log(keys);
//     for (let j = 0; j < keys.length; j++) {
//         // вот тут я затупил гпт помог
//         console.log(data[i][keys[i]]);
//     }
//
//     // но ранее сделал так, просто хотел с 0 и без + 1
//     // for (let j = 1; j < keys.length + 1; j++) {
//     //     console.log(data[i][j]);
//     // }
// }


// 3 С помощью вложенных циклов выведите на экран все строки с данными.
// let data = [
//     {
//         1: [
//             'data111',
//             'data112',
//             'data113',
//         ],
//         2: [
//             'data121',
//             'data122',
//             'data123',
//         ],
//     },
//     {
//         1: [
//             'data211',
//             'data212',
//             'data213',
//         ],
//         2: [
//             'data221',
//             'data222',
//             'data223',
//         ],
//     },
//     {
//         1: [
//             'data411',
//             'data412',
//             'data413',
//         ],
//         2: [
//             'data421',
//             'data422',
//             'data423',
//         ],
//     },
// ];

// for of
// for (let datum of data) {
//     // console.log(datum);
//
//     for (let datumKey in datum) {
//         // console.log(datumKey);
//
//         for (let datumEl of datum[datumKey]) {
//             // console.log('1', datumEl);
//         }
//     }
// }

// for i
// for (let i = 0; i < data.length; i++) {
//     // console.log(data[i]);
//     let keys = Object.keys(data[i])
//
//     for (let j = 0; j < keys.length; j++) {
//         // console.log(keys[j]);
//
//         for (let k = 0; k < data[i][keys[j]].length; k++) {
//             console.log(data[i][keys[j]][k]);
//         }
//     }
// }


// 180 Массив объектов в JavaScript

// 1 Выведите на экран данные каждого работника в формате имя - зарплата.
// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//     },
// ];
//
// // for of
// for (let employee of employees) {
//     console.log(`${employee.name}: ${employee.salary}$`);
// }
//
// // for i
// for (let i = 0; i < employees.length; i++) {
//     console.log(`${employees[i].name}: ${employees[i].salary}$`);
// }


// 2 Выведите на экран сумму зарплат всех работников.
// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//     },
// ];
//
// let res = 0;
//
// // for of
// for (let employee of employees) {
//     console.log(employee.salary);
//     res += employee.salary;
// }
//
// // for i
// for (let i = 0; i < employees.length; i++) {
//     console.log(employees[i].salary);
//     res += employees[i].salary;
// }
//
// console.log(`Сумма зарплат всех работников: ${res}`);


// 3 Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//         age: 28,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//         age: 29,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//         age: 30,
//     },
//     {
//         name: 'name4',
//         salary: 600,
//         age: 31,
//     },
//     {
//         name: 'name5',
//         salary: 700,
//         age: 32,
//     },
// ];
//
// let res = 0;
//
// // for og
// for (let employee of employees) {
//     if (employee.age >= 30) {
//         console.log(employee.salary);
//         res += employee.salary
//     }
// }
//
// // for i
// for (let i = 0; i < employees.length; i++) {
//     if (employees[i].age >= 30) {
//         console.log(employees[i].salary);
//         res += employees[i].salary
//     }
// }
//
// console.log(res);


// 181 Ключи из переменных в многомерных структурах JavaScript

// 1 Выведите на экран название месяца, соответствующее значениям переменных lang и month.
// let months = {
//     'ru': [
//         'январь',
//         'февраль',
//         'март',
//         'апрель',
//         'май',
//         'июнь',
//         'июль',
//         'август',
//         'сентябрь',
//         'октябрь',
//         'ноябрь',
//         'декабрь',
//     ],
//     'en': [
//         'january',
//         'february',
//         'march',
//         'april',
//         'may',
//         'june',
//         'july',
//         'august',
//         'september',
//         'october',
//         'november',
//         'december',
//     ],
// };
//
// let lang = 'en'; // может быть или 'ru' или 'en'
// let month = 6;   // число от 0 до 11
//
// console.log(months[lang][month]);


// 2 Выведите дело, соответствующее значениям переменных.
// let affairs = {
//     '2018': {
//         11: {
//             29: ['дело111', 'дело112', 'дело113'],
//             30: ['дело121', 'дело122', 'дело123'],
//         },
//         12: {
//             30: ['дело211', 'дело212', 'дело213'],
//             31: ['дело221', 'дело222', 'дело223'],
//         },
//     },
//     '2019': {
//         12: {
//             29: ['дело311', 'дело312', 'дело313'],
//             30: ['дело321', 'дело322', 'дело323'],
//             31: ['дело331', 'дело332', 'дело333'],
//         }
//     },
// }
//
// let year = '2018';
// let month = 12;
// let day = 31;
// let caseIndex = 1;
//
// console.log(affairs[year][month][day][caseIndex]);


// 3
// let obj = {
//     key1: {
//         key2: '12',
//         key3: '13',
//     },
//     key2: {
//         key4: '24',
//         key5: '25',
//     },
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);


// 4
// let obj = {
//     key1: {
//         key2: '12',
//         key3: '13',
//     },
//     key2: {
//         key4: '24',
//         key5: '25',
//     },
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);


// 5
// let obj = {
//     key1: {
//         key2: '12',
//         key3: '13',
//     },
//     key2: {
//         key4: '24',
//         key5: '25',
//     },
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);


// 6
// let obj = {
//     key1: {
//         key2: '12',
//         key3: '13',
//     },
//     key2: {
//         key4: '24',
//         key5: '25',
//     },
// }
//
// let key1 = 'key2';
// console.log(obj[key1].key4);


// 182 Добавление элементов в многомерные массивы JavaScript

// 1 Добавьте в следующий массив еще одного работника:
// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//         age: 28,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//         age: 29,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//         age: 30,
//     },
// ];
//
// employees.push({
//     name: 'name4',
//     salary: 600,
//     age: 31
// });
//
// console.log(employees);


// 183 Добавление элементов в многомерные объекты JavaScript

// 1 Скопируйте себе следующую структуру для хранения списка дел за определенные даты:
// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// }
//
// // 2 Добавьте еще одно дело в дату '2019-12-29'.
// affairs["2019-12-29"].push('data14');
// // console.log(affairs["2019-12-29"]);
//
// // 3 Добавьте еще два дела в дату '2019-12-31'.
// affairs['2019-12-31'] = [];
// affairs["2019-12-31"].push('data41', 'data42');
// console.log(affairs["2019-12-31"]);


// // 4 Скопируйте себе следующую структуру для хранения списка студентов:
// let students = {
//     'group1': {
//         'subgroup11': ['student111', 'student112', 'student113'],
//         'subgroup12': ['student121', 'student122', 'student123'],
//     },
//     'group2': {
//         'subgroup21': ['student211', 'student212', 'student213'],
//         'subgroup22': ['student221', 'student222', 'student223'],
//     },
//     'group3': {
//         'subgroup31': ['student311', 'student312', 'student313'],
//         'subgroup32': ['student321', 'student322', 'student323'],
//     },
// };
//
// // 5 Добавьте нового студента в подгруппу 'subgroup11'.
// students.group1.subgroup11.push('student114');
// // console.log(students.group1.subgroup11);
//
// // 6 Добавьте в первую группу еще одну подгруппу.
// students.group1.subgroup13 = ['student131', 'student132', 'student132'];
// // console.log(students.group1.subgroup13);
//
// // 7 Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов
// // students.group4.subgroup41 = ['student411', 'student412']
// students.group4 = {};
// students.group4.subgroup41 = ['student411', 'student412'];
// console.log(students.group4);

