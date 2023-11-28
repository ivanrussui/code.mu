// 26_Dropdown_Lists_405-413
// Выпадающие списки


// 405 Работа с выпадающими списками / Работа с выпадающими списками в JavaScript
//
// В данном уроке мы с вами изучим работу с тегом select, представляющим собой выпадающий список. Если вы не умете
// работать с этим тегом на HTML, то для начала изучите его устройство в справочнике по этой ссылке: select.
//
// Давайте посмотрим, как работать с этим тегом через JavaScript. Пусть у нас дан вот такой выпадающий список:
//
// <select id="select">
// 	<option>one</option>
// 	<option selected>two</option>
// 	<option>three</option>
// </select>
// Получим ссылку на селект в переменную:
//
// let select = document.querySelector('#select');
// Давайте теперь при изменении селекта выведем на экран текст выбранного пункта списка.
// Для этого нужно прочитать свойство value нашего селекта:
//
// select.addEventListener('change', function(){
// 	console.log(this.value);
// });


// 1 Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
//
// let select = document.querySelector('#select');
// let paragraph = document.querySelector('p');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     paragraph.textContent = select.value;
// });


// 2 Сделайте выпадающий список годов от 2020 до 2030.
// При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.
//
// let select = document.querySelector('#select');
//
// select.addEventListener('change', function () {
//     if ((this.value % 4 === 0 && this.value % 100 !== 0) || (this.value % 400 === 0)) {
//         console.log(`${this.value} год високосный`);
//     } else {
//         console.log(`${this.value} год не високосный`);
//     }
// });


// 406 Атрибут value в выпадающих списках / Атрибут value в выпадающих списках в JavaScript
//
// Как правило, пунктам списка добавляют атрибут value.
// В этом случае свойство value селекта будет содержать не текст option, а значение его атрибута value.
//
// Давайте переделаем наш селект:
//
// <select id="select">
// 	<option value="1">one</option>
// 	<option value="2" selected>two</option>
// 	<option value="3">three</option>
// </select>
// Проверим, чему теперь равно выбранное значение:
//
// let select = document.querySelector('#select');
//
// select.addEventListener('change', function(){
// 	console.log(this.value);
// });


// 1 Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера
// дней недели от 1 до 7. По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
//
// let select = document.querySelector('#select');
//
// select.addEventListener('change', function () {
//     if (this.value > 0 && this.value < 5) {
//         document.write('Выбран рабочий день')
//         // console.log('Выбран рабочий день');
//     } else {
//         document.write('Выбран выходной день')
//         // console.log('Выбран выходной день');
//     }
// });


// 407 Изменение выбранного пункта списка / Изменение выбранного пункта списка на JavaScript
//
// В предыдущем уроке мы с вами научились получать выбранный пункт списка.
// Давайте теперь будем изменять выбранный пункт с помощью JavaScript.
//
// Для этого в свойство value селекта запишем значение атрибута value того option, который мы хотим выбрать.
//
// Пусть у нас есть следующий селект:
//
// <select id="select">
// 	<option value="one">один</option>
// 	<option value="two" selected>два</option>
// 	<option value="three">три</option>
// </select>
// Пусть также есть кнопка:
//
// <input type="submit" id="button">
// Получим ссылки на селект и кнопку в переменные:
//
// let select = document.querySelector('#select');
// let button = document.querySelector('#button');
// А теперь давайте сделаем так, что бы при нажатии на кнопку наш селект сменил выбор:
//
// button.addEventListener('click', function() {
// 	select.value = 'one';
// });
//
// Если у нашего списка нет атрибутов value, то в свойство value селекта нужно записывать текст тега option,
// который мы хотим выбрать.


// 1 Сделайте выпадающий список с названиями месяцев.
// Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.
//
// let select = document.querySelector('#select');
// let currentMonth = new Date().getMonth() + 1;
//
// function getCurrentMonth() {
//     select.value = currentMonth;
// }
//
// getCurrentMonth();


// 408 Номер выбранного пункта списка / Номер выбранного пункта выпадающего списка
//
// В селектах существует специальное свойство selectedIndex, хранящее в себе номер того пункта списка,
// который сейчас выбран. Нумерация при этом начинается с нуля. При этом данное свойство можно как прочитывать,
// так и записывать, меняя выбранный пункт списка.
//
// Посмотрим работу с данным свойством на примере. Пусть у нас дан следующий выпадающий список:
//
// <select id="select">
// 	<option value="one">один</option>
// 	<option value="two" selected>два</option>
// 	<option value="three">три</option>
// </select>
// Давайте выведем номер выбранного пункта списка:
//
// let select = document.querySelector('#select');
// console.log(select.selectedIndex); // выведет 1
// А теперь выберем какой-нибудь другой пункт:
//
// let select = document.querySelector('#select');
// select.selectedIndex = 2; // выберет 'три'


