// 30_Manipulating_Elements_453-463
// Манипулирование элементами


// Метод appendChild
// Метод appendChild позволяет вставить в конец какого-либо другой элемент.
// Чаще всего используется после создания элемента с помощью createElement.
//
// Синтаксис
// родитель.appendChild(элемент);
// Пример
// Давайте создадим абзац, установим ему текст и поместим на страницу в конец блока #parent:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// let parent = document.querySelector('#parent');
//
// let p = document.createElement('p');
// p.textContent = '!';
//
// parent.appendChild(p);
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// 	<p>!</p>
// </div>
// Пример
// Дан ul. Давайте разместим в нем 9 тегов li, при этом их текстом сделаем порядковые номера:
//
// <ul id="parent"></ul>
// let parent = document.querySelector('#parent');
//
// for (let i = 1; i <= 9; i++) {
// 	let li = document.createElement('li');
// 	li.textContent = i;
// 	parent.appendChild(li);
// }
// Результат выполнения кода:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// 	<li>4</li>
// 	<li>5</li>
// 	<li>6</li>
// 	<li>7</li>
// 	<li>8</li>
// 	<li>9</li>
// </ul>
// Пример
// Давайте заполним таблицу tr-ками и td-шками:
//
// <table id="table"></table>
// let parent = document.querySelector('#parent');
//
// for (let i = 1; i <= 3; i++) {
// 	let tr = document.createElement('tr'); // создаем tr-ку
//
// 	// Заполняем tr-ку td-шками:
// 	for (let j = 1; j <= 3; j++) {
// 		let td = document.createElement('td'); // создаем td-шку
// 		td.textContent = j; // пишем в нее текст
//
// 		tr.appendChild(td); // добавляем созданную td-шку в конец tr-ки
// 	}
//
// 	table.appendChild(tr); // добавляем созданную tr-ку в конец таблицы
// }
// Результат выполнения кода:
//
// <table id="table">
// 	<tr>
// 		<td>1</td>
// 		<td>2</td>
// 		<td>3</td>
// 	</tr>
// 	<tr>
// 		<td>1</td>
// 		<td>2</td>
// 		<td>3</td>
// 	</tr>
// 	<tr>
// 		<td>1</td>
// 		<td>2</td>
// 		<td>3</td>
// 	</tr>
// </table>


// Метод createElement
// Метод createElement позволяет создать новый элемент, передав в параметре имя тега.
// После создания с элементом можно работать как с обычным элементом, а также его можно добавить на страницу методами
// prepend, append, appendChild, insertBefore или insertAdjacentElement.
//
// Если записать результат работы createElement в переменную, то в этой переменной будет такой элемент, как будто бы
// мы получили его через querySelector или getElementById.
// Единственное отличие - наш элемент не будет размещен на странице. А так мы можем менять ему
// innerHTML, атрибуты, навешивать обработчики событий и в конце концов разместить его на странице.
//
// Синтаксис
// document.createElement('имя тега');
// Пример
// Давайте создадим абзац, установим ему текст и поместим на страницу в конец блока #parent:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// let parent = document.querySelector('#parent');
//
// let p = document.createElement('p');
// p.textContent = '!';
//
// parent.appendChild(p);
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// 	<p>!</p>
// </div>
// Пример
// Дан ul. Давайте разместим в нем 9 тегов li, при этом их текстом сделаем порядковые номера:
//
// <ul id="parent"></ul>
// let parent = document.querySelector('#parent');
//
// for (let i = 1; i <= 9; i++) {
// 	let li = document.createElement('li');
// 	li.textContent = i;
// 	parent.appendChild(li);
// }
// Результат выполнения кода:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// 	<li>4</li>
// 	<li>5</li>
// 	<li>6</li>
// 	<li>7</li>
// 	<li>8</li>
// 	<li>9</li>
// </ul>
// Пример
// Давайте при вставке элементов будем привязывать к ним обработчики событий:
//
// <ul id="parent"></ul>
// let parent = document.querySelector('#parent');
//
// for (let i = 1; i <= 9; i++) {
// 	let li = document.createElement('li');
// 	li.textContent = i;
//
// 	li.addEventListener('click', function() {
// 		alert(this.textContent);
// 	});
//
// 	parent.appendChild(li);
// };
// Результат выполнения кода:


