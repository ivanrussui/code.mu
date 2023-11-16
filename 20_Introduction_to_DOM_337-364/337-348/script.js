// 20_Introduction_to_DOM_337-348
// Введение в DOM


// 337 Введение / Основы работы с DOM в JavaScript
//
// В предыдущих уроках мы с вами изучали базовые возможности языка JavaScript. Начиная с данного урока мы займемся тем,
// для чего собственно JavaScript и предназначен - мы будем изменять элементы HTML страницы и реагировать на действия
// пользователя. Наши скрипты станут более зрелищными и полезными.
//
// Во всех следующих уроках ваш JavaScript код должен быть размещен ниже HTML кода, к которому он обращается.
// То есть структура вашего кода должна выглядеть следующим образом:
//
// <!DOCTYPE html>
// <html>
// 	<head>
//
// 	</head>
// 	<body>
// 		ваши html теги
//
// 		<script>
// 			ваш JavaScript код
// 		</script>
// 	</body>
// </html>
//
// Либо следующим образом, если вы пишите JavaScript код в отдельном файле:
//
// <!DOCTYPE html>
// <html>
// 	<head>
//
// 	</head>
// 	<body>
// 		ваши html теги
//
// 		<script src="index.js"></script>
// 	</body>
// </html>
//
// В дальнейшем для краткости я не буду приводить полный код, а буду просто указывать, что нужно писать в HTML части,
// а что - в JavaScript части.


// 1 Сделайте файл с указанной структурой кода.


// 338 DOM элементы / DOM элементы в JavaScript
//
// Каждому тегу страницы в JavaScript соответствует некоторый объект со своими свойствами. В этом объекте хранится текст тега, значения его атрибутов, а также другие полезные вещи. В JavaScript такие объекты называют DOM элементами.
//
// Пусть в нашем HTML коде есть следующий тег:
//
// <div id="elem">text</div>
// Пусть в переменной elem лежит ссылка на этот тег. В этом случае переменная elem будет объектом со свойствами id и textContent. Свойство id будет содержать значение атрибута id нашего тега, а свойство textContent - его текст.
//
// В следующем уроке мы с вами научимся получать в JavaScript ссылки на теги страницы.


// 339 Получение DOM элементов / Получение DOM элемента в JavaScript
//
// Сейчас мы с вами научимся получать DOM элементы страницы, чтобы в дальнейшем производить с ними какие-нибудь манипуляции.
//
// Пусть у нас есть некоторая кнопка:
//
// <input id="button" type="submit">
//
// Давайте получим ссылку на эту кнопку в переменную. Для этого следует использовать метод querySelector специального
// объекта document. Этот метод параметром принимает CSS селектор и возвращает ссылку на найденный по этому селектору элемент.
//
// У нашей кнопочки есть атрибут id со значением button. Значит, мы можем найти это кнопку по селектору #button.
// Итак, давайте найдем нашу кнопочку и запишем ссылку на нее в переменную:
//
// let button = document.querySelector('#button');
// console.log(button);


// 1 Даны 3 абзаца:
//
// <p id="elem1">1</p>
// <p id="elem2">2</p>
// <p id="elem3">3</p>
//
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.
//
// let paragraph1 = document.querySelector('#elem1');
// let paragraph2 = document.querySelector('#elem2');
// let paragraph3 = document.querySelector('#elem3');
//
// console.log(paragraph1);
// console.log(paragraph2);
// console.log(paragraph3);


// 340 Сложные селекторы DOM элемента / Сложные селекторы DOM элемента в JavaScript
//
// Давайте сделаем что-нибудь более сложное. Пусть, к примеру, у нас есть вот такой HTML код:
//
// <div id="parent">
// 	<input>
// </div>
//
// Давайте получим ссылку на инпут, находящийся внутри блока #parent:
//
// let elem = document.querySelector('#parent input');
// console.log(elem);
//
// Как вы видите, мы получили наш инпут по селектору #parent input.
// На самом деле под этот CSS селектор попадают все инпуты, находящиеся в #parent.
//
// Пусть, к примеру, у нас два таких инпута:
//
// <div id="parent">
// 	<input value="1">
// 	<input value="2">
// </div>
//
// Тогда, если написать селектор #parent input в CSS коде, он затронет оба наших инпута:
//
// #parent input {
// 	color: red;
// }
// Метод querySelector, однако, работает не так. Он всегда получает только один элемент - первый,
// попавший под указанный селектор. Давайте посмотрим на примере. Пусть у нас есть инпуты с классом elem:
//
// <input class="elem">
// <input class="elem">
//
// Давайте получим первый из этих инпутов:
//
// let elem = document.querySelector('.elem');
// console.log(elem); // здесь будет первый инпут


