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
    'Овен':
        {
            'сегодня': 'Овен сегодня вас ожидает отличный день',
            'завтра': 'Овен завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Овен послезавтра вас ожидает лучший день в этом году'
        },
    'Телец':
        {
            'сегодня': 'Телец сегодня вас ожидает отличный день',
            'завтра': 'Телец завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Телец послезавтра вас ожидает лучший день в этом году'
        },
    'Близнецы':
        {
            'сегодня': 'Близнецы сегодня вас ожидает отличный день',
            'завтра': 'Близнецы завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Близнецы послезавтра вас ожидает лучший день в этом году'
        },
    'Рак':
        {
            'сегодня': 'Рак сегодня вас ожидает отличный день',
            'завтра': 'Рак завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Рак послезавтра вас ожидает лучший день в этом году'
        },
    'Лев':
        {
            'сегодня': 'Лев сегодня вас ожидает отличный день',
            'завтра': 'Лев завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Лев послезавтра вас ожидает лучший день в этом году'
        },
    'Дева':
        {
            'сегодня': 'Дева сегодня вас ожидает отличный день',
            'завтра': 'Дева завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Дева послезавтра вас ожидает лучший день в этом году'
        },
    'Весы':
        {
            'сегодня': 'Весы сегодня вас ожидает отличный день',
            'завтра': 'Весы завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Весы послезавтра вас ожидает лучший день в этом году'
        },
    'Скорпион':
        {
            'сегодня': 'Скорпион сегодня вас ожидает отличный день',
            'завтра': 'Скорпион завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Скорпион послезавтра вас ожидает лучший день в этом году'
        },
    'Стрелец':
        {
            'сегодня': 'Стрелец сегодня вас ожидает отличный день',
            'завтра': 'Стрелец завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Стрелец послезавтра вас ожидает лучший день в этом году'
        },
    'Козерог':
        {
            'сегодня': 'Козерог сегодня вас ожидает отличный день',
            'завтра': 'Козерог завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Козерог послезавтра вас ожидает лучший день в этом году'
        },
    'Водолей':
        {
            'сегодня': 'Водолей сегодня вас ожидает отличный день',
            'завтра': 'Водолей завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Водолей послезавтра вас ожидает лучший день в этом году'
        },
    'Рыбы':
        {
            'сегодня': 'Рыбы сегодня вас ожидает отличный день',
            'завтра': 'Рыбы завтра вас ожидает лучший день в текущем месяце',
            'послезавтра': 'Рыбы послезавтра вас ожидает лучший день в этом году'
        }
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

let flag = false;

input.addEventListener('keydown', compareEventKey);

function compareEventKey(event) {
    let zodiac = '';

    if (flag === false) {
        if (event.key === 'Enter') {
            updateZodiacAndSetRadioHandlers(zodiac)
            console.log('flag', flag);
            flag = true;
            console.log('flag', flag);
            return flag;
        }
    } else {
        input.addEventListener('change', function () {
            updateZodiacAndSetRadioHandlers(zodiac)
        })
    }
}

function updateZodiacAndSetRadioHandlers(zodiac) {
    let newStr = changeValue(input.value);

    if (newStr) {
        zodiac = compareZodiacDates(newStr);

        for (let radio of radios) {
            radio.addEventListener('change', () => goThroughTheRadio(radio, zodiac));
            goThroughTheRadio(radio, zodiac);
        }
    }
}

