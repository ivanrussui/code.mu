// 31_Practice_472-484
// Практика

// 472 Удаление новых элементов / Самоудаление новых элементов на JavaScript
//
// В предыдущем уроке мы в вами научились делать так, чтобы элементы удаляли сами себя по клику. // 457 наверное
//
// Пусть теперь элементов в родителе изначально нет:
//
// <div id="parent"></div>
// Давайте в цикле создадим 9 новых абзацев, при этом сделаем так, чтобы любой абзац удалялся по клику на нем:
//
// let parent = document.querySelector('#parent');
//
// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = i;
//
// 	p.addEventListener('click', function() {
// 		this.remove();
// 	});
//
// 	parent.appendChild(p);
// }


// 1 Дан следующий код:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
//
// <input type="submit" id="button">
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент.
// Сделайте так, чтобы любая li удалялась по клику на нее.
// Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
//
// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');
// let lis = document.querySelectorAll('li');
//
// решение через получение элементов и их перебор, более простое и лаконичное
// function addElement() {
//     let li = document.createElement('li');
//     let lastElement = parent.lastElementChild;
//
//     !lastElement ? li.textContent = '1' : li.textContent = String(Number(lastElement.textContent) + 1);
//
//     // if (!lastElement) {
//     //     li.textContent = '1';
//     // } else {
//     //     li.textContent = String(Number(lastElement.textContent) + 1);
//     // }
//
//     parent.append(li);
//
//     li.addEventListener('click', deleteElement);
// }
//
// function deleteElement() {
//     this.remove();
// }
//
// button.addEventListener('click', addElement);
//
// for (let li of lis) {
//     li.addEventListener('click', deleteElement);
// }

// решение через получение родителя и предотвращение всплытия, менеее предпочтительное, больше кода, проверок
// function addElement() {
//     let li = document.createElement('li');
//     let lastElement = parent.lastElementChild;
//
//     !lastElement ? li.textContent = '1' : li.textContent = String(Number(lastElement.textContent) + 1);
//
//     parent.append(li);
//
//     li.addEventListener('click', deleteElement);
// }
//
// function deleteElement() {
//     this.remove();
// }
//
// button.addEventListener('click', addElement);
//
// // тут есть косяк можем кликнуть на ul (его паддинг) и тогда на нем сработает удаление
// // решаем проверкой tagName === 'LI' или closest('li')
// parent.addEventListener('click', function (event) {
//     // if (event.target.tagName === 'LI') {
//     if (event.target.closest('li')) {
//         event.target.remove();
//         event.stopPropagation();
//     }
// });


// 473 Ссылка на удаление элемента / Ссылка на удаление элемента на JavaScript
//
// Пусть у нас абзац. Давайте рядом с ним сделаем ссылку, с помощью которой этот абзац можно будет удалить.
//
// Реализуем:
//
// <div id="parent">
// 	<p id="elem">text</p>
// 	<a href="#" id="remove">remove</a>
// </div>
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
//
// remove.addEventListener('click', function() {
// 	elem.remove();
// });
// Обратите внимание на то, что в атрибуте href ссылки стоит #.
// Если эту решетку убрать - мы получим переход по ссылке и, как следствие, обновление страницы.
//
// На самом деле удаление абзаца тоже будет происходить, но мы это не заметим,
// так как страница обновится и все вернется в изначальное положение.
//
// Для решения проблемы нужно предотвратить переход по ссылке с помощью preventDefault:
//
// <div id="parent">
// 	<p id="elem">text</p>
// 	<a href="" id="remove">remove</a>
// </div>
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
//
// remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault(); // отменяем переход по ссылке
// });


// 1 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
//
// let elem = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
//
// remove.addEventListener('click', event => {
//     event.preventDefault();
//     elem.remove();
// });


// 474 Создание ссылок для удаление / Создание ссылок для удаление элементов на JavaScript
//
// Пусть теперь у нас есть много абзацев:
//
// <div id="parent">
// 	<p>text1</p>
// 	<p>text2</p>
// 	<p>text3</p>
// </div>
// Давайте сделаем так, чтобы каждому абзацу в конец добавлялась ссылка на его удаление.
//
// Для начала давайте просто реализуем добавление ссылок:
//
// let elems = document.querySelectorAll('#parent p');
//
// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
//
// 	elem.appendChild(remove);
// }
// Давайте теперь сделаем так, чтобы по нажатию на ссылку, удалялся соответствующий ей абзац:
//
// let elems = document.querySelectorAll('#parent p');
//
// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
//
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }


