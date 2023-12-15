// 33_Modules_via_Closures_494-503
// Модули через замыкания

// файл script лучше подключай в конце body. можно и в head, но тогда скрипты будут до тегов и не будут работать.
// Это можно обойти добавив при подколючении скрипта type="module", но тогда в последней задаче код не будет работать.
// Вывод: подключай скипт в конце body!


// 494 Конфликты переменных / Конфликты переменных в JavaScript
//
// Пусть у нас есть HTML страница index.html, на которой в теге script вы создаете переменную str и выводите ее на экран:
//
// <html>
// 	<head>
// 		<script>
// 			let str = 'script text';
// 			alert(str); // выведет 'script text'
// 		</script>
// 	</head>
// 	<body>
// 		...
// 	</body>
// </html>
// Пусть у нас также есть файл script.js, в котором также задается переменная str:
//
// let str = 'file text';
// Пусть теперь наш файл script.js подключается к странице index.html следующим образом:
//
// <html>
// 	<head>
// 		<script>
// 			let str = 'script text';
// 		</script>
// 		<script src="script.js"></script>
// 		<script>
// 			alert(str);
// 		</script>
// 	</head>
// 	<body>
// 		...
// 	</body>
// </html>
// Так как переменная str есть и в файле index.html, и в файле script.js, то будет конфликт,
// в котором победит та переменная, которая написана ниже, то есть переменная из файла script.js.
// То есть наш алерт выведет 'file text', а не 'script text', как мы ожидаем.
//
// Проблема на самом деле очень серьезная. В реальном сайте у вас чаще всего будет несколько файлов с вашими скриптами,
// кроме того, вы будете подключать какие-то сторонние плагины. В этом случае переменные и функции одного файла могут
// конфликтовать с переменными и функциями другого файла.

// Тут ошибка в описании, на самом деле выйдет script text и ошибка указывающая что переменная уже объявлена


// 495 Модули через замыкания / Модули через замыкания в JavaScript
//
// Описанная выше проблема характерна для любого языка программирования.
// В качестве решения применяют так называемые модули.
//
// Модуль представляет собой некую конструкцию, сделанную так,
// чтобы переменные и функции этой конструкции были видны только внутри нее и не мешали никому снаружи.
//
// В JavaScript существуют несколько типов модулей.
// Самые простые модули через замыкания создаются с помощью вызова функции на месте, вот так:
//
// ;(function() {
// 	// тут код модуля
// })();
// Переменные и функции, созданные в таком модуле, не будут видны снаружи этого модуля:
//
// ;(function() {
// 	let str = 'переменная модуля';
//
//     return function func() {
// 		alert('функция модуля');
// 	}
// })();
//
// Тут переменные и функции модуля недоступны:
// alert(str);
// alert(func);


// 496 Практическое применение
//
// Пусть у нас даны два дива с числами:
//
// <div id="div1">10</div>
// <div id="div2">10</div>
// Давайте сделаем так, чтобы по клику по первому диву его значение возводилось в квадрат,
// а по клику по второму диву - в куб.
//
// Организуем наш код в виде двух модулей:
//
// ;(function() {
// 	let elem = document.querySelector('#div1'); // первый див
//
// 	function func(num) {
// 		return num * num; // возведем в квадрат
// 	}
//
// 	elem.addEventListener('click', function() {
// 		this.textContent = func(elem.textContent);
// 	});
// })();
//
// ;(function() {
// 	let elem = document.querySelector('#div2'); // второй див
//
// 	function func(num) {
// 		return num * num * num; // возведем в куб
// 	}
//
// 	elem.addEventListener('click', function() {
// 		this.textContent = func(elem.textContent);
// 	});
// })();
// Теперь в каждом из модулей мы можем использовать любые переменные и функции, не боясь того,
// что они будут конфликтовать с другими переменными и функциями нашего скрипта.
//
// Например, оба элемента мы храним в переменной elem - каждый в своей переменной своего модуля.
// Если бы модулей здесь не было, пришлось бы вводить разные переменные для хранения наши элементов.
// А с модулями мы можем спокойно использовать нашу переменную, не боясь того,
// что кто-то захочет также использовать эту переменную.


