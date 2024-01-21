// 03_Checklist
// Чеклист


// 18 Постановка задачи / Чеклист на JavaScript

// В данном уроке мы реализуем чеклист. Чеклистом называется программа,
// которая позволяет сделать список планируемых дел, а затем по мере выполнения этих дел отмечать эти дела сделанными.
//
// Давайте сделаем так, чтобы дела можно было добавлять, удалять, редактировать и отмечать сделанными.
//
// Вот образец того, что у нас должно получится (для ввода нового дела введите текст в инпут и нажмите Enter,
// для редактирования выполните двойной клик по тексту дела):


// Начнем
// Итак, приступим к реализации описанной задачи.
//
// Для начала напишем HTML код для нашего чеклиста. Пусть новые задачи вводятся с помощью инпута и добавляются в список ul:
//
// <input id="input">
// <ul id="list"></ul>
// Сразу добавим CSS код, добавляющий некоторую красоту нашему чеклисту:
//
// body {
// 	text-align: center;
// }
// #input, #list {
// 	display: inline-block;
// }
// #list {
// 	padding: 0;
// 	list-style-type: none;
// }
// Как обычно, разобьем сложную задачу на простые этапы.
//
// В качестве первого этапа сделаем так, чтобы в инпут можно было ввести текст,
// нажать Enter - и в конец ul добавилась li с введенным текстом.
//
// Вот заготовка кода, реализующая описанное:
//
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
//
// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		// здесь будет код для добавление новой li в список
// 	}
// });


// 1 Допишите недостающую часть кода для решения описанной задачи.
// 2 Модифицируйте предыдущую задачу так, чтобы после нажатия клавиши Enter происходила очистка текста инпута.

// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
//
// input.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         let li = document.createElement('li');
//         li.textContent = this.value;
//         list.append(li);
//         this.value = '';
//     }
// });


// 19 Кнопки для удаления и завершения / Кнопки для удаления и завершения в чеклисте на JavaScript

// В предыдущем уроке после решения задач у вас должен был получится следующий код:
//
// <input id="input">
// <ul id="list"></ul>
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
//
// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
// 		li.textContent = this.value;
// 		list.appendChild(li);
//
// 		this.value = '';
// 	}
// });
// Давайте теперь добавим кнопочки 'удалить' и 'сделано'. Выполним эти кнопочки в виде тегов span.
// Также в теге span разместим и текст дела:
//
// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
//
// 		let task = document.createElement('span');
// 		task.textContent = this.value;
// 		li.appendChild(task);
//
// 		let remove = document.createElement('span');
// 		remove.textContent = 'удалить';
// 		li.appendChild(remove);
//
// 		let mark = document.createElement('span');
// 		mark.textContent = 'сделано';
// 		li.appendChild(mark);
//
// 		list.appendChild(li);
//
// 		this.value = '';
// 	}
// });
// Давайте также навесим CSS классы на каждый из тегов span, чтобы к ним можно было обратиться через CSS
// и навести нужную нам красоту:
//
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
//
// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
//
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
// 		li.appendChild(task);
//
// 		let remove = document.createElement('span');
// 		remove.classList.add('remove');
// 		remove.textContent = 'удалить';
// 		li.appendChild(remove);
//
// 		let mark = document.createElement('span');
// 		mark.classList.add('mark');
// 		mark.textContent = 'сделано';
// 		li.appendChild(mark);
//
// 		list.appendChild(li);
//
// 		this.value = '';
// 	}
// });
// Добавим CSS к навешенным классам:
//
// #list span {
// 	margin-right: 5px;
// }
// #list .remove, #list .mark {
// 	color: blue;
// 	cursor: pointer;
// }
// #list .remove:hover, #list .mark:hover {
// 	text-decoration: underline;
// }


// я свое продолжаю почитал и сам реализую то же
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
//
// input.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         let li = document.createElement('li');
//         let task = document.createElement('span');
//         let remove = document.createElement('span');
//         let mark = document.createElement('span');
//
//         task.textContent = this.value;
//         remove.textContent = 'удалить';
//         mark.textContent = 'сделано';
//
//         remove.classList.add('remove');
//         mark.classList.add('mark');
//
//         list.append(li);
//         li.append(task, remove, mark);
//
//         this.value = '';
//     }
// });


