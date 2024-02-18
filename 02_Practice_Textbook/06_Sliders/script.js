// 06_Sliders
// Слайдеры


// 37 Слайдер текста / Слайдер текста на JavaScript
//
// В данном разделе мы займемся созданием слайдеров. Начнем с самых простых и будем постепенно усложнять.
//
// Для начала сделаем слайдер текста. Этот слайдер будет представлять собой див, в котором каждую секунду будет
// меняться текст:
//
// <div id="slider"></div>
// Тексты для слайдера мы будем хранить в массиве:
//
// let texts = ['text1', 'text2', 'text3'];
// Алгоритм решения будет следующий: нужно запустить таймер, который каждую секунду будет вставлять в наш див новый
// элемент массива - сначала первый, потом второй, потом третий, а потом снова первый и так далее по кругу.


// 1 Реализуйте описанный слайдер.
//
// const texts = ['text1', 'text2', 'text3'];
//
// const slider = document.getElementById('slider');
//
// let counter = 0;
// const setSlider = () => {
//     slider.textContent = texts[counter];
//     counter++;
//     if (counter === texts.length) {
//         counter = 0;
//     }
// }
//
// setInterval(setSlider, 1000);


// 38 Слайдер текста со стрелками / Слайдер текста со стрелками на JavaScript
//
// Давайте теперь сделаем слайдер текста со стрелками. Это значит, что текст будет меняться не по таймеру,
// а по нажатию на стрелку. Добавим стрелки в наш HTML код:
//
// <a href="" id="left">←</a>
// <a href="" id="right">→</a>
// <div id="slider"></div>
// Основная тонкость решения этого слайдера в том, что переменная-счетчик текстов должна быть общей для
// обработчиков кликов наших стрелок:
//
// let i = 0; // внешняя переменная
//
// left.addEventListener('click', function() {
// 	// уменьшаем i на 1
// 	// и выводим текст с номером i
// });
// right.addEventListener('click', function() {
// 	// увеличиваем i на 1
// 	// и выводим текст с номером i
// });
// А вторая тонкость в том, что как при уменьшении i, так и при увеличении, нельзя выйти в числа меньше нуля и
// больше последнего элемента массива.


// 1 Реализуйте описанный слайдер. Сделайте так, чтобы тексты ходили по кругу.
//
// const texts = ['text1', 'text2', 'text3'];
//
// let i = 0;
//
// const left = document.getElementById('left');
// const right = document.getElementById('right');
// const slider = document.getElementById('slider');
//
// const setI = () => slider.textContent = texts[i];
//
// setI();

// left.addEventListener('click', function (event) {
//     event.preventDefault();
//     i--;
//     if (i < 0) {
//         i = texts.length - 1;
//     }
//     setI();
// });
//
// right.addEventListener('click', function (event) {
//     event.preventDefault();
//     i++;
//     if (i === texts.length) {
//         i = 0;
//     }
//     setI();
// });

// сделал универсальный обработчик для стрелок
// const universalHandler = (event, increase) => {
//     event.preventDefault();
//     if (increase) {
//         i++;
//         (i === texts.length) && (i = 0);
//     } else {
//         i--;
//         (i < 0) && (i = texts.length - 1);
//     }
//     setI();
// };
//
// left.addEventListener('click', (event) => universalHandler(event, false));
// right.addEventListener('click', (event) => universalHandler(event, true));

// убираю подчеркивание у ссылок
// const removeUnderline = selector => selector.style.textDecoration = 'none';
//
// removeUnderline(left);
// removeUnderline(right);


// 2 Модифицируйте предыдущую задачу так, чтобы тексты не ходили по кругу,
// а просто не прокручивались дальше по достижению крайнего правого или левого положения.
//
// const texts = ['text1', 'text2', 'text3'];
//
// let i = 0;
//
// const left = document.getElementById('left');
// const right = document.getElementById('right');
// const slider = document.getElementById('slider');
//
// const removeUnderline = selector => selector.style.textDecoration = 'none';
//
// removeUnderline(left);
// removeUnderline(right);
//
// const setI = () => slider.textContent = texts[i];
//
// setI();
//
//
// // вариант самый простой с отрицанием в условии
// // function leftClickHandler(event) {
// //     event.preventDefault();
// //     if (i !== 0) {
// //         i--;
// //         setI(); // лучше в условии чтобы лишний раз не срабатывала функция
// //     }
// // }
// //
// // function rightClickHandler(event) {
// //     event.preventDefault();
// //     if (i !== texts.length - 1) {
// //         i++;
// //         setI();
// //     }
// // }
// //
// // left.addEventListener('click', leftClickHandler);
// // right.addEventListener('click', rightClickHandler);
//
//
// // универсальный обработчик с отрицанием в условии
// const universalHandler = (...rest) => {
//     const [event, increase] = rest;
//     event.preventDefault();
//
//     if (increase) {
//         if (i !== texts.length - 1) {
//             i++;
//             setI(); // лучше в условии чтобы лишний раз не срабатывала функция
//         }
//     } else {
//         if (i !== 0) {
//             i--;
//             setI();
//         }
//     }
// };
// left.addEventListener('click', (event) => universalHandler(event, false));
// right.addEventListener('click', (event) => universalHandler(event, true));


