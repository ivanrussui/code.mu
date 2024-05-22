// Стилизация


// 1) Стилизация через атрибут style / Стилизация через атрибут style в JavaScript
//
// Давайте вспомним, как стилизовать элементы через атрибут style. Пусть у нас есть следующий элемент:
//
// <div id="elem">
// 	text
// </div>
// Получим ссылку на него в переменную:
//
// let elem = document.querySelector('#elem');
// Поменяем ему нужные стили:
//
// elem.style.color = 'red';
// Прочитаем его стили:
//
// console.log(elem.style.color); // выведет 'red';


// 2) Единицы измерения в атрибуте style / Единицы измерения в атрибуте style в JavaScript
//
// При указании значений свойств через атрибут style мы должны указывать единицы измерения:
//
// elem.style.width = '100px';
// При чтении значений они также будут получаться с единицами измерений:
//
// let width = elem.style.width;
// console.log(width); // выведет '100px';
// При необходимости мы можем избавиться от единиц измерения с помощью parseInt:
//
// let width = elem.style.width;
// console.log(parseInt(width)); // выведет 100
// Если предполагаются дробные значения, можно воспользоваться функцией parseFloat:
//
// let width = elem.style.width;
// console.log(parseFloat(width));

// 1 Дан див и кнопка. По нажатию на кнопку задайте диву ширину в 400px, а высоту в 300px.
//
// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
//
// btn.addEventListener('click', function () {
//     elem.style.width = '400px';
//     elem.style.height = '300px';
// });
//

// 2 Дан див:
//
// <div id="elem" style="width: 300px; height: 200px;">
// 	text
// </div>
// Дана также кнопка. По клику на кнопку выведите ширину и высоту дива без единиц измерения.

// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
//
// btn.addEventListener('click', function () {
//     console.log(`Ширина: ${parseInt(elem.style.width)}, высота: ${parseInt(elem.style.height)}`);
//     console.log(parseInt(elem.style.width), parseInt(elem.style.height));
// });


// 3 Дан див:
//
// <div id="elem" style="font-size: 1.5em;">
// 	text
// </div>
// Дана также кнопка. По клику на кнопку выведите размер шрифта дива без единиц измерения.

// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
//
// btn.addEventListener('click', function () {
//     console.log(parseFloat(elem.style.fontSize));
// });


// 3) Ошибки с единицами измерения / Ошибки с единицами измерения в JavaScript
//
// Часто легко ошибиться и забыть про единицы измерения. Например, так:
//
// let width = 100;
// elem.style.width = width; // упс...
// Правильно будет указать значение в пикселях:
//
// let width = 100;
// elem.style.width = width + 'px';
// Представим себе, что мы хотим увеличить ширину на некоторое значение. Для этого нам сначала нужно прочитать ширину, затем извлечь число, прибавить к нему нужное значение, добавить 'px' и только потом записать обратно:
//
// let widthPx = elem.style.width;
// let widthNm = parseInt(width);
// elem.style.width = (widthNm + 30) + 'px';

// 1 Объясните, в чем ошибка в следующем коде:
//
// <div style="font-size: 16px;">
// 	text
// </div>
// let elem = document.querySelector('div');
// elem.style.fontSize = elem.style.fontSize + 2;

// Проблема в том, что у нас произойдет конкатинация строк и получится '16px2'
// нам нужно сначало привести к числу, затем сложить числа, затем сложить единицу измерения
// let elem = document.querySelector('div');
// let fontSizePx = elem.style.fontSize;
// let fontSizeNm = parseInt(fontSizePx);
// elem.style.fontSize = (fontSizeNm + 2) + 'px';


// 2 Объясните, в чем ошибка в следующем коде:
//
// <div style="font-size: 16px;">
// 	text
// </div>
// let elem = document.querySelector('div');
// elem.style.fontSize = parseInt(elem.style.fontSize + 2) + 'px';

// В том что приводим к целому числу отбрасывая строковую часть и перед этим плюсуем 2
// получаем "16px2" parseInt выдает 16


// 3 Объясните, в чем ошибка в следующем коде:
//
// <div style="font-size: 2.5em;">
// 	text
// </div>
// let elem = document.querySelector('div');
// elem.style.fontSize = parseInt(elem.style.fontSize) + 2 + 'em';

// используем parseInt для дробного числа. надо юзать parseFloat чтобы получить '4.5em'