// 20 Удаление / Удаление дела в чеклисте на JavaScript

// Давайте теперь реализуем удаление дел из списка. Для этого на span для удаления навесим событие:
//
// let remove = document.createElement('span');
// remove.classList.add('remove');
// remove.textContent = 'удалить';
// remove.addEventListener('click', function() {
//     // здесь будет код для удаления тега li из списка ul
// });
// li.appendChild(remove);


// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
//
// input.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         let li = document.createElement('li');
//         let task = document.createElement('span');
//         let remove = document.createElement('span');
//         let mark = document.createElement('span');
//
//         task.textContent = this.value;
//         remove.textContent = 'удалить';
//         mark.textContent = 'сделано';
//
//         remove.classList.add('remove');
//         mark.classList.add('mark');
//
//         list.append(li);
//         li.append(task, remove, mark);
//
//         remove.addEventListener('click', function () {
//             this.parentElement.remove();
//         });
//
//         this.value = '';
//     }
// });


// 21 Завершение дела / Завершение дела в чеклисте на JavaScript
//
// Навесим аналогичным образом событие на кнопку 'сделано':
//
// let mark = document.createElement('span');
// mark.classList.add('mark');
// mark.textContent = 'сделано';
// mark.addEventListener('click', function() {
// 	// здесь будет код для отметки дела сделанным
// });
// li.appendChild(mark);
// Для того, чтобы отметить дело сделанным, нужно соответствующему тегу li следует навесить какой-нибудь CSS класс.
// Назовем, к примеру, этот класс done.
//
// Тогда для этого класса можно написать соответствующий CSS код:
//
// #list .done {
// 	text-decoration: line-through;
// }


// 1 Допишите недостающую часть кода для решения описанной задачи.
//
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
//
// input.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         let li = document.createElement('li');
//         let task = document.createElement('span');
//         let remove = document.createElement('span');
//         let mark = document.createElement('span');
//
//         task.textContent = this.value;
//         remove.textContent = 'удалить';
//         mark.textContent = 'сделано';
//
//         remove.classList.add('remove');
//         mark.classList.add('mark');
//
//         list.append(li);
//         li.append(task, remove, mark);
//
//         remove.addEventListener('click', function () {
//             this.parentElement.remove();
//         });
//
//         mark.addEventListener('click', function () {
//             // this.previousElementSibling.previousElementSibling.classList.add('done'); // 1 вариант
//             this.parentElement.contains(task) && task.classList.add('done'); // 2 вариант
//         });
//
//         this.value = '';
//     }
// });


// 22 Редактирование дела в чеклисте на JavaScript

// Давайте теперь реализуем редактирование. Для этого на span с текстом навесим двойной клик:
//
// let task = document.createElement('span');
// task.classList.add('task');
// task.textContent = this.value;
// task.addEventListener('dblclick', function() {
// 	// здесь будет код, реализующий редактирование
// });
// li.appendChild(task);
// По двойному клику на указанный span мы должны создать в нем инпут с текстом этого span.
// Затем после нажатия клавиши Enter в этом инпуте мы должны текст этого инпута записать обратно в наш спен,
// а сам инпут убрать.


// 1 Допишите недостающую часть кода для решения описанной задачи.
//
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
//
// input.addEventListener('keypress', function (event) {
//     if (event.key === 'Enter') {
//         let li = document.createElement('li');
//         let task = document.createElement('span');
//         let remove = document.createElement('span');
//         let mark = document.createElement('span');
//
//         task.textContent = this.value;
//         remove.textContent = 'удалить';
//         mark.textContent = 'сделано';
//
//         remove.classList.add('remove');
//         mark.classList.add('mark');
//
//         list.append(li);
//         li.append(task, remove, mark);
//
//         remove.addEventListener('click', function () {
//             this.parentElement.remove();
//         });
//
//         mark.addEventListener('click', function () {
//             // this.previousElementSibling.previousElementSibling.classList.add('done'); // 1 вариант
//             this.parentElement.contains(task) && task.classList.add('done'); // 2 вариант
//         });
//
//         task.addEventListener('dblclick', function changeText() {
//             let input = document.createElement('input');
//             input.value = this.textContent;
//             this.textContent = '';
//             this.append(input);
//
//             this.removeEventListener('dblclick', changeText); // не обязательно отвязывать, но решил так
//
//             input.addEventListener('keypress', function (event) {
//                 if (event.key === 'Enter') {
//                     task.textContent = input.value; // ругается на this хотя с this все работает
//                     input.value = '';
//
//                     task.addEventListener('dblclick', changeText);
//                 }
//             });
//         });
//
//         this.value = '';
//     }
// });


