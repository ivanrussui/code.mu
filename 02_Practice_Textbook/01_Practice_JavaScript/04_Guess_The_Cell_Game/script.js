// 01_Practice_JavaScript
// Практика JavaScript


// 4  Игра угадай ячейку / Игра угадай ячейку на JavaScript

// Давайте теперь реализуем игру угадай ячейку. В этой игре будет дана таблица 10 на 10.
// Компьютер случайным образом запоминает 10 ячеек из этой таблицы.
// Игроку нужно кликать на клетки пока он не найдет все загаданные компьютером клетки.

// 1 Реализуйте описанную игру.


let tds = document.querySelectorAll('td');
console.log(tds);
let paragraph = document.querySelector('p');


function getRandomsTds(tds) {
    let randoms = [];
    for (let i = 0; i < tds.length; i++) {
        randoms.push(Math.floor(Math.random() * (tds[100] - tds[0] + 1)) + tds[0]);
    }
    console.log(randoms);
    return randoms;
    // return Math.floor(Math.random() * (max - min + 1)) + min;
}
let res = getRandomsTds(tds)
console.log(res);
//
// let min = 1,
//     max = 100;
// let random = getRandomInt(tds);
// console.log(random);