// 01_Practice_JavaScript
// Практика JavaScript


// 4  Игра угадай ячейку / Игра угадай ячейку на JavaScript

// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10.
// Компьютер случайным образом запоминает 10 ячеек из этой таблицы.
// Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

// 1 Реализуйте описанную игру.

let title = document.querySelector('h1');
let paragraph = document.querySelector('p');
let table = document.createElement('table');

title.parentElement.insertBefore(table, paragraph);

let k = 1;  // счетчик

for (let i = 0; i < 10; i++) {
    let tr = document.createElement('tr');
    table.append(tr);
    table.classList.add('disable');

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

    let uniqueArr = getUniqueArr(randoms);
    console.log(uniqueArr.length);
    if (uniqueArr.length < 10) {
        console.log('recursion');
        return getRandomsTds(tds);
    }

    paragraph.textContent = `Отгадайте ${uniqueArr.length} случайных ячеек`;
    return uniqueArr;
}

let getUniqueArr = randoms => randoms.filter((item, index) => randoms.indexOf(item) === index);

let res = getRandomsTds(tds);
console.log('res', res);

function clickOnCells() {
    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener('click', function func(e) {
            let deleteEL = res.indexOf(+e.target.textContent);

            if (deleteEL >= 0) {
                res.splice(deleteEL, 1);
                paragraph.textContent = `Осталось отгадать ${res.length}`;
                tds[i].classList.add('right');
            } else {
                tds[i].classList.add('wrong');
            }

            if (res.length === 0) {
                paragraph.textContent = 'Вы выйграли!';
                paragraph.classList.add('green');
                timer.textContent = `Поздравляем у вас оставалось ${seconds} секунд!`;
                timer.classList.add('indigo');
                start.disabled = true;
                stop.disabled = true;

                clearInterval(timerId);
            }

            console.log('res', res);

            tds[i].removeEventListener('click', func);
        });
    }
}

clickOnCells();


// 2 Модифицируйте предыдущую задачу, добавив таймер обратного отсчета.
// Если игрок не успеет угадать числа за отведенное время - он проиграл.

let timer = document.querySelector('#timer');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');

let time = 30000;
let seconds = time / 1000;
let timerId;

function startTimer() {
    timerId = setInterval(() => {
        timer.textContent = `У вас осталось ${--seconds} секунд`;

        if (seconds <= 0) {
            clearInterval(timerId);
            paragraph.textContent = 'Вы проиграли!';
            paragraph.classList.add('red');
            table.classList.add('disable');
            start.disabled = true;
            stop.disabled = true;
        }
    }, 1000);

    table.classList.remove('disable');
    start.removeEventListener('click', startTimer);
}

start.addEventListener('click', startTimer);

stop.addEventListener('click', function () {
    clearInterval(timerId);
    table.classList.add('disable');
    start.addEventListener('click', startTimer);
});