// 497 Передача параметров / Передача параметров в модуль через замыкания в JavaScript
//
// Хорошей практикой считается не зашивать какие-то значения в модуль,
// а передавать их параметром самого модуля (то есть параметром вызывающейся на месте функции):
//
// ;(function(arg1, arg2) { // параметры попадают в переменные
//
// })(1, 2); // передаем какие-то параметры
// Давайте посмотрим на примере. Пусть у нас есть див с числом и кнопка:
//
// <div id="div">3</div>
// <button id="btn">click me</button>
// Пусть у нас также есть некоторый модуль:
//
// ;(function() {
// 	let div = document.querySelector('#div');
// 	let btn = document.querySelector('#btn');
//
// 	function func(num) {
// 		return num * num;
// 	}
//
// 	btn.addEventListener('click', function() {
// 		div.textContent = func(div.textContent);
// 	});
// })();
// Как вы видите, селекторы наших элементов жестко зашиты в коде модуля. Более удачным решением будет
// передать их параметрами модуля - так в дальнейшем мы легко сможем их изменить. Исправим наш модуль:
//
// ;(function(selector1, selector2) {
// 	let div = document.querySelector(selector1);
// 	let btn = document.querySelector(selector2);
//
// 	function func(num) {
// 		return num * num;
// 	}
//
// 	btn.addEventListener('click', function() {
// 		div.textContent = func(div.textContent);
// 	});
// })('#div', '#btn');


// 1 Дана кнопка и три инпута, в которые вводятся числа.
// По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.
//
// ;(function (selectors, selector) {
//     let inputs = document.querySelectorAll(selectors);
//     let btn = document.querySelector(selector);
//
//     function func(nums) {
//         let sum = 0;
//         for (let num of nums) {
//             sum += +num.value;
//         }
//         console.log(sum);
//     }
//
//     btn.addEventListener('click', () => func(inputs));
// })('input', '#btn');


// 498 Передача родительского элемента / Передача родительского элемента в модуль через замыкания в JavaScript
//
// Пусть у нас есть следующие элементы:
//
// <div id="div1">1</div>
// <div id="div2">2</div>
// <div id="div3">3</div>
// <div id="res"></div>
//
// <button id="btn">click me</button>
// Пусть с этими элементами работает следующий модуль:
//
// ;(function(selector1, selector2, selector3, selector4, selector5) {
// 	let div1 = document.querySelector(selector1);
// 	let div2 = document.querySelector(selector2);
// 	let div3 = document.querySelector(selector3);
// 	let res  = document.querySelector(selector4);
// 	let btn  = document.querySelector(selector5);
//
// 	btn.addEventListener('click', function() {
// 		let num1 = Number(div1.textContent);
// 		let num2 = Number(div2.textContent);
// 		let num3 = Number(div3.textContent);
//
// 		res.textContent = num1 + num2 + num3;
// 	});
// })('#div1', '#div2', '#div3', '#res', '#btn');
// Как вы видите, количество передаваемых в модуль параметров несколько великовато и создает неудобства.
// Обычно в этом случае поступают следующим образом: передают в модуль общего родителя всех элементов,
// с которыми работает наш модуль, а уже внутри модуля получают из этого родителя различные элементы.
//
// Давайте сделаем нашим тегам общего родителя:
//
// <div id="parent">
// 	<div id="div1">1</div>
// 	<div id="div2">2</div>
// 	<div id="div3">3</div>
// 	<div id="res"></div>
//
// 	<button id="btn">click me</button>
// </div>
// Переделаем теперь код модуля:
//
// ;(function(root) {
// 	let parent = document.querySelector(root);
//
// 	let div1 = parent.querySelector('#div1');
// 	let div2 = parent.querySelector('#div2');
// 	let div3 = parent.querySelector('#div3');
//
// 	let res  = parent.querySelector('#res');
// 	let btn  = parent.querySelector('#btn');
//
// 	btn.addEventListener('click', function() {
// 		let num1 = Number(div1.textContent);
// 		let num2 = Number(div2.textContent);
// 		let num3 = Number(div3.textContent);
//
// 		res.textContent = num1 + num2 + num3;
// 	});
// })('#parent');
// Таким образом получится, что родительский элемент мы передаем в модуль снаружи и легко можем его поменять.
// А дочерние элементы являются внутренним делом модуля.


