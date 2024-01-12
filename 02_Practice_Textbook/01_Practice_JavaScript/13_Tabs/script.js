// 01_Practice_JavaScript
// Практика JavaScript


// 13 Вкладки / Вкладки на JavaScript

// Сейчас мы реализуем вкладки. Сразу посмотрите на образец того, что от вас требуется:

// Изучите также верстку, на которой мы будем решать задачу:
//
// <div id="parent">
// 	<div class="menu">
// 		<a href="" class="active">вкладка 1</a>
// 		<a href="">вкладка 2</a>
// 		<a href="">вкладка 3</a>
// 	</div>
// 	<div class="tabs">
// 		<div class="tab active">
// 			текст вкладки 1
// 		</div>
// 		<div class="tab">
// 			текст вкладки 2
// 		</div>
// 		<div class="tab">
// 			текст вкладки 3
// 		</div>
// 	</div>
// </div>
// #parent {
// 	margin: 0 auto;
// 	width: 400px;
// }
//
// .menu a {
// 	margin-right: 5px;
// 	display: inline-block;
// 	padding: 10px;
// 	color: black;
// 	text-decoration: none;
// 	border: 1px solid gray;
// }
// .menu a:hover {
// 	background: #f8f8f8;
// }
// .menu a.active {
// 	border-color: transparent;
// 	background: #f2f2f2;
// }
//
// .tabs .tab:not(.active) {
// 	display: none;
// }
// .tabs .tab {
// 	padding: 10px;
// 	background: #f2f2f2;
// 	height: 300px;
// }
// Обратите внимание на то, что активная ссылка и активная вкладка имеют класс active.

// Обсуждение
// Давайте теперь обсудим то, как решать эту задачу. Очевидно, что нужно как-то связать ссылки с соответствующими
// им вкладками. В данном уроке из теоретического учебника мы уже разбирали возможные варианты.
//
// В данном случае я предлагаю связать ссылки и вкладки просто по позиции:
// первая ссылка будет открывать первую вкладку, вторая ссылка - вторую вкладку и так далее.
//
// Общий алгоритм будет выглядеть так: по нажатию на кнопку мы должны найти ссылку с классом и убрать ей этот класс.
// Аналогичным образом мы должны найти вкладку с этим классом и тоже убрать ей этот класс.
//
// Затем мы должны взять ссылку, на которую был клик и активировать ее. Затем мы должны взять вкладку,
// которая имеет такой же номер, как и наша ссылка - и тоже активировать ее.

// 1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте вкладки согласно описанному алгоритму.

let links = document.querySelectorAll('a');
let tabs = document.querySelectorAll('.tab');

// 1 вариант

// for i
// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function (event) {
//         event.preventDefault();
//
//         sortThroughClasses(links);
//         sortThroughClasses(tabs);
//
//         this.classList.toggle('active'); // this
//         // links[i].classList.toggle('active'); // link[i]
//         tabs[i].classList.toggle('active');
//     });
// }

// forEach
// links.forEach((link, index) => {
//     link.addEventListener('click', event => {
//         event.preventDefault();
//
//         sortThroughClasses(links);
//         sortThroughClasses(tabs);
//
//         links[index].classList.toggle('active');
//         tabs[index].classList.toggle('active');
//     });
// });

// function sortThroughClasses(selector) {
//     selector.forEach(elem => elem.classList.contains('active') && elem.classList.toggle('active'));
// }


// 2 вариант
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', event => {
        event.preventDefault();

        let activeLink = document.querySelector('a.active');
        let activeTab = document.querySelector('.tab.active');

        activeLink.classList.remove('active');
        activeTab.classList.remove('active');

        links[i].classList.toggle('active');
        tabs[i].classList.toggle('active');
    });
}
