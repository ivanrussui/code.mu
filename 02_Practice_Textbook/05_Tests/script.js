// 05_Tests
// Тесты


// 30 Вопросы и ответы в HTML коде / Тест с вопросами и ответами в HTML коде на JavaScript

// В этом и в нескольких следующих уроках мы с вами займемся созданием тестов с вопросами и ответами.
// Начнем с самых простых вариантов и будем постепенно усложнять.
//
// Пусть для начала мы хотим сделать набор вопросов, на каждый из которых возможен только один ответ.
// Пусть ответы вбиваются пользователем в инпуты под самими вопросами.
//
// Проиллюстрирую написанное HTML кодом:
//
// <div id="test">
// 	<div>
// 		<p>вопрос 1?</p>
// 		<input>
// 	</div>
// 	<div>
// 		<p>вопрос 2?</p>
// 		<input>
// 	</div>
// 	<div>
// 		<p>вопрос 3?</p>
// 		<input>
// 	</div>
// </div>
// Как вы видите, у нас есть вопросы и инпуты для ответов. Осталось придумать, где мы будем хранить правильные ответы.
//
// Самое простое, что можно придумать - это хранить ответы прямо в HTML коде инпутов, в каком-нибудь data- атрибуте:
//
// <div id="test">
// 	<div>
// 		<p>вопрос 1?</p>
// 		<input data-right="ответ 1">
// 	</div>
// 	<div>
// 		<p>вопрос 2?</p>
// 		<input data-right="ответ 2">
// 	</div>
// 	<div>
// 		<p>вопрос 3?</p>
// 		<input data-right="ответ 3">
// 	</div>
// </div>
// Следующий нюанс, который следует продумать: в какой момент мы будем выполнять проверку ответов на правильность?
// Здесь можно предложить два варианта: либо пусть каждый инпут сразу же по вводу в него ответа проверяет правильный ли
// этот ответ, либо пусть будет кнопка, по нажатию на которую будут проверены ответы на все вопросы сразу.
//
// Какой бы из вариантов мы не выбрали, давайте, если ответ правильный, то границу инпута будем красить в зеленый цвет,
// а если неправильный - в красный. Сделаем для этого соответствующие CSS классы:
//
// .right {
// 	border: 1px solid green;
// }
// .wrong {
// 	border: 1px solid red;
// }


// 1 Сделайте так, чтобы ввод ответа в инпут завершался нажатием клавиши Enter.
// Пусть в этом случае инпут сразу проверяет ответ на правильность.

// let inputs = document.querySelectorAll('input');
//
// for (let input of inputs) {
//     input.style.outline = 'none';
//
//     input.addEventListener('keydown', (event) => {
//         if (event.code === 'Enter') {
//             if (input.value === input.dataset.right) {
//                 input.classList.add('right');
//             } else {
//                 input.classList.add('wrong');
//             }
//         }
//     });
// }


// 2 Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.

// let inputs = document.querySelectorAll('input');
// let test = document.querySelector('#test');
// let btn = document.createElement('button');
//
// btn.textContent = 'Проверить ответы';
// btn.style.marginTop = '10px';
//
// test.append(btn);
//
// btn.addEventListener('click', () => {
//     for (let input of inputs) {
//         if (input.value === input.dataset.right) {
//             input.classList.add('right');
//         } else {
//             input.classList.add('wrong');
//         }
//     }
// });


// 31 Ответы в массиве / Тест с ответами в массиве на JavaScript

// Пусть теперь у нас дан массив правильных ответов:
//
// let answers = [
// 	'ответ 1',
// 	'ответ 2',
// 	'ответ 3',
// ];
// Это значит, что мы теперь не будем хранить ответы в data- атрибутах инпутов:
//
// <div id="test">
// 	<div>
// 		<p>вопрос 1?</p>
// 		<input>
// 	</div>
// 	<div>
// 		<p>вопрос 2?</p>
// 		<input>
// 	</div>
// 	<div>
// 		<p>вопрос 3?</p>
// 		<input>
// 	</div>
//
// 	<button id="button">проверить ответы</button>
// </div>


