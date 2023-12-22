// 01_Practice_JavaScript
// Практика JavaScript


// 1 Калькуляторы фигур / Калькуляторы фигур на JavaScript

// функции переиспользуется в калькуляторах

function checkIsNaN(parameterOne, parameterTwo, parameterThree, clearValueAndText) {
    if (isNaN(parameterOne) || isNaN(parameterTwo) || isNaN(parameterThree)) {
        alert('Вы ввели некорректное значение');
        clearValueAndText();
    }
}

function clearValueAndText(parameterOne, parameterTwo, parameterThree, parameterFour) {
    parameterOne.value = '';
    parameterTwo && (parameterTwo.value = '');
    parameterThree && (parameterThree.value = '');
    parameterFour.textContent = '';
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
            clearValueAndText(side, null, null, paragraph);
        } else {
            let area = side.value * side.value;  // площадь
            let perimeter = side.value * 4;  // периметр
            paragraph.textContent = `Площадь квадрата ${area} периметр квадрата ${perimeter}`;
            checkIsNaN(area, perimeter, null, function () {
                clearValueAndText(side, null, null, paragraph);
            });
        }
    });
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
            clearValueAndText(length, width, null, paragraph);
        } else if (length.value === width.value) {
            alert('Длина и ширина не могут быть равны у прямоугольника');
            clearValueAndText(length, width, null, paragraph);
        } else {
            let area = length.value * width.value;  // площадь
            let perimeter = 2 * (length.value + width.value);  // периметр
            paragraph.textContent = `Площадь прямоугольника ${area} периметр прямоугольника ${perimeter}`;
            checkIsNaN(area, perimeter, null, function () {
                clearValueAndText(length, width, null, paragraph);
            });
        }
    });
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
            paragraph.textContent = '';
        } else {
            text.textContent = 'Введите радиус круга';
            paragraph.textContent = '';
        }
    });

    btn.addEventListener('click', function () {
        if (segment.value <= 0) {
            alert('Введите число больше 0');
            clearValueAndText(segment, null, null, paragraph);
        } else if (select.value === 'one') {
            let area = segment.value ** 2 / 4 * 3.14; // площадь через диаметр
            let circumference = 3.14 * segment.value; // длина окружности через диаметр
            paragraph.textContent = `Площадь круга ${area} длина окружности ${circumference}`;
            checkIsNaN(area, circumference, null, function () {
                clearValueAndText(segment, null, null, paragraph);
            });
        } else {
            let area = 3.14 * segment.value ** 2; // площадь через радиус
            let circumference = 3.14 * segment.value * 2; // длина окружности через радиус
            paragraph.textContent = `Площадь круга ${area} длина окружности ${circumference}`;
            checkIsNaN(area, circumference, null, function () {
                return clearValueAndText(segment, null, null, paragraph);
            });
        }
    });
})('#circle');


// 4 Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.

;(function (root) {
    let parent = document.querySelector(root);
    let sideOne = parent.querySelector('#triangleSideOne');
    let sideTwo = parent.querySelector('#triangleSideTwo');
    let sideThree = parent.querySelector('#triangleSideThree');
    let base = parent.querySelector('#triangleBase');
    let height = parent.querySelector('#triangleHeight');
    let select = parent.querySelector('#triangleSelect');
    let threeSides = parent.querySelector('#threeSides');
    let baseAndHeight = document.querySelector('#baseAndHeight');
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');
    threeSides.classList.add('active');

    select.addEventListener('change', function () {
        if (select.value === 'one') {
            threeSides.classList.toggle('active');
            baseAndHeight.classList.toggle('active');
            paragraph.textContent = '';
        } else {
            threeSides.classList.toggle('active');
            baseAndHeight.classList.toggle('active');
            paragraph.textContent = '';
        }
    });

    btn.addEventListener('click', function () {
        if (select.value === 'one') {
            if (sideOne.value <= 0 || sideTwo.value <= 0 || sideThree.value <= 0) {
                alert('Введите числа больше 0');
                clearValueAndText(sideOne, sideTwo, sideThree, paragraph);
            } else {
                let halfPerimeter = (+sideOne.value + +sideTwo.value + +sideThree.value) / 2; // полупериметр
                let area = Math.sqrt(halfPerimeter * (halfPerimeter - sideOne.value) * (halfPerimeter - sideTwo.value) * (halfPerimeter - sideThree.value));
                paragraph.textContent = `Площадь треугольника ${area}`;
                checkIsNaN(area, null, null, function () {
                    return clearValueAndText(sideOne, sideTwo, sideThree, paragraph);
                });
            }
        } else {
            if (base.value <= 0 || height.value <= 0) {
                alert('Введите числа больше 0');
                clearValueAndText(base, height, null, paragraph);
            } else {
                let area = 0.5 * base.value * height.value;  // площадь
                paragraph.textContent = `Площадь треугольника ${area}`;
                checkIsNaN(area, null, null, function () {
                    return clearValueAndText(base, height, null, paragraph);
                });
            }
        }
    });
})('#triangle');