// else if
// function compareZodiacDates(newStr) {
//     if (newStr >= '03.21' && newStr <= '04.20') {
//         // console.log('sssss');
//         return 'Овен';
//     } else if (newStr >= '04.21' && newStr <= '05.20') {
//         return 'Телец';
//     } else if (newStr >= '05.21' && newStr <= '06.21') {
//         return 'Близнецы';
//     } else if (newStr >= '06.22' && newStr <= '07.22') {
//         return 'Рак';
//     } else if (newStr >= '07.23' && newStr <= '08.23') {
//         return 'Лев';
//     } else if (newStr >= '08.24' && newStr <= '09.23') {
//         return 'Дева';
//     } else if (newStr >= '09.24' && newStr <= '10.23') {
//         return 'Весы';
//     } else if (newStr >= '10.24' && newStr <= '11.22') {
//         return 'Скорпион';
//     } else if (newStr >= '11.23' && newStr <= '12.21') {
//         return 'Стрелец';
//     } else if (newStr >= '12.22' && newStr <= '01.20') {
//         return 'Козерог';
//     } else if (newStr >= '01.21' && newStr <= '02.20') {
//         return 'Водолей';
//     } else if (newStr >= '02.21' && newStr <= '03.20') {
//         return 'Рыбы';
//     }
// }

// switch case
function compareZodiacDates(newStr) {
    switch (true) {
        case (newStr >= '03.21' && newStr <= '04.20'):
            return 'Овен';
        case (newStr >= '04.21' && newStr <= '05.20'):
            return 'Телец';
        case (newStr >= '05.21' && newStr <= '06.21'):
            return 'Близнецы';
        case (newStr >= '06.22' && newStr <= '07.22'):
            return 'Рак';
        case (newStr >= '07.23' && newStr <= '08.23'):
            return 'Лев';
        case (newStr >= '08.24' && newStr <= '09.23'):
            return 'Дева';
        case (newStr >= '09.24' && newStr <= '10.23'):
            return 'Весы';
        case (newStr >= '10.24' && newStr <= '11.22'):
            return 'Скорпион';
        case (newStr >= '11.23' && newStr <= '12.21'):
            return 'Стрелец';
        case (newStr >= '12.22' && newStr <= '01.20'):
            return 'Козерог';
        case (newStr >= '01.21' && newStr <= '02.20'):
            return 'Водолей';
        case (newStr >= '02.21' && newStr <= '03.20'):
            return 'Рыбы';
        default:
            return alert('Неверная дата');
    }
}


function showAMessageAboutDataIncorrectness() {
    alert('Введите дату рождения в формате год месяц число или число месяц год. ' +
        'С любым из разделителей между числами: пробел - . , : ; / | \\ ');
}


function changeValue(value) {
    // console.log('input.value', value);

    let arr = value.split(/[-.\/\\|,;: ]/); // немного регулярок :)

    // console.log(arr);
    if (arr[0].length < 4) {
        // console.log('ooo');
        arr.reverse();
    }


    arr.shift();
    // console.log('arr after', arr);

    // let str = arr.substring(5);
    // console.log(arr.shift());

    if (arr.length < 2) {
        return showAMessageAboutDataIncorrectness();
    }

    addZero(arr);
    // console.log('before', arr);

    // console.log('after', arr);
    return arr.join('.');
}

function addZero(arr) {
    // по сути addZero эти 2 перебора и все
    for (let i = 0; i < arr.length; i++) {
        arr[i] = +arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && arr[i] <= 9) {
            arr[i] = '0' + arr[i];
        }
    }
}

function goThroughTheRadio(radio, zodiac) {
    if (radio.checked) {
        // console.log('radio.checked', radio.checked);
        paragraph.textContent = databaseHoroscope[zodiac][radio.value];
    }
}


// function addZero(str) {
//     console.log('input.value', str);
//     let arr = str.split('.');
//
//     if (arr[0].length < 4) {
//         console.log('ooo');
//         arr.reverse();
//     }
//
//     console.log('arr after', arr);
//
//     if (arr.length < 2) {
//         return showAMessageAboutDataIncorrectness();
//     }
//
//     // console.log('before', arr);
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = +arr[i];
//         // console.log('d',arr[i]);
//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 0 && arr[i] <= 9) {
//             // console.log('a', arr[i]);
//             arr[i] = '0' + arr[i];
//         }
//     }
//     // console.log('after', arr);
//     return arr.join('.');
// }