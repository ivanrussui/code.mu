// 08_Game_Change_Colors
// Игра смена цветов


// 47 Постановка задачи / Игра смена цветов на JavaScript
//
// В данном разделе вы с моей помощью реализуете игру. Игра будет представлять собой таблицу,
// ячейки которой окрашены в разные случайные цвета.
//
// Пусть есть определенный набор цветов, например, красный, зеленый, синий.
// Пусть каждый клик на ячейку меняет ее цвет по кругу.
// Цель игры - за наименьшее количество кликов сделать таблицу одного - любого - цвета.
//
// Давайте приступим к реализации. Для начала сделаем игровое поле в виде таблицы <table>:
//
// <table id="field"></table>
// Добавим некоторый CSS код, наводящий красоту:
//
// #field td {
// 	width: 50px;
// 	height: 50px;
// 	border: 1px solid black;
// 	text-align: center;
// 	font-weight: bold;
// }
// Обсудим теперь, как подойти к реализации нашей игры. Как вы видите, эта задача уже достаточно большая,
// чтобы так сходу решить ее. Поэтому ее следует разбить на некоторые этапы - подзадачи,
// выполняя которые мы постепенно решим нашу основную задачу.
//
// Для начала самым логичным этапом будет написать скрипт, создающий ячейки таблицы.
// Пусть, к примеру, размер игрового поля хранится в следующих переменных:
//
// let rows = 3;
// let cols = 3


// 1 Скопируйте себе приведенный HTML и CSS коды. Напишите код, который создаст таблицу заданного размера.
//
// const rows = 3;
// const cols = 3
//
// const table = document.getElementById('field');
//
// for (let i = 0; i < rows ; i++) {
//     const tr = document.createElement('tr');
//     table.append(tr);
//
//     for (let j = 0; j < cols; j++) {
//         const td = document.createElement('td');
//         tr.append(td);
//     }
// }


// 48 Окраска ячеек в разные цвета
//
// Следующим логичным этапом будет разрисовать наши ячейки в случайные цвета.
// По условию задачи у нас некоторый ограниченный набор цветов, пусть три: красный, зеленый, синий.
//
// Если подумать, то эти цвета удобно сделать CSS классами. Эти классы мы будем давать ячейкам нашей таблицы. Сделаем их:
//
// .red {
// 	background: red;
// }
// .green {
// 	background: green;
// }
// .blue {
// 	background: blue;
// }
// В JavaScript коде удобно собрать наши классы в массив:
//
// let colors = ['red', 'green', 'blue'];
// Имея такой массив, мы можем решить нашу задачу: в момент создания ячейки будем присваивать ей CSS,
// случайным образом выбирая его из нашего массива.
//
// Для этого лучше сделать некую вспомогательную функцию, которая параметром будет принимать массив
// и возвращать его случайный элемент.


// 1 Реализуйте описанную функцию. Потестируйте ее работу.
//
// const colors = ['red', 'green', 'blue'];
//
// function getRandomColor(arr) {
//     return Math.floor(Math.random() * ((arr.length - 1) + 1));
// }

// 2 С помощью созданной вами функции сделайте так, чтобы ячейки при создании таблицы окрашивались в случайные цвета.
//
// const rows = 3;
// const cols = 3;
//
// const table = document.getElementById('field');
//
// for (let i = 0; i < rows; i++) {
//     const tr = document.createElement('tr');
//     table.append(tr);
//
//     for (let j = 0; j < cols; j++) {
//         const td = document.createElement('td');
//         const randomIndexColor = getRandomColor(colors);
//         td.classList.add(colors[randomIndexColor]); // лучше через переменную чем вызов функции, более читабельно
//         tr.append(td);
//     }
// }


// 49 Следующим логичным этапом будет сделать так, чтобы по клику на ячейку эта ячейка меняла свой цвет.
//
// По описанию игры цвета должны меняться по порядку. То есть технически в нашем случае в том порядке,
// в котором они написаны в нашем массиве цветов:
//
// let colors = ['red', 'green', 'blue'];
// Это значит, что по клику на ячейку мы должны прочитать ее цвет, найти этот цвет в массиве цветов,
// затем получить следующий цвет из массива и установить его цветом нашей ячейки.
//
// Удобно в таком случае иметь функцию, которая параметром будет принимать массив и элемент этого массива
// и возвращать следующий элемент. Понятно, что все должно ходить по кругу:
// если мы передаем в функцию последний элемент массива, то она своим результатом должна вернуть первый.


// 1 Реализуйте описанную функцию. Потестируйте ее работу.
//
// const colors = ['red', 'green', 'blue'];
//
// function getNextElement(arr, element) {
//     if (arr.length - 1 > element) {
//         return arr[element + 1];
//     } else {
//         return arr[0];
//     }
// }