// 453 Создание и вставка элементов / Создание и вставка элементов на JavaScript
//
// Сейчас мы с вами научимся создавать новые DOM элементы через JavaScript, а затем добавлять их на страницу. Для этого
// предназначен метод createElement. Параметром этого метода следует передавать имя тега, который должен быть создан.
//
// Если записать результат работы createElement в переменную, то в этой переменной будет такой элемент,
// как будто бы мы получили его через querySelector.
//
// Единственное отличие - наш элемент не будет размещен на странице. А так мы можем менять ему текст, атрибуты,
// навешивать обработчики событий и в конце концов разместить его на странице.
//
// Для размещения нового элемента на странице применяется метод appendChild.
// Этот метод следует применять к тому элементу, в который мы хотим поместить наш элемент.
// А параметром метода следует передавать наш новый элемент, созданный ранее через createElement.
//
// Посмотрим на практическом примере. Пусть у нас есть див, а в нем - несколько абзацев:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// Давайте создадим абзац, установим ему текст и поместим на страницу в конец блока #parent:
//
// let parent = document.querySelector('#parent');
//
// let p = document.createElement('p');
// p.textContent = '!';
//
// parent.appendChild(p);
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// 	<p>!</p>
// </div>


// 1 Дан ol:
//
// <ol id="elem"></ol>
// Вставьте ему в конец li с текстом 'item'.
//
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');
//
// li.textContent = 'item';
// elem.appendChild(li);


// 2 Дан ol и кнопка:
//
// <ol id="elem"></ol>
// <button id="button">click me</button>
// Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
//
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
//
// // если создание элемента снаружи обработчика, то только 1 раз добавляется
// // let li = document.createElement('li');
// // li.textContent = 'item';
//
// button.addEventListener('click', () => {
//     // если создание элемента внутри обработчика, то добавляется каждый раз
//     let li = document.createElement('li');
//     li.textContent = 'item';
//     elem.appendChild(li);
// });


// 454 Навешивание событий при вставке / Привязывание событий при вставке элементов
//
// Давайте теперь при вставке элементов будем привязывать к ним обработчики событий.
//
// Пусть, к примеру, у нас есть вот такой родительский элемент:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// Давайте добавим в конец этого родителя еще один абзац, установив ему обработчик клика:
//
// let parent = document.querySelector('#parent');
//
// let p = document.createElement('p');
// p.textContent = '!';
//
// p.addEventListener('click', function() {
// 	console.log(this.textContent); // по клику выведем текст абзаца
// });
//
// parent.appendChild(p);


// 1 Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li.
// Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
//
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
//
// button.addEventListener('click', function () {
//     let li = document.createElement('li');
//     elem.appendChild(li);
// });
//
// elem.addEventListener('click', event => event.target.textContent += '!');


// 455 Создание элементов в цикле / Создание элементов в цикле на JavaScript
//
// В предыдущих уроках мы с вами создавали по одному новому элементу.
// Давайте теперь сделаем так, чтобы новые элементы создавались в цикле.
//
// Пусть для примера у нас есть вот такой див-родитель:
//
// <div id="parent"></div>
// Давайте запустим цикл, который добавит в конец нашего дива 9 новых абзацев:
//
// let parent = document.querySelector('#parent');
//
// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = '!';
//
// 	parent.appendChild(p);
// }


// 1 Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li.
// Сделайте так, чтобы текстом каждой li был ее порядковый номер.
//
// let ul = document.querySelector('ul');
//
// for (let i = 1; i <= 10; i++) {
//     let li = document.createElement('li');
//     li.textContent = i.toString();
//     ul.appendChild(li);
// }


