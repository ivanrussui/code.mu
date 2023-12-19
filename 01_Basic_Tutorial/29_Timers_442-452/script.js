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
//
// Пусть у нас дан инпут:
//
// <input id="elem" value="1">
// Давайте сделаем таймер, который каждую секунду увеличивать значение атрибута value нашего инпута на единицу:
//
// let elem = document.querySelector('#elem');
//
// setInterval(function() {
// 	elem.value = Number(elem.value) + 1;
// }, 1000);


// 1 Объясните, зачем в приведенном выше коде используется функция Number.
// Что будет, если не написать эту функцию в данном коде?
//
// Для приведения elem.value к числу.
// Так как elem.value изначально строка, то произойдет конкатенация строк. 11 111 и т.д.


// 2 Пусть в инпуте в атрибуте value изначально записано число 10.
// Запустите таймер, который каждую секунду будет уменьшать это число на единицу.
//
// let elem = document.querySelector('#elem');
//
// setInterval(() => elem.value -= 1, 1000);


// 3 Модифицируйте предыдущую задачу так, чтобы, как только содержимое инпута станет равно нулю,
// таймер прекратил свою работу.
//
// let elem = document.querySelector('#elem');
//
// let timerId = setInterval(() => {
//     elem.value -= 1;
//     elem.value === '0' && clearInterval(timerId);
//
//     // if (elem.value === '0') {
//     //     clearInterval(timerId);
//     // }
// }, 1000);


// 449 Таймеры и потеря контекста / Таймеры и потеря контекста в JavaScript
//
// При использовании таймеров в обработчиках событий нас поджидают проблемы с потерей контекста.
// Давайте посмотрим на примере.
//
// Пусть у нас есть инпут:
//
// <input id="elem" value="text">
// Пусть по клику на этот инпут сработает анонимная функция и внутри этой функции запустится таймер,
// каждую секунду выводящий что-нибудь в консоль:
//
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		console.log('!!!'); // что-нибудь выводим в консоль
// 	}, 1000);
// });
// Пока все работает верно. Но пусть теперь мы хотим выводить в консоль value нашего инпута - нас ждет сюрприз:
// в консоль будет выводится undefined:
//
// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		console.log(this.value); // будет выводится undefined
// 	}, 1000);
// });
// Все дело в том, что у нас получается функция в функции: есть внешняя анонимная функция,
// которая вызывается по клику и внутренняя анонимная функция, которую запускает таймер.
// Во внешней функции this указывает на инпут, но во внутренней - нет. Имеет место потеря контекста.
//
// Почему выводится undefined, а не вываливается ошибка в консоль, как это было в предыдущих уроках?
// Потому что this внутри функции, вызываемой через setInterval, указывает на window.
//
// Это значит, что мы пытаемся прочитать свойство value у объекта window, вот так: window.value,
// а такого свойства в нем нет, и мы получаем undefined (не ошибку).
//
// Поправим проблему введением self:
//
// elem.addEventListener('click', function() {
// 	let self = this;
//
// 	setInterval(function() {
// 		console.log(self.value);
// 	}, 1000);
// });


// 1 Пусть дан такой код:
//
// <input type="button" id="elem" value="1">
// let elem = document.querySelector('#elem');
//
// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		this.value = Number(elem.value) + 1;
// 	}, 1000);
// });
// Автор кода хотел, чтобы по нажатию на кнопку, значение этой кнопки каждую секунду увеличивалось на 1.
// Однако, по нажатию на кнопку вообще ничего не происходит. Исправьте ошибку автора кода.
// Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.

// Дело в том, что во внутренней функции теряется контекст, this становится недоступен
// Есть несколько способа решения данной задачи:

// 1) Присвоить this переменной и во внутренней функции использовать эту переменную.
// Переменная доступна из замыкания (лексического окружения, области видимости)
// elem.addEventListener('click', function() {
//     let self = this;
//
//     setInterval(function() {
//         self.value = Number(elem.value) + 1;
// console.log(self.value)
//
//     }, 1000);
// });

// 2) Использовать внутри стрелочную функцию.
// Она не имеет собственного контекста, но в ней доступен контекст родительской функции
// elem.addEventListener('click', function() {
// 	setInterval(() => this.value = Number(elem.value) + 1, 1000);
// });

// 4) Метод bind
// bind навсегда привязывает контекст к функции
// elem.addEventListener('click', function() {
// 	setInterval(function() {
// 		this.value = Number(elem.value) + 1;
//         console.log(this.value)
// 	}.bind(elem), 1000);
// });

// Насколько я понимаю нельзя решить данную задачу следующими способами:
// 1 Решение через параметр, В setInterval нельзя передать параметры напрямую в функцию обратного вызова (callback).
// 2 и 3 Используя методы call & apply,
// которые устанавливают контекст временно только для вызова функции, не сохраняя его для последующих вызовов.


// 450 Практика на таймеры и DOM / Практика на таймеры и работу с DOM в JavaScript

// 1 Дана кнопка. Дан абзац, текстом которого является число.
// По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
//
// let elem = document.getElementById('elem');
// let paragraph = document.querySelector('p');
//
// elem.addEventListener('click', () => setInterval(() => paragraph.textContent++, 1000));