// 499 Передача настроек модуля / Передача настроек модуля через замыкания в JavaScript
//
// Пусть у нас есть следующий модуль:
//
// ;(function(root, type, amount) {
// 	let parent = document.querySelector(root);
//
// 	for (let i = 1; i <= amount; i++) {
// 		let elem = document.createElement(type);
// 		parent.append(elem);
// 	}
// })('#parent', 'p', 5);
// Как вы видите, в этот модуль передаются три настройки: селектор родительского элемента,
// тип элемента для создания и количество элементов.
//
// Как правило такие настройки делают в виде объекта:
//
// let config = {
// 	root:  '#parent',
// 	type:  'p',
// 	amount: 5
// }
// Давайте передадим параметром модуля наш объект:
//
// ;(function(config) {
// 	let parent = document.querySelector(config.root);
//
// 	for (let i = 1; i <= config.amount; i++) {
// 		let elem = document.createElement(config.type);
// 		parent.append(elem);
// 	}
// })(config);
// Более принято выполнять деструктуризацию объекта с настройками:
//
// ;(function({root, type, amount}) {
// 	let parent = document.querySelector(root);
//
// 	for (let i = 1; i <= amount; i++) {
// 		let elem = document.createElement(type);
// 		parent.append(elem);
// 	}
// })(config);


// 500 Параметры по умолчанию
//
//  Пусть мы хотим разрешить при использовании модуля не указывать все настройки.
//  Если какая-то из настроек не будет указана, то она примет значение по умолчанию.
//
// К примеру, в нашем случае можно сделать так, чтобы тип по умолчанию принимал значение p, а количество - значение 5:
//
// ;(function({root, type = 'p', amount = 5}) {
// 	let parent = document.querySelector(root);
//
// 	for (let i = 1; i <= amount; i++) {
// 		let elem = document.createElement(type);
// 		parent.append(elem);
// 	}
// })(config);
// В этом случае мы легко можем по-разному конфигурировать наш модуль. К примеру, укажем только родительский элемент:
//
// let config = {
// 	root:  '#parent',
// }
// А теперь укажем родительский элемент и количество. При этом нам не нужно будет указывать тип - ведь
// элементы объекта настроек не имеют порядка, и мы можем опускать их как угодно. Итак, вот наша настройка:
//
// let config = {
// 	root:  '#parent',
// 	amount: 10
// }


// 501 Экспорт переменных и функций / Экспорт переменных и функций в модулях через замыкания в JavaScript
//
// Иногда нужно сделать так, чтобы некоторые переменные и функции модуля были доступны снаружи.
// Давайте посмотрим, как это делается. Пусть у нас есть следующий модуль:
//
// ;(function() {
// 	let str = 'переменная модуля';
//
// 	function func() {
// 		alert('функция модуля');
// 	}
// })();
// Давайте экпортируем нашу функцию func. Для этого запишем ее в свойство встроенного в браузер объекта window:
//
// ;(function() {
// 	let str = 'переменная модуля';
//
// 	function func() {
// 		alert('функция модуля');
// 	}
//
// 	window.func = func;
// })();
// Теперь мы можем вызвать нашу функцию снаружи модуля:
//
// ;(function() {
// 	let str = 'переменная модуля';
//
// 	function func() {
// 		alert('функция модуля');
// 	}
//
// 	window.func = func;
// })();
//
// window.func(); // выведет 'функция модуля'
// При этом не обязательно вызывать функцию как свойство объекта window:
//
// ;(function() {
// 	let str = 'переменная модуля';
//
// 	function func() {
// 		alert('функция модуля');
// 	}
//
// 	window.func = func;
// })();
//
// func(); // выведет 'функция модуля'