// 1 Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
//
// let parent = document.querySelector('#parent');
//
// createLists();
//
// function createLists() {
//     for (let i = 1; i <= 3; i++) {
//         let li = document.createElement('li');
//         li.textContent = 'list ';
//         parent.append(li);
//     }
//
//     createLinks();
// }
//
// function createLinks() {
//     let elems = parent.querySelectorAll('li');
//
//     for (let elem of elems) {
//         let remove = document.createElement('a');
//         remove.href = '';
//         remove.textContent = 'Click to remove';
//         elem.append(remove);
//
//         removeLink(remove, elem);
//
//     }
// }
//
// function removeLink(remove, elem) {
//     remove.addEventListener('click', event => {
//         event.preventDefault();
//         elem.remove();
//     });
// }


// 2 Дана HTML таблица. Добавьте в нее еще одну колонку,
// в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
//
// let trs = document.querySelectorAll('tr');
// createColumns();
//
// 2 вариант разделил на 3 функции. Тут надо вернуть результат работы функции обратно, его записать в переменную
// и тогда можно передать remove в функцию removeRow
// function createColumns() {
//     for (let tr of trs) {
//         let td = document.createElement('td');
//
//         tr.append(td);
//
//         let remove = addLinks(td); // записывает в remove результат работы функции addLinks
//         removeRow(remove, tr); // теперь remove можно передать как параметр
//     }
// }
//
// function addLinks(td) {
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'Remove this row';
//
//     td.append(remove);
//     return remove; // Возвращаем ссылку для использования в другом месте
// }
//
// function removeRow(remove, tr) {
//     remove.addEventListener('click', event => {
//         event.preventDefault();
//         tr.remove();
//     });
// }

// 1 вариант разделил на 2 функции
// function createColumns() {
//     for (let tr of trs) {
//         let td = document.createElement('td');
//         let remove = document.createElement('a');
//         remove.href = '';
//         remove.textContent = 'Remove this row';
//
//         tr.append(td);
//         td.append(remove);
//
//         removeRow(remove, tr);
//     }
// }
//
// function removeRow(remove, tr) {
//     remove.addEventListener('click', event => {
//         event.preventDefault();
//         tr.remove();
//     })
// }


// 475 Редактирование отдельного элемента / Редактирование отдельного элемента на JavaScript
//
// Сейчас мы с вами научимся редактировать тексты элементов с помощью полей ввода.
// Начнем с простых вещей и будем постепенно усложнять.
//
// Итак, пусть у нас даны абзац и инпут, расположенные в одном родителе:
//
// <div id="parent">
// 	<p id="elem">text</p>
// 	<input id="input">
// </div>
// Давайте сделаем так, чтобы по потери фокуса в инпуте его текст появлялся в абзаце:
//
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
//
// input.addEventListener('blur', function() {
// 	elem.textContent = this.value;
// });
// Давайте теперь сделаем так, чтобы по заходу на страницу в инпуте уже стоял текст абзаца.
// Таким образом мы с помощью инпута сможем редактировать текст, расположенный в абзаце.
//
// Реализуем:
//
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
//
// input.value = elem.textContent; // записываем в инпут текст абзаца
//
// input.addEventListener('blur', function() {
// 	elem.textContent = this.value;
// });


// 1 Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса,
// а по мере ввода текста в инпут.
//
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
//
// input.value = elem.textContent; // записываем в инпут текст абзаца
//
// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });


// Появление инпута
// Давайте теперь сделаем так, чтобы инпута изначально не было на странице, а он появлялся по клику на абзац.
// То есть наш начальный HTML будет выглядеть так:
//
// <div id="parent">
// 	<p id="elem">text</p>
// </div>
// Для начала просто реализуем появление инпута, без редактирования:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
//
// 	elem.parentElement.appendChild(input);
// });
// А теперь давайте сделаем так, чтобы по потери фокуса в инпуте менялся текст абзаца:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
//
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 	});
//
// 	elem.parentElement.appendChild(input);
// });
// Наш код, однако, несовершенен, так как каждое нажатие на абзац будет приводить к появлению нового инпута.
//
// Для решения проблемы просто будем по потери фокуса удалять текущий инпут:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
//
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove(); // удалим инпут
// 	});
//
// 	elem.parentElement.appendChild(input);
// });


// 2 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function () {
//     let input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.value = elem.textContent;
//     elem.parentElement.append(input);
//
//     input.addEventListener('input', () => this.textContent = input.value);
//
//     input.addEventListener('blur', function () {
//         this.remove();
//     });
// });


