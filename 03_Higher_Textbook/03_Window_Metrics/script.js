// Метрики окна


// 24) Размеры окна / Размеры окна в JavaScript
//
// Следующие свойства содержат размеры окна браузера, не включающие в себя полосу прокрутки:
// let w = document.documentElement.clientWidth;  // ширина
// let h = document.documentElement.clientHeight; // высота
//
// Следующие свойства включают в себя полосу прокрутки:
// let w = window.innerWidth;  // ширина
// let h = window.innerHeight; // высота
//
// Разница между двумя типами свойств дает размер полосы прокрутки:
// let w1 = document.documentElement.clientWidth;
// let w2 = window.innerWidth;
//
// console.log(w2 - w1);

// 1 По нажатию на кнопку выведите ширину и высоту окна.
//
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     console.log(`Ширина окна ${document.documentElement.clientWidth}`);
//     console.log(`Высота окна ${document.documentElement.clientHeight}`);
// });


// 2 По нажатию на кнопку проверьте наличие вертикальной прокрутки у окна.
//
// btn.addEventListener('click', function () {
//     if (document.documentElement.clientWidth === window.innerWidth) {
//         console.log('Нету вертикальной прокрутки у окна');
//     } else {
//         console.log('Есть вертикальная прокрутка у окна');
//     }
// });


// 3 По нажатию на кнопку проверьте наличие горизонтальной прокрутки у окна.
//
// btn.addEventListener('click', function () {
//     if (document.documentElement.clientHeight === window.innerHeight) {
//         console.log('Нету горизонтальной прокрутки у окна');
//     } else {
//         console.log('Есть горизонтальная прокрутка у окна');
//     }
// });


// 25) Размеры окна с учетом прокрутки / Размеры окна с учетом прокрутки в JavaScript
//
// Давайте получим размеры окна с учетом прокрученной части.
// К сожалению, удобного способа, работающего во всех браузерах - нет. Ниже приводятся работающие решения.
// Вникать в них не стоит, просто используйте.
//
// Высота с учетом прокрученной части:
// let scrollHeight = Math.max(
// 	document.body.scrollHeight, document.documentElement.scrollHeight,
// 	document.body.offsetHeight, document.documentElement.offsetHeight,
// 	document.body.clientHeight, document.documentElement.clientHeight
// );
//
// console.log(scrollHeight);
//
// Ширина с учетом прокрученной части:
// let scrollWidth = Math.max(
// 	document.body.scrollWidth, document.documentElement.scrollWidth,
// 	document.body.offsetWidth, document.documentElement.offsetWidth,
// 	document.body.clientWidth, document.documentElement.clientWidth
// );
//
// console.log(scrollWidth);