// 4 Дан див:
//
// <div id="elem" style="width: 300px; height: 200px; border: 1px solid red;">
// 	text
// </div>
// Дана также кнопка. По клику на кнопку увеличьте ширину и высоту дива на 50px.

// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
//
// btn.addEventListener('click', function () {
//     elem.style.width = parseInt(elem.style.width) + 50 + 'px';
//     elem.style.height = parseInt(elem.style.height) + 50 + 'px';
// });


// 5 Дан див:
//
// <div id="elem" style="width: 300px; height: 200px; border: 1px solid red;">
// 	text
// </div>
// Дана также кнопка. По клику на кнопку увеличьте ширину и высоту дива на 10%.

// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
//
// btn.addEventListener('click', function () {
//     let numWidth = parseFloat(elem.style.width);
//     elem.style.width = numWidth + (numWidth * 0.10) + 'px';
//     let numHeight = parseFloat(elem.style.height);
//     elem.style.height = numHeight + (numHeight * 0.10) + 'px';
// });


// 4) Распаковка значений CSS свойств / Распаковка значений CSS свойств в JavaScript

// При чтении атрибута style сокращенные CSS свойства распаковываются в свои полные свойства.
// Давайте посмотрим, что имеется ввиду. Пусть у нас задан отступ для всех сторон:
//
// elem.style.margin = '20px';
// Выведем его:
//
// console.log(elem.style.margin); // выведет '20px';
// При этом чтение свойств для отдельных сторон также будет доступно:
//
// console.log(elem.style.marginLeft); // выведет '20px';


// 1 Дан див:
//
// <div id="elem" style="width: 300px; height: 200px; border: 1px solid red;">
// 	text
// </div>
// Дана также кнопка. По клику на кнопку выведите толщину границы, ее тип и цвет.

// let elem = document.getElementById('elem');
// let btn = document.getElementById('btn');
//
// btn.addEventListener('click', function () {
//     console.log(elem.style.border);
// });


// 5) Сброс стилей через style / Сброс стилей через style в JavaScript
//
// Пусть мы по некоторому событию решили скрыть элемент:
//
// elem.style.display = 'none';
// Пусть теперь мы решили показать его обратно.
// Это значит, что свойству display нужно вернуть его исходное значение. Например, так:
//
// elem.style.display = 'block';
// Проблема в том, что это не удобно. Ведь исходное значение не обязательно было именно block.
// Оно могло быть и flex, и inline-block, и чем-то еще. Оно могло быть задано нами в CSS файле,
// а могло браться браузером по умолчанию. Отслеживать правильное значение сложно.
//
// К счастью, есть способ легко вернуть исходное значение свойства обратно.
// Просто нужно в качестве значения свойства присвоить ему пустую строку:
//
// elem.style.display = '';


// 1 Дан див и две кнопки. По клику на первую кнопку спрячьте див, а по клику на вторую - покажите.

// let elem = document.getElementById('elem');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
//
// btn1.addEventListener('click', function () {
//     elem.style.display = 'none';
// });
// btn2.addEventListener('click', function () {
//     elem.style.display = '';
// });


// 2 Дан див и две кнопки. По клику на первую кнопку покрасьте цвет дива в красный цвет,
// а по клику на вторую - верните исходный цвет.

// let elem = document.getElementById('elem');
// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
//
// btn1.addEventListener('click', function () {
//     elem.style.background = 'red';
// });
// btn2.addEventListener('click', function () {
//     elem.style.background = '';
// });


// 6) Массовая установка стилей / Массовая установка стилей в JavaScript
//
// Можно задать сразу несколько стилей одной командой. Это делается с помощью свойства cssText:
//
// elem.style.cssText = `
// 	width: 100px;
// 	height: 100px;
// 	display: block;
// `;
// Это свойство редко используется, потому что такое присваивание удаляет все существующие стили:
// оно не добавляет, а заменяет их. Можно случайно удалить что-то нужное.
// Но его можно использовать, к примеру, для новых элементов, когда мы точно знаем, что не удалим существующий стиль.


// 1 Перепишите код через изученное свойство:
//
// elem.style.width  = '100px';
// elem.style.height = '100px';
// elem.style.margin = '10px auto';
// elem.style.color  = 'red';

// let elem = document.getElementById('elem');
//
// elem.style.cssText = `
//     width: 100px;
//     height: 100px;
//     margin: 10px auto;
//     color: red;
// `;