// 2 Дана кнопка. Дан абзац, текстом которого является число, например, 10.
// По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1.
// Как только значение абзаца станет равно нулю - остановите таймер.
//
// let elem = document.getElementById('elem');
// let paragraph = document.querySelector('p');
//
// let decreaseValue = () => {
//     let timerId = setInterval(() => {
//         paragraph.textContent--;
//         paragraph.textContent === '0' && clearInterval(timerId);
//     }, 1000)
// }
//
// elem.addEventListener('click', decreaseValue);


// 3 Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
//
// let elem = document.querySelector('#elem');
//
// тут подход каждую секунду появляется квадрат
// setInterval(() => elem.value *= elem.value, 1000);
// не уверен что правильно понял задачу, поэтому ниже другой подход

// тут подход срабатывает 1 раз и только после изменения value
// function getSquare() {
//     let timerId = setInterval(function () {
//         this.value *= this.value;
//         clearInterval(timerId);
//     }.bind(elem), 1000);
// }
// getSquare();
//
// elem.addEventListener('change', getSquare);


// 4 Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет,
// начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.
//
// let elem = document.querySelector('#elem');
// let paragraph = document.querySelector('p');
//
// elem.addEventListener('blur', function () {
//     paragraph.textContent = this.value;
//
//     let timerId = setInterval(() => {
//         paragraph.textContent--;
//         paragraph.textContent === '0' && clearInterval(timerId);
//     }, 1000)
// });


// 5 Дан инпут, кнопка и абзац. В инпут вводится какое-то число.
// По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце:
// пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.
//
// let elem = document.querySelector('#elem');
// let btn = document.querySelector('input[type="button"]');
// let paragraph = document.querySelector('p');
//
// btn.addEventListener('click', () => {
//     paragraph.textContent = elem.value;
//
//     let timerId = setInterval(() => {
//         paragraph.textContent--;
//         paragraph.textContent === '0' && clearInterval(timerId);
//     }, 1000);
// });


// 6 Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1
// до бесконечности, а по нажатию на вторую таймер останавливался.
//
// let paragraph = document.querySelector('p');
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let timerId;
//
// function startTimer() {
//     timerId = setInterval(() => paragraph.textContent++, 1000);
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


// 7 Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
//
// let paragraph = document.querySelector('p');
// let isRed = true;
//
// setInterval(() => {
//     // короткий синтаксис с тернарным оператором
//     paragraph.style.color = isRed ? 'green' : 'red'
//
//     // более длинный синтаксис с условным операторов
//     // if (isRed) {
//     //     paragraph.style.color = 'green';
//     // } else {
//     //     paragraph.style.color = 'red';
//     // }
//
//     isRed = !isRed;
// }, 1000);


// 8 Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы.
// Реализуйте такие же часики, как показано ниже в образце:
//
// let p = document.querySelector('p');
//
// let addZero = num => num >= 0 && num <= 9 ? '0' + num : num;
//
// setInterval(() => {
//     let now = new Date();
//     p.textContent = addZero(now.getHours()) + ':' + addZero(now.getMinutes()) + ':' + addZero(now.getSeconds());
// }, 1000);


// 451 Задержка перед выполнением / Задержка перед выполнением в JavaScript
//
// Давайте теперь разберем функцию setTimeout, которая позволяет сделать задержку перед запуском кода.
// Эта задержка, в отличии от функции setInterval, случится только один раз.
//
// Первым параметром setTimeout принимает исходный код функции,
// а вторым - задержку в миллисекундах перед запуском этой функции.
//
// Посмотрим работу функции на каком-нибудь примере. Пусть у нас есть вот такая кнопка:
//
// <input type="submit" id="elem">
// Получим ссылку на нашу кнопку в переменную:
//
// let elem = document.querySelector('#elem');
// Давайте теперь сделаем так, чтобы по нажатию на кнопку на экран вывелся alert,
// но не сразу, а через 3 секунды после нажатия:
//
// elem.addEventListener('click', function() {
// 	setTimeout(function() {
// 		alert('!');
// 	}, 3000);
// });


// 1 Дан абзац. Напишите код, который выведет сообщение в этот абзац через 10 секунд после загрузки страницы.
//
// let paragraph = document.querySelector('p');
//
// setTimeout(() => paragraph.textContent = 'Some Text', 10000);


// 452 Таймер через задержку / Запуск таймера в JavaScript
//
// Хотя функция setTimeout и не предназначена для создания таймеров, однако их все равно можно делать с ее помощью,
// если воспользоваться рекурсией:
//
// let i = 0;
//
// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);
//
// 		timer(); // вызовем сами себя
// 	}, 1000);
// }
// timer();
// Остановить такой таймер можно просто не дав случится рекурсии:
//
// let i = 0;
//
// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);
//
// 		if (i < 10) { // запускаем, только если счетчик меньше 10
// 			timer();
// 		}
// 	}, 1000);
// }
// timer();


// 1 Выведите в консоль число 0. Через секунду выведите число 1, через две секунды выведите число 2,
// через 3 секунды выведите число 3. И так далее до бесконечности.
//
// изначальный вариант
// let i = 0;
// let time = 1000;
//
// function timer(time) {
//     setTimeout(() => {
//         console.log(++i);
//         console.log(time)
//         timer(time + 1000);
//     }, time)
// }
//
// timer(time);

// тут гпт мне такое выдал. в моем решении 0 не выводился. и он ссылался на возможное переполнение стека
// let i = 0;
//
// function timer() {
//     setTimeout(() => {
//         console.log(i++);
//         timer();
//     }, i * 1000)
// }
//
// timer();

