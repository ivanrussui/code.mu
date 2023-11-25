// 23_Search_383-390
// Поиск


// 383 Нахождение потомков элементов / Нахождение потомков элементов в JavaScript
//
// Теория

// Свойство firstElementChild
// Свойство firstElementChild содержит первый дочерний элемент. Дочерними элементами считаются все теги,
// которые непосредственно расположены внутри блока. Если у элемента нет дочерних элементов - возвращается null.
//
// Синтаксис
// элемент.firstElementChild;
// Пример
// Получим содержимое первого потомка элемента:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// let parent = document.querySelector('#parent');
// let text = parent.firstElementChild.textContent;
//
// console.log(text);
// Результат выполнения кода:
//
// '1'
// Пример
// А теперь у элемента нет дочерних элементов и поэтому выведется null:
//
// <div id="parent"></div>
// let parent = document.querySelector('#parent');
// console.log(parent.firstElementChild);
// Результат выполнения кода:
//
// null


// Свойство lastElementChild
// Свойство lastElementChild хранит в себе последний дочерний элемент. Дочерними элементами считаются все теги,
// которые непосредственно расположены внутри блока. Если у элемента нет дочерних элементов - возвращается null.
//
// Синтаксис
// элемент.lastElementChild;
// Пример
// Получим содержимое последнего потомка элемента:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// let parent = document.querySelector('#parent');
// let text = parent.lastElementChild.textContent;
//
// console.log(text);
// Результат выполнения кода:
//
// '2'
// Пример
// А теперь у элемента нет дочерних элементов и поэтому выведется null:
//
// <div id="parent"></div>
// let parent = document.querySelector('#parent');
// console.log(parent.lastElementChild);
// Результат выполнения кода:
//
// null


// Свойство children
// Свойство children хранит в себе псевдомассив дочерних элементов. Дочерними элементами считаются все теги,
// которые непосредственно расположены внутри блока.
//
// Синтаксис
// элемент.children;
// Пример
// Давайте переберем в цикле всех потомков элемента и выведем их содержимое:
//
// <div id="parent">
// 	<p>1</p>
// 	<p>2</p>
// 	<p>3</p>
// 	<p>4</p>
// 	<p>5</p>
// </div>
// let parent = document.querySelector('#parent');
// let elems = parent.children;
//
// for (let elem of elems) {
// 	console.log(elem.textContent);
// }


// 1 Дан элемент #elem:
//
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите первого потомка этого элемента и сделайте его текст красного цвета.
//
// let elem = document.querySelector('#elem');
//
// elem.firstElementChild.style.color = 'red';


// 2 Дан элемент #elem:
//
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
//
// let elem = document.querySelector('#elem');
//
// elem.lastElementChild.style.color = 'red';


// 3 Дан элемент #elem:
//
// <ul id="elem">
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
//
// let elem = document.querySelector('#elem');
// let elems = elem.children;
//
// for (let el of elems) {
//     el.textContent += '!';
// }


// 384 Нахождение родителей элементов / Нахождение родителей элементов в JavaScript
//
// Теория

// Свойство parentElement
// Свойство parentElement содержит родительский элемент.
//
// Синтаксис
// элемент.parentElement;
// Пример
// Давайте получим родителя элемента #elem и выведем на экран его id:
//
// <div id="parent">
// 	<p id="elem"></p>
// </div>
// let elem = document.querySelector('#elem');
// let id = elem.parentElement.id;
//
// console.log(id);
// Результат выполнения кода:
//
// 'parent'


// 1 Дан элемент #elem:
//
// <div>
// 	<ul>
// 		<li>text</li>
// 		<li>text</li>
// 		<li id="elem">text</li>
// 		<li>text</li>
// 		<li>text</li>
// 	</ul>
// </div>
// Найдите его родителя и задайте ему красную границу.
//
// let elem = document.querySelector('#elem');
// elem.parentElement.style.border = '3px solid red';


// 385 Поиск всех родителей элементов / Поиск всех родителей элементов в JavaScript
//
// Теория