// 476 Прячем текст при редактировании / Прячем текст при редактировании элемента на JavaScript
//
// Давайте теперь сделаем так, чтобы при редактировании инпут появлялся в самом абзаце - вместо текста этого абзаца.
// Пусть затем при окончании редактирования инпут будет убираться, а вместо него опять появляться текст абзаца.
//
// Приступим к реализации.
//
// Для начала давайте сделаем так, чтобы по клику на абзац ему в конец добавлялся инпут с текстом этого абзаца:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
//
// 	elem.appendChild(input);
// });
// Наш код, однако, очень несовершенен - каждый раз по клику на абзац в него будет добавляться новый инпут.
//
// При этом, если в первом инпуте будет стоять текст абзаца, то во втором инпуте уже будет стоять текст абзаца вместе
// с первым инпутом, а третьем инпуте уже будет стоять текст абзаца вместе с двумя инпутами и так далее.
//
// Обратите также внимание на то, что клик по добавленному инпуту будет расцениваться как клик по абзацу: дело в том,
// что инпут находится в абзаце, и клик по инпуту просто всплывет выше к этому абзацу.
//
// Это приведет к тому, что после появления первого инпута при попытке нажать на него для того,
// чтобы начать редактирование, мы автоматически сделаем клик по абзацу со всеми вытекающими последствиями.
//
// Итак, проблема обрисована. Давайте теперь ее исправим.
//
// Для этого просто при появлении инпута отвяжем от абзаца обработчик клика.
// В этом случае только первый клик по абзацу будет приводить к появлению инпута, а остальные клики,
// сделанные после появления инпута, будут проигнорированы.
//
// Реализуем:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
//
// 	elem.appendChild(input);
//
// 	elem.removeEventListener('click', func); // отвяжем событие
// });
// Давайте теперь сделаем так, чтобы при появлении инпута, текст самого абзаца исчезал.
// Для этого перед вставкой инпута textContent абзаца присвоим пустой строке:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
//
// 	input.value = elem.textContent; // сначала записываем текст абзаца в инпут
// 	elem.textContent = ''; // затем убираем текст абзаца
// 	elem.appendChild(input); // затем вставляем инпут
//
// 	elem.removeEventListener('click', func);
// });
// Давайте теперь сделаем так, чтобы при потери фокуса в инпуте текст этого инпута записывался в абзац:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
//
// 	input.value = elem.textContent;
// 	elem.textContent = '';
// 	elem.appendChild(input);
//
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 	});
//
// 	elem.removeEventListener('click', func);
// });
// Обратите внимание на то, что нам не нужно удалять инпут - он удаляет сам себя, когда записывает свой текст в абзац:
// так как инпут является частью текста абзаца, то запись какого-то текста в этот абзац просто удаляет наш инпут, и все.
//
// У нас, однако, есть еще одна проблема: текст абзаца будет редактироваться лишь первый раз.
// После первого редактирования повторное нажатие на текст абзаца ни к чему не приведет.
//
// Дело в том, что в момент появления инпута мы отвязали событие от абзаца по описанным выше причинам.
// Теперь нам необходимо в момент окончания редактирования привязать событие обратно.
//
// Сделаем это:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
//
// 	elem.textContent = '';
// 	elem.appendChild(input);
//
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func); // повесим событие обратно
// 	});
//
// 	elem.removeEventListener('click', func);
// });