// 456 Навешивание обработчиков в цикле / Навешивание обработчиков в цикле на JavaScript
//
// В предыдущем уроке мы с вами научились создавать новые элементы в цикле.
// Давайте теперь будем навешивать обработчики событий при создании новых элементов.
//
// Пусть у нас опять есть вот такой див-родитель:
//
// <div id="parent"></div>
// Запустим цикл, который добавит в конец нашего дива 9 новых абзацев, навесив на них обработчик клика:
//
// let parent = document.querySelector('#parent');
//
// for (let i = 1; i <= 9; i++) {
// 	let p = document.createElement('p');
// 	p.textContent = '!';
//
// 	// Навешиваем обработчик клика:
// 	p.addEventListener('click', function() {
// 		console.log(this.textContent);
// 	});
//
// 	parent.appendChild(p);
// }


// 1 Дан див. Запустите цикл, который добавит в наш див 5 инпутов. Пусть дан также абзац.
// Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
//
// let parent = document.querySelector('#parent');
// let paragraph = document.querySelector('p');
//
// for (let i = 1; i <= 5; i++) {
//     let input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     parent.appendChild(input);
//
//     input.addEventListener('blur', function () {
//         paragraph.textContent += this.value;
//     });
// }


// 457 Удаление элементов / Удаление элементов на JavaScript
//
// Давайте теперь научимся удалять элементы. Для этого нужно использовать метод remove.
// Посмотрим на примере, как это делается. Пусть у нас есть абзацы:
//
// <p>elem 1</p>
// <p>elem 2</p>
// <p>elem 3</p>
// <p>elem 4</p>
// <p>elem 5</p>
// Давайте сделаем так, чтобы любой абзац удалялся по клику на нем:
//
// let elems = document.querySelectorAll('p');
//
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		elem.remove();
// 	});
// }


// 1 Дан следующий код:
//
// <ul>
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
// Сделайте так, чтобы любая li удалялась по клику на нее.

// решение через получение элементов
// let lis = document.querySelectorAll('li');
//
// for (let li of lis) {
//     li.addEventListener('click', () => li.remove());
// }

// решение через родителя, объект событие и остановка всплытия
// let ul = document.querySelector('ul');
//
// ul.addEventListener('click', function (event) {
//     event.target.remove();
//     event.stopPropagation();
// });


// 2 Дан следующий код:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>
//
// <input type="submit" id="button">
// Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
//
// let parent= document.querySelector('#parent');
// let button= document.querySelector('#button');
//
// button.addEventListener('click', () => parent.lastElementChild.remove());


// 458  Вставка с краю / Вставка элементов в начало или в конец на JavaScript
//
// Теория


