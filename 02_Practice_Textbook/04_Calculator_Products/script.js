// 04_Calculator_Products
// Калькулятор продуктов


// 18 Постановка задачи / Калькулятор продуктов на JavaScript

// В данном разделе мы реализуем калькулятор продуктов. Он будет представлять собой таблицу,
// в которую пользователь нашего сайта будет вносить свои покупки.
//
// Пусть покупки вносятся с помощью формы. Кроме того, для каждого продукта предусмотрим ссылку на удаление.
// Сделаем также возможность редактирования названия, цены и количества продукта.
// Пусть такое редактирование будет происходить по двойному клику по ячейке таблицы.
//
// Пусть под таблицей выводится суммарная стоимость продуктов.
// Сделаем так, чтобы эта сумма пересчитывалась при удалении и при редактировании продуктов.
//
// Вот образец того, что должно получится:


// Вот верстка, которую вы можете использовать при решении задачи:
//
// <div id="parent">
// 	<div id="form">
// 		<input id="name" placeholder="название">
// 		<input id="price" placeholder="цена">
// 		<input id="amount" placeholder="количество">
// 		<input id="add" type="button" value="добавить">
// 	</div>
//
// 	<h2>Таблица продуктов:</h2>
// 	<table id="table">
// 		<tr>
// 			<th>название</th>
// 			<th>цена</th>
// 			<th>кол-во</th>
// 			<th>сумма</th>
// 			<th>удалить</th>
// 		</tr>
// 	</table>
// 	<div id="result">
// 		общий итог: <span id="total">0</span>
// 	</div>
// </div>
// * {
// 	box-sizing: border-box;
// }
// #parent {
// 	margin: 0 auto;
// 	width: 500px;
// }
//
// #form {
// 	display: flex;
// 	margin-bottom: 15px;
// }
// #form input {
// 	padding: 8px;
// 	width: 24%;
// 	margin: 0 0.5% 10px 0.5%;
// }
//
// h2 {
// 	margin-top: 0;
// 	margin-bottom: 7px;
// }
//
// #table {
// 	width: 100%;
// 	margin-bottom: 10px;
// }
// #table td, #table th {
// 	padding: 8px;
// 	text-align: center;
// 	border: 1px solid black;
// }
// #table td.remove {
// 	color: blue;
// 	cursor: pointer;
// 	text-decoration: underline;
// }
// #table td.remove:hover {
// 	text-decoration: none;
// }
//
// #result {
// 	text-align: right;
// 	margin-right: 10px;
// }
// Сразу давайте получим ссылки на все нужные теги в переменные:
//
// let name   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');


// 1 Скопируйте себе представленные мною заготовки кода.


// 25 Добавление новой покупки / Добавление новой покупки в калькуляторе продуктов

// Для начала давайте сделаем так, чтобы по нажатию на кнопку в таблицу добавлялся новый ряд с покупкой:
//
// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
//
// 	let td;
//
// 	td = document.createElement('td');
// 	td.textContent = name.value;
// 	td.classList.add('name');
// 	tr.appendChild(td);
//
// 	td = document.createElement('td');
// 	td.textContent = price.value;
// 	td.classList.add('price');
// 	tr.appendChild(td);
//
// 	td = document.createElement('td');
// 	td.textContent = amount.value;
// 	td.classList.add('amount');
// 	tr.appendChild(td);
//
// 	td = document.createElement('td');
// 	td.textContent = price.value * amount.value;
// 	td.classList.add('cost');
// 	tr.appendChild(td);
//
// 	td = document.createElement('td');
// 	td.textContent = 'удалить';
// 	td.classList.add('remove');
// 	tr.appendChild(td);
//
// 	table.appendChild(tr);
// });
// Приведенное мною решение, однако, имеет явные проблемы с дублированием кода:
// фактически для каждой ячейки мы пишем один и тот же код.
//
// Уместно было бы иметь некоторую функцию для создания ячейки таблицы. Пусть эта функция первым параметром принимает
// ссылку на ряд таблицы, вторым параметром - текст ячейки таблицы, а третьим - имя CSS класса ячейки:
//
// function createCell(tr, value, name) {
//
// }
// Имея такую функцию мы бы смогли переписать приведенный выше код следующим образом:
//
// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
//
// 	createCell(tr, name.value, 'name');
// 	createCell(tr, price.value, 'price');
// 	createCell(tr, amount.value, 'amount');
// 	createCell(tr, price.value * amount.value, 'cost');
// 	createCell(tr, 'удалить', 'remove');
//
// 	table.appendChild(tr);
// });


