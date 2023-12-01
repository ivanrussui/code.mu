// 29_Timers_442-452
// Таймеры


// 442 Запуск таймера / Основы работы с функцией setInterval в JavaScript
//
// В данном уроке мы научимся работать с таймерами в JavaScript. Разобравшись с таймерами, вы сможете автоматически
// выполнять на странице какие-либо операции через заданный промежуток времени. К примеру, можно будет сделать слайдер
// картинок, в котором картинки будут меняться каждую секунду.
//
// Для работы с таймерами в JavaScript используется функция setInterval,
// которая запускает заданный код через определенные промежутки времени.
//
// Эта функция работает следующим образом: первым параметром она принимает исходный код функции,
// а вторым параметром - интервал, через который эта функция будет автоматически вызываться.
// Второй параметр задается в миллисекундах (1000 миллисекунд = 1 секунда).
//
// Давайте изучим работу функции на каком-нибудь примере.
// Например, напишем код, который каждую секунду будет что-нибудь выводить в консоль.
//
// Для начала сделаем функцию, выводящую что-нибудь в консоль:
//
// function timer() {
// 	console.log('!');
// }
// А теперь с помощью setInterval заставим созданную нами функцию выполнятся каждую секунду:
//
// setInterval(timer, 1000);
//
// function timer() {
// 	console.log('!');
// }
// Не обязательно создавать отдельную функцию - можно просто в первый параметр setInterval передать анонимную функцию,
// вот так:
//
// setInterval(function() {
// 	console.log('!');
// }, 1000);


// 1 Запустите таймер, который каждые 3 секунды будет что-нибудь выводить в консоль.
//
// setInterval(function () {
//     console.log('What\'s up bro?');
// }, 3000);


// 443 Счетчик на таймере / Счетчик через функцию setInterval в JavaScript
//
// Конечно же, не очень интересно то, что наш таймер каждый раз выводит одно и тоже.
// Давайте усложним нашу задачу и сделаем так, чтобы каждую секунду в консоль выводились числа по возрастанию:
// сначала 1, потом 2, потом 3 и так далее.
//
// Для этого нам понадобится переменная-счетчик, которая будет хранить свои значения между запусками функции.
// Несложно понять, что можно просто сделать глобальную переменную:
//
// let i = 0; // глобальная переменная
//
// setInterval(function() {
// 	i++;
// 	console.log(i);
// }, 1000);
// Перепишем более компактно:
//
// let i = 0;
// setInterval(function() {
// 	console.log(++i);
// }, 1000);
// Или еще более компактно через стрелочную функцию:
//
// let i = 0;
// setInterval(() => console.log(++i), 1000);


// 1 Пусть дана переменная, в которой изначально хранится число 100. Запустите таймер,
// который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
//
// let i = 100;
// setInterval(() => console.log(--i), 1000);


// 444 Остановка таймера / Остановка таймера JavaScript
//
// Вы уже знаете, как запустить таймер, давайте теперь научимся его останавливать. Для этого вам необходимо знать,
// что каждый таймер, запущенный с помощью функции setInterval, имеет уникальный номер.
// Этот номер возвращает функция setInterval в момент запуска таймера:
//
// let timerId = setInterval(function() {
// 	console.log('!')
// }, 1000);
//
// alert(timerId); // выведет номер таймера
// Для остановки таймера используется функция clearInterval, которая принимает уникальный номер того таймера,
// который нужно остановить.
//
// Для примера давайте запустим таймер, выводящий в консоль числа по возрастанию, начиная с 1.
// Остановим таймер, как только на экран будет выведено число 10:
//
// let i = 0;
//
// let timerId = setInterval(function() {
// 	console.log(++i);
//
// 	if (i >= 10) {
// 		clearInterval(timerId);
// 	}
// }, 1000);


// 1 Пусть дана переменная, в которой изначально хранится число 10. Запустите таймер, который каждую секунду будет
// уменьшать значение этой переменной на 1 и выводить это значение в консоль.
// Как только значение переменной достигнет нуля - остановите таймер.
//
// let i = 10;
//
// let timerId = setInterval(function () {
//     console.log(--i);
//
//     i === 0 && clearInterval(timerId);
// }, 1000);


// 445 Кнопки для запуска таймера / Кнопка для запуска таймера на JavaScript
//
// В предыдущих уроках наш таймер начинал свою работу сразу по загрузке страницы.
// Давайте теперь сделаем кнопку, по нажатию на которую будет запускаться наш таймер:
//
// <button id="start">start</button>
// Напишем соответствующий JavaScript:
//
// let start = document.querySelector('#start');
//
// start.addEventListener('click', function() {
// 	let i = 0;
//
// 	setInterval(function() {
// 		console.log(++i);
// 	}, 1000);
// });


// 1 Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
//
// let start = document.querySelector('#start');
//
// start.addEventListener('click', function () {
//     let i = 100;
//
//     setInterval(() => console.log(i--), 1000);
// });