// 7) Проблемы чтения стилей / Проблемы чтения стилей в JavaScript
//
// Через свойство style можно прочитать только стили, заданные через атрибут style.
// Это значит, что стили заданные в CSS файле, прочитать нельзя.
//
// Давайте посмотрим на примере. Пусть у нас есть следующий элемент:
//
// <div id="elem">
// 	text
// </div>
// Пусть в CSS файле для него задаются следующие стили:
//
// #elem {
// 	color: red;
// }
// Получим ссылку на элемент в переменную:
//
// let elem = document.querySelector('#elem');
// Попробуем прочитать значение стиля:
//
// console.log(elem.style.color); // выведет ''


// 8) Чтение свойств из CSS файлов / Чтение свойств из CSS файлов в JavaScript
//
// Свойства, заданные в CSS файле, можно прочитать с помощью специальной функции getComputedStyles.
//
// Давайте посмотрим, как это делается. Пусть у нас есть следующий элемент:
//
// <div id="elem">
// 	text
// </div>
// Пусть для этого элемента заданы следующие стили:
//
// #elem {
// 	width: 100px;
// 	color: red;
// 	font-size: 20px;
// }
// Получим ссылку на элемент в переменную:
//
// let elem = document.querySelector('#elem');
// Теперь передадим ссылку на полученный элемент в качестве параметра функции getComputedStyles:
//
//  let computedStyle = getComputedStyle(elem);
// В результате мы получим объект, содержащий значения CSS свойств для нашего элемента.
// Давайте с его помощью прочитаем, например, цвет:
//
// console.log(computedStyle.color); // выведет 'red'
// А теперь ширину:
//
// console.log(computedStyle.width); // выведет '100px'
// А теперь размер шрифта:
//
// console.log(computedStyle.fontSize); // выведет '20px'


// 1 Для элемента заданы следующие стили:
//
// #elem {
// 	width: 200px;
// 	height: 200px;
// }
// По клику на кнопку выведите ширину и высоту элемента.

// let elem = document.querySelector('#elem');
//
// let computedStyle = getComputedStyle(elem);
// console.log(computedStyle.width);
// console.log(computedStyle.height);


// 2 Для элемента заданы следующие стили:
//
// #elem {
// 	width: 200px;
// 	height: 200px;
// }
// По клику на кнопку увеличьте ширину и высоту элемента в два раза.

// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
//
// let computedStyle = getComputedStyle(elem);
//
// btn1.addEventListener('click', function () {
//     let widthNum = parseInt(computedStyle.width);
//     elem.style.width = (widthNum * 2) + 'px';
//     let heightNum = parseInt(computedStyle.height);
//     elem.style.height = (heightNum * 2) + 'px';
// });


// 9) Преобразование прочитанных значений / Преобразование прочитанных значений в JavaScript
//
// Функция getComputedStyles не получает именно те значения, которые были заданы в CSS.
// Она преобразует их в абсолютные значения, обычно в пиксели.
//
// Давайте посмотрим на примере. Пусть у нас задана ширина в процентах:
//
// #elem {
// 	width: 100%;
// }
// Однако при чтении ширины мы получим значение не в процентах, а в пикселях:
//
// console.log(computedStyle.width); // значение в px


// 1 Для элемента заданы следующие стили:
//
// #elem {
// 	font-size: 2em;
// }
// По клику на кнопку выведите размер шрифта элемента.

// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
//
// let computedStyle = getComputedStyle(elem);
//
// btn1.addEventListener('click', function () {
//     console.log(computedStyle.fontSize);
// });


// 10) Стилизация классами / Стилизация классами в JavaScript
//
// Стилизовать элементы через атрибут style иногда удобно, но чаще всего - не самая удачная идея.
// Проблема в том, что стили будут разбросаны по JavaScript файлу и их трудоемко будет изменять.
// Гораздо удобнее задавать стили в CSS файлах, чтобы их легко можно было изменять, не копаясь в JavaScript коде.
//
// Пусть для примера у нас есть элемент, выводящий некоторое сообщение.
// Сообщение может быть "хорошим" и выводиться зеленым цветом и "плохим" и выводиться красным цветом.
// Лучшим решением в таком случае будет сделать для этого соответствующие CSS классы:
//
// .success {
// 	color: green;
// }
// .error {
// 	color: red;
// }
// Теперь при выводе "хорошего" сообщения мы будем давать элементу "хороший" класс:
//
// elem.textContent = 'good';
// elem.classList.add('success');
// А при выводе "плохого" сообщения мы будем давать элементу "плохой" класс:
//
// elem.textContent = 'bad';
// elem.classList.add('error');