// 1 Дан следующий HTML:
//
// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
//
// Получите ссылку на первый абзац из дива с id, равным block.
//
// let par = document.querySelector('#block p');
// console.log(par);


// 2 Дан следующий HTML:
//
// <div class="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
//
// Получите ссылку на первый абзац из дива с классом block.
//
// let par1 = document.querySelector('.block p');
// console.log(par1);


// 3 Дан следующий HTML:
//
// <p class="www">text</p>
// <p class="www">text</p>
//
// Получите ссылку на первый абзац с классом www.
//
// let par11 = document.querySelector('.www');
// console.log(par11);


// 341 Привязывание обработчиков / Привязывание обработчиков к элементам в JavaScript
//
// Давайте теперь научим наши DOM элементы реагировать на действия пользователя сайта. Например, пользователь нажмет
// куда-либо мышкой, а наш код в ответ должен будет обработать это нажатие и вывести на экран какую-либо информацию.
//
// Действия пользователя, которые мы можем отследить через JavaScript, называются событиями.
// События могут быть следующими: клик мышкой на элемент страницы, наведение мышкой на элемент страницы или наоборот -
// уход курсора мыши с элемента и так далее. Кроме того, есть события, не зависящие от действий пользователя, например,
// событие по загрузке HTML страницы в браузер.
//
// Давайте для примера сделаем кнопку, по нажатию на которую на экран алертом выведется какой-то текст.
// Для начала сделаем HTML код кнопки:
//
// <input id="button" type="submit">
// Получим теперь ссылку на кнопку в переменную:
//
// let button = document.querySelector('#button');
// Теперь нам необходимо задать реакцию нашей кнопки при клике по ней. Для этого в JavaScript существует специальный
// метод addEventListener, первым параметром принимающий название события (клик на кнопку имеет название 'click'),
// а вторым параметром - функцию-коллбэк, выполняющуюся при возникновении этого события.
//
// Давайте, например, по клику на кнопку выведем какой-нибудь текст:
//
// button.addEventListener('click', function() {
// 	console.log('!!!');
// });


// 1 Даны 3 кнопки:
//
// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2,
// а по клику на третью - число 3.

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
//
// button1.addEventListener('click', function () {
//     console.log(1);
// });
//
// button2.addEventListener('click', function () {
//     console.log(2);
// });
//
// button3.addEventListener('click', function () {
//     console.log(3);
// });


// 342 Именованные обработчики / Именованные обработчики событий в JavaScript
//
// В предыдущих уроках мы с вами использовали в качестве обработчиков событий анонимные функции.
// Это на самом деле не обязательно - функция может быть и обычной, с именем. Пусть для примера у нас есть такая функция:
//
// function func() {
// 	console.log('!!!');
// }
// Пусть также есть кнопка:
//
// <input id="button" type="submit">
// Давайте сделаем так, чтобы по клику на кнопку выполнилась наша функция func.
// Для этого параметром addEventListener передадим имя нашей функции, вот так:
//
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
//
// function func() {
// 	console.log('!!!');
// }


// 1 Дан следующий HTML код:
//
// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2">
// Даны следующие функции:
//
// function func1() {
//     console.log(1);
// }
//
// function func2() {
//     console.log(2);
// }
//
// // Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
//
// let btn1 = document.querySelector('#button1');
// let btn2 = document.querySelector('#button2');
//
// btn1.addEventListener('click', func1);
// btn2.addEventListener('click', func2);


// 343 Один обработчик к элементам / Один обработчик ко многим элементам в JavaScript
//
// Одну функцию можно привязать сразу к нескольким элементам. Пусть для примера у нас есть следующая функция:
//
// function func() {
// 	console.log('!!!');
// }
// Есть также две кнопки:
//
// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2">
// Получим ссылки на эти кнопки в переменные:
//
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// А теперь давайте привяжем нашу функцию func и к первой, и ко второй кнопке:
//
// button1.addEventListener('click', func);
// button2.addEventListener('click', func);