// 1 Дан следующий модуль:
//
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
//
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
// })();
// Экспортируйте наружу одну из переменных и две любые функции.
//
//
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
//
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
//
//     window.str = str1;
//     window.func2 = func2;
//     window.func3 = func3;
// })();
//
// alert(str);
// func2();
// window.func3();


// 502 Экспорт объекта в модулях через замыкания / Экспорт объекта в модулях через замыкания в JavaScript
//
// Пусть у нас есть следующий модуль:
//
// ;(function() {
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
// })();
// Пусть мы хотим экспортировать наружу все три функции. В этом случае, чтобы не плодить снаружи модуля лишних
// имен функций, лучше записать все функции в один объект и выполнить экспорт этого объекта:
//
// ;(function() {
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
//
// 	window.module = {func1: func1, func2: func2, func3: func3};
// })();
// Так как имена ключей и переменных совпадают, то объект с функциями можно упросить:
//
// ;(function() {
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
//
// 	window.module = {func1, func2, func3};
// })();
// Можно пойти и другим путем. Будем записывать функции в объект сразу при описании функции, вот так:
//
// ;(function() {
// 	let module = {};
//
// 	module.func1 = function() {
// 		alert('функция модуля');
// 	}
// 	module.func2 = function() {
// 		alert('функция модуля');
// 	}
// 	module.func3 = function() {
// 		alert('функция модуля');
// 	}
//
// 	window.module = module;
// })();


// 1 Дан следующий модуль:
//
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
//
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
// 	function func4() {
// 		alert('функция модуля');
// 	}
// 	function func5() {
// 		alert('функция модуля');
// 	}
// })();
// Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными.


// вариант 1 записываем в объект в конце функции
//
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
//
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
// 	function func4() {
// 		alert('функция модуля');
// 	}
// 	function func5() {
// 		alert('функция модуля');
// 	}
//
//     window.module = {func1, func2, func3, func4, func5, str1, str2};
// })();
//
// console.log(module);
// console.log(module.func1());
// console.log(module.str2);
// console.log(module.func5());


// вариант 2 записываем в объект при описании функции
//
// ;(function() {
//     let module = {};
// 	module.str1 = 'переменная модуля';
// 	module.str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
//
// 	module.func1 = function func1() {
// 		alert('функция модуля');
// 	}
//     module.func2 = function func2() {
// 		alert('функция модуля');
// 	}
//     module.func3 = function func3() {
// 		alert('функция модуля');
// 	}
//     module.func4 = function func4() {
// 		alert('функция модуля');
// 	}
//     module.func5 = function func5() {
// 		alert('функция модуля');
// 	}
//
//     window.module = module;
// })();
//
// console.log(module);
// console.log(module.str2);
// console.log(window.module);
// console.log(window.module.str2);
// module.func5();
// window.module.func1();