// Метод append
// Метод append позволяет вставить в конец какого-либо элемента другой элемент.
// Параметром метод принимает элемент, как правило созданный через createElement, либо строку.
// Можно добавить сразу несколько элементов или строк, перечислив их через запятую.
//
// Синтаксис
// родитель.append(элемент или строка);
// Пример
// Давайте создадим абзац, установим ему текст и поместим на страницу в конец блока #parent:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// let parent = document.querySelector('#parent');
//
// let p = document.createElement('p');
// p.textContent = '!';
//
// parent.append(p);
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// 	<p>!</p>
// </div>
// Пример
// Поместим сразу несколько абзацев в конец блока #parent:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// let parent = document.querySelector('#parent');
//
// let p1 = document.createElement('p');
// p1.textContent = 'a';
//
// let p2 = document.createElement('p');
// p2.textContent = 'b';
//
// parent.append(p1, p2);
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// 	<p>a</p>
// 	<p>b</p>
// </div>
// Пример
// Давайте в качестве параметра метода используем строку:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// let parent = document.querySelector('#parent');
// parent.append('!');
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// 	!
// </div>
// Пример
// Дан ul. Давайте разместим в нем 9 тегов li, при этом их текстом сделаем порядковые номера:
//
// <ul id="parent"></ul>
// let parent = document.querySelector('#parent');
//
// for (let i = 1; i <= 9; i++) {
// 	let li = document.createElement('li');
// 	li.textContent = i;
// 	parent.append(li);
// }
// Результат выполнения кода:
//
// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// 	<li>4</li>
// 	<li>5</li>
// 	<li>6</li>
// 	<li>7</li>
// 	<li>8</li>
// 	<li>9</li>
// </ul>
// Пример
// Давайте заполним таблицу tr-ками и td-шками:
//
// <table id="table"></table>
// let parent = document.querySelector('#table');
//
// for (let i = 1; i <= 3; i++) {
// 	let tr = document.createElement('tr'); // создаем tr-ку
//
// 	// Заполняем tr-ку td-шками:
// 	for (let j = 1; j <= 3; j++) {
// 		let td = document.createElement('td'); // создаем td-шку
// 		td.textContent = j; // пишем в нее текст
//
// 		tr.append(td); // добавляем созданную td-шку в конец tr-ки
// 	}
//
// 	table.append(tr); // добавляем созданную tr-ку в конец таблицы
// }
// Результат выполнения кода:
//
// <table id="table">
// 	<tr>
// 		<td>1</td>
// 		<td>2</td>
// 		<td>3</td>
// 	</tr>
// 	<tr>
// 		<td>1</td>
// 		<td>2</td>
// 		<td>3</td>
// 	</tr>
// 	<tr>
// 		<td>1</td>
// 		<td>2</td>
// 		<td>3</td>
// 	</tr>
// </table>


// Метод prepend
// Метод prepend позволяет вставить в начало какого-либо элемента другой элемент.
// Параметром метод принимает элемент, как правило созданный через createElement, либо строку.
// Можно добавить сразу несколько элементов или строк, перечислив их через запятую.
//
// Синтаксис
// родитель.prepend(элемент или строка);
// Пример
// Давайте создадим абзац, установим ему текст и поместим на страницу в начало блока #parent:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// let parent = document.querySelector('#parent');
//
// let p = document.createElement('p');
// p.textContent = '!';
//
// parent.prepend(p);
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>!</p>
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// Пример
// Поместим сразу несколько абзацев в начало блока #parent:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// let parent = document.querySelector('#parent');
//
// let p1 = document.createElement('p');
// p1.textContent = 'a';
//
// let p2 = document.createElement('p');
// p2.textContent = 'b';
//
// parent.prepend(p1, p2);
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>b</p>
// 	<p>a</p>
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// Пример
// Давайте в качестве параметра метода используем строку:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>
// let parent = document.querySelector('#parent');
// parent.prepend('!');
// Результат выполнения кода:
//
// <div id="parent">
// 	!
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// </div>


// 1 Дан ul:
//
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
//
// let elem = document.querySelector('#elem');
//
// let start = document.createElement('li');
// let finish = document.createElement('li');
//
// start.textContent = 'start';
// finish.textContent = 'finish';
//
// elem.prepend(start);
// elem.append(finish);


// 459 Вставка перед / Вставка элементов перед элементами на JavaScript
//
// Теория