// 1 Даны 5 абзацев:
//
// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>
// Дана следующая функция:
//
// function func() {
// 	console.log('message');
// }
// // Привяжите эту функцию ко всем 5-ти абзацам.
//
//
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
//
// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);


// 344 Обработчики одного события / Несколько обработчиков одного события в JavaScript
//
// К одному элементу можно привязать сразу несколько функций. Давайте посмотрим на примере. Пусть у нас есть кнопка:
//
// <input id="button" type="submit">
// Пусть у нас есть две функции:
//
// function func1() {
// 	console.log('1');
// }
//
// function func2() {
// 	console.log('2');
// }
// Получим ссылку на нашу кнопку в переменную:
//
// let button = document.querySelector('#button');
// А теперь давайте привяжем к нашей кнопке в качестве обработчиков клика и первую, и вторую функции:
//
// button.addEventListener('click', func1);
// button.addEventListener('click', func2);


// 1 Дан абзац:
//
// <p id="elem">text</p>
// Даны следующие функции:
//
// function func1() {
// 	console.log('1');
// }
//
// function func2() {
// 	console.log('2');
// }
//
// function func3() {
// 	console.log('3');
// }
// // Привяжите все эти функции к нашему абзацу.
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);


// 345 Обработчики разных событий / Обработчики разных событий в JavaScript
//
// Кроме клика по элементу, существуют и другие события.
// Например, с помощью события dblclick можно отловить двойной клик по элементу,
// с помощью события mouseover - наведение курсора на элемент, а с помощью события mouseout - уход курсора с элемента.
//
// При этом к одному элементу можно привязывать обработчики различных типов событий.
// Давайте, например, привяжем к одному элементу реакцию на наведение курсора и реакцию на уход:
//
// button.addEventListener('mouseover', function() {
// 	console.log('1');
// });
// button.addEventListener('mouseout', function() {
// 	console.log('2');
// });


// 1 Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
//
// let btn = document.querySelector('#button');

// btn.addEventListener('dblclick', function () {
//     console.log('Двойной клик');
// });


// 2 Дана кнопка. По наведению на нее выведите какое-нибудь сообщение.
//
// btn.addEventListener('mouseover', function () {
//     console.log('Наведение курсора на элемент');
// });


// 3 Дана кнопка. По уходу курсора с нее выведите какое-нибудь сообщение.
//
// btn.addEventListener('mouseout', function () {
//     console.log('Уход курсора с элемента');
// });


// 4 Дана кнопка. По наведению на нее выведите одно сообщение, а по уходу с нее - другое.
//
// btn.addEventListener('mouseover', function () {
//     console.log('Наведение на кнопку');
// });
//
// btn.addEventListener('mouseout', function () {
//     console.log('Уход с кнопки');
// });


// 346 Текст элемента / Работа с текстом элементов на JavaScript
//
// У DOM элементов есть свойство textContent, позволяющее прочитывать текст этих элементов.
// Давайте посмотрим на примере. Пусть у нас есть следующий тег:
//
// <p id="elem">text</p>
// Получим ссылку на этот тег в переменную:
//
// let elem = document.querySelector('#elem');
// Прочитаем текст тега:
//
// console.log(elem.textContent);
// Поменяем текст тега:
//
// elem.textContent = '!!!';


// 1 Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
//
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#button');

// btn.addEventListener('click', function () {
//     console.log(elem.textContent);
// });


// 2 Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
//
// btn.addEventListener('click', func);
//
// function func() {
//     elem.textContent = 'new text';
// }


// 3 Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка.
// По нажатию на кнопку выведите на экран сумму хранящихся чисел.
//
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let btn = document.querySelector('#button');
//
// function func() {
//     console.log(+elem1.textContent + +elem2.textContent);
// }
//
// btn.addEventListener('click', func);


// 4 Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
//
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let btn = document.querySelector('#button');
// let demo = document.querySelector('.demo');
//
// btn.addEventListener('click', function () {
//     demo.textContent = +elem1.textContent + +elem2.textContent + +elem3.textContent;
// });


