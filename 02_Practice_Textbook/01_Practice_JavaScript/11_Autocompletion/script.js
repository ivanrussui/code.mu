// 01_Practice_JavaScript
// Практика JavaScript


// 11 Автодополнение / Автодополнение на JavaScript

// Сейчас мы реализуем автодополнение. Под этим термином понимается выпадающая подсказка при вводе текста в инпут.
// Давайте посмотрим на примере. Ниже я сделал инпут, в который можно ввести название страны.
// При этом, если ввести какие-то буквы, то под инпутом появится список стран, которые начинаются на введенную строку.
//
// При желании можно, чтобы не вводить целиком имя страны, кликнуть мышкой на любую страну и она появится в инпуте.
// Для этого, в общем-то, автодополнение и нужно. В примере для простоты я сделал только три страны: Belarus, Belgium
// и Bulgaria. Введите в приведенный ниже инпут сначала символ 'В' английское, а потом 'e' и посмотрите, что будет:


// Обсуждение

// Давайте обсудим, как решать задачу. Нужно сделать массив с названиями стран. У меня он вот такой:
//
// let arr  = ['Belarus', 'Belgium', 'Bulgaria'];
// При вводе текста в инпут нужно по вводу каждого символа перебирать массив со странами и получать страны,
// которые начинаются на введенную строку. Это удобно делать с помощью методов filter и startsWith.
//
// С помощью filter можно получить массив стран, начинающихся с введенной строки.
// Затем нужно перебрать этот массив циклом и заполнить список ul лишками со странами.
// И так нужно делать на каждый ввод символа, предварительно удаляя из улки ранее созданные лишки.
//
// Для вашего удобства привожу готовую верстку:


// 1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте автодополнение согласно описанному алгоритму.

let arr = [
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Belarus', 'Belgium', 'Brazil', 'Bulgaria',
    'Canada', 'China', 'Colombia', 'Cuba', 'Cyprus', 'Czech',
    'Denmark', 'Dominican',
    'Egypt', 'Estonia',
    'Finland', 'France',
    'Georgia', 'Germany', 'Greece',
    'Haiti', 'Hungary',
    'Iceland', 'India', 'Ireland', 'Italy',
    'Jamaica', 'Japan',
    'Kazakhstan',
    'Latvia', 'Lithuania',
    'Mexico', 'Moldova', 'Monaco',
    'Netherlands', 'Norway',
    'Oman',
    'Poland', 'Portugal',
    'Qatar',
    'Romania', 'Russia',
];

let input = document.querySelector('#elem');
let ul = document.querySelector('#list');

input.addEventListener('input', function () {
    // через функцию удаления li
    deleteList();

    function deleteList() {
        let lis = document.querySelectorAll('li');
        for (const li of lis) {
            li.remove();
        }
    }

    // вместо функции deleteList, можно просто присваивать пустую строку)
    // ul.textContent = '';

    let res;
    if (input.value) {
        let str = input.value[0].toUpperCase() + input.value.substring(1);
        res = arr.filter(elem => elem.startsWith(str));
    }

    // console.log('res', res);

    for (let el of res) {
        let li = document.createElement('li');
        li.textContent = el;
        ul.append(li);

        li.addEventListener('click', function () {
            input.value = this.textContent;
            deleteList();
            // ul.textContent = '';
        });
    }
});
