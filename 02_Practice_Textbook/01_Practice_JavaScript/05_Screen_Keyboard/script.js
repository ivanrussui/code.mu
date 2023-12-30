// 01_Practice_JavaScript
// Практика JavaScript


// 5 Экранная клавиатура / Экранная клавиатура на JavaScript

// Давайте реализуем экранную клавиатуру. На ней должны быть кнопочки со всеми буквами и цифрами клавиатуры компьютера.
// Кликая мышкой по этим кнопочкам мы сможем вводить данные, например, при неработающей клавиатуре.

// 1 Реализуйте описанную клавиатуру. Пусть эта клавиатура будет привязана к какому-нибудь инпуту,
// то есть кликая по ней, мы будем вводить данные в этот инпут.

let input = document.querySelector('#input');
let keys = document.querySelectorAll('.key');

let setInputValue = (event) => input.value = event.target.textContent;

for (let key of keys) {
    key.addEventListener('click', setInputValue);
}


// 2 Сделайте на вашей клавиатуре кнопку Caps Lock, которая будет делать так,
// чтобы все буквы переводились в верхний регистр.

let capsLock = document.getElementById('capsLock');
let caps = false;

function setCaps() {
    capsLock.classList.toggle('active');

    if (!caps) {
        for (let key of keys) {
            key.textContent = key.textContent.toUpperCase();
            input.value = input.value.toUpperCase();
        }
        caps = true;
    } else {
        for (let key of keys) {
            key.textContent = key.textContent.toLowerCase();
            input.value = input.value.toLowerCase();
        }
        caps = false;
    }

    return caps;
}

capsLock.addEventListener('click', setCaps);