// 1 Дан инпут и селект. В инпут вводится какое-то число.
// По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.
//
// let elem = document.querySelector('#elem');
// let select = document.querySelector('#select');
//
// elem.addEventListener('blur', function () {
//     if (this.value > 0 && this.value <= 5) {
//         select.selectedIndex = this.value - 1;
//         console.log(this.value);
//     } else {
//         console.log('Введите число от 1 до 5');
//     }
// });


// 2 Сделайте выпадающий список с названиями дней недели.
// Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий день.
//
// let select = document.querySelector('#select');
// let currentDay = new Date().getDay();
//
// getCurrentDayOfWeek();
//
// function getCurrentDayOfWeek() {
//     // решение если воскресенье value="0" как положено
//     select.value = currentDay;
//
//     // решение если воскресенье value="7"
//     // if (currentDay === 0) {
//     //     select.value = currentDay + 7;
//     // } else {
//     //     select.value = currentDay;
//     // }
// }


// 409 Получение пунктов выпадающего списка / Получение пунктов выпадающего списка на JavaScript
//
// Пусть у нас дан некоторый выпадающий список:
//
// <select id="select">
// 	<option value="one">один</option>
// 	<option value="two">два</option>
// 	<option value="three">три</option>
// </select>
// Вопрос: как нам получить все пункты этого списка?
// Самый простой способ - это воспользоваться соответствующим селектором:
//
// let options = document.querySelectorAll('#select option');
// console.log(options);
// Можно вести не по всему документу, а конкретно в нашем селекте:
//
// let select  = document.querySelector('#select');
// let options = select.querySelectorAll('option');
// console.log(options);


// 410 Пункты как массив / Массив пунктов выпадающего списка на JavaScript
//
// При работе с селектами есть следующая особенность: переменная, в которой хранится ссылка на селект является массивом,
// элементами которого являются теги option. Это значит, что эту переменную можно перебрать циклом:
//
// let select = document.querySelector('#select');
//
// for (let option of select) {
// 	console.log(option);
// }
// Ну или просто обратится к пункту с нужным номером:
//
// let select = document.querySelector('#select');
// console.log(select[0]);


// 1 Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
//
// let select = document.querySelector('#select');
//
// for (let option of select) {
//     console.log(option.textContent += ' ' + option.value);
//     // console.log(option.textContent + ' ' + option.value);
// }


// 411 Работа с пунктами выпадающего списка / Работа с пунктами выпадающего списка на JavaScript
//
// Пусть у нас в переменной есть ссылка на тег option. Например, полученная следующим образом:
//
// let option = document.querySelector('#option');
// let option = select[0];
// В этом случае в свойстве text будет хранится текст оптиона, в свойстве value - значение одноименного атрибута,
// а в свойстве selected - значение true или false в зависимости от того, выбранный пункт списка или нет:
//
// console.log(option.text);
// console.log(option.value);
// console.log(option.selected);


// 1 Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак,
// а для невыбранных пунктов - вопросительный.
//
// let select = document.querySelector('#select');
// let options = document.querySelectorAll('option');
//
// // for (let option of select) { // через select
// for (let option of options) { // через options
//     if (option.selected) {
//         option.text += ' !';
//     } else {
//         option.text += ' ?';
//     }
// }


// 412 Выбор пункта списка / Выбор пункта списка в JavaScript
//
// В предыдущих уроках мы обращались к тегу select, получая или меняя выбранный пункт списка.
// Это на самом деле не обязательно.
// Ведь можно взять и непосредственно какому-нибудь тегу option установить свойство selected в значении true.
//
// К примеру, сделаем выбранным пункт списка с номером два:
//
// let select = document.querySelector('#select');
// let option = select[2];
// option.selected = true;


// 1 Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
//
// let select = document.querySelector('#select');
// let option = select[select.length - 1]; // последний элемент не захордкожен
// // let option = select[3]; // последний элемент захоркожен
//
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     option.selected = true;
// });


// 413 Получение выбранного пункта / Получение выбранного оптиона в JavaScript
//
// let select = document.querySelector('#select');
// console.log(select[select.selectedIndex]);


// 1 Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.
//
// let select = document.querySelector('#select');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     // document.write(select[select.selectedIndex].text);
//     console.log(select[select.selectedIndex].text);
// });


// 2 Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
//
// let select = document.querySelector('#select');
// let btn = document.querySelector('button');
//
// btn.addEventListener('click', function () {
//     select[select.selectedIndex].text += '!';
// });

