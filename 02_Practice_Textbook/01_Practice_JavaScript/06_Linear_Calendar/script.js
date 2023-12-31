// 01_Practice_JavaScript
// Практика JavaScript


// 6 Линейный календарь / Линейный календарь на JavaScript

// 1 Выведите в виде списка ul все числа текущего месяца. Средствами CSS поставьте пункты списка в ряд.

let title = document.querySelector('h1');
let ul = document.createElement('ul');
title.insertAdjacentElement("afterend", ul);

let now = new Date();
let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

for (let i = 1; i <= lastDay.getDate(); i++) {
    let li = document.createElement('li');
    li.textContent = i.toString();
    ul.append(li);
    ul.classList.add('list');
    li.classList.add('list-item');
}


// 2 Сделайте так, чтобы текущий день в календаре был выделен каким-нибудь цветом.

let currentDay = date.getDate();
let lis = document.querySelectorAll('li');

for (let li of lis) {
    if (+li.textContent === currentDay) {
        li.classList.add('active');
    }
}


// 3 Сделайте так, чтобы над списком было написано название текущего месяца по-русски и номер года.

let subtitle = document.createElement('h3');
title.insertAdjacentElement('afterend', subtitle);

let months = [
    'январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'
];

let currentMonth;

// вариант через getMonth более лаконичен
let month = date.getMonth();
currentMonth = months[month];

// вариант через цикл
// for (let i = 0; i < months.length; i++) {
//     currentMonth = months[i];
// }

let year = date.getFullYear();

subtitle.textContent = `Текущий месяц: ${currentMonth}, текущий год: ${year}`;


// 4 Сделайте так, чтобы над календарем появились ссылки вперед и назад, позволяющие менять месяц.
// Месяц и год, выводимые над календарем, должны соответствовать отображаемому месяцу.

let div = document.createElement('div');
let btnPrevious = document.createElement('button');
let btnNext = document.createElement('button');

subtitle.insertAdjacentElement('afterend', div);
div.append(btnPrevious, btnNext);

btnPrevious.textContent = 'Предыдущий месяц';
btnNext.textContent = 'Следующий месяц';

div.classList.add('block');
btnPrevious.classList.add('btn');
btnNext.classList.add('btn');

btnNext.addEventListener('click', function () {
    currentMonth = months[++month];

    if (month === months.length) {
        currentMonth = months[month = 0];
        year++;
    }

    subtitle.textContent = `Текущий месяц: ${currentMonth}, текущий год: ${year}`;
});

btnPrevious.addEventListener('click', function () {
    currentMonth = months[--month];

    if (month < 0) {
        currentMonth = months[month = months.length - 1];
        year--;
    }

    subtitle.textContent = `Текущий месяц: ${currentMonth}, текущий год: ${year}`;
});