// 446 Многократный запуск / Многократное нажатие на кнопку для запуска таймера на JavaScript
//
// Код, приведенный мною выше, на самом деле имеет некоторую проблему. Эта проблема проявляется в том случае,
// если на нашу кнопку сделать несколько кликов. В этом случае каждый клик будет приводить к запуску нового таймера.
//
// То есть, к примеру, три нажатия на кнопку приведут к тому, что будет запущено три таймера,
// и каждый из этих таймеров будет выводить значение счетчика в консоль.
// Это значит, что значения будут меняться в три раза быстрее!
//
// Для решения описанной проблемы нужно просто сделать так, чтобы повторное нажатие на кнопку не приводило к новому
// запуску таймера. Например, можно после старта таймера отвязывать от кнопки привязанный обработчик клика:
//
// let start = document.querySelector('#start');
//
// start.addEventListener('click', function func() {
// 	let i = 0;
//
// 	setInterval(function() {
// 		console.log(++i);
// 	}, 1000);
//
// 	this.removeEventListener('click', func); // отвязываем обработчик
// });


// 1 Возьмите ваше решение предыдущей задачи.
// Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.
//
// let start = document.querySelector('#start');
//
// start.addEventListener('click', function func () {
//     let i = 100;
//
//     setInterval(() => console.log(i--), 1000);
//
//     this.removeEventListener('click', func);
// });


// 447 Кнопки для остановки / Кнопки для запуска и остановки таймера на JavaScript
//
// Давайте теперь сделаем две кнопки: по нажатию на первую пусть таймер запускается,
// а по нажатию на вторую - останавливается. Здесь уже все будет не так просто и нас ждет подвох.
// Для того, чтобы понять суть этого подвоха, распишу создание кода по шагам.
//
// Итак, делаем две кнопочки:
//
// <button id="start">start</button>
// <button id="stop">stop</button>
// Получаем ссылки на эти кнопки в переменные:
//
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// По нажатию на первую кнопку стартуем таймер, записав его номер в переменную:
//
// start.addEventListener('click', function() {
// 	let timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });
// А теперь остановим таймер по нажатию на вторую кнопку:
//
// start.addEventListener('click', function() {
// 	let timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });
//
// // Останавливаем таймер:
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
// Однако, если попытаться запустить приведенный выше код, нас ждет сюрприз: при попытке остановить таймер окажется,
// что переменная timerId равна undefined! Почему так произошло? Потому при запуске таймера мы сделали нашу
// переменную timerId локальной внутри функции, привязанной к кнопке start.
//
// Для решения проблемы сделаем переменную timerId глобальной - в этом случае она будет доступна как в функции
// запуска таймера, так и в функции остановки:
//
// let timerId; // сделаем переменную глобальной
//
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });
//
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 1 Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки.
// По нажатию на первую кнопку запустите таймер, который каждую секунду будет уменьшать значение переменной на 1
// и выводить новое значение в консоль. Как только значение переменной достигнет нуля - остановите таймер.
//
// По нажатию на вторую кнопку остановите таймер.
// Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.
//
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let i = 100;
// let timerId;
//
// чуть доработал задачу еще до 6й там как раз про это)
// function startTimer() {
//     timerId = setInterval(() => {
//         console.log(--i);
//         i === 0 && clearInterval(timerId);
//     }, 1000);
//
//     this.removeEventListener('click', startTimer);
// }
//
// function stopTimer() {
//     clearInterval(timerId);
//     start.addEventListener('click', startTimer);
// }
//
// start.addEventListener('click', startTimer);
// stop.addEventListener('click', stopTimer);


// 2 Некоторый программист написал код, который по нажатию на кнопку запускает таймер,
// выводящий в консоль текущий момент времени:
//
// <input type="submit" id="start" value="start">
// <input type="submit" id="stop"  value="stop">
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
//
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
//
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
// После запуска кода, однако, оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.


// 3 Еще один программист также написал код для решения предыдущей задачи:
//
// <input type="submit" id="start" value="start">
// <input type="submit" id="stop"  value="stop">
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
//
// let timerId;
//
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
//
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
// После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.


// 4 Еще один программист также написал код для решения предыдущей задачи:
//
// <input type="submit" id="start" value="start">
// <input type="submit" id="stop"  value="stop">
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
//
// let timerId;
//
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
//
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
// После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.


// 5 Еще один программист также написал код для решения предыдущей задачи:
//
// <input type="submit" id="start" value="start">
// <input type="submit" id="stop"  value="stop">
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
//
// let timerId;
//
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
//
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });
// После запуска кода, однако, опять оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.


// 6 Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий.
// Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки,
// а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.
//
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
//
// function startTimer() {
//     timerId = setInterval(function() {
//         console.log('!')
//     }, 1000);
//
//     this.removeEventListener('click', startTimer);
// }
//
// function stopTimer() {
//     clearInterval(timerId);
//
//     start.addEventListener('click', startTimer);
// }
//
// start.addEventListener('click', startTimer);
// stop.addEventListener('click', stopTimer);


// 448 Работа с DOM / Практика на таймеры и работу с DOM в JavaScript