// 1 Реализуйте описанную мною функцию createCell.
//
// function createCell(tr, value, name) {
//     let td = document.createElement('td');
//     td.textContent = value;
//     td.classList.add(name);
//
//     tr.appendChild(td);
// }

// 2 Скопируйте мой код для добавления новой покупки. Потестируйте добавление новой покупки в таблицу.
//
// let name   = document.querySelector('#name');
// let price  = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add    = document.querySelector('#add');
// let table  = document.querySelector('#table');
// let total  = document.querySelector('#total');
//
// add.addEventListener('click', function() {
//     let tr = document.createElement('tr');
//
//     createCell(tr, name.value, 'name');
//     createCell(tr, price.value, 'price');
//     createCell(tr, amount.value, 'amount');
//     createCell(tr, price.value * amount.value, 'cost');
//     createCell(tr, 'удалить', 'remove');
//
//     table.appendChild(tr);
// });

// 3 Модифицируйте функцию createCell так, чтобы она возвращала через return созданную ячейку таблицы.
//
// function createCell(tr, value, name) {
//     let td = document.createElement('td');
//     td.textContent = value;
//     td.classList.add(name);
//
//     tr.appendChild(td);
//     return td;
// }


// 26 Общая сумма покупок / Общая сумма в калькуляторе продуктов на JavaScript
//
// Давайте теперь сделаем так, чтобы под таблицей выводилась общая сумма покупок. Тут есть нюансы.
//
// Если обдумать ситуацию, то станет понятно, что сумма должна корректироваться не только при добавлении новой покупки,
// но также и при удалении и при редактировании.
//
// Я бы предложил в таком случае сделать некоторую функцию, назовем ее recountTotal, которая будет выполнять полный
// перерасчет суммы. То есть будет пробегаться циклом по всем покупкам и суммировать содержимое их колонки cost.
//
// Имея такую функцию, мы сможем вызывать ее в любом месте, где предполагаются какие-то изменения общей суммы.
// Конечно, немного не оптимально каждый раз рассчитывать общую сумму. Зато мы получим существенное упрощение кода.
//
// Используем предполагаемую функцию при создании новой покупки:
//
// add.addEventListener('click', function() {
// 	let tr = document.createElement('tr');
//
// 	createCell(tr, name.value, 'name');
// 	createCell(tr, price.value, 'price');
// 	createCell(tr, amount.value, 'amount');
// 	createCell(tr, price.value * amount.value, 'cost');
// 	createCell(tr, 'удалить', 'remove');
//
// 	table.appendChild(tr);
// 	recountTotal(); // пересчитаем общую сумму
// });
// Вот заготовка описанной функции:
//
// function recountTotal() {
// 	let costs = table.querySelectorAll('.cost');
//
// 	if (costs) {
// 		// находим сумму и записываем ее в #total
// 	}
// }


// 1 Реализуйте описанную мною функцию recountTotal.
//
// let name = document.querySelector('#name');
// let price = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add = document.querySelector('#add');
// let table = document.querySelector('#table');
// let total = document.querySelector('#total');
//
// add.addEventListener('click', function () {
//     let tr = document.createElement('tr');
//
//     createCell(tr, name.value, 'name');
//     createCell(tr, price.value, 'price');
//     createCell(tr, amount.value, 'amount');
//     createCell(tr, price.value * amount.value, 'cost');
//     createCell(tr, 'удалить', 'remove');
//
//     table.appendChild(tr);
//     recountTotal(); // пересчитаем общую сумму
// });
//
// function createCell(tr, value, name) {
//     let td = document.createElement('td');
//     td.textContent = value;
//     td.classList.add(name);
//
//     tr.appendChild(td);
//     return td;
// }
//
// function recountTotal() {
//     let costs = table.querySelectorAll('.cost');
//
//     if (costs) {
//         total.textContent = '0';
//         // находим сумму и записываем ее в #total
//         for (let cost of costs) {
//             total.textContent = +total.textContent + +cost.textContent;
//         }
//         // return total.textContent; // return не обязателен
//     }
// }