// 5 Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
//
// let elem1 = document.querySelector('#elem1');
// let btn = document.querySelector('#button');
//
// btn.addEventListener('click', () => {
//     elem1.textContent++;
// });


// 6 Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
//
// let func = function () {
//     elem1.textContent += '!';
// }
//
// btn.addEventListener('click', func);


// 347 HTML код элемента / Работа с HTML кодом элементов на JavaScript
//
// У DOM элементов есть свойство innerHTML, позволяющее прочитывать HTML код этих элементов.
// Давайте посмотрим на примере. Пусть у нас есть следующий тег:
//
// <p id="elem"><b>text</b></p>
// Получим ссылку на этот тег в переменную:
//
// let elem = document.querySelector('#elem');
// Прочитаем HTML код тега:
//
// console.log(elem.innerHTML); // выведет <b>text</b>
// Поменяем текст тега:
//
// elem.innerHTML = '<i>!!!</i>';


// 1 Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.
//
// let elem1 = document.querySelector('#elem1');
// let btn = document.querySelector('#button');
//
// btn.addEventListener('click', () => {
//     console.log(elem1.innerHTML);
// });


// 2 Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.
//
// btn.addEventListener('click', () => {
//     elem1.innerHTML = '<b>text</b>';
// });


// 348 Атрибуты тегов как свойства / Атрибуты тегов как свойства в JavaScript
//
// Давайте теперь научимся получать атрибуты тегов. Здесь действует следующее правило:
// каждому атрибуту тега соответствует одноименное свойство DOM элемента.
//
// Давайте посмотрим на примере. Пусть у нас есть вот такой тег:
//
// <input id="elem" type="text">
// Получим ссылку на наш элемент в переменную:
//
// let elem = document.querySelector('#elem');
// Выведем значения нужных нам атрибутов:
//
// console.log(elem.id);   // выведет 'elem'
// console.log(elem.type); // выведет 'text'
// А теперь для примера поменяем значение атрибута:
//
// elem.type = 'submit';


// 1 Дан следующий инпут:
//
// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#button');

// btn.addEventListener('click', () => {
//     console.log(elem.type);
// });


// 2 Дан следующий инпут:
//
// <input id="elem" type="email">
// Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.

// btn.addEventListener('click', () => {
//     elem.type = 'submit';
// });


// 3 Пусть у вас есть ссылка в виде тега a, кнопка и абзац.
// По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.
//
// let btn = document.querySelector('#button');
// let link = document.querySelector('#link');
// let elem = document.querySelector('#elem');
//
// btn.addEventListener('click', function () {
//     elem.textContent = link.href;
// });


// 4 Пусть у вас есть ссылка и кнопка.
// По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.
//
// let link = document.querySelector('#link');
// let btn = document.querySelector('#button');
//
// btn.addEventListener('click', function () {
//     // innerHTML
//     // link.innerHTML += '(' + link.href + ')';
//     // link.innerHTML += `(${link.href})`;
//
//     // textContent
//     // link.textContent += '(' + link.href + ')';
//     link.textContent += `(${link.href})`;
// });


// 5 Пусть у вас есть картинка. Разместите ее на странице с помощью тега img. Пусть даны также кнопка и абзац.
// Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.

// let img = document.querySelector('img');
// let btn = document.querySelector('#button');
// let elem = document.querySelector('#elem');
//
// btn.addEventListener('click', function () {
//     elem.textContent = img.src;
// });


// 6 Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 300.
//
// let img = document.querySelector('img');
// let btn = document.querySelector('#button');
//
// btn.addEventListener('click', function () {
//     img.width = 300;
// });


// 7 Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина.
// Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.
//
// let img = document.querySelector('img');
// let btn = document.querySelector('#button');
//
// btn.addEventListener('click', () => {
//     img.width *= 2;
// });


// 8 Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. По нажатию на первую кнопку запишите в
// атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке.
//
// let img = document.querySelector('img');
// let btn1 = document.querySelector('#button1');
// let btn2 = document.querySelector('#button2');
//
// btn1.addEventListener('click', () => {
//     img.src = 'javascript.svg';
// });
//
// btn2.addEventListener('click', () => {
//     img.src = 'javascript.png';
// });