// Метод insertBefore
// Метод insertBefore позволяет вставить элемент перед другим элементом. Чаще всего используется после создания
// элемента с помощью createElement. Метод применяется к родителю того элемента, перед которым произойдет вставка.
//
// Синтаксис
// родитель.insertBefore(элемент, перед кем вставить);
// Пример
// Создадим абзац и поместим его перед вторым абзацем:
//
// <div id="parent">
// 	<p>elem 1</p>
// 	<p id="before">elem 2</p>
// 	<p>elem 3</p>
// </div>
// let parent = document.querySelector('#parent');
// let before = document.querySelector('#before');
//
// let p = document.createElement('p');
// p.textContent = '!';
//
// parent.insertBefore(p, before);
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>elem 1</p>
// 	<p>!</p>
// 	<p>elem 2</p>
// 	<p>elem 3</p>
// </div>
// Пример
// Добавим абзац в начало элемента #parent. Для этого вставим наш абзац перед первым потомком #parent.
// Этого потомка можно найти с помощью firstElementChild:
//
// <div id="parent">
// 	<p>elem 1</p>
// 	<p>elem 2</p>
// </div>
// let parent = document.querySelector('#parent');
//
// let p = document.createElement('p');
// p.textContent = '!';
//
// parent.insertBefore(p, parent.firstElementChild);
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>!</p>
// 	<p>elem 1</p>
// 	<p>elem 2</p>
// </div>
// Пример
// При передаче вторым параметром null метод insertBefore срабатывает как appendChild.
// В то же время, если в элементе нет дочерних элементов, firstElementChild возвращает null.
// Следовательно, добавлять в начало элемента можно даже тогда, когда в нем нет дочерних элементов:
//
// <div id="parent"></div>
// let parent = document.querySelector('#parent');
//
// let p = document.createElement('p');
// p.textContent = '!';
//
// parent.insertBefore(p, parent.firstChild);
// Результат выполнения кода:
//
// <div id="parent">
// 	<p>!</p>
// </div>


// 1 Дан элемент #elem:
//
// <ul id="parent">
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Вставьте перед этим элементом элемент с текстом 'new'.
//
// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
//
// let li = document.createElement('li');
// li.textContent = 'new';
//
// parent.insertBefore(li, elem);


// 2 Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому,
// что в конец его текста будет добавляться '!'.
//
// li.addEventListener('click', function () {
//     this.textContent += '!';
// })


// 460 Смежная вставка / Смежная вставка элементов на JavaScript
//
// Теория

// Метод insertAdjacentElement
// Метод insertAdjacentElement позволяет вставить элемент в любое место страницы. Чаще всего используется после
// создания элемента с помощью createElement. Код вставляется относительно опорного элемента. Можно сделать вставку
// перед опорным элементом (способ вставки beforeBegin), после него (способ вставки afterEnd),
// а также в начало (способ вставки afterBegin) или в конец (способ вставки beforeEnd) опорного элемента.
//
// Синтаксис
// опорный элемент.insertAdjacentElement(способ вставки, код для вставки);
// Пример . Способ beforeBegin
// Пусть опорный элемент - это элемент #target. Вставим перед ним новый абзац:
//
// <div id="target">
// 	<p>elem</p>
// </div>
// let p = document.createElement('p');
// p.textContent = '!';
//
// let target = document.querySelector('#target');
// target.insertAdjacentElement('beforeBegin', p);
// Результат выполнения кода:
//
// <p>!</p>
// <div id="target">
// 	<p>elem</p>
// </div>
// Пример . Способ afterEnd
// А теперь вставим новый абзац после опорного элемента:
//
// <div id="target">
// 	<p>elem</p>
// </div>
// let p = document.createElement('p');
// p.textContent = '!';
//
// let target = document.querySelector('#target');
// target.insertAdjacentElement('afterEnd', p);
// Результат выполнения кода:
//
// <div id="target">
// 	<p>elem</p>
// </div>
// <p>!</p>
// Пример . Способ afterBegin
// Вставим новый абзац в начало опорного элемента:
//
// <div id="target">
// 	<p>elem</p>
// </div>
// let p = document.createElement('p');
// p.textContent = '!';
//
// let target = document.querySelector('#target');
// target.insertAdjacentElement('afterBegin', p);
// Результат выполнения кода:
//
// <div id="target">
// 	<p>!</p>
// 	<p>elem</p>
// </div>
// Пример . Способ beforeEnd
// Вставим новый абзац в конец опорного элемента:
//
// <div id="target">
// 	<p>elem</p>
// </div>
// let p = document.createElement('p');
// p.textContent = '!';
//
// let target = document.querySelector('#target');
// target.insertAdjacentElement('beforeEnd', p);
// Результат выполнения кода:
//
// <div id="target">
// 	<p>elem</p>
// 	<p>!</p>
// </div>