// 503 Библиотеки через замыкания / Библиотеки через замыкания в JavaScript
//
// Часто в JavaScript создаются библиотеки, представляющие собой наборы функций для пользования другими программистами.
//
// Такие библиотеки обычно оборачиваются в модули через замыкания.
// Это делается для того, чтобы при подключении библиотеки во внешнем мире появлялось как можно меньше функций.
//
// Как правило каждая библиотека старается создавать во внешнем мире только одну переменную - объект с функциями
// библиотеки. При этом внутри в коде библиотеки часть функций являются основными, а часть - вспомогательными.
// Очевидно, что во внешний мир мы хотим экспортировать только нужные функции,
// не захламляя экпортируемый объект вспомогательными функциями.
//
// Давайте посмотрим на примере. Пусть у нас есть следующий набор функций, которые мы хотели бы превратить в библиотеку:
//
// function square(num) {
// 	return num ** 2;
// }
// function cube(num) {
// 	return num ** 3;
// }
// function avg(arr) {
// 	return sum(arr, 1) / arr.length;
// }
// function digitsSum(num) {
// 	return sum(String(num).split(''));
// }
//
// // вспомогательная функция
// function sum(arr) {
// 	let res = 0;
//
// 	for (let elem of arr) {
// 		res += +elem;
// 	}
//
// 	return res;
// }
// Давайте оформим наши функции в виде модуля:
//
// ;(function() {
// 	function square(num) {
// 		return num ** 2;
// 	}
// 	function cube(num) {
// 		return num ** 3;
// 	}
// 	function avg(arr) {
// 		return sum(arr, 1) / arr.length;
// 	}
// 	function digitsSum(num) {
// 		return sum(String(num).split(''));
// 	}
//
// 	// вспомогательная функция
// 	function sum(arr) {
// 		let res = 0;
//
// 		for (let elem of arr) {
// 			res += +elem;
// 		}
//
// 		return res;
// 	}
// })();
// А теперь экспортируем все функции, кроме вспомогательной:
//
// ;(function() {
// 	function square(num) {
// 		return num ** 2;
// 	}
// 	function cube(num) {
// 		return num ** 3;
// 	}
// 	function avg(arr) {
// 		return sum(arr, 1) / arr.length;
// 	}
// 	function digitsSum(num) {
// 		return sum(String(num).split(''));
// 	}
//
// 	// вспомогательная функция
// 	function sum(arr) {
// 		let res = 0;
//
// 		for (let elem of arr) {
// 			res += +elem;
// 		}
//
// 		return res;
// 	}
//
// 	window.math = {square, cube, avg, digitsSum};
// })();
// Пусть у нас есть HTML страница index.html:
//
// <html>
// 	<head>
// 		<script>
//
// 		</script>
// 	</head>
// </html>
// Подключим к ней нашу библиотеку:
//
// <html>
// 	<head>
// 		<script src="math.js"></script>
// 		<script>
//
// 		</script>
// 	</head>
// </html>
// Воспользуемся функциями из нашей библиотеки:
//
// <html>
// 	<head>
// 		<script src="math.js"></script>
// 		<script>
// 			alert(math.avg([1, 2, 3]) + math.square());
// 		</script>
// 	</head>
// </html>


// 1 Дан следующий код:
//
// function avg1(arr) {
// 	return sum(arr, 1) / arr.length;
// }
//
// function avg2(arr) {
// 	return sum(arr, 2) / arr.length;
// }
//
// function avg3(arr) {
// 	return sum(arr, 3) / arr.length;
// }
//
// // вспомогательная функция
// function sum(arr, pow) {
// 	let res = 0;
//
// 	for (let elem of arr) {
// 		res += elem ** pow;
// 	}
//
// 	return res;
// }
// Оформите этот код в виде модуля. Эспортируйте наружу все функции, кроме вспомогательной.

// ;(function () {
//     function avg1(arr) {
//         return sum(arr, 1) / arr.length;
//     }
//
//     function avg2(arr) {
//         return sum(arr, 2) / arr.length;
//     }
//
//     function avg3(arr) {
//         return sum(arr, 3) / arr.length;
//     }
//
// // вспомогательная функция
//     function sum(arr, pow) {
//         let res = 0;
//
//         for (let elem of arr) {
//             res += elem ** pow;
//         }
//
//         return res;
//     }
//
//     window.model = {avg1, avg2, avg3};
// })();
//
// console.log(model.avg1([1, 2, 3]));
// console.log(+model.avg2([1, 2, 3]).toFixed(3));
// console.log(model.avg3([1, 2, 3]));


// 2 Изучите библиотеку underscore.
// Сделайте свою аналогичную библиотеку, повторив в ней 5-10 функций оригинальной библиотеки.

// // underscore
// let result = _.map([1, 2, 3], function (num) {
//     return num * 3;
// });
// console.log('underscore', result);
//
// // без underscore
// let arr = [1, 2, 3];
// let resultMy = arr.map(function (el) {
//     return el * 3;
// });
// console.log('без underscore', resultMy);


