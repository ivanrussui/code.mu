// 01_Practice_JavaScript
// Практика JavaScript


// 4  Игра угадай ячейку / Игра угадай ячейку на JavaScript

// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10.
// Компьютер случайным образом запоминает 10 ячеек из этой таблицы.
// Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

// 1 Реализуйте описанную игру.

// let body = document.querySelector('body');
let title = document.querySelector('h1');
let paragraph = document.querySelector('p');
let table = document.createElement('table');

// body.insertBefore(table, paragraph);
title.parentElement.append(table)

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

        if (res.length === 0) {
            paragraph.textContent = 'Вы выйграли!';
            paragraph.classList.add('green');
            clearInterval(timerId);
            timer.textContent = `У вас в запасе ${seconds} секунд!`;
            timer.classList.add('indigo');
        }

        console.log('res', res);
    });
}


// 2 Модифицируйте предыдущую задачу, добавив таймер обратного отсчета.
// Если игрок не успеет угадать числа за отведенное время - он проиграл.

let timer = document.querySelector('h4');
let btn = document.querySelector('button');
// let time = 11000;
let time = 300000;

let timerId
let timerId2

function runSetTimeout() {
    timerId2 = setTimeout(() => {
        paragraph.textContent = 'Вы проиграли!';
        paragraph.classList.add('red');
    }, time);
}

runSetTimeout();
// console.log(timerId);

let seconds = time / 1000;
function runSetInterval() {
    timerId = setInterval(() => {
        // console.log(seconds--);
        timer.textContent = `У вас осталось ${--seconds} секунд`;
        if (seconds <= 0) {
            clearInterval(timerId);
        }
    }, 1000);
}
runSetInterval();

// btn.addEventListener('click', function func() {
//
//     clearTimeout(timerId2)
//     clearInterval(timerId)
//     runSetTimeout();
//     runSetInterval();
//     this.removeEventListener('click', func);
// });