// 1 Самостоятельно, не подсматривая в мой код, решите описанную задачу.
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function func() {
//     let input = document.createElement('input');
//     input.value = this.textContent;
//     this.textContent = '';
//     this.append(input);
//
//     this.removeEventListener('click', func);
//
//     input.addEventListener('blur', function () {
//         elem.textContent = this.value;
//         elem.addEventListener('click', func);
//     });
// });


// 477 Редактирование в наборе элементов / Редактирование в группе элементов на JavaScript
//
// Пусть теперь у нас есть не один абзац, а много:
//
// <p>text1</p>
// <p>text2</p>
// <p>text3</p>
// Давайте сделаем так, чтобы по клику на любой абзац в нем появлялся инпут для редактирования.
//
// На самом деле такая задача для нас не представляет сложности,
// так как почти весь код был получен нами в предыдущем уроке.
//
// Для решения нашей задачи просто запустим цикл по абзацам и в цикле используем код предыдущего урока
// (этот код даже не понадобится изменять):
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
//
// 		elem.textContent = '';
// 		elem.appendChild(input);
//
// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});
//
// 		elem.removeEventListener('click', func);
// 	});
// }


// 1 Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут,
// с помощью которого можно будет поредатировать текст этой li.
//
// let lis = document.querySelectorAll('li');
//
// for (let li of lis) {
//     li.addEventListener('click', function changeText() {
//         let input = document.createElement('input');
//         input.value = this.textContent;
//         this.textContent = '';
//         this.append(input);
//
//         this.removeEventListener('click', changeText);
//
//         input.addEventListener('blur', function () {
//             li.textContent = this.value;
//             li.addEventListener('click', changeText);
//         });
//     });
// }


// 2 Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут
// для редактирования текста этой ячейки.
//
// let tds = document.querySelectorAll('td');
//
// for (let td of tds) {
//     td.addEventListener('click', function changeText() {
//         let input = document.createElement('input');
//         input.value = this.textContent;
//         this.textContent = '';
//         this.append(input);
//
//         this.removeEventListener('click', changeText);
//
//         input.addEventListener('blur', function () {
//             td.textContent = this.value;
//             td.addEventListener('click', changeText);
//         });
//     });
// }


// 478 Удаление и редактирование / Одновременное редактирование и удаление элементов
//
// Пусть у нас есть некоторый набор абзацев:
//
// <div id="parent">
// 	<p>text1</p>
// 	<p>text2</p>
// 	<p>text3</p>
// </div>
// Давайте для этих абзацев сделаем так, чтобы можно было редактировать текст каждого абзаца и
// при этом в конце каждого абзаца стояла ссылка на удаление.
//
// При реализации описанной задачи нас ждет некоторая проблема.
//
// Для того, чтобы понять суть проблемы, давайте посмотрим на HTML код, который получится,
// когда в конец каждого абзаца будут добавлены ссылки на удаление:
//
// <div id="parent">
// 	<p>text1<a href="">remove</a></p>
// 	<p>text2<a href="">remove</a></p>
// 	<p>text3<a href="">remove</a></p>
// </div>
// Представим теперь, что по клику на любой абзац в нем будет появляться инпут для редактирования текста.
// В этом случае в инпут будет попадать весь текст абзаца - вместе со ссылкой на удаление!
//
// Это, конечно же, не правильно.
//
// Более удачным решение будет обернуть тексты абзацев в теги span, вот так:
//
// <div id="parent">
// 	<p><span>text1</span><a href="">remove</a></p>
// 	<p><span>text2</span><a href="">remove</a></p>
// 	<p><span>text3</span><a href="">remove</a></p>
// </div>
// Для такого кода можно просто навесить событие для редактирования не на сам абзац, а на span с текстом.
// В этом случае инпут для редактирования будет появляться в теге span, и наша ссылка для удаления останется нетронутой.


// 1 Дан следующий HTML код:
//
// <div id="parent">
// 	<p><span>text1</span></p>
// 	<p><span>text2</span></p>
// 	<p><span>text3</span></p>
// </div>
// Добавьте ссылку на удаление в конец каждого абзаца.
//
// Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.
//
// let paragraphs = document.querySelectorAll('#parent p');
//
// for (let paragraph of paragraphs) {
//     changeText(paragraph);
//     deleteElement(paragraph);
// }
//
// function changeText(paragraph) {
//     let span = paragraph.querySelector('span');
//
//     span.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = this.textContent;
//         this.textContent = '';
//         this.append(input);
//
//         this.removeEventListener('click', func);
//
//         input.addEventListener('blur', function () {
//             span.textContent = this.value;
//             span.addEventListener('click', func);
//         });
//     });
// }
//
// function deleteElement(paragraph) {
//     let linkForRemove = document.createElement('a');
//     linkForRemove.href = '';
//     linkForRemove.textContent = ' remove';
//     paragraph.append(linkForRemove);
//
//     linkForRemove.addEventListener('click', function (event) {
//         event.preventDefault();
//         paragraph.remove();
//     });
// }


// 2 Пусть теперь изначально тегов span нет:
//
// <div id="parent">
// 	<p>text1</p>
// 	<p>text2</p>
// 	<p>text3</p>
// </div>
// Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования,
// а затем добавьте в конец каждого абзаца ссылку на удаление.
//
// let paragraphs = document.querySelectorAll('p');
//
// for (let paragraph of paragraphs) {
//     let span = createSpan(paragraph);
//     changeText(span);
//     deleteElement(paragraph);
// }
//
// function createSpan(paragraph) {
//     let span = document.createElement('span');
//     span.textContent = paragraph.textContent;
//     paragraph.textContent = '';
//     paragraph.prepend(span);
//
//     return span;
// }
//
// function changeText(span) {
//     span.addEventListener('click', function func() {
//         let input = document.createElement('input');
//         input.value = this.textContent;
//         this.textContent = '';
//         this.prepend(input);
//
//         this.removeEventListener('click', func);
//
//         input.addEventListener('blur', function () {
//             span.textContent = this.value;
//             span.addEventListener('click', func);
//         });
//     });
// }
//
// function deleteElement(paragraph) {
//     let linkForRemove = document.createElement('a');
//     linkForRemove.href = '';
//     linkForRemove.textContent = ' remove';
//     paragraph.append(linkForRemove);
//
//     linkForRemove.addEventListener('click', function (event) {
//         event.preventDefault();
//        paragraph.remove();
//     });
// }


// 479 Стилизация элементов / Стилизация элементов на JavaScript
