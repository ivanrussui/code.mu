// 01_Practice_JavaScript
// Практика JavaScript


// 3 Игра угадай число / Игра угадай число на JavaScript

// Сейчас мы реализуем игру угадай число. В этой игре компьютер загадывает число от 1 до 100.
// В инпут на экране игрок вводит число от 1 до 100, пытаясь угадать, что же загадал компьютер.
//
// Если игрок ввел число, меньше загаданного, компьютер должен написать 'введите число побольше',
// а если введено больше загаданного, то, соответственно, компьютер должен написать 'введите число поменьше'.

// 1 Реализуйте описанную игру.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = 1,
    max = 100;
let random = getRandomInt(min, max);
console.log(random);

let input = document.querySelector('#number');
let paragraph = document.querySelector('p');
let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    if (input.value === '') {
        paragraph.textContent = `Введите число от ${min} до ${max}`;
    } else if (input.value < random) {
        paragraph.textContent = 'Введите число побольше';
    } else if (input.value > random) {
        paragraph.textContent = 'Введите число поменьше';
    } else {
        paragraph.textContent = 'Поздравляю, вы выйграли!';
    }
});