// Метод closest
// Метод closest ищет ближайший родительский элемент, подходящий под указанный CSS селектор,
// при этом сам элемент тоже включается в поиск.
//
// Синтаксис
// элемент.closest('селектор');
// Пример
// Давайте найдем среди родителей элемента элемент с классом www:
//
// <div class="www" id="parent2">
// 	<div class="ggg" id="parent1">
// 		<p class="zzz" id="child"></p>
// 	</div>
// </div>
// let elem = document.querySelector('#child');
// let parent = elem.closest('.www');
//
// console.log(parent.id);
// Результат выполнения кода:
//
// 'parent2'
// Пример
// Давайте найдем среди родителей элемента элемент с классом www. В результате мы получим ссылку на сам элемент,
// так как он сам имеет этот класс:
//
// <div class="www" id="parent2">
// 	<div class="www" id="parent1">
// 		<p class="www" id="child"></p>
// 	</div>
// </div>
// let elem = document.querySelector('#child');
// let parent = elem.closest('.www');
// console.log(parent.id);
// Результат выполнения кода:
//
// 'child'


// 1 Дан элемент:
//
// <header>
// 	<div>
// 		<p>
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>
// Найдите ближайшего родителя этого элемента, являющегося тегом div.
//
// let elem = document.querySelector('#elem');
// let parent = elem.closest('div');
//
// console.log(parent);


// 2 Дан элемент:
//
// <header>
// 	<div class="www">
// 		<p class="www">
// 			<span id="elem"></span>
// 		</p>
// 	</div>
// </header>
// Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.
//
// let elem = document.querySelector('#elem');
// console.log(elem.closest('.www'));


// 386 Поиск соседей элементов / Поиск соседей элементов в JavaScript
//
// Теория

// Свойство previousElementSibling
// Свойство previousElementSibling содержит предыдущий элемент, находящийся в этом же родителе.
// Если такого элемента нет - возвращается null.
//
// Синтаксис
// элемент.previousElementSibling;
// Пример
// Дан элемент #elem. Давайте выведем текст его соседа сверху:
//
// <p>sibling</p>
// <p id="elem">elem</p>
// let elem = document.querySelector('#elem');
// let text = elem.previousElementSibling.textContent;
//
// console.log(text);
// Результат выполнения кода:
//
// 'sibling'
// Пример
// Если соседа сверху нет или он расположен не в родителе нашего элемента, также возвращается null:
//
// <p>sibling</p>
// <div>
// 	<p id="elem">elem</p>
// </div>
// let elem = document.querySelector('#elem');
// console.log(elem.previousElementSibling);
// Результат выполнения кода:
//
// null


// Свойство nextElementSibling
// Свойство nextElementSibling содержит следующий элемент, находящийся в этом же родителе.
// Если такого элемента нет - возвращается null.
//
// Синтаксис
// элемент.nextElementSibling;
// Пример
// Дан элемент #elem. Давайте выведем текст его соседа снизу:
//
// <p id="elem">elem</p>
// <p>sibling</p>
// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling.textContent;
//
// console.log(text);
// Результат выполнения кода:
//
// 'sibling'
// Пример
// Если соседа снизу нет или он расположен не в родителе нашего элемента, также возвращается null:
//
// <div>
// 	<p id="elem">elem</p>
// </div>
// <p>sibling</p>
// let elem = document.querySelector('#elem');
// console.log(elem.nextElementSibling);
// Результат выполнения кода:
//
// null


// 1 Дан элемент #elem:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа сверху и добавьте ему в конец текст '!'.
//
// let elem = document.querySelector('#elem');
// elem.previousElementSibling.textContent += '!';


// 2 Дан элемент #elem:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа снизу и добавьте ему в конец текст '!'.
//
// let elem = document.querySelector('#elem');
// elem.nextElementSibling.textContent += '!';


// 3 Дан элемент #elem:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li id="elem">text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
//
// let elem = document.querySelector('#elem');
// elem.nextElementSibling.nextElementSibling.textContent += '!';


// 4 Дан элемент #elem:
//
// <ul>
// 	<li>text1</li>
// 	<li>text2</li>
// 	<li id="elem">text3</li>
// 	<li>text4</li>
// 	<li>text5</li>
// </ul>
// Поменяйте местами текст его соседа сверху и текст его соседа снизу.
//
// let elem = document.querySelector('#elem');
// let previousText = elem.previousElementSibling.textContent;
// let nextText = elem.nextElementSibling.textContent;
//
// elem.previousElementSibling.textContent = nextText;
// elem.nextElementSibling.textContent = previousText;


// 387 Поиск элемента по id / Поиск элемента по id в JavaScript
//
// Теория

