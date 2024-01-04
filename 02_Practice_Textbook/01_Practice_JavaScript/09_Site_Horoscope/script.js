// 01_Practice_JavaScript
// Практика JavaScript


// 9 Сайт гороскоп / Гороскоп на JavaScript

// Сейчас мы реализуем сайт-гороскоп. Этот сайт будет выдавать гороскопы на сегодня.
// Пусть пользователь по заходу на сайт видит инпут, в который нужно вбить дату своего рождения.
// Пусть по нажатию Enter наш сайт выдаст пользователю гороскоп на текущий день за его знак Зодиака.
//
// Пусть также у нас будут радиокнопки: сегодня, завтра, послезавтра.
// Сделаем так, чтобы в зависимости от выбора выводился гороскоп на соответствующий день.
// Очевидно, что по умолчанию будет выбрано сегодня, но пользователь при желании может изменить свой выбор.


// 1 Продумайте, как вы будете хранить гороскопы в соответствии с поставленной задачей.
// 2 Реализуйте показ гороскопа за текущий день.
// 3 А теперь реализуйте работу радиокнопок, позволяющих выбрать день, за который нужно показать гороскоп.

let databaseHoroscope = {
    'Овен': [
        {
            'сегодня': 'Овен сегодня вас ожидает отличный день',
            'завтра': 'Овен завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Овен послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Телец': [
        {
            'сегодня': 'Телец сегодня вас ожидает отличный день',
            'завтра': 'Телец завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Телец послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Близнецы': [
        {
            'сегодня': 'Близнецы сегодня вас ожидает отличный день',
            'завтра': 'Близнецы завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Близнецы послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Рак': [
        {
            'сегодня': 'Рак сегодня вас ожидает отличный день',
            'завтра': 'Рак завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Рак послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Лев': [
        {
            'сегодня': 'Лев сегодня вас ожидает отличный день',
            'завтра': 'Лев завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Лев послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Дева': [
        {
            'сегодня': 'Дева сегодня вас ожидает отличный день',
            'завтра': 'Дева завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Дева послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Весы': [
        {
            'сегодня': 'Весы сегодня вас ожидает отличный день',
            'завтра': 'Весы завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Весы послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Скорпион': [
        {
            'сегодня': 'Скорпион сегодня вас ожидает отличный день',
            'завтра': 'Скорпион завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Скорпион послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Стрелец': [
        {
            'сегодня': 'Стрелец сегодня вас ожидает отличный день',
            'завтра': 'Стрелец завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Стрелец послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Козерог': [
        {
            'сегодня': 'Козерог сегодня вас ожидает отличный день',
            'завтра': 'Козерог завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Козерог послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Водолей': [
        {
            'сегодня': 'Водолей сегодня вас ожидает отличный день',
            'завтра': 'Водолей завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Водолей послезавтра вас ожидает лучший день в этом году'
        },
    ],
    'Рыбы': [
        {
            'сегодня': 'Рыбы сегодня вас ожидает отличный день',
            'завтра': 'Рыбы завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Рыбы послезавтра вас ожидает лучший день в этом году'
        },
    ],
};

let datesHoroscope = [
    '03.21 - 04.20',
    '04.21 - 05.20',
    '05.21 - 06.21',
    '06.22 - 07.22',
    '07.23 - 08.23',
    '08.24 - 09.23',
    '09.24 - 10.23',
    '10.24 - 11.22',
    '11.23 - 12.21',
    '12.22 - 01.20',
    '01.21 - 02.20',
    '02.21 - 03.20',
];

// console.log(databaseHoroscope);

let input = document.querySelector('#input');
let paragraph = document.querySelector('p');
let radios = document.querySelectorAll('input[type="radio"]');

// console.log(radios);

input.addEventListener('keydown', compareEventKey);

function compareEventKey(event) {
    if (event.key === 'Enter') {
        let str = input.value.substring(5);
        // console.log(str);
        if (str >= '03.21' && str <= '04.20') {
            // console.log('овен');
            let zodiac = 'Овен';
            for (let radio of radios) {
                // console.log(radio);
                // if (radio.checked) {
                //     paragraph.textContent = databaseHoroscope["овен"][0][radio.value];
                // }
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else if (str >= '04.21' && str <= '05.20') {
            // console.log('телец');
            let zodiac = 'Телец';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
                // if (radio.checked) {
                //     paragraph.textContent = databaseHoroscope["телец"][0][radio.value];
                // }
            }
        } else if (str >= '05.21' && str <= '06.21') {
            let zodiac = 'Близнецы';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else if (str >= '06.22' && str <= '07.22') {
            let zodiac = 'Рак';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else if (str >= '07.23' && str <= '08.23') {
            let zodiac = 'Лев';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else if (str >= '08.24' && str <= '09.23') {
            let zodiac = 'Дева';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else if (str >= '09.24' && str <= '10.23') {
            let zodiac = 'Весы';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else if (str >= '10.24' && str <= '11.22') {
            let zodiac = 'Скорпион';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else if (str >= '11.23' && str <= '12.21') {
            let zodiac = 'Стрелец';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else if (str >= '12.22' && str <= '01.20') {
            let zodiac = 'Козерог';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else if (str >= '01.21' && str <= '02.20') {
            let zodiac = 'Водолей';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else if (str >= '02.21' && str <= '03.20') {
            let zodiac = 'Рыбы';
            for (let radio of radios) {
                goThroughTheRadios(radio, zodiac);
                radio.addEventListener('change', () => goThroughTheRadios(radio, zodiac));
            }
        } else {
            alert('Введите дату рождения в формате год.месяц.число например: 1989.07.31')
        }


        // for (let key in databaseHoroscope) {
        //     // console.log(databaseHoroscope[key]);
        // }
    }

}

function goThroughTheRadios(radio, zodiac) {
    if (radio.checked) {
        paragraph.textContent = databaseHoroscope[zodiac][0][radio.value];
    }
}




