// 1 Даны абзацы с числами. Переберите эти абзацы циклом и абзацы, содержащие четные числа,
// покарасьте в красный цвет, а содержащие нечетные - в зеленый.

// let paragraphs = document.querySelectorAll('p');
//
// for (let i = 0; i < paragraphs.length; i++) {
//     if (i % 2) {
//         paragraphs[i].classList.add('error');
//     } else {
//         paragraphs[i].classList.add('success');
//     }
// }


// 11) Один класс для стилизации / Один класс для стилизации в JavaScript
//
// Пусть у нас есть два класса, которые мы даем элементу в зависимости от его состояния:
//
// div.active {
// 	color: red;
// }
// div.passive {
// 	color: black;
// }
// На самом деле наличие двух классов здесь может мешать.
// В этом случае мы можем переписать стили следующим образом через селектор :not:
//
// div.active {
// 	color: red;
// }
// div:not(active) {
// 	color: black;
// }
// В этом случае мы сможем удобным образом тогглить наш класс, делая элемент активным или неактивным:
//
// elem.classList.toggle('active');


// 1 Даны абзацы. Сделайте так, чтобы каждый абзац по первому клику на него красился в красный цвет,
// а по второму клику - красился обратно в черный.

// let paragraphs = document.querySelectorAll('p');
//
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].addEventListener('click', function () {
//         this.classList.toggle('active');
//     });
// }


// 12) Неудобство классов / Неудобство классов в JavaScript
//
// Пусть у нас есть несколько классов для стилизации сообщений:
//
// .success {
// 	color: green;
// }
// .warning {
// 	color: orange;
// }
// .error {
// 	color: red;
// }
// Пусть в некотором элементе мы вывели успешное сообщение и назначили ему соотвестсвующий класс для успеха:
//
// elem.classList.add('success');
// Пусть теперь мы в этом же элементе вывели сообщение об ошибке и назначили ему соотвестсвующий класс для ошибки:
//
// elem.classList.add('error');
// В результате получится, что в элементе будет два конфликтующих друг с другом класса:
//
// <div id="elem" class="success error">
// 	text
// </div>
// Получается, что перед добавлением нового класса, нам придется сначала удалить предыдущий:
//
// elem.classList.remove('success');
// elem.classList.add('error');
// Это не очень удобно, так как мы можем не знать,
// какой именно был предыдущий класс и нам придется удалять все классы подряд:
//
// elem.classList.remove('success');
// elem.classList.remove('warning');
// elem.classList.add('error');


// 1 Дан инпут. По потери фокуса проверьте, что в него введено не более 9-ти символов.
// Если это так, покрасьте границу инпута в зеленый цвет, а если не так - в красный.

// let input = document.querySelector('input');
//
// input.addEventListener('blur', () => {
//     if (input.value.length > 9) {
//         input.classList.remove('success');
//         input.classList.add('error');
//     } else {
//         input.classList.remove('error');
//         input.classList.add('success');
//     }
// });


// 13) Чередование стилей через data- / Чередование стилей через data- атрибут в JavaScript
//
//  Для решения проблемы, описанной в предыдущем уроке, мы не будем задавать элементу классы,
//  а будем менять значение data- атрибута. Это будет удобно тем, что такой атрибут может иметь
//  только одно значение и при записи новое значение само будет затирать старое.
//
// Для примера вот так мы зададим успешный стиль:
//
// <div id="elem" data-type="success">
// 	text
// </div>
// А так стиль для ошибки:
//
// <div id="elem" data-type="error">
// 	text
// </div>
// Стили наших состояний мы зададим через селекторы атрибутов:
//
// [data-type="success"] {
// 	color: green;
// }
// [data-type="warning"] {
// 	color: orange;
// }
// [data-type="error"] {
// 	color: red;
// }
// Теперь мы легко можем покрасить наш элемент в успешный цвет:
//
// elem.dataset.type = 'success';
// А так мы покрасим в цвет ошибки:
//
// elem.dataset.type = 'error';


// 1 Дан инпут. По потери фокуса проверьте введенное в него число. Если это число до десяти,
// покрасьте инпут в зеленый цвет, если от десяти до двадцати - в желтый, а если более двадцати - в красный.

let input = document.querySelector('input');

input.addEventListener('blur', function () {
    if (input.value.length < 10) {
        this.dataset.type = 'success';
    } else if (input.value.length >= 10 && input.value.length < 20) {
        this.dataset.type = 'warning';
    } else {
        this.dataset.type = 'error';
    }
});