// myPrototype
// прототип где я написал наподобие того что у меня было
// ;(function () {
//     function map(arr) {
//         return callback(arr, 3);
//     }
//
//     // вспомогательная функция
//     function callback(arr, num) {
//         let newArr = [];
//
//         for (let el of arr) {
//             newArr.push(el * num);
//         }
//
//         return newArr;
//     }
//
//     window.myPrototype = {map};
// })();
//
// console.log(myPrototype.map([1, 2, 3]));


// myLibrary
// Тут уже логика задается извне callback функцией, за основу underscore
;(function () {
    function each(list, callback) {
        if (Array.isArray(list)) {
            // это рабочий вариант
            for (let i = 0; i < list.length; i++) {
                callback(list[i], i, list);
            }

            // это упрощенный вариант, можно удалить
            // for (let listElement of list) {
            //     callback(listElement);
            // }
        } else {
            // это рабочий вариант
            let entries = Object.entries(list);

            // for of
            for (let el in entries) {
                callback(entries[el][1], entries[el][0], list);
            }

            // for i
            // for (let i = 0; i < entries.length; i++) {
            //     callback(entries[i][1], entries[i][0], list);
            // }

            // это упрощенный вариант, можно удалить
            // let values = Object.values(list);
            // for (let value in values) {
            //     callback(values[value]);
            // }
        }
    }

    function map(list, callback) {
        let newArr = [];

        // логика обработки есть/нет callback
        if (callback) { // сделай для each такую же проверку
            // for (let i = 0; i < list.length; i++) {
            //     newArr.push(callback(list[i], i)); // попробуй тут протестить 3й параметр list
            // }
            if (Array.isArray(list)) {
                // рабочий вариант на 2 аргумента num и key!
                for (let i = 0; i < list.length; i++) {
                    newArr.push(callback(list[i], i)); // попробуй тут протестить 3й параметр list
                }
                // вариант на 1 аргумент num, можно удалить
                // for (let num of list) {
                //     newArr.push(callback(num));
                // }
            } else {
                // рабочий вариант сразу на 1 или 2 аргумента num и key!
                let entries = Object.entries(list);
                for (let el in entries) {
                    newArr.push(callback(entries[el][1], entries[el][0]));  // попробуй тут протестить 3й параметр list
                }
                // ниже код с переборами можно удалить, верний покрывает всю логику
                // этот перебор подходит если аргумент num
                // let values = Object.values(list);
                // for (let value in values) {
                //     newArr.push(callback(values[value]));
                // }
                // если аргумент key
                // let keys = Object.keys(list);
                // for (let key in keys) {
                //     newArr.push(callback(keys[key]));
                // }
            }
        } else {
            newArr.push(...list);
        }

        return newArr;
    }
    // потом вынеси методы переборов для объектов в отдельные вспомогательные функции
    window.myLibrary = {each, map,};
})();

// _.each([1, 2, 3], console.log)
// myLibrary.each([1, 2, 3], console.log);

// _.each([1, 2, 3], function (num, key) {
//     console.log(num * 3 + key);
// });
// myLibrary.each([1, 2, 3], function (num, key) {
//     console.log(num * 3 + key);
// });

// _.each({one: 1, two: 2, three: 3}, function (num, key) {
//     console.log(num * 3 + key);
// });
// myLibrary.each({one: 1, two: 2, three: 3}, function (num, key) {
//     console.log(num * 3 + key);
// });


console.log(_.map([1, 2, 3], function (num, key) {
    return num * 3 + key;
}));
console.log(myLibrary.map([1, 2, 3], function (num, key) {
    return num * 3 + key;
}));

console.log(_.map([[1, 2], [3, 4]]));
console.log(myLibrary.map([[1, 2], [3, 4]]));

/*console.log(_.map({one: 1, two: 2, three: 3}, function (num, key) {
    return num * 3 + key;
}));
console.log(myLibrary.map({one: 1, two: 2, three: 3}, function (num, key) {
    return num * 3 + key;
}));*/

