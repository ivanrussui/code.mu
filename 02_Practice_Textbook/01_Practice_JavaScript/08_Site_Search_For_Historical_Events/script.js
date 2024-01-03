// 01_Practice_JavaScript
// Практика JavaScript


// 8 Сайт поиск исторических событий / Поиск исторических событий на JavaScript

// Пусть мы хотим написать сайт, показывающий таблицу исторических событий за определенный год.
// Пусть год будет вводится в инпут. По нажатию Enter давайте выведем таблицу событий, случившихся в этот год.
// Пусть в качестве информации о событии мы хотим видеть дату, название и описание события.
// Давайте я покажу вам образец того, что должно получится (для простоты я сделал события за 2000, 2001 и 2002 годы):


// 1 Продумайте, как удобнее всего хранить исторические события.
// 2 Реализуйте описанный сайт.


let database = {
    '2000': [
        {
            'data': '20.01.2000',
            'eventNumber': 'событие 1',
            'description': 'описание события 1'
        },
        {
            'data': '10.11.2000',
            'eventNumber': 'событие 2',
            'description': 'описание события 2'
        }
    ],
    '2001': [
        {
            'data': '10.01.2001',
            'eventNumber': 'событие 3',
            'description': 'описание события 3'
        },
        {
            'data': '22.07.2001',
            'eventNumber': 'событие 4',
            'description': 'описание события 4'
        },
        {
            'data': '11.09.2001',
            'eventNumber': 'событие 5',
            'description': 'описание события 5'
        }
    ],
    '2002': [
        {
            'data': '11.01.2002',
            'eventNumber': 'событие 6',
            'description': 'описание события 6'
        },
        {
            'data': '31.07.2002',
            'eventNumber': 'событие 7',
            'description': 'описание события 7'
        },
        {
            'data': '11.11.2002',
            'eventNumber': 'событие 8',
            'description': 'описание события 8'
        },
        {
            'data': '31.12.2002',
            'eventNumber': 'событие 9',
            'description': 'описание события 9'
        }
    ]
};

let table = document.querySelector('#table');
let input = document.querySelector('#input');

input.addEventListener('keypress', compareEventKey);

function compareEventKey(event) {
    if (event.key === 'Enter') {
        for (let key in database) {
            if (input.value === key) {
                cleanTable();
                createTable(key);
            }
        }
    }
}

function createTable(key) {
    for (let i = 0; i < database[key].length; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);

        for (let el in database[key][i]) {
            let td = document.createElement('td');
            td.textContent = database[key][i][el];
            tr.appendChild(td);
        }
    }
}

function cleanTable() {
    let trs = document.querySelectorAll('tr');
    for (let tr of trs) {
        tr.remove();
    }
}
