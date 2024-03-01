// 07_Game_Tic-tac-toe
// Игра крестики-нолики


// 41 Постановка задачи / Игра крестики-нолики на JavaScript
//
// Полагаю, что суть данной игры известна всем, поэтому сразу приступим к реализации.
//
// Для начала сделаем игровое поле в виде таблицы <table>:
//
// <table id="field">
// 	<tr>
// 		<td></td>
// 		<td></td>
// 		<td></td>
// 	</tr>
// 	<tr>
// 		<td></td>
// 		<td></td>
// 		<td></td>
// 	</tr>
// 	<tr>
// 		<td></td>
// 		<td></td>
// 		<td></td>
// 	</tr>
// </table>
// Добавим некоторый CSS код, наводящий красоту:
//
// #field td {
// 	width: 50px;
// 	height: 50px;
// 	border: 1px solid black;
// 	text-align: center;
// 	font-weight: bold;
// }
// Получим ячейки нашей таблицы в переменную:
//
// let cells = document.querySelectorAll('#field td');


// 1 Скопируйте себе приведенные HTML, CSS и JavaScript коды.


// 42 Запись в ячейку / Запись в ячейку в игре крестики-нолики на JavaScript
//
// Давайте для начала сделаем так, чтобы по нажатию на любую ячейку таблицы в этой ячейке просто появлялся крестик.
//
// Сделаем для этого функцию start, параметром принимающую массив ячеек таблицы:
//
// function start(cells) {
//
// }
// Использовать эту функцию мы будем следующим образом:
//
// let cells = document.querySelectorAll('#field td');
// start(cells);


// 1 Реализуйте описанную задачу.
//
// function start(cells) {
//     for (let cell of cells) {
//         cell.addEventListener('click', () => cell.textContent = 'X');
//     }
// }
//
// let cells = document.querySelectorAll('#field td');
// start(cells);


