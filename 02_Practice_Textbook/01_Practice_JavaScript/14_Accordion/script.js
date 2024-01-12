// 01_Practice_JavaScript
// Практика JavaScript


// 14 Аккордеон / Аккордеон на JavaScript

// Давайте теперь реализуем аккордеон. Он похож на вкладки, перевернутые на бок.
// При этом в аккордеоне можно закрыть текущую вкладку, если нажать на активную ссылку.
//
// Вот образец:

// Изучите также верстку, на которой мы будем решать задачу:
//
// <div id="parent">
// 	<div class="tab active">
// 		<div class="link">
// 			<a href="#" >вкладка 1</a>
// 		</div>
// 		<div class="text">
// 			текст вкладки 1
// 		</div>
// 	</div>
// 	<div class="tab">
// 		<div class="link">
// 			<a href="#" >вкладка 2</a>
// 		</div>
// 		<div class="text">
// 			текст вкладки 2
// 		</div>
// 	</div>
// 	<div class="tab">
// 		<div class="link">
// 			<a href="#" >вкладка 3</a>
// 		</div>
// 		<div class="text">
// 			текст вкладки 3
// 		</div>
// 	</div>
// </div>
// #parent {
// 	margin: 0 auto;
// 	width: 400px;
// }
// .tab {
// 	margin-bottom: 10px;
// }
//
// .tab .link a {
// 	display: block;
// 	padding: 10px;
// 	color: black;
// 	text-decoration: none;
// 	text-align: center;
// 	background: #f8f8f8;
// 	border: 1px solid gray;
// }
// .tab .link:hover a {
// 	background: #f2f2f2;
// }
//
// .tab:not(.active) .text {
// 	display: none;
// }
// .tab .text {
// 	border: 1px dashed gray;
// 	border-top: none;
//
// 	padding: 10px;
// 	height: 300px;
// }

// Обсуждение
// Технически HTML код аккордеона удобнее, чем код вкладок: в нем ссылки расположены непосредственно над спойлером,
// который они открывают и закрывают. Кроме того, класс active в нашей верстки дается общему родителю ссылки и спойлера.
//
// Это значит, что при нажатии на ссылку нужно просто деактивировать старую вкладку и активировать новую.
// Чтобы деактивировать старую вкладку нужно найти вкладку с классом active и удалить из нее этот класс.
//
// Чтобы активировать новую вкладку нужно по клику на ссылку найти вкладку-родителя этой ссылки и дать ей класс active.
// Технически такой поиск можно сделать так: просто найти ближайшего родителя ссылки, имеющего класс tab.

// 1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте аккордеон согласно описанному алгоритму.

let links = document.querySelectorAll('.link a');

// 1 вариант
// for (let link of links) {
//     link.addEventListener('click', function () {
//         let activeTab = document.querySelector('.tab.active');
//
//         let currentTab = this.closest('.tab'); // через closest
//         // let currentTab = this.parentElement.parentElement; // через parentElement
//
//         currentTab.classList.add('active');
//         activeTab && activeTab.classList.remove('active');
//     });
// }


// 2 вариант
links.forEach(link => {
    link.addEventListener('click', () => {
        let activeTab = document.querySelector('.tab.active');
        activeTab && activeTab.classList.remove('active');

        let currentTab = link.closest('.tab');
        currentTab !== activeTab && currentTab.classList.add('active');
    });
});
