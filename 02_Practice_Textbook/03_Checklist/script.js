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
// В качестве первого этапа сделаем так, чтобы в инпут можно было ввести текст, нажать Enter - и в конец ul добавилась li с введенным текстом.
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
// Давайте теперь добавим кнопочки 'удалить' и 'сделано'. Выполним эти кнопочки в виде тегов span. Также в теге span разместим и текст дела:
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
// Давайте также навесим CSS классы на каждый из тегов span, чтобы к ним можно было обратиться через CSS и навести нужную нам красоту:
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

        remove.classList.add('remove');
        mark.classList.add('mark');

        list.append(li);
        li.append(task, remove, mark);

        remove.addEventListener('click', function () {
            this.parentElement.remove();
        });

        mark.addEventListener('click', function () {
            // this.previousElementSibling.previousElementSibling.classList.add('done'); // 1 вариант
            this.parentElement.contains(task) && task.classList.add('done'); // 2 вариант
        });

        this.value = '';
    }
});