// 2 С помощью созданной вами функции сделайте так, чтобы каждая ячейка при клике на нее меняла свой цвет на следующий.
//
// function getRandomColor(arr) {
//     return Math.floor(Math.random() * ((arr.length - 1) + 1));
// }
//
// const rows = 3;
// const cols = 3;
//
// const table = document.getElementById('field');
//
// for (let i = 0; i < rows; i++) {
//     const tr = document.createElement('tr');
//     table.append(tr);
//
//     for (let j = 0; j < cols; j++) {
//         const td = document.createElement('td');
//         const randomIndexColor = getRandomColor(colors);
//         td.classList.add(colors[randomIndexColor]);
//         tr.append(td);
//     }
// }
//
// const tds = document.querySelectorAll('td');
//
// for (const td of tds) {
//     td.addEventListener('click', function () {
//         const currentColor = this.className;
//         const indexOfColor = colors.indexOf(currentColor);
//         const nextColor = getNextElement(colors, indexOfColor);
//         this.classList.remove(currentColor);
//         this.classList.add(nextColor);
//     });
// }


// 50 Победа в игре / Победа в игре смена цветов на JavaScript
//
// В предыдущих уроках мы в общем-то реализовали весь игровой процесс.
// Осталось сделать так, чтобы игра определяла момент победы.
//
// Обдумав вопрос, можно прийти в выводу, что момент победы - это когда все ячейки имеют одинаковый цвет.
// То есть технически - одинаковый класс.
//
// Это значит, что в момент клика по любой ячейке нужно взять класс любой ячейки (подойдет та, по которой мы кликнули)
// и посмотреть, все ли остальные ячейки имеют этот класс.
//
// Если да - то все, победа. Если нет - продолжаем играть.


// 1 Реализуйте поставленную задачу.
//
// const colors = ['red', 'green', 'blue'];
//
// function getNextElement(arr, element) {
//     if (arr.length - 1 > element) {
//         return arr[element + 1];
//     } else {
//         return arr[0];
//     }
// }
//
// function getRandomColor(arr) {
//     return Math.floor(Math.random() * ((arr.length - 1) + 1));
// }
//
// const rows = 3;
// const cols = 3;
//
// const table = document.getElementById('field');
//
// for (let i = 0; i < rows; i++) {
//     const tr = document.createElement('tr');
//     table.append(tr);
//
//     for (let j = 0; j < cols; j++) {
//         const td = document.createElement('td');
//         const randomIndexColor = getRandomColor(colors);
//         td.classList.add(colors[randomIndexColor]);
//         tr.append(td);
//     }
// }
//
// const tds = document.querySelectorAll('td');
//
// for (const td of tds) {
//     td.addEventListener('click', function () {
//         const currentColor = this.className;
//         const indexOfColor = colors.indexOf(currentColor);
//         const nextColor = getNextElement(colors, indexOfColor);
//         this.classList.remove(currentColor);
//         this.classList.add(nextColor);
//
//         compareCells(nextColor);
//     });
// }
//
// function compareCells(currentCell) {
//     const check = Array.from(tds).every(el => el.classList.contains(currentCell));
//     if (check) {
//         setTimeout(() => {
//             alert('You Win!');
//         }, 0);
//     }
// }


// 51 Вывод количества ходов / Вывод количества ходов в игре смена цветов на JavaScript
//
// В общем наша игра реализована. Но давайте улучшим ее. Сделаем так, чтобы над таблицей отображалось то,
// сколько кликов сделал игрок к настоящему моменту.


// 1 Реализуйте поставленную задачу.

let count = 0;
const colors = ['red', 'green', 'blue'];

const rows = 3;
const cols = 3;

const table = document.getElementById('field');
const text = document.createElement('h2');

text.textContent = `Количество кликов: ${count}`;
table.before(text);

function getNextElement(arr, element) {
    if (arr.length - 1 > element) {
        return arr[element + 1];
    } else {
        return arr[0];
    }
}

function getRandomColor(arr) {
    return Math.floor(Math.random() * ((arr.length - 1) + 1));
}

function startGame() {
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        table.append(tr);

        for (let j = 0; j < cols; j++) {
            const td = document.createElement('td');
            const randomIndexColor = getRandomColor(colors);
            td.classList.add(colors[randomIndexColor]);
            tr.append(td);
        }
    }
}

startGame();

function cleanGame() {
    table.textContent = '';
    text.textContent = 'Количество кликов: 0';
    count = 0;
}

function getTds() {
    return document.querySelectorAll('td');
}

const tds = getTds();

for (const td of tds) {
    td.addEventListener('click', changeColor);
}

function changeColor() {
    const currentColor = this.className;
    const indexOfColor = colors.indexOf(currentColor);
    const nextColor = getNextElement(colors, indexOfColor);
    this.classList.remove(currentColor);
    this.classList.add(nextColor);
    text.textContent = `Количество кликов: ${++count}`;
    compareCells(nextColor);
}

function compareCells(currentCell) {
    const tds = getTds();
    const check = Array.from(tds).every(el => el.classList.contains(currentCell));

    if (check) {
        setTimeout(() => {
            const win = confirm(`Победа! ${text.textContent}. \nНачать сначала?`);
            if (win) {
                cleanGame();
                startGame();

                const tds = getTds();
                for (const td of tds) {
                    td.addEventListener('click', changeColor);
                }
            } else {
                for (const td of tds) {
                    td.removeEventListener('click', changeColor);
                }
            }
        }, 0);
    }
}
