// 01_Practice_JavaScript
// Практика JavaScript


// 1 Калькуляторы фигур / Калькуляторы фигур на JavaScript


// 1 Сделайте калькулятор, который будет находить площадь и периметр квадрата.
//
;(function (root) {
    let parent = document.querySelector(root);
    let side = parent.querySelector('#squareSideOne'); // сторона
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');

    btn.addEventListener('click', function () {
        let area = side.value * side.value;  // площадь
        let perimeter = side.value * 4;  // периметр
        paragraph.textContent = `Площадь квадрата ${area} периметр квадрата ${perimeter}`;
    });
    // side = perimeter / 4;  // сторона

    // console.log(`Площадь квадрата ${area} периметр квадрата ${perimeter}`);
})('#square');

// let side = 5; // сторона
// let area // площадь
// let perimeter; // периметр
//
// function calcAreaAndPerimeter() {
//     console.log(side);
//     // side = perimeter / 4;  // сторона
//     area = side * side;  // площадь
//     perimeter = side * 4  // периметр
//
//     console.log(`Площадь квадрата ${area} периметр квадрата ${perimeter}`);
// }

// calcAreaAndPerimeter();