// 1 Сделайте так, чтобы по нажатию на кнопку выполнилась проверка правильности ответов.

// let answers = [
//     'ответ 1',
//     'ответ 2',
//     'ответ 3',
// ];
//
// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('button');
// btn.style.marginTop = '10px';

// for i
// btn.addEventListener('click', () => {
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].value === answers[i]) {
//             inputs[i].classList.add('right');
//         } else {
//             inputs[i].classList.add('wrong');
//         }
//     }
// });

// forEach
// btn.addEventListener('click', () => {
//     inputs.forEach((el, i) => {
//         if (el.value === answers[i]) {
//             el.classList.add('right');
//         } else {
//             el.classList.add('wrong');
//         }
//     });
// });


// 32 Вопросы и ответы в массиве / Тест с вопросами и ответами в массиве на JavaScript

// Пусть у нас дан массив правильных ответов, как и в предыдущем уроке:
//
// let answers = [
// 	'ответ 1',
// 	'ответ 2',
// 	'ответ 3',
// ];
// Пусть теперь дан и массив вопросов:
//
// let questions = [
// 	'вопрос 1?',
// 	'вопрос 2?',
// 	'вопрос 3?'
// ];
// Пусть дивов с вопросами и инпутами для ответов больше нету в HTML коде:
//
// <div id="test"></div>
// <button id="button">проверить ответы</button>
// Пусть перед нами стоит прежняя задача: по нажатию на кнопку выполнить проверку правильности.
//
// Очевидно, что наша задача усложнилась: теперь по заходу на страницу нам необходимо перебрать массив вопросов и
// сформировать HTML код каждого вопроса - родительский див, абзац с текстом и инпут для ответа.


// 1 Реализуйте поставленную задачу.
//
// const answers = [
//     'ответ 1',
//     'ответ 2',
//     'ответ 3',
// ];
//
// const questions = [
//     'вопрос 1?',
//     'вопрос 2?',
//     'вопрос 3?'
// ];
//
// const test = document.querySelector('#test');
// const btn = document.querySelector('button');
//
// for (let i = 0; i < questions.length; i++) {
//     const div = document.createElement('div');
//     const p = document.createElement('p');
//     const label = document.createElement('label');
//     const input = document.createElement('input');
//
//     btn.style.marginTop = '10px';
//
//     test.append(div);
//     div.append(p, label);
//     label.append(input);
// }
//
// const paragraphs = document.querySelectorAll('p');
// paragraphs.forEach((el, i) => el.textContent = questions[i]);
//
// btn.addEventListener('click', () => {
//     const inputs = document.querySelectorAll('input');
//
//     inputs.forEach((el, i) => {
//         if (el.value === answers[i]) {
//             el.classList.add('right');
//         } else {
//             el.classList.add('wrong');
//         }
//     });
// });


// 33 Вопросы и ответы в объекте / Тест с вопросами и ответами в объекте на JavaScript

// В предыдущем уроке наши вопросы и ответы хранились в разных переменных.
// Такое разделение зачастую может быть не очень удобным. Давайте поработаем с другими вариантами хранения.

// 1 Пусть вопросы и ответы хранятся в таком объекте:
//
// let questions = {
// 	'Вопрос 1?': 'ответ 1',
// 	'Вопрос 2?': 'ответ 2',
// 	'Вопрос 3?': 'ответ 3',
// }
// Решите задачу создания теста для такого варианта хранения данных

// let questions = {
//     'Вопрос 1?': 'ответ 1',
//     'Вопрос 2?': 'ответ 2',
//     'Вопрос 3?': 'ответ 3',
// };

// const test = document.querySelector('#test');
// const btn = document.querySelector('button');
//
// for (let i = 0; i < Object.keys(questions).length; i++) {
//     const div = document.createElement('div');
//     const p = document.createElement('p');
//     const label = document.createElement('label');
//     const input = document.createElement('input');
//
//     btn.style.marginTop = '10px';
//     p.textContent = Object.keys(questions)[i];
//
//     test.append(div);
//     div.append(p, label);
//     label.append(input);
// }

// btn.addEventListener('click', () => {
//     const inputs = document.querySelectorAll('input');
//
//     // forEach
//     // inputs.forEach((el, i) => {
//     //     if (el.value === Object.values(questions)[i]) {
//     //         el.classList.add('right');
//     //     } else {
//     //         el.classList.add('wrong');
//     //     }
//     // });
//
//     // for of
//     let index = 0;
//
//     for (let input of inputs) {
//         if (input.value === Object.values(questions)[index]) {
//             input.classList.add('right');
//         } else {
//             input.classList.add('wrong');
//         }
//         index++;
//     }
// });


// 2 Пусть вопросы и ответы хранятся в таком объекте:
//
// let questions = [
// 	{
// 		text:  'вопрос 1?',
// 		right: 'ответ 1',
// 	},
// 	{
// 		text:  'вопрос 2?',
// 		right: 'ответ 2',
// 	},
// 	{
// 		text:  'вопрос 3?',
// 		right: 'ответ 3',
// 	},
// ];
// Решите задачу создания теста для такого варианта хранения данных.

// let questions = [
//     {
//         text: 'вопрос 1?',
//         right: 'ответ 1',
//     },
//     {
//         text: 'вопрос 2?',
//         right: 'ответ 2',
//     },
//     {
//         text: 'вопрос 3?',
//         right: 'ответ 3',
//     },
// ];
//
// const test = document.querySelector('#test');
// const btn = document.querySelector('button');
//
// for (let i = 0; i < questions.length; i++) {
//     const div = document.createElement('div');
//     const p = document.createElement('p');
//     const label = document.createElement('label');
//     const input = document.createElement('input');
//
//     btn.style.marginTop = '10px';
//     p.textContent = questions[i].text;
//
//     test.append(div);
//     div.append(p, label);
//     label.append(input);
// }
//
// btn.addEventListener('click', () => {
//     const inputs = document.querySelectorAll('input');
//
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].value === questions[i].right) {
//             inputs[i].classList.add('right');
//         } else {
//             inputs[i].classList.add('wrong');
//         }
//     }
// });


// 34 Варианты ответов в HTML коде / Тест с вариантами ответов в HTML коде на JavaScript

// В предыдущих уроках ответы на вопросы теста должны были вбиваться в инпуты. В жизни, однако, часто бывают также
// тексты, в которых можно выбрать один вариант ответа из предложенных. Давайте научимся создавать такие тесты.
//
// Давайте опять начнем с простого варианта, когда вопросы и ответы хранятся в HTML коде, а затем будем постепенно усложнять.
//
// Итак, вот тест с вариантами ответов:
//
// <div id="test">
// 	<div>
// 		<p>вопрос 1?</p>
//
// 		<label>
// 			<input type="radio" name="1" data-right>
// 			вариант 1
// 		</label>
// 		<label>
// 			<input type="radio" name="1">
// 			вариант 2
// 		</label>
// 		<label>
// 			<input type="radio" name="1">
// 			вариант 3
// 		</label>
// 	</div>
// 	<div>
// 		<p>вопрос 2?</p>
//
// 		<label>
// 			<input type="radio" name="2">
// 			вариант 1
// 		</label>
// 		<label>
// 			<input type="radio" name="2" data-right>
// 			вариант 2
// 		</label>
// 		<label>
// 			<input type="radio" name="2">
// 			вариант 3
// 		</label>
// 	</div>
// 	<div>
// 		<p>вопрос 3?</p>
//
// 		<label>
// 			<input type="radio" name="3">
// 			вариант 1
// 		</label>
// 		<label>
// 			<input type="radio" name="3">
// 			вариант 2
// 		</label>
// 		<label>
// 			<input type="radio" name="3" data-right>
// 			вариант 3
// 		</label>
// 	</div>
// </div>
// Как вы видите, варианты ответов мы можем выбрать с помощью радио кнопочек.
// При этом в каждом вопросе радио кнопка с правильным вариантом отмечена атрибутом data-right.


// 1 Сделайте так, чтобы при выборе одного из ответов вопроса этот ответ сразу проверялся на правильность.

// const inputs = document.querySelectorAll('input');
// const labels = document.querySelectorAll('label');
//
// for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener('click', (event) => {
//         if (event.target.tagName === 'INPUT' && inputs[i].checked) { // inputs[i].checked не обязательно
//             if (inputs[i].dataset.right === '') {
//                 labels[i].classList.add('right');
//             } else {
//                 labels[i].classList.add('wrong');
//             }
//         }
//     });
// }


// 2 Модифицируйте ваш код так, чтобы проверка ответов выполнялась по нажатию на кнопку.

// const inputs = document.querySelectorAll('input');
// const labels = document.querySelectorAll('label');
// const test = document.querySelector('#test');
// const btn = document.createElement('button');
//
// btn.textContent = 'Проверить ответы';
// btn.style.marginTop = '10px';
//
// test.append(btn);
//
// btn.addEventListener('click', () => {
//     // for i
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].checked) {
//             if (inputs[i].dataset.right !== undefined) {
//                 labels[i].classList.add('right');
//             } else {
//                 labels[i].classList.add('wrong');
//             }
//         }
//     }
//
//     // forEach
//     // inputs.forEach((el, i) => {
//     //     if (el.checked) {
//     //         if (el.dataset.right === '') {
//     //             labels[i].classList.add('right');
//     //         } else {
//     //             labels[i].classList.add('wrong');
//     //         }
//     //     }
//     // });
//
//     // for of
//     // let i = 0;
//     // for (const input of inputs) {
//     //     if (input.checked) {
//     //         if (input.dataset.right === '') {
//     //             labels[i].classList.add('right');
//     //         } else {
//     //             labels[i].classList.add('wrong');
//     //         }
//     //     }
//     //     i++;
//     // }
// });


// 35 Варианты ответов в массиве / Тест с вариантами ответов в массиве на JavaScript

// Пусть теперь у нас есть массив, в котором написаны номера правильных ответов для каждого вопроса:
//
// let answers = [0, 1, 2];
// То есть в первом элементе этого массива лежит номер правильного ответа первого вопроса,
// во втором элементе - для второго вопроса и так далее.

// 1 Модифицируйте код предыдущего урока с учетом описанного.
//
// let answers = [0, 1, 2];
//
// const inputs = document.querySelectorAll('input[type="radio"]');
// const labels = document.querySelectorAll('label');
// const test = document.querySelector('#test');
// const btn = document.createElement('button');
// const divs = test.querySelectorAll('div');
//
// btn.textContent = 'Проверить ответы';
// btn.style.marginTop = '10px';
//
// test.append(btn);
//
// // добавляю инпутам value
// for (let i = 0; i < divs.length; i++) {
//     const inputsInsideDiv = divs[i].querySelectorAll('input');
//     inputsInsideDiv.forEach((el, index) => {
//         el.setAttribute('value', `${index}`);
//     });
// }
//
// btn.addEventListener('click', () => {
//     for (let i = 0; i < inputs.length; i++) {
//         if (inputs[i].checked) {
//             // вариант рабочий но вот эту часть заколебался... гпт помог
//             const questionNumber = inputs[i].getAttribute('name');
//             const selectedAnswer = parseInt(inputs[i].value);
//
//             if (selectedAnswer === answers[parseInt(questionNumber) - 1]) {
//                 labels[i].classList.add('right');
//             } else {
//                 labels[i].classList.add('wrong');
//             }
//         }
//     }
// });


// 36 Вопросы и варианты ответов в объекте / Тест с вопросами и вариантами ответов в объекте на JavaScript

// Пусть теперь вопросы, варианты ответов и номера правильных ответов хранятся в одном объекте:
//
// let questions = [
// 	{
// 		text: 'вопрос 1?',
// 		right: 0,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 2?',
// 		right: 1,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// 	{
// 		text: 'вопрос 3?',
// 		right: 2,
// 		variants: [
// 			'вариант 1',
// 			'вариант 2',
// 			'вариант 3'
// 		]
// 	},
// ];
// Наш HTML код при этом сократится до следующего:
//
// <div id="test"></div>
// <button id="button">проверить ответы</button>
// Теперь по заходу на страницу вам придется перебрать циклом наш объект и сформировать HTML код вопросов.

// 1 Реализуйте поставленную задачу.

let questions = [
    {
        text: 'вопрос 1?',
        right: 0,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
    {
        text: 'вопрос 2?',
        right: 1,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
    {
        text: 'вопрос 3?',
        right: 2,
        variants: [
            'вариант 1',
            'вариант 2',
            'вариант 3'
        ]
    },
];

const test = document.querySelector('#test');
const button = document.querySelector('#button');
button.style.marginTop = '10px';


// один вариант
questions.forEach(() => {
    const div = document.createElement('div');
    test.append(div);
});

const divs = test.querySelectorAll('div');

divs.forEach((div, indexDiv) => {
    const p = document.createElement('p');
    p.textContent = questions[indexDiv].text;
    div.append(p);

    for (let i = 0; i < 3; i++) {
        const label = document.createElement('label');
        label.textContent = questions[i].variants[i];
        div.append(label);

        const input = document.createElement('input');
        input.setAttribute('type', 'radio');
        label.prepend(input);

        const inputs = div.querySelectorAll('input[type="radio"]');

        inputs.forEach((input, indexInput) => {
            input.setAttribute('name', `${Math.floor(indexInput / 3 + 1) + indexDiv}`);
            input.setAttribute('value', `${indexInput}`);
        });

        const labels = div.querySelectorAll('label');

        button.addEventListener('click', () => {
            if (input.checked) {
                if (parseInt(input.value) === questions[indexDiv].right) {
                    labels[i].classList.add('right');
                } else {
                    labels[i].classList.add('wrong');
                }
            }
        });
    }
});


// другой вариант как по мне логика усложнена (замудрено слишком). писал сначала этот вариант
//
// for (let i = 0; i < questions.length; i++) {
//     const div = document.createElement('div');
//     test.append(div);
// }
//
//
// const divs = test.querySelectorAll('div');
//
// for (let i = 0; i < divs.length; i++) {
//     const p = document.createElement('p');
//     p.textContent = questions[i].text;
//     divs[i].append(p);
//
//     for (let j = 0; j < divs.length; j++) {
//         const label = document.createElement('label');
//         divs[i].append(label);
//     }
//
//     const labels = divs[i].querySelectorAll('label');
//
//     labels.forEach((label, index) => {
//         label.textContent = questions[index].variants[index];
//     });
// }
//
//
// const labels = test.querySelectorAll('label');
//
// for (let i = 0; i < labels.length; i++) {
//     const input = document.createElement('input');
//     labels[i].prepend(input);
// }
//
//
// divs.forEach((div, divIndex) => {
//     const inputs = div.querySelectorAll('input');
//
//     inputs.forEach((input, inputIndex) => {
//         input.setAttribute('type', 'radio');
//         input.setAttribute('name', Math.floor(inputIndex / 3) + divIndex + 1); // чутка гпт
//         input.setAttribute('value', inputIndex);
//     });
// });
//
//
// button.addEventListener('click', () => {
//     const inputs = test.querySelectorAll('input');
//
//     inputs.forEach((input, inputIndex) => {
//         if (input.checked) {
//             // тут мне гпт подсказал логику
//             const selectedAnswer = parseInt(input.value);
//             const questionIndex = Math.floor(inputIndex / 3); // Получаем индекс вопроса, к которому относится текущий выбранный ответ
//             const question = questions[questionIndex];
//
//             if (selectedAnswer === question.right) {
//                 labels[inputIndex].classList.add('right');
//             } else {
//                 labels[inputIndex].classList.add('wrong');
//             }
//         }
//     });
// });

