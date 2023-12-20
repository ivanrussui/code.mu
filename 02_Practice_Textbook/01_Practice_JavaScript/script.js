// 01_Practice_JavaScript
// Практика JavaScript


// 1 Калькуляторы фигур / Калькуляторы фигур на JavaScript

// функция переиспользуется в нескольких калькуляторах
function checkIsNaN(parameterOne, parameterTwo, clearValueAndText) {
    if (isNaN(parameterOne) || isNaN(parameterTwo)) {
        alert('Вы ввели некорректное значение');
        clearValueAndText();
    }
}


// 1 Сделайте калькулятор, который будет находить площадь и периметр квадрата.

;(function (root) {
    let parent = document.querySelector(root);
    let side = parent.querySelector('#squareSide'); // сторона
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');

    btn.addEventListener('click', function () {
        if (side.value <= 0) {
            alert('Введите число больше 0');
            clearValueAndText();
        } else {
            let area = side.value * side.value;  // площадь
            let perimeter = side.value * 4;  // периметр
            paragraph.textContent = `Площадь квадрата ${area} периметр квадрата ${perimeter}`;
            // if (isNaN(area) || isNaN(perimeter)) {
            //     alert('Вы ввели некорректное значение');
            //     clearValueAndText();
            // }
            checkIsNaN(area, perimeter, clearValueAndText);
        }
    });

    // вспомогательная функция
    function clearValueAndText() {
        side.value = '';
        paragraph.textContent = '';
    }
})('#square');


// 2 Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

;(function (root) {
    let parent = document.querySelector(root);
    let length = parent.querySelector('#rectangleLength');
    let width = parent.querySelector('#rectangleWidth');
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');

    btn.addEventListener('click', function () {
        if (length.value <= 0 || width.value <= 0) {
            alert('Введите числа больше 0');
            clearValueAndText();
        } else if (length.value === width.value) {
            alert('Длина и ширина не могут быть равны у прямоугольника');
            clearValueAndText();
        } else {
            let area = length.value * width.value;  // площадь
            let perimeter = 2 * (length.value + width.value);  // периметр
            paragraph.textContent = `Площадь прямоугольника ${area} периметр прямоугольника ${perimeter}`;
            checkIsNaN(area, perimeter, clearValueAndText);
        }
    });

    // вспомогательная функция
    function clearValueAndText() {
        length.value = '';
        width.value = '';
        paragraph.textContent = '';
    }
})('#rectangle');


// 3 Сделайте калькулятор, который будет находить площадь круга и длину окружности.

;(function (root) {
    let parent = document.querySelector(root);
    let select = parent.querySelector('#circleSelect');
    let segment = parent.querySelector('#circleSegment');
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');

    select.addEventListener('change', function () {
        let text = parent.querySelector('label[for="circleSegment"]');
        if (select.value === 'one') {
            text.textContent = 'Введите диаметр круга';
        } else {
            text.textContent = 'Введите радиус круга';
        }
    });

    btn.addEventListener('click', function () {
        if (segment.value <= 0) {
            alert('Введите число больше 0');
            clearValueAndText();
        } else if (select.value === 'one') {
            let area = segment.value ** 2 / 4 * 3.14; // площадь через диаметр
            let circumference = 3.14 * segment.value; // длина окружности через диаметр
            paragraph.textContent = `Площадь круга ${area} длина окружности ${circumference}`;
            checkIsNaN(area, circumference, clearValueAndText);
        } else {
            let area = 3.14 * segment.value ** 2; // площадь через радиус
            let circumference = 3.14 * segment.value * 2; // длина окружности через радиус
            paragraph.textContent = `Площадь круга ${area} длина окружности ${circumference}`;
            checkIsNaN(area, circumference, clearValueAndText);
        }
    });

    // вспомогательная функция
    function clearValueAndText() {
        segment.value = '';
        paragraph.textContent = '';
    }
})('#circle');


// 4 Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.

;(function (root) {
    let parent = document.querySelector(root);
    let base = parent.querySelector('#triangleBase');
    let height = parent.querySelector('#triangleHeight');
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');

    btn.addEventListener('click', function () {
        if (base.value <= 0 || height.value <= 0) {
            alert('Введите числа больше 0');
            clearValueAndText();
        } else {
            let area = 0.5 * base.value * height.value;  // площадь
            paragraph.textContent = `Площадь треугольника ${area}`;
            checkIsNaN(area, null, clearValueAndText); // передаю null 2м параметром
        }
    });

    // вспомогательная функция
    function clearValueAndText() {
        base.value = '';
        height.value = '';
        paragraph.textContent = '';
    }
})('#triangle');
