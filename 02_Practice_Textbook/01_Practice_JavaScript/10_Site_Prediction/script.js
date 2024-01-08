// 01_Practice_JavaScript
// Практика JavaScript


// 10 Сайт предсказания / Сайт предсказаний на JavaScript

// Сейчас мы сделаем сайт, который будет выдавать предсказания.
// Пусть на этом сайте будет кнопка, по нажатию на которую будет запускаться таймер,
// который будет каждые 0.1 секунд выводить в какой-нибудь див случайное число от 1 до некоторого максимального.
//
// Под дивом пусть будет другая кнопка, по нажатию на которую пользователь нашего сайта может остановить таймер и
// зафиксировать некоторое число в диве. Это число будет номером предсказания. После этого покажите пользователю
// предсказание с этим номером, а все лишние кнопки уберите с экрана, чтобы пользователь не мог получить еще одно
// предсказание. То есть на один заход на сайт - одно предсказание..


// 1 Продумайте, как удобнее хранить предсказания.

// let databasePrediction = [
//     'у вас сегодня будет замечательный день', // 1
//     'сегодня лучше не выходите из дома', // 2
//     'сегодня вас ждет удача и успех во всех начинаниях', // 3
//     'сегодня вас ждет успех при изучении JavaScript', // 4
//     'сегодня лучше полежите весь день на диване', // 5
//     'сегодня вы рискуете что-нибудь забыть при выходе из дома', // 6
//     'устройте сегодня себе выходной - пусть весь мир подождет', // 7
// ];


// 2 Реализуйте описанный сайт.

// let timer = document.getElementById('timer');
// let text = document.getElementById('text');
// let start = document.getElementById('start');
// let stop = document.getElementById('stop');

// 1й вариант сам написал
// let timerId;
// let i = 1;
//
// start.addEventListener('click', function () {
//     start.classList.remove('active');
//     stop.classList.add('active');
//     timerId = setInterval(function () {
//         i > databasePrediction.length && (i = 1);
//         timer.textContent = i.toString();
//         i++;
//     }, 100);
// });
//
// stop.addEventListener('click', function () {
//     stop.classList.remove('active');
//     clearInterval(timerId);
//     text.textContent = databasePrediction[i - 2];
// });


// 2й вариант подглядел в коде
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// let timerId;
// let i;
//
// start.addEventListener('click', function () {
//     this.classList.remove('active');
//     stop.classList.add('active');
//     timerId = setInterval(function () {
//         timer.textContent = i = getRandomInt(1, databasePrediction.length);
//     }, 100);
// });
//
// stop.addEventListener('click', function () {
//     this.classList.remove('active');
//     clearInterval(timerId);
//     text.textContent = databasePrediction[i - 1];
// });


// 3 Сделайте так, чтобы предсказания были двух видов: хорошие и плохие.
// Сделайте так, чтобы плохие красились в красный цвет, а хорошие - в зеленый.

let databasePrediction = {
    'good': [
        'у вас сегодня будет замечательный день', // 1
        'сегодня можете остаться или выйти из дома', // 2
        'сегодня вас ждет удача и успех во всех начинаниях', // 3
        'сегодня вас ждет успех при изучении JavaScript', // 4
        'сегодня можете активничать или пролежать весь день на диване', // 5
        'сегодня вы точно ничего не забудете', // 6
        'устройте сегодня себе выходной - пусть весь мир подождет', // 7
    ],
    'bad': [
        'у вас сегодня будет ужасный день', // 1
        'сегодня лучше не выходите из дома', // 2
        'сегодня вас ждет разочарование', // 3
        'сегодня вас ждет разочарование при изучении JavaScript', // 4
        'сегодня однозначно полежите весь день на диване', // 5
        'сегодня вы рискуете что-нибудь забыть при выходе из дома', // 6
        'устройте сегодня себе много работы', // 7
    ]
};

let timer = document.getElementById('timer');
let text = document.getElementById('text');
let start = document.getElementById('start');
let stop = document.getElementById('stop');

let timerId;
let i;
let index;
let keys = Object.keys(databasePrediction);

start.addEventListener('click', function () {
    this.classList.remove('active');
    stop.classList.add('active');

    timerId = setInterval(function () {
        index = getRandomInt(0, 1);
        timer.textContent = i = getRandomInt(1, databasePrediction[keys[index]].length);
    }, 100);
})

stop.addEventListener('click', function () {
    this.classList.remove('active');
    clearInterval(timerId);
    text.textContent = databasePrediction[keys[index]][i - 1];
    text.style.color = index === 0 ? 'green' : text.style.color = 'red';
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}