// 1 Дан элемент:
//
// <div id="elem" style="border: 1px solid red;">
// 	<p>text</p>
// 	<p>text</p>
// 	<p>text</p>
// </div>
// Вставьте перед ним абзац с текстом '!!!'.
//
// let elem = document.querySelector('#elem');
//
// let p = document.createElement('p');
// p.textContent = '!!!';
//
// elem.insertAdjacentElement('beforeBegin', p);


// 2 Дан элемент:
//
// <div id="elem" style="border: 1px solid red;">
// 	<p>text</p>
// 	<p>text</p>
// 	<p>text</p>
// </div>
// Вставьте после него абзац с текстом '!!!'.
//
// elem.insertAdjacentElement('afterEnd', p);


// 3 Дан элемент:
//
// <div id="elem" style="border: 1px solid red;">
// 	<p>text</p>
// 	<p>text</p>
// 	<p>text</p>
// </div>
// Вставьте ему в начало абзац с текстом '!!!'.
//
// elem.insertAdjacentElement('afterBegin', p);


// 4 Дан элемент:
//
// <div id="elem" style="border: 1px solid red;">
// 	<p>text</p>
// 	<p>text</p>
// 	<p>text</p>
// </div>
// Вставьте ему в конец абзац с текстом '!!!'.
//
// elem.insertAdjacentElement('beforeEnd', p);


// 461 Смежная вставка тегов / Смежная вставка тегов на JavaScript
//
// Теория

// Метод insertAdjacentHTML
// Метод insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы. Код вставляется
// относительно опорного элемента. Можно сделать вставку перед опорным элементом (способ вставки 'beforeBegin'),
// после него (способ вставки 'afterEnd'), а также в начало (способ вставки 'afterBegin')
// или в конец (способ вставки 'beforeEnd') опорного элемента.
//
// Синтаксис
// опорный элемент.insertAdjacentHTML(способ вставки, код для вставки);
// Пример . Способ beforeBegin
// Пусть опорный элемент - это элемент #target. Вставим перед ним новый абзац:
//
// <div id="target">
// 	<p>elem</p>
// </div>
// let target = document.querySelector('#target');
// target.insertAdjacentHTML('beforeBegin', '<p>!</p>');
// Результат выполнения кода:
//
// <p>!</p>
// <div id="target">
// 	<p>elem</p>
// </div>
// Пример . Способ afterEnd
// А теперь вставим новый абзац после опорного элемента:
//
// <div id="target">
// 	<p>elem</p>
// </div>
// let target = document.querySelector('#target');
// target.insertAdjacentHTML('afterEnd', '<p>!</p>');
// Результат выполнения кода:
//
// <div id="target">
// 	<p>elem</p>
// </div>
// <p>!</p>
// Пример . Способ afterBegin
// Вставим новый абзац в начало опорного элемента:
//
// <div id="target">
// 	<p>elem</p>
// </div>
// let target = document.querySelector('#target');
// target.insertAdjacentHTML('afterBegin', '<p>!</p>');
// Результат выполнения кода:
//
// <div id="target">
// 	<p>!</p>
// 	<p>elem</p>
// </div>
// Пример . Способ beforeEnd
// Вставим новый абзац в конец опорного элемента:
//
// <div id="target">
// 	<p>elem</p>
// </div>
// let target = document.querySelector('#target');
// target.insertAdjacentHTML('beforeEnd', '<p>!</p>');
// Результат выполнения кода:
//
// <div id="target">
// 	<p>elem</p>
// 	<p>!</p>
// </div>


// 1 Дан элемент:
//
// <div id="elem" style="border: 1px solid red;">
// 	<p>text</p>
// 	<p>text</p>
// 	<p>text</p>
// </div>
// Дан элемент. Вставьте перед ним следующий тег:
//
// <div class="www"><p>text</p><p>text</p><input></div>
//
// let elem = document.querySelector('#elem');
//
// elem.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');


