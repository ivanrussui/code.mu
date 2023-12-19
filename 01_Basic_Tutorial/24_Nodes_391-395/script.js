// 24_Nodes_391-395
// Узлы

// 391 Введение / Работа с узлами в JavaScript
//
// Как вы знаете, теги могут содержать другие теги или, говоря в терминах JavaScript, DOM элементы могут содержать
// другие DOM элементы. Кроме этого, однако, в них могут быть комментарии и обычный текст.
// Комментарии, тексты и DOM элементы объединяют одним названием - узлы.
//
// Вам уже знакомы свойства firstElementChild, lastElementChild, nextElementSibling, previousElementSibling.
// Эти свойства работают именно с DOM элементами, игнорируя остальные узлы. Как правило, именно это нам и требуется.
//
// Однако, существуют также свойства firstChild, lastChild, nextSibling, previousSibling. Эти свойства работают
// аналогичным образом, однако, учитывая все узлы. Давайте посмотрим разницу между этими свойствами на примере.
// Пусть у нас есть див, содержащий в себе три узла:
//
// <div id="elem"><!--сomm-->text<span>tag</span></div>
// Получим ссылку на этот див в переменную:
//
// let elem = document.querySelector('#elem');
// А теперь давайте посмотрим, что содержится в свойствах firstChild и firstElementChild:
//
// console.log(elem.firstChild);        // комментарий
// console.log(elem.firstElementChild); // тег span


// 1 Напишите код, который покажет разницу между lastChild и lastElementChild.
//
// let elem = document.querySelector('#elem');
//
// console.log(elem.lastChild);
// console.log(elem.lastElementChild);


// 2 Напишите код, который покажет разницу между nextSibling и nextElementSibling.
//
// let p = document.querySelector('p');
//
// console.log(p.nextSibling);
// console.log(p.nextElementSibling);


// 3 Напишите код, который покажет разницу между previousSibling и previousElementSibling.
//
// let p = document.querySelector('p');
//
// console.log(p.previousSibling);
// console.log(p.previousElementSibling);


// 392 Перебор узлов циклом / Перебор узлов циклом в JavaScript
//
// Как вы уже должны знать, в свойстве children содержатся все DOM элементы, являющиеся непосредственными потомками
// данного элемента. Существует аналогичное свойство childNodes, которое содержит в себе все потомки-узлы элемента.
//
// Давайте, например, с помощью этого свойства выведем различные узлы из нашего элемента:
//
// console.log(elem.childNodes[0]);
// console.log(elem.childNodes[1]);
// console.log(elem.childNodes[2]);
// А теперь давайте переберем узлы элемента циклом:
//
// for (let node of elem.childNodes) {
// 	console.log(node);
// }


// 1 Дан див:
//
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите их в консоль.
//
// let elem = document.querySelector('#elem');
//
// for (let node of elem.childNodes) {
//     console.log(node);
// }


// 393 Название узлов / Название узлов в JavaScript
//
// Все узлы имеют свойство nodeName. Для комментария оно содержит значение 'comment', для текстового узла - значение
// 'text', а для узла-элемента - имя тега в верхнем регистре. Получается, что nodeName для элементов аналогичен
// свойству tagName, но работает также и для других типов узлов.


// 1 Дан див:
//
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль их названия.
//
// let elem = document.querySelector('#elem');
//
// for (let node of elem.childNodes) {
//     console.log(node.nodeName);
// }


// 394 Тип узлов / Тип узлов в JavaScript
//
// Все узлы имеют свойство nodeType. Его значение числовое: 1 для элементов, 3 для текстовых узлов, 8 для комментариев.
// Остальные значения в настоящее время или малоиспользуемы, или устарели.


// 1 Дан див:
//
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль только узлы-элементы и текстовые узлы.
//
// let elem = document.querySelector('#elem');
//
// for (let node of elem.childNodes) {
//     if (node.nodeType === 1 || node.nodeType === 3) {
//         console.log(node);
//     }
// }


// 395 Текст узлов / Текст узлов в JavaScript
//
// Давайте теперь разберемся, как прочитать или изменить текст узлов. Для всех узлов работает свойство textContent.
// Для текстовых узлов и комментариев есть свойства nodeValue и data (они практически одинаковые, второе - короче,
// лучше пользоваться им). Для элементов есть свойство innerHTML, прочитывающее текст вместе с тегами.


// 1 Дан див:
//
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.
//
// let elem = document.querySelector('#elem');
//
// for (let node of elem.childNodes) {
//     console.log(node.textContent);
// }


// 2 Дан див:
//
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль тексты всех комментариев и текстовых узлов.
//
// let elem = document.querySelector('#elem');
//
// for (let node of elem.childNodes) {
//     if (node.nodeType === 8 || node.nodeType === 3) {
//         // console.log(node.nodeValue);
//         console.log(node.data);
//     }
// }


// 3 Дан див:
//
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и выведите в консоль тексты текстовых узлов и элементов.
//
// let elem = document.querySelector('#elem');
//
// for (let node of elem.childNodes) {
//     if (node.nodeType === 3) {
//         console.log('текст текстовых узлов', node.data);
//     }
//
//     if (node.nodeType === 1) {
//         console.log('текст элементов', node.innerHTML);
//     }
// }


// 4 Дан див:
//
// <div id="elem">txt<b>tag</b><!--com-->txt<b>tag</b><!--com--></div>
// Переберите циклом все узлы этого дива и каждому узлу в конец запишите его тип.
//
// let elem = document.querySelector('#elem');
//
// for (let node of elem.childNodes) {
//     if (node.nodeType === 1) {
//         node.innerHTML += ' - тип элемент ';
//         // node.textContent += ' - тип элемент ';
//     }
//
//     if (node.nodeType === 3) {
//         node.data += ' - тип текстовый узел ';
//         // node.nodeValue += ' - тип текстовый узел ';
//         // node.textContent += ' - тип текстовый узел ';
//     }
//
//     if (node.nodeType === 8) {
//         node.data += ' - тип комментарий ';
//         // node.nodeValue += ' - тип комментарий ';
//         // node.textContent += ' - тип комментарий ';
//     }
// }



