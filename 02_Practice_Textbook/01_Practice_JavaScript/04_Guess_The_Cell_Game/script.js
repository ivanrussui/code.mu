// 01_Practice_JavaScript
// Практика JavaScript


// 4  Игра угадай ячейку / Игра угадай ячейку на JavaScript

// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10.
// Компьютер случайным образом запоминает 10 ячеек из этой таблицы.
// Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

// 1 Реализуйте описанную игру.

let body = document.querySelector('body');
let paragraph = document.querySelector('p');
let table = document.createElement('table');

body.insertBefore(table, paragraph);

let k = 1;  // счетчик

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    for (let j = 0; j < 10; j++) {
        let td = document.createElement('td');
        tr.append(td);

        td.textContent = k.toString();
        k++;
    }
}

let tds = document.querySelectorAll('td');

// это если не делать счетчик
// for (let i = 0; i < tds.length; i++) {
//     tds[i].textContent = (i + 1).toString();
// }

function getRandomsTds(tds) {
    let randoms = [];

    for (let i = 0; i < 10; i++) {
        randoms.push(Math.floor(Math.random() * (+tds[99].textContent - +tds[0].textContent + 1)) + +tds[0].textContent);
    }

    paragraph.textContent = `Отгадайте ${randoms.length} случайных ячеек`;
    return randoms;
}

let res = getRandomsTds(tds);
console.log('res', res);

for (let i = 0; i < tds.length; i++) {
    tds[i].addEventListener('click', function (e) {

        let deleteEL = res.indexOf(+e.target.textContent);

        if (deleteEL >= 0) {
            res.splice(deleteEL, 1);
            paragraph.textContent = `Осталось отгадать ${res.length}`;
        }

        res.length === 0 && (paragraph.textContent = 'Вы выйграли!');

        console.log('res', res);

    });
}