// 23 Окончательный код / Окончательный код на JavaScript

// Вот окончательный вариант того, что у нас должно получится:
//
// body {
// 	text-align: center;
// }
//
// #input, #list {
// 	display: inline-block;
// }
//
// #list {
// 	padding: 0;
// 	list-style-type: none;
// }
// #list span {
// 	margin-right: 5px;
// }
// #list .remove, #list .mark {
// 	color: blue;
// 	cursor: pointer;
// }
// #list .remove:hover, #list .mark:hover {
// 	text-decoration: underline;
// }
//
// #list .done .task {
// 	text-decoration: line-through;
// }
// <div id="wrapper">
// 	<input id="input"><br>
// 	<ul id="list"></ul>
// </div>
// let input = document.querySelector('#input');
// let list = document.querySelector('#list');
//
// input.addEventListener('keypress', function(event) {
// 	if (event.key == 'Enter') {
// 		let li = document.createElement('li');
//
// 		let task = document.createElement('span');
// 		task.classList.add('task');
// 		task.textContent = this.value;
// 		task.addEventListener('dblclick', function() {
// 			let text = this.textContent;
// 			this.textContent = '';
//
// 			let edit = document.createElement('input');
// 			edit.value = text;
// 			this.appendChild(edit);
//
// 			let self = this;
// 			edit.addEventListener('keypress', function(event) {
// 				if (event.key == 'Enter') {
// 					self.textContent = this.value; // а вот это прикольно сделано
// 				}
// 			});
// 		});
// 		li.appendChild(task);
//
// 		let remove = document.createElement('span');
// 		remove.textContent = 'удалить';
// 		remove.classList.add('remove');
// 		remove.addEventListener('click', function() {
// 			this.parentElement.remove();
// 		});
// 		li.appendChild(remove);
//
// 		let mark = document.createElement('span');
// 		mark.textContent = 'сделано';
// 		mark.classList.add('mark');
// 		mark.addEventListener('click', function() {
// 			this.parentElement.classList.add('done');
// 		});
// 		li.appendChild(mark);
//
// 		list.appendChild(li);
//
// 		this.value = '';
// 	}
// });
// Результат выполнения кода:


// у меня практически так же разница в том что класс выполнено он вешает на li а я на span
// так как я в 18 не копировал а писал сам я упустил что он вешает класс task на span этот)
// пожалуй вешать класс done на li более логично

let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        let li = document.createElement('li');
        let task = document.createElement('span');
        let remove = document.createElement('span');
        let mark = document.createElement('span');

        task.textContent = this.value;
        remove.textContent = 'удалить';
        mark.textContent = 'сделано';

        task.classList.add('task');
        remove.classList.add('remove');
        mark.classList.add('mark');

        list.append(li);
        li.append(task, remove, mark);

        remove.addEventListener('click', function () {
            this.parentElement.remove();
        });

        mark.addEventListener('click', function () {
            this.parentElement.classList.add('done');
        });

        task.addEventListener('dblclick', function changeText() {
            let input = document.createElement('input');
            input.value = this.textContent;
            this.textContent = '';
            this.append(input);

            this.removeEventListener('dblclick', changeText); // не обязательно отвязывать, но решил так

            let self = this;
            input.addEventListener('keypress', function (event) {
                if (event.key === 'Enter') {
                    self.textContent = this.value; // ругается на this хотя с this все работает

                    task.addEventListener('dblclick', changeText);
                }
            });
        });

        this.value = '';
    }
});