// 461 Клонирование элементов / Клонирование элементов на JavaScript
//
// В данном уроке мы научимся получать копии элементов.
// С этими копиями можно будет работать, как с обычными элементами - изменять их и вставлять в нужное место страницы.
// Процесс получения копий элементов называется клонирование.
//
// Клонировать элемент можно с помощью метода cloneNode. В этот метод нужно передавать параметром true либо false.
// Если передан true, то элемент клонируется полностью, вместе со всем атрибутами и дочерними элементами,
// а если false - только сам элемент.
//
// Давайте посмотрим на примере. Пусть у нас есть вот такой код:
//
// <div id="parent">
// 	<div class="elem">
// 		<p>первый абзац</p>
// 		<p>второй абзац</p>
// 	</div>
// </div>
// Сделаем копию блока с классом elem и вставим его в конец блока #parent:
//
// let parent = document.querySelector('#parent');
// let elem = parent.querySelector('.elem');
//
// let clone = elem.cloneNode(true);
// parent.appendChild(clone);
// В результате получится следующее:
//
// <div id="parent">
// 	<div class="elem">
// 		<p>первый абзац</p>
// 		<p>второй абзац</p>
// 	</div>
// 	<div class="elem">
// 		<p>первый абзац</p>
// 		<p>второй абзац</p>
// 	</div>
// </div>


// 1 Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
//
// let input = document.querySelector('input');
// let button = document.querySelector('button');
//
// button.addEventListener('click', () => {
//     let clone = input.cloneNode(true);
//     input.insertAdjacentElement('afterEnd', clone);
// });


// 463 Проверка элементов / Проверка элементов в JavaScript
//
// Теория

// Метод matches
// Метод matches позволяет проверить, удовлетворяет ли элемент указанному CSS селектору.
//
// Синтаксис
// элемент.matches('селектор');
// Пример
// Проверим, является ли наш элемент абзацем с классом www:
//
// <p id="elem" class="www"></p>
// let elem = document.querySelector('#elem');
// console.log(elem.matches('p.www'));
// Результат выполнения кода:
//
// true


// Метод contains
// Метод contains позволяет проверить, содержит ли один элемент внутри себя другой. Параметром метода
// передается элемент, который будет проверяться на то, что он находится внутри элемента, к которому применился метод.
//
// Синтаксис
// родитель.contains(элемент);
// Пример
// Проверим, находится ли абзац #child в блоке #parent:
//
// <div id="parent">
// 	<p id="child"></p>
// </div>
// let parent = document.querySelector('#parent');
// let child = document.querySelector('#child');
//
// let contains = parent.contains(child);
// console.log(contains);
// Результат выполнения кода:
//
// true
// Пример
// А теперь в родителе нет переданного элемента и поэтому метод возвращает false:
//
// <div id="parent"></div>
// <p id="child"></p>
// let parent = document.querySelector('#parent');
// let child = document.querySelector('#child');
//
// let contains = parent.contains(child);
// console.log(contains);
// Результат выполнения кода:
//
// false
// Пример
// Можно передать тот же элемент, на котором метод был вызван, в этом случае метод также вернет true:
//
// <div id="parent"></div>
// let parent = document.querySelector('#parent');
// let contains = parent.contains(parent);
//
// console.log(contains);
// Результат выполнения кода:
//
// true


// 1 Дан элемент:
//
// <div id="elem" class="www"></div>
// Проверьте, является ли этот элемент элементом с классом www.
//
// let elem = document.querySelector('#elem');
// console.log(elem.matches('.www'));


// 2 Дан элемент. Проверьте, является ли этот элемент абзацем.
//
// console.log(elem.matches('p'));


// 3 Даны две переменные elem1 и elem2, содержащие два элемента:
//
// <div id="elem1">
// 	<p id="elem2"></p>
// </div>
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// Проверьте, является ли элемент из elem2 потомком элемента из elem1.
//
// console.log(elem1.contains(elem2));