// 27 Удаление покупок / Удаление покупок в калькуляторе продуктов на JavaScript

// Давайте теперь реализуем удаление покупки. Ссылка для удаления у нас уже есть, мы создаем ее этой строчкой:
//
// createCell(tr, 'удалить', 'remove');
// Напоминаю, что функция createCell возвращает созданную ячейку.
// Это значит, что с этой ячейкой можно выполнять различные операции. Например, привяжем к ней обработчик клика:
//
// let remove = createCell(tr, 'удалить', 'remove');
// remove.addEventListener('click', function() {
// 	// удалим ряд таблицы
// });
// Промежуточную переменную можно и не вводить:
//
// createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
// 	// удалим ряд таблицы
// });


// 1 Напишите недостающий код для удаления ряда таблицы.
// 2 Добавьте вызов функции recountTotal в нужное место так, чтобы удаление покупки обновляло общую сумму.

// let name = document.querySelector('#name');
// let price = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add = document.querySelector('#add');
// let table = document.querySelector('#table');
// let total = document.querySelector('#total');
//
// add.addEventListener('click', function () {
//     let tr = document.createElement('tr');
//
//     createCell(tr, name.value, 'name');
//     createCell(tr, price.value, 'price');
//     createCell(tr, amount.value, 'amount');
//     createCell(tr, price.value * amount.value, 'cost');
//     createCell(tr, 'удалить', 'remove').addEventListener('click', function() {
//         // удалим ряд таблицы
//         this.parentElement.remove();
//         recountTotal();
//     });
//
//     table.appendChild(tr);
//     recountTotal(); // пересчитаем общую сумму
// });
//
// function createCell(tr, value, name) {
//     let td = document.createElement('td');
//     td.textContent = value;
//     td.classList.add(name);
//
//     tr.appendChild(td);
//     return td;
// }
//
// function recountTotal() {
//     let costs = table.querySelectorAll('.cost');
//
//     if (costs) {
//         total.textContent = '0';
//         // находим сумму и записываем ее в #total
//         for (let cost of costs) {
//             total.textContent = +total.textContent + +cost.textContent;
//         }
//     }
// }


// 28 Редактирование покупок / Редактирование покупок в калькуляторе продуктов

// Давайте теперь реализуем редактирование ячеек. По условию редактировать можно только первые 3 ячейки.
//
// Вот их:
//
// createCell(tr, name.value, 'name');
// createCell(tr, price.value, 'price');
// createCell(tr, amount.value, 'amount');
// Очевидно, что код для редактирования будет одинаковым для каждой ячейки: по двойному клику вместо текста ячейки
// должен появится инпут, а по нажатию Enter в инпуте его содержимое должно стать новым текстом ячейки.
//
// Я предлагаю сделать некоторую функцию, которая параметром будет принимать ячейку таблицы и
// привязывать к ней возможность редактирования:
//
// function allowEdit(td) {
// 	td.addEventListener('dblclick', function() {
//
// 	});
// }
// Тогда мы можем применить нашу функцию следующим образом:
//
// allowEdit(createCell(tr, name.value, 'name'));
// allowEdit(createCell(tr, price.value, 'price'));
// allowEdit(createCell(tr, amount.value, 'amount'));
// Внимательный читатель может заметить то, что не все ячейки одинаковы: ведь при изменении ячейки с ценой или
// ячейки с количеством должна изменяться стоимость покупки в колонке cost, а также выполнялся перерасчет общей суммы.
//
// Этот нюанс мы оставим как следующую подзадачу для решения в следующем уроке.
// А для начала просто сделаем возможность редактирования наших трех ячеек, без перерасчета.