// 1 По нажатию на кнопку выведите высоту с учетом прокрученной части.
//
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     let scrollHeight = Math.max(
//         document.body.scrollHeight, document.documentElement.scrollHeight,
//         document.body.offsetHeight, document.documentElement.offsetHeight,
//         document.body.clientHeight, document.documentElement.clientHeight
//     );
//     console.log(scrollHeight);
// });


// 2 По нажатию на кнопку выведите ширину с учетом прокрученной части.
//
// btn.addEventListener('click', function () {
//     let scrollWidth = Math.max(
//         document.body.scrollWidth, document.documentElement.scrollWidth,
//         document.body.offsetWidth, document.documentElement.offsetWidth,
//         document.body.clientWidth, document.documentElement.clientWidth
//     );
//     console.log(scrollWidth);
// });


// 3 По нажатию на кнопку выведите высоту спрятанной под прокруткой части.
//
// btn.addEventListener('click', function () {
//     let scrollHeight = Math.max(
//         document.body.scrollHeight, document.documentElement.scrollHeight,
//         document.body.offsetHeight, document.documentElement.offsetHeight,
//         document.body.clientHeight, document.documentElement.clientHeight
//     );
//     console.log(`Высота спрятанной под прокруткой части ${scrollHeight - window.innerHeight}`);
// });


// 26) Получение прокрутки окна / Получение прокрутки окна в JavaScript
//
// Следующие свойства содержат то, на сколько прокручено окно (только для чтения):
//
// let x = window.pageXOffset; // слева
// let y = window.pageYOffset; // сверху

// 1 По нажатию на кнопку выведите, на сколько прокручено окно по вертикали.
//
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     console.log(window.pageYOffset); // устаревшее
//     console.log(window.scrollY); // актуальное
// });


// 2 По нажатию на кнопку выведите, на сколько осталось до конца прокрутки по вертикали.
//
// хз тут я не догнал
// btn.addEventListener('click', function () {
//     let remainingScroll = document.documentElement.scrollHeight - window.pageYOffset - window.innerHeight;
//     console.log(`Осталось до конца прокрутки по вертикали: ${remainingScroll}px`);
// });


// 27) Получение и изменение прокрутки окна / Получение и изменение прокрутки окна в JavaScript
//
// Следующие свойства содержат то, на сколько прокручено окно:
//
// let t = document.documentElement.scrollTop;  // сверху
// let l = document.documentElement.scrollLeft; // слева
//
// Эти свойства можно изменять, прокручивая окно в произвольную позицию:
//
// document.documentElement.scrollTop = 200;

// 1 По нажатию на кнопку прокрутите окно на позицию 300px сверху.
//
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     document.documentElement.scrollTop = 300;
// });


// 2 По нажатию на кнопку прокрутите окно на позицию 100px снизу.
//
// btn.addEventListener('click', function () {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight - window.innerHeight - 100;
// });


// 3 По нажатию на кнопку прокрутите окно на самый верх.
//
// btn.addEventListener('click', function () {
//     document.documentElement.scrollTop = 0;
// });


// 4 По нажатию на кнопку прокрутите окно на самый низ.
//
// btn.addEventListener('click', function () {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight - window.innerHeight;
// });


// 28) Метод для прокрутки окна в положение / Метод для прокрутки окна в положение в JavaScript
//
// Метод scrollTo прокручивает окно в заданное положение. Первым параметром он принимает положение по горизонтали,
// а вторым - по вертикали. Давайте прокрутим окно к заданному положению:
//
// window.scrollTo(100, 200);
//
// Метод имеет альтернативный синтаксис, в котором параметром передается объект.
// В ключе top этого объекта указывается положение по вертикали, в ключе left - положение по горизонтали,
// а в ключе behavior - тип прокрутки. Тип может быть 'auto' или 'smooth'. Во втором случае прокрутка будет плавной:
//
// element.scrollTo({
// 	top: 100,
// 	left: 100,
// 	behavior: 'smooth'
// });

// 1 По нажатию на кнопку прокрутите окно в позицию 300px сверху.
//
// let btn = document.querySelector('button');
// let elem = document.querySelector('#elem');
//
// btn.addEventListener('click', function () {
//     elem.scrollTo(0, 300);
// });


// 2 По нажатию на кнопку плавно прокрутите окно до самого верха.
//
// btn.addEventListener('click', function () {
//     elem.scrollTo({
//         top: 0,
//         left: 30,
//         behavior: 'smooth'
//     })
// });


// 3 По нажатию на кнопку плавно прокрутите окно до самого низа.
//
// btn.addEventListener('click', function () {
//     elem.scrollTo({
//         top: document.documentElement.scrollHeight - window.innerHeight
//     });
// });


// 29) Метод для прокрутки окна на величину / Метод для прокрутки окна на величину в JavaScript
//
// Метод scrollBy прокручивает окно на заданную величину от текущего положения. Первым параметром он принимает
// сдвиг по горизонтали, а вторым - по вертикали. Давайте прокрутим окно на заданные величины:
//
// window.scrollBy(100, 200);
//
// Выполним прокрутку в обратную сторону:
//
// window.scrollBy(-100, -200);
//
// Выполним плавную прокрутку:
//
// window.scrollBy({
// 	top: 100,
// 	left: 100,
// 	behavior: 'smooth'
// });

// 1 По нажатию на кнопку прокрутите окно на 100px вниз.
//
// let btn = document.querySelector('button');
// let elem = document.querySelector('#elem');
//
// btn.addEventListener('click', function () {
//     elem.scrollBy(50, 100);
// });


// 2 По нажатию на кнопку прокрутите окно на 100px вверх.
//
// btn.addEventListener('click', function () {
//     elem.scrollBy(0, -100);
// });


// 3 По нажатию на кнопку плавно прокрутите окно на 300px вниз.
//
// btn.addEventListener('click', function () {
//     elem.scrollBy({
//         top: 300,
//         left: 100,
//         behavior: 'smooth'
//     });
// });


// 4 По нажатию на кнопку плавно прокрутите окно на 300px вверх.
//
// btn.addEventListener('click', function () {
//     elem.scrollBy({
//         top: -300,
//         left: -1000,
//         behavior: 'smooth'
//     });
// });


// 30) Метод для прокрутки окна к элементу / Метод для прокрутки окна к элементу в JavaScript
//
// Метод scrollIntoView прокручивает окно к заданному элементу. Метод применяется к элементу,
// к которому следует прокрутить окно. Параметром метода регулируют, где должен оказаться элемент: сверху окна или снизу.
//
// Давайте посмотрим на примерах. Прокрутим окно так, чтобы элемент был сверху окна:
//
// elem.scrollIntoView(true);
//
// А теперь прокрутим окно так, чтобы элемент был снизу окна:
//
// elem.scrollIntoView(false);
//
// Можно также параметром передать объект с настройками. Давайте плавно прокрутим окно к элементу:
//
// elem.scrollIntoView({
// 	behavior: 'smooth',
// });
//
// Объект с настройками имеет также настройки выравнивания страницы по отношению к элементу.
// Настройка block задает вертикальное выравнивание, а настройка inline - горизонтальное.
// Они могут принимать следующие значения: 'start', 'center', 'end', 'nearest'.
//
// Давайте попробуем:
//
// elem.scrollIntoView({
// 	behavior: 'smooth',
// 	block: 'start',
// 	inline: 'end',
// });

// 1 Дан элемент и кнопка. По нажатию на кнопку прокрутите страницу к данному элементу.
// Опробуйте все описанные возможности.
//
// let btn = document.querySelector('button');
// let elem = document.querySelector('#elem');
//
// btn.addEventListener('click', function () {
//     // elem.scrollIntoView(false);
//     elem.scrollIntoView({
//         behavior: 'smooth',
//         block: 'end', // Эквивалент false
//         inline: 'end',
//     });
// });


// 31) Событие прокрутки / Событие прокрутки в JavaScript
//
// Существует событие scroll, с помощью которого можно поймать момент, когда пользователь прокручивает окно.
// Давайте попробуем:
//
// window.addEventListener('scroll', function() {
// 	console.log('!');
// });
//
// Будем выводить текущую прокрутку от верха сайта:
//
// window.addEventListener('scroll', function() {
// 	console.log(window.pageYOffset);
// });

// 1 При прокручивании страницы до конца, выведите сообщение об этом.

let btn = document.querySelector('button');
let elem = document.querySelector('#elem');

// window.addEventListener('scroll', function () {
//     const remainingScroll = document.documentElement.scrollHeight - window.innerHeight - window.pageYOffset;
//     if (remainingScroll === 0) {
//         console.log('Страница прокручена до конца');
//     }
// });

elem.addEventListener('scroll', function () {
    const remainingScroll = elem.scrollHeight - elem.clientHeight - elem.scrollTop;
    if (remainingScroll === 0) {
        console.log('Элемент прокручен до конца');
    }
});