// вариант с удалением обработчиков
// function leftClickHandler(event) {
//     event.preventDefault();
//     if (i === 0) {
//         removeEventListener('click', leftClickHandler);
//     } else {
//         i--;
//         setI();
//     }
// }
//
// function rightClickHandler(event) {
//     event.preventDefault();
//     if (i === texts.length - 1) {
//         removeEventListener('click', rightClickHandler);
//     } else {
//         i++;
//         setI();
//     }
// }
//
// left.addEventListener('click', leftClickHandler);
// right.addEventListener('click', rightClickHandler);


// универсальный обработчик с удалением обработчиков как по мне запутано и логика усложнена (излишняя)
// const universalHandler = (...rest) => {
//     const [event, increase] = rest;
//     event.preventDefault();
//
//     if (increase) {
//         if (i === texts.length - 1) {
//             removeEventListener('click', universalHandler);
//         } else {
//             i++;
//             setI();
//         }
//     } else {
//         if (i === 0) {
//             removeEventListener('click', universalHandler);
//         } else {
//             i--;
//             setI();
//         }
//     }
// };
//
// left.addEventListener('click', (event) => universalHandler(event, false));
// right.addEventListener('click', (event) => universalHandler(event, true));


// 39 Слайдер картинок через массив / Слайдер картинок через массив на JavaScript
//
// Давайте теперь сделаем слайдер картинок. Пусть в HTML коде у нас дан тег img:
//
// <img id="slider" src="">
// Пусть также у нас дан массив картинок:
//
// let texts = ['1.png', '2.png', '3.png'];
// Давайте сделаем так, чтобы каждую секунду в теге img появлялась новая картинка из нашего массива.


// 1  Реализуйте описанный слайдер. Сделайте так, чтобы картинки ходили по кругу.
//
// const texts = ['1.png', '2.png', '3.png'];
//
// const slider = document.getElementById('slider');
//
// let counter = 0;
// setInterval(() => {
//     slider.src = texts[counter];
//     slider.setAttribute('alt', 'technologies');
//     counter++;
//     (counter === texts.length) && (counter = 0);
// }, 1000);


// 2 Модифицируйте предыдущую задачу так, чтобы над картинкой также появились стрелки вперед и назад.
// То есть слайдер будет сам проматываться таймером, но при желании юзер также сможет промотать его ссылками.
//
const texts = ['1.png', '2.png', '3.png'];

const slider = document.getElementById('slider');
const left = document.createElement('a');
const right = document.createElement('a');
const div = document.createElement('div');

slider.before(div);
div.append(left, right);

// left.textContent = '←';
// right.textContent = '→';
//
// left.classList.add('left');
// right.classList.add('right');
//
// left.setAttribute('href', '');
// right.setAttribute('href', '');

// вместо настроек выше сделал функцию с параметрами
function setParameters(selector, img, className) {
    if (img) {
        selector.textContent = img;
        selector.setAttribute('href', '');
    }
    selector.classList.add(`${className}`);
}

setParameters(left, '←', 'left');
setParameters(right, '→', 'right');
setParameters(div, '', 'parent');


let counter = 0;

const setCount = () => slider.src = texts[counter];

setCount();

slider.setAttribute('alt', 'technologies');

// функция выполняющая логику при увеличении или уменьшении счетчика
const setCounterCondition = increase => {
    if (increase) {
        counter++;
        (counter === texts.length) && (counter = 0);
    } else {
        counter--;
        (counter < 0) && (counter = texts.length - 1);
    }
};

// left.addEventListener('click', e => {
//     e.preventDefault();
//     setCounterCondition(false);
//     setCount();
// });
//
// right.addEventListener('click', e => {
//     e.preventDefault();
//     setCounterCondition(true);
//     setCount();
// });

// вместо 2х обработчиков выше 1н)
const universalHandler = (...rest) => {
    const [e, increase] = rest;

    e.preventDefault();
    setCounterCondition(increase);
    setCount();
};

left.addEventListener('click', e => universalHandler(e, false));
right.addEventListener('click', e => universalHandler(e, true));

setInterval(() => {
    setCounterCondition(true);
    setCount();
}, 1000);