// let name = document.querySelector('#name');
// let price = document.querySelector('#price');
// let amount = document.querySelector('#amount');
// let add = document.querySelector('#add');
// let table = document.querySelector('#table');
// let total = document.querySelector('#total');
//
// add.addEventListener('click', function () {
//     let tr = document.createElement('tr');
//
//     allowEdit(createCell(tr, name.value, 'name'));
//     allowEdit(createCell(tr, price.value, 'price'));
//     allowEdit(createCell(tr, amount.value, 'amount'));
//     createCell(tr, price.value * amount.value, 'cost');
//     createCell(tr, 'удалить', 'remove').addEventListener('click', function () {
//         // удалим ряд таблицы
//         this.parentElement.remove();
//         recountTotal();
//     });
//
//     table.appendChild(tr);
//     recountTotal(); // пересчитаем общую сумму
// });
//
// function allowEdit(td) {
//     td.addEventListener('dblclick', function () {
//         let input = document.createElement('input');
//         this.textContent = '';
//         this.appendChild(input);
//
//         let self = this;
//         input.addEventListener('keypress', function (event) {
//             if (event.key === 'Enter') {
//                 self.textContent = this.value;
//             }
//         });
//     });
// }
//
// function createCell(tr, value, name) {
//     let td = document.createElement('td');
//     td.textContent = value;
//     td.classList.add(name);
//
//     tr.appendChild(td);
//     return td;
// }
//
// function recountTotal() {
//     let costs = table.querySelectorAll('.cost');
//
//     if (costs) {
//         total.textContent = '0';
//         // находим сумму и записываем ее в #total
//         for (let cost of costs) {
//             total.textContent = +total.textContent + +cost.textContent;
//         }
//     }
// }


// 29 Редактирование с перерасчетом / Редактирование с перерасчетом в калькуляторе продуктов на JavaScript

// Давайте теперь доработаем функцию allowEdit так, чтобы выполнялся описанный в предыдущем уроке перерасчет.
//
// К данному моменту код вашей функции должен выглядеть примерно так:
//
// function allowEdit(td) {
// 	td.addEventListener('dblclick', function() {
// 		let text = td.textContent
// 		td.textContent = '';
//
// 		let input = document.createElement('input');
// 		input.value = text;
// 		input.focus();
// 		td.appendChild(input);
//
// 		input.addEventListener('keydown', function(event) {
// 			if (event.key == 'Enter') {
// 				td.textContent = this.value;
// 			}
// 		});
// 	});
// }
// Добавим код, который для ячейки с ценой и для ячейки с количеством будет выполнять перерасчет:
//
// function allowEdit(td) {
// 	td.addEventListener('dblclick', function() {
// 		let text = td.textContent
// 		td.textContent = '';
//
// 		let input = document.createElement('input');
// 		input.value = text;
// 		input.focus();
// 		td.appendChild(input);
//
// 		input.addEventListener('keydown', function(event) {
// 			if (event.key == 'Enter') {
// 				td.textContent = this.value;
//
// 				if (td.classList.contains('price') || td.classList.contains('amount')) {
// 					// выполним перерасчет
// 				}
// 			}
// 		});
// 	});
// }


let name = document.querySelector('#name');
let price = document.querySelector('#price');
let amount = document.querySelector('#amount');
let add = document.querySelector('#add');
let table = document.querySelector('#table');
let total = document.querySelector('#total');

add.addEventListener('click', function () {
    let tr = document.createElement('tr');

    allowEdit(createCell(tr, name.value, 'name'));
    allowEdit(createCell(tr, price.value, 'price'));
    allowEdit(createCell(tr, amount.value, 'amount'));
    createCell(tr, price.value * amount.value, 'cost');
    createCell(tr, 'удалить', 'remove').addEventListener('click', function () {
        this.parentElement.remove();
        recountTotal();
    });

    table.appendChild(tr);
    recountTotal();
});

function allowEdit(td) {
    td.addEventListener('dblclick', function () {
        let text = td.textContent;
        td.textContent = '';

        let input = document.createElement('input');
        input.value = text;
        td.appendChild(input);
        input.focus(); // фокус надо писать после appendChild чтобы работал)

        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                td.textContent = this.value;

                if (td.classList.contains('price') || td.classList.contains('amount')) {
                    let cost = td.parentElement.querySelector('.cost');
                    let price = td.parentElement.querySelector('.price');
                    let amount = td.parentElement.querySelector('.amount');
                    cost.textContent = price.textContent * amount.textContent;
                    recountTotal();
                }
            }
        });
    });
}

function createCell(tr, value, name) {
    let td = document.createElement('td');
    td.textContent = value;
    td.classList.add(name);

    tr.appendChild(td);
    return td;
}

function recountTotal() {
    let costs = table.querySelectorAll('.cost');

    if (costs) {
        total.textContent = '0';
        for (let cost of costs) {
            total.textContent = +total.textContent + +cost.textContent;
        }
    }
}