// 43 Чередование крестика и нолика
//
// После решения задачи предыдущего урока у вас должен получится следующий код:
//
// let cells = document.querySelectorAll('#field td');
// start(cells);
//
// function start(cells) {
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function() {
// 			this.textContent = 'X';
// 		});
// 	}
// }
// Давайте теперь сделаем чередования крестиков и ноликов. Для этого я предлагаю ввести счетчик ходов:
//
// function start(cells) {
// 	let i = 0; // начальное значение счетчика
//
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function() {
// 			this.textContent = 'X';
//
// 			i++; // увеличиваем счетчик
// 		});
// 	}
// }
// Имея такой счетчик, мы легко можем реализовать чередование крестика и нолика: очевидно,
// что крестик будет появляться на четные значения счетчика, а нолик - на нечетные.


// 1 Реализуйте описанное чередование крестика и нолика.
//
// let cells = document.querySelectorAll('#field td');
// start(cells);
//
// function start(cells) {
//     let i = 0; // начальное значение счетчика
//
//     for (let cell of cells) {
//         cell.addEventListener('click', function () {
//             if (i % 2 === 0) {
//                 this.textContent = 'X';
//             } else {
//                 this.textContent = 'O'; // мне буква O больше нравится)
//             }
//             i++; // увеличиваем счетчик
//         });
//     }
// }


// 44 Разбор чередование крестика и нолика
//
// В данном уроке я хочу показать вам, как сделать чередование крестика и нолика в одну строчку.
// Вы скорее всего, сделали что-то такое:
//
// function start(cells) {
// 	let i = 0; // начальное значение счетчика
//
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function() {
// 			if (i % 2 == 0) {
// 				this.textContent = 'X';
// 			} else {
// 				this.textContent = '0';
// 			}
//
// 			i++; // увеличиваем счетчик
// 		});
// 	}
// }
// Я предложу решить задачу короче. Сделаем массив наших 'игроков':
//
// let gamers = ['X', 'O'];
// Как вы видите, в этом массиве крестик имеет ключ 0, а нолик - ключ 1.
// То же самое можно сказать и про i % 2 - для крестика остаток будет 0, а для нолика - 1.
//
// То есть эту штуку можно использовать вместо ключа:
//
// let gamers = ['X', 'O'];
// let key = i % 2;
//
// console.log(gamers[key]);
// Или еще короче:
//
// let gamers = ['X', 'O'];
// console.log(gamers[i % 2]);
// Или еще короче:
//
// console.log(['X', 'O'][i % 2]);
// Упростим теперь код нашей функции start:
//
// function start(cells) {
// 	let i = 0;
//
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function() {
// 			this.textContent = ['X', 'O'][i % 2];
// 			i++;
// 		});
// 	}
// }


// 1 Самостоятельно, не подсматривая в мой код, внесите описанную правку.
//
// let cells = document.querySelectorAll('#field td');
// start(cells);
//
// function start(cells) {
//     let i = 0; // начальное значение счетчика
//
//     for (let cell of cells) {
//         cell.addEventListener('click', function () {
//             // прочел задачу, закрыл сам написал все 3 варианта
//
//             // let arr = ['X', 'O']; // 1 вариант
//             // let key = [i % 2];
//             // this.textContent = arr[key];
//
//             // let arr = ['X', 'O']; // 2 вариант
//             // this.textContent = arr[i % 2]
//
//             this.textContent = ['X', 'O'][i % 2]; // 3 вариант
//
//             i++; // увеличиваем счетчик
//         });
//     }
// }


// 2 Сейчас на любую ячейку можно делать неограниченное количество кликов, меняя, например, крестик на нолик.
// Исправьте это.

// let cells = document.querySelectorAll('#field td');
// start(cells);

// через !this.textContent более лаконично, меньше кода
// function start(cells) {
//     let i = 0;
//
//     for (let cell of cells) {
//         cell.addEventListener('click', function () {
//             if (!this.textContent) { // проверка на falsy
//                 this.textContent = ['X', 'O'][i % 2];
//                 i++;
//             }
//         });
//     }
// }

// через flag
// function start(cells) {
//     let i = 0;
//
//     for (let cell of cells) {
//         let flag = true;
//
//         cell.addEventListener('click', function () {
//
//             if (flag) { // проверка на flag
//                 this.textContent = ['X', 'O'][i % 2];
//                 flag = false
//                 i++;
//             }
//         });
//     }
// }

// через удаление обработчика, так сделал он)
// function start(cells) {
//     let i = 0;
//
//     for (let cell of cells) {
//         cell.addEventListener('click', function step() {
//             this.textContent = ['X', 'O'][i % 2];
//             this.removeEventListener('click', step);
//             i++;
//         });
//     }
// }


// 45 Проверка победы / Проверка победы в игре крестики-нолики на JavaScript
//
// Теперь пришла пора написать код, который будет определять победу и выводить имя победителя.
//
// Обдумав задачу, можно сообразить, что проверку на наличие победы следует выполнять в каждом ходу:
//
// function init(selector) {
// 	let cells = document.querySelectorAll('#field td');
// 	let i = 0;
//
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function step() {
// 			this.textContent = ['X', 'O'][i % 2];
// 			this.removeEventListener('click', step);
//
// 			// здесь мы должны проверять победу или ничью
//
// 			i++;
// 		});
// 	}
// }
// Давайте сделаем функцию isVictory, которая параметром будет принимать массив ячеек и возвращать true,
// если на поле есть победа, и false, если нет. Мы будем пользоваться этой функцией следующим образом:
//
// function start(cells) {
// 	let i = 0;
//
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function step() {
// 			this.textContent = ['X', 'O'][i % 2];
// 			this.removeEventListener('click', step);
//
// 			if (isVictory(cells)) {
// 				alert('имя победителя');
// 			}
//
// 			i++;
// 		});
// 	}
// }
// Как же нам узнать имя победителя? Очевидно, что его имя хранится в каждой из победивших ячеек.
// Поясню: если у нас есть победа, то это значит что некоторые 3 ячейки по горизонтали,
// вертикали или диагонали содержат одинаковое значение: либо крестик, либо нолик.
//
// Очевидно, что значение любой из эти ячеек и есть имя победителя. Но можно пойти и другим, менее очевидным путем:
// так как мы определяем наличие победы каждый ход, то логично, что победителем будет игрок, совершивший последний ход.
// Имя этого игрока содержится в тексте кликнутой ячейки:
//
// function start(cells) {
// 	let i = 0;
//
// 	for (let cell of cells) {
// 		cell.addEventListener('click', function step() {
// 			this.textContent = ['X', 'O'][i % 2];
// 			this.removeEventListener('click', step);
//
// 			if (isVictory(cells)) {
// 				alert(this.textContent); // выводим имя победителя
// 			}
//
// 			i++;
// 		});
// 	}
// }
// Реализация isVictory
// Как же нам технически определить наличие победы на поле? Если хорошо все обдумать, то можно прийти к выводу,
// что на поле ограниченное количество троек ячеек.
//
// То есть для проверки победы можно просто проверить все эти тройки. Нужно проверять на то,
// что тройки имеют одинаковые не пустые значения (то есть там либо крестик, либо нолик).
//
// Сделаем двухмерный массив, в каждом подмассиве которого будут номера ячеек одной из троек:
//
// let combs = [
// 	[0, 1, 2],
// 	[3, 4, 5],
// 	[6, 7, 8],
// 	[0, 3, 6],
// 	[1, 4, 7],
// 	[2, 5, 8],
// 	[0, 4, 8],
// 	[2, 4, 6],
// ];
// Напишем с помощью этого массива определение победы:
//
// function isVictory(cells) {
// 	let combs = [
// 		[0, 1, 2],
// 		[3, 4, 5],
// 		[6, 7, 8],
// 		[0, 3, 6],
// 		[1, 4, 7],
// 		[2, 5, 8],
// 		[0, 4, 8],
// 		[2, 4, 6],
// 	];
//
// 	for (let comb of combs) {
// 		if (
// 			cells[comb[0]].textContent == cells[comb[1]].textContent &&
// 			cells[comb[1]].textContent == cells[comb[2]].textContent &&
// 			cells[comb[0]].textContent != ''
// 		) {
// 			return true;
// 		}
// 	}
//
// 	return false;
// }


// 1 Самостоятельно, не подсматривая в мой код, реализуйте описанное. Проверьте, как функционирует игровой процесс.
//
// let cells = document.querySelectorAll('#field td');
// start(cells);
//
// function start(cells) {
//     let i = 0;
//
//     for (let cell of cells) {
//
//         cell.addEventListener('click', function step() {
//             this.textContent = ['X', 'O'][i % 2];
//             this.removeEventListener('click', step);
//             let victory = isVictory(cells);
//             i++;
//
//             if (victory) {
//                 console.log(`Победил: ${this.textContent}`);
//             }
//         });
//     }
// }
//
// function isVictory(cells) {
//     let combs = [
//         [0, 1, 2],
//         [0, 3, 6],
//         [0, 4, 8],
//         [1, 4, 7],
//         [2, 5, 8],
//         [2, 4, 6],
//         [3, 4, 5],
//         [6, 7, 8],
//     ];
//
//     for (let comb of combs) { // крч тут я завалился и подглядел
//         if (cells[comb[0]].textContent === cells[comb[1]].textContent &&
//             cells[comb[1]].textContent === cells[comb[2]].textContent &&
//             cells[comb[0]].textContent !== '') {
//             return true;
//         }
//     }
//     return false;
// }


// 2 Попробуйте реализовать проверку ничьей. В следующем уроке будет разбор этого места.
//
let cells = document.querySelectorAll('#field td');
start(cells);

// вариант неверно реализован
// let k = 0;
// function start(cells) {
//     let i = 0;
//
//     for (let cell of cells) {
//         cell.addEventListener('click', function step() {
//             this.textContent = ['X', 'O'][i % 2];
//             this.removeEventListener('click', step);
//
//             if (isVictory(cells)) {
//                 console.log(`Победил: ${this.textContent}`);
//                 k++;
//             }
//
//             // я чутка забыл правила игры, думал если 1 выйграл и у 2 остается 1 ход и ничья тогда,
//             // в общем я не так понял реализацию
//             if (k > 1) {
//                 console.log('Ничья');
//             }
//
//             i++;
//         });
//     }
// }

// вариант верно реализован, конечно написал как глянул следующую страницу)
function start(cells) {
    let i = 0;

    for (let cell of cells) {
        cell.addEventListener('click', function step() {
            this.textContent = ['X', 'O'][i % 2];
            this.removeEventListener('click', step);

            if (isVictory(cells)) {
                console.log(`Победил: ${this.textContent}`);
            }
            if (i === 8) {
                console.log('Ничья');
            }

            i++;
        });
    }
}

function isVictory(cells) {
    let combs = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8],
    ];

    for (let comb of combs) { // крч тут я завалился и подглядел
        if (cells[comb[0]].textContent === cells[comb[1]].textContent &&
            cells[comb[1]].textContent === cells[comb[2]].textContent &&
            cells[comb[0]].textContent !== '') {
            return true;
        }
    }
    return false;
}


// 46 Разбор проверки ничьей / Разбор проверки ничьей в игре крестики-нолики на JavaScript
// Давайте теперь рассмотрим ничью. Очевидно, что ничья наступает, если все ячейки заполнены и нет победителя.
// Сделаем это:
//
// function start(cells) {
//     let i = 0;
//
//     for (let cell of cells) {
//         cell.addEventListener('click', function step() {
//             this.textContent = ['X', 'O'][i % 2];
//             this.removeEventListener('click', step);
//
//             if (isVictory(cells)) {
//                 alert(this.textContent);
//             } else if (i == 8) {
//                 alert('ничья');
//             }
//
//             i++;
//         });
//     }
// }