// Метод getElementById
// Метод getElementById позволяет получить элемент страницы по его атрибуту id. С полученным элементом
// можно будет производить различные манипуляции: менять его текст, атрибуты, CSS стили и так далее.
//
// Синтаксис
// document.getElementById(id элемента);
// Пример
// Давайте получим инпут по его id и поменяем ему содержимое атрибута value:
//
// <input id="elem" value="???">
// let elem = document.getElementById('elem');
// elem.value = '!!!';
// Результат выполнения кода:
//
// <input id="elem" value="!!!">


// 1 Дан элемент #elem:
//
// <div id="elem"></div>
// Получите этот элемент с помощью метода getElementById и установите ему какой-нибудь текст.
//
// let elem = document.getElementById('elem');
// elem.textContent = 'какой-нибудь текст';


// 388 Поиск элемента по имени тега / Поиск элемента по имени тега в JavaScript
//
// Теория

// Метод getElementsByTagName
// Метод getElementsByTagName позволяет получить элементы страницы по имени тега.
// С полученными элементами можно производить различные манипуляции: менять их текст, атрибуты, CSS стили и так далее.
//
// Синтаксис
// document.getElementsByTagName(имя тега);
// Пример
// Давайте получим все абзацы и изменим им текст с помощью свойства innerHTML:
//
// <p>elem 1</p>
// <p>elem 2</p>
// <p>elem 3</p>
// let elems = document.getElementsByTagName('p');
//
// for (let elem of elems) {
// 	elem.innerHTML = '!!!';
// }
// Результат выполнения кода:
//
// <p>!!!</p>
// <p>!!!</p>
// <p>!!!</p>


// 1 Дан список:
//
// <ul>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// 	<li>text</li>
// </ul>
// Получите все теги li по имени тега и сделайте их текст красного цвета.
//
// let elems = document.getElementsByTagName('li');
//
// for (let elem of elems) {
//     elem.style.color = 'red';
// }


// 389 Поиск элемента по имени класса / Поиск элемента по имени класса в JavaScript
//
// Теория

// Метод getElementsByClassName
// Метод getElementsByClassName позволяет получить элементы страницы по их классу, заданному в атрибуте class.
// С полученными элементами можно будет производить различные манипуляции: менять их текст, атрибуты, CSS стили и так далее.
//
// Синтаксис
// document.getElementsByClassName(имя класса);
// Пример
// Давайте получим все элементы с классом www и изменим им текст с помощью свойства innerHTML:
//
// <p class="www">elem 1</p>
// <p class="www">elem 2</p>
// <p class="www">elem 3</p>
// let elems = document.getElementsByClassName('www');
//
// for (let elem of elems) {
// 	elem.innerHTML = '!!!';
// }
// Результат выполнения кода:
//
// <p class="www">!!!</p>
// <p class="www">!!!</p>
// <p class="www">!!!</p>


// 1 Даны элементы:
//
// <p class="www">elem 1</p>
// <p class="www">elem 2</p>
// <p class="www">elem 3</p>
// Получите эти элементы по имени класса и сделайте их текст красного цвета.
//
// let elems = document.getElementsByClassName('www');
//
// for (let elem of elems) {
//     elem.style.color = 'red';
// }


// 390 Поиск внутри элемента / Поиск элементов внутри другого элемента в JavaScript
//
// Пусть у нас есть некоторый элемент родитель, а внутри него другие элементы:
//
// <div id="parent">
// 	<div class="child">text</div>
// 	<div class="child">text</div>
// 	<div class="child">text</div>
// </div>
// Пусть ссылка на родитель уже получена в переменную:
//
// let parent = document.querySelector('#parent');
// В таком случае, при необходимости мы можем выполнить поиск по селектору внутри этого родителя, а не по всему
// документу. Для этого метод для поиска нужно применить не к document, а к переменной, содержащей нашего родителя.
//
// Давайте для примера найдем внутри нашего родителя элементы с классом child:
//
// let elems = parent.querySelectorAll('.child');


// 1 Дан элемент #parent:
//
// <div id="parent">
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="www">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// 	<p class="ggg">text</p>
// </div>
// let parent = document.querySelector('#parent');
// Найдите внутри родителя элементы с классом www и запишите их в переменную elems1.
// Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.
//
// let elems1 = parent.querySelectorAll('.www');
// let elems2 = parent.querySelectorAll('.ggg');
//
// console.log(elems1);
// console.log(elems2);

