// Формат JSON


// 78) Введение / Введение в формат JSON в JavaScript
//
// Иногда бывает нужно преобразовать некую структуру данных, например, массив или объект, в строку.
// Это может понадобится, например, чтобы отправить эту структуру через интернет или сохранить в какое-то хранилище.
//
// Для этого в JavaScript был придуман специальный формат JSON (произносится джейсон).
//
// Формат JSON может содержать одну из двух структур: или массив, или объект с парами ключ-значение.
// Массивы и объекты строятся так же, как и в JavaScript, но имеют ограничение:
// все строки и строковые ключи объектов должны быть взяты в двойные кавычки.
//
// Давайте, например, сделаем строку, содержащую массив в формате JSON:
// let json = '[1, 2, 3, 4, 5, "a", "b"]';
//
// А теперь сделаем строку, содержащую объект в формате JSON:
// let json = `{
// 	"a": "aaa",
// 	"b": "bbb",
// 	"c": "ccc",
// 	"111": "ddd"
// }`;
//
// Можно комбинировать эти структуры в любом порядке:
// let json = `[
// 	{
// 		"a": "aaa",
// 		"b": "bbb"
// 	},
// 	{
// 		"c": "ccc",
// 		"d": "ddd"
// 	}
// ]`;
//
// В отличие от структур JavaScript, в JSON не разрешены запятые после последних элементов массивов и объектов:
// let json = '[1, 2, 3, 4, 5,]'; // неверно
// let json = '[1, 2, 3, 4, 5]';  // верно
//
// Кроме чисел и строк в качестве элементов могут выступать также значения true, false и null:
// let json = '[null, true, false]';


// 1 Дан массив:
// let arr = [1, 2, 3, 'a', 'b', 'c'];
//
// Вручную преобразуйте этот массив в строку в формате JSON.
//
// let arr = '[1, 2, 3, "a", "b", "c"]';


// 2 Дан объект:
// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 'eee',
// 	d: true,
// };
//
// Вручную преобразуйте этот объект в строку в формате JSON.
//
// let obj = `{
// 	"a": 1,
// 	"b": 2,
// 	"c": "eee",
// 	"d": true,
// }`;


// 3 Дан объект:
// let obj = {
// 	a: ['a', 'b', 'c',],
// 	b: '111',
// 	c: 'eee',
// };
//
// Вручную преобразуйте этот объект в строку в формате JSON.
//
// let obj = `{
// 	"a": ["a", "b", "c"],
// 	"b": "111",
// 	"c": "eee"
// }`;


// 79) JSON в данные / Преобразование JSON в структуру данных JavaScript
//
// С помощью метода JSON.parse можно преобразовать JSON в структуру данных JavaScript. Давайте посмотрим на примере.
//
// Пусть у нас есть строка, содержащая массив в формате JSON:
// let json = '[1, 2, 3, 4, 5, "a", "b"]';
//
// Преобразуем нашу строку в массив:
// let arr = JSON.parse(json);
//
// В случае, если строка будет содержать некорректный JSON, наш метод выдаст ошибку:
// let json = '[1, 2, 3, 4, 5,]'; // некорректный JSON
// let arr = JSON.parse(json);    // выдаст ошибку


// 1 Дана строка в формате JSON, содержащая массив с числами:
// let json = '[1,2,3,4,5]';
//
// Преобразуйте эту строку в настоящий массив JavaScript и найдите сумму чисел этого массива.
//
// const arr = JSON.parse(json);
// const sum = arr.reduce((acc, el) => acc + el);
//
// console.log(sum);


// 2 Дана строка в формате JSON, содержащая объект с данными:
// let json = `{
// 	"data1": [1,2,3],
// 	"data2": [4,5,6],
// 	"data3": [7,8,9]
// }`;
//
// Найдите сумму чисел из представленных данных.

// const obj = JSON.parse(json);
//
// console.log(obj);


// for in + reduce
//
// let sum = 0;
//
// for (const objKey in obj) {
//     sum = obj[objKey].reduce((acc, el) => acc + el, sum)
// }
//
// console.log(sum);


// доступ к свойствам + reduce
//
// const data1 = obj['data1'];
// const data2 = obj['data2'];
// const data3 = obj['data3'];
//
// const sum1 = data1.reduce((acc, el) => acc + el);
// const sum2 = data2.reduce((acc, el) => acc + el);
// const sum3 = data3.reduce((acc, el) => acc + el);
//
// const sum = sum1 + sum2 + sum3;
//
// console.log(sum);


// destructuring
//
// const [one, two, three] = obj['data1'];
// const [four, five, six] = obj['data2'];
// const [seven, eight, nine] = obj['data3'];
//
// const sum = one + two + three + four + five + six + seven + eight + nine;
//
// console.log(sum);


// spread + reduce
//
// const arr = [...obj['data1'], ...obj['data2'], ...obj['data3']];
// const sum = arr.reduce((acc, el) => acc + el);
//
// console.log(sum);


// 3 Дана строка в формате JSON, содержащая имена юзеров:
// let json = '["user1","user2","user3","user4","user5"]';
//
// Выведите эти имена в виде списка ul.
//
// const body = document.querySelector('body');
// const ul = document.createElement('ul');
//
// body.prepend(ul);
//
// const arr = JSON.parse(json);
//
// // for of
// // for (const arrElement of arr) {
// //     const li = document.createElement('li');
// //     li.textContent = arrElement;
// //     ul.append(li);
// // }
//
// // forEach
// arr.forEach(el => {
//     const li = document.createElement('li');
//     li.textContent = el;
//     ul.append(li);
// });
//
//
// console.log(arr);


// 4 Дана строка в формате JSON, содержащая массив с данными работников:
// let json = `[
// 	{
// 		"name": "user1",
// 		"age": 25,
// 		"salary": 1000
// 	},
// 	{
// 		"name": "user2",
// 		"age": 26,
// 		"salary": 2000
// 	},
// 	{
// 		"name": "user3",
// 		"age": 27,
// 		"salary": 3000
// 	}
// ]`;
//
// Выведите этих работников на экран в виде HTML таблицы.
//
// const body = document.querySelector('body');
// const table = document.createElement('table');
//
// body.prepend(table);
//
// const arr = JSON.parse(json);
//
// for (const arrElement of arr) {
//     const tr = document.createElement('tr');
//
//     table.append(tr);
//
//     for (const arrElementKey in arrElement) {
//
//         const td = document.createElement('td');
//         // td.textContent = arrElementKey + ': ' + arrElement[arrElementKey];
//         td.textContent = `${arrElementKey}: ${arrElement[arrElementKey]}`;
//
//         tr.append(td);
//     }
// }


// 80) Данные в JSON / Преобразование структур данных JavaScript в формат JSON
//
// С помощью метода JSON.stringify можно преобразовать массивы и объекты JavaScript в формат JSON.
// Давайте посмотрим на примере.
//
// Пусть у нас есть массив с данными:
// let arr = [1, 2, 3, 4, 5, 'a', 'b'];
//
// Преобразуем наш массив в строку:
// let json = JSON.stringify(arr);


// 1 Дан следующий массив:
// let json = ['user1', 'user2', 'user3', 'user4', 'user5'];
//
// Преобразуйте этот массив в формат JSON.
//
// const jsonTrue = JSON.stringify(json);


// 2 Дан следующий HTML:
// <ul>
// 	<li>city1</li>
// 	<li>city2</li>
// 	<li>city3</li>
// 	<li>city4</li>
// </ul>
//
// Получите список городов в формате JSON.

// const arr = document.querySelectorAll('li');

// forEach + push
// let arrText = [];
//
// arr.forEach(el => arrText.push(el.textContent));
//
// const json = JSON.stringify(arrText);
//
// console.log(arrText);
// console.log(json);

// Array.from + map
// const arrTrue = Array.from(arr);
// const arrText = arrTrue.map(el => el.textContent);
//
// const json = JSON.stringify(arrText);
//
// console.log(arrText);
// console.log(json);


// 3 Дан следующий HTML:
// <table>
// 	<tr>
// 		<th>Фамилия</th>
// 		<th>Имя</th>
// 		<th>Отчество</th>
// 	</tr>
// 	<tr>
// 		<td>Иванов</td>
// 		<td>Иван</td>
// 		<td>Иванович</td>
// 	</tr>
// 	<tr>
// 		<td>Петров</td>
// 		<td>Петр</td>
// 		<td>Петрович</td>
// 	</tr>
// 	<tr>
// 		<td>Сидоров</td>
// 		<td>Сидор</td>
// 		<td>Сидорович</td>
// 	</tr>
// </table>
//
// Получите представленные данные в формате JSON в виде объекта с ключами surname, name, patronymic.
