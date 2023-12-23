// 01_Practice_JavaScript
// Практика JavaScript


// 2 Математические калькуляторы / Математические калькуляторы на JavaScript

// функции переиспользуется в калькуляторах // оберни эти 2 функ в модуль и как объект экспортируй в window!

// функция проверяет инпуты на корректность введенных данных
// работает независимо от количества элементов в defaultValues так а тут похоже и вовсе параметры по умолчанию не надо передавать, удалил везде при вызове убралд кажись все топ
function checkIsNaN(root, ...rest) {
    let inputs = document.querySelectorAll(`${root} input`);
    let [clearText, setDefaultValues] = rest;
    for (let input of inputs) {
        if (isNaN(input.value) || input.value === '') { // как вариант попробуй тут еще trim
            alert('Вы ввели некорректное значение');
            clearText();
            setDefaultValues();
        }
    }
}

// функция устанавливает значения по умолчанию для value
function setDefaultValues(root, ...rest) {
    let inputs = document.querySelectorAll(`${root} input`);
    for (let i = 0; i < rest.length; i++) {
        inputs[i].value = rest[i];
    }
}

// функция очищает параграф
function clearText(paragraph) {
    paragraph.textContent = '';
}

// 1 Напишите скрипт, который будет находить корни квадратного уравнения.
// Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.


;(function (root) {
    let parent = document.querySelector(root);
    let coefficientOne = parent.querySelector('#coefficientOne');
    let coefficientTwo = parent.querySelector('#coefficientTwo');
    let coefficientThree = parent.querySelector('#coefficientThree');
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');
    let defaultValues = [coefficientOne.value, coefficientTwo.value, coefficientThree.value];

    btn.addEventListener('click', function () {
        let discriminant = (coefficientTwo.value ** 2) - (4 * coefficientOne.value * coefficientThree.value);
        if (discriminant < 0) {
            paragraph.textContent = `Дискриминант: ${discriminant}. У уравнения нет корней`;
        } else if (discriminant === 0) {
            let root1 = (-coefficientTwo.value) / (2 * coefficientOne.value);
            paragraph.textContent = `Дискриминант: ${discriminant}. У уравнения один корень: ${root1}`;
        } else if (discriminant > 0) {
            let root1 = (-coefficientTwo.value + Math.sqrt(discriminant)) / (2 * coefficientOne.value);
            let root2 = (-coefficientTwo.value - Math.sqrt(discriminant)) / (2 * coefficientOne.value);
            paragraph.textContent = `Дискриминант: ${discriminant}. У уравнения два корня: ${root1} и ${root2}`;
        }

        checkIsNaN(root, function () {
            clearText(paragraph);
        }, function () {
            setDefaultValues(root, ...defaultValues);
        });
    });
})('#rootsOfQuadraticEquation');


// 2 Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора:
// квадрат самого большого числа должен быть равен сумме квадратов двух остальных.

;(function (root) {
    let parent = document.querySelector(root);
    let numberOne = parent.querySelector('#numberOne');
    let numberTwo = parent.querySelector('#numberTwo');
    let numberThree = parent.querySelector('#numberThree');
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');
    let defaultValues = [numberOne.value, numberTwo.value, numberThree.value];

    btn.addEventListener('click', function () {
        // получаю максимальное число используя Math.max
        let numberMax = Math.max(numberOne.value, numberTwo.value, numberThree.value).toString();
        // если число отрицательное нужно наоборот получить минимальное
        numberMax < 0 && (numberMax = Math.min(numberOne.value, numberTwo.value, numberThree.value).toString());

        // получаю максимальное число путем сравнений в условиях
        // let numberMax;
        // if (numberOne.value > numberTwo.value && numberOne.value > numberThree.value) {
        //     numberMax = numberOne.value;
        // } else if (numberTwo.value > numberOne.value && numberTwo.value > numberThree.value) {
        //     numberMax = numberTwo.value;
        // } else if (numberThree.value > numberOne.value && numberThree.value > numberTwo.value) {
        //     numberMax = numberThree.value;
        // }

        if (numberMax === numberOne.value) {
            let pythagoreanTriple = (numberMax ** 2) === (numberTwo.value ** 2) + (numberThree.value ** 2);
            checkPythagoreanTriple(pythagoreanTriple);
        } else if (numberMax === numberTwo.value) {
            let pythagoreanTriple = (numberMax ** 2) === (numberOne.value ** 2) + (numberThree.value ** 2);
            checkPythagoreanTriple(pythagoreanTriple);
        } else if (numberMax === numberThree.value) {
            let pythagoreanTriple = (numberMax ** 2) === (numberOne.value ** 2) + (numberTwo.value ** 2);
            checkPythagoreanTriple(pythagoreanTriple);
        }

        checkIsNaN(root, function () {
            clearText(paragraph);
        }, function () {
            setDefaultValues(root, ...defaultValues);
        });

        // вспомогательная функция проверяет числа на тройку Пифагора
        function checkPythagoreanTriple(pythagoreanTriple) {
            paragraph.textContent = pythagoreanTriple ?
                'Числа являются тройкой Пифагора' : 'Числа НЕ являются тройкой Пифагора';
        }
    });
})('#pythagoreanTriple');


// 3 Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.

;(function (root) {
    let parent = document.querySelector(root);
    let numberFactor = parent.querySelector('#numberFactor');
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');
    let defaultValues = [numberFactor.value];

    btn.addEventListener('click', function () {
        let res = [];
        if (numberFactor.value > 0) {
            for (let i = 0; i <= numberFactor.value; i++) {
                getAListOfDivisors(res, i);
            }
        } else if (numberFactor.value < 0) {
            for (let i = +numberFactor.value; i <= 0; i++) {
                getAListOfDivisors(res, i);
            }
        }

        if (+numberFactor.value === 0) {
            alert('Введите больше или меньше 0');
            setDefaultValues(root, ...defaultValues);
            clearText(paragraph);
        }

        checkIsNaN(root, function () {
            clearText(paragraph);
        }, function () {
            setDefaultValues(root, ...defaultValues);
        });
    });

    // вспомогательная функция: получить спискок делителей + выношу повторяющийся функционал
    function getAListOfDivisors(res, i) {
        if (numberFactor.value % i === 0) {
            res.push(` ${i}`);
        }
        paragraph.textContent = `Список делителей этого числа ${res}`;
    }
})('#listOfNumberFactors');


// 4 Даны 2 инпута и кнопка. В инпуты вводятся числа.
// По нажатию на кнопку выведите список общих делителей этих двух чисел.

;(function (root) {
    let parent = document.querySelector(root);
    let numberFactorOne = parent.querySelector('#numberFactorOne');
    let numberFactorTwo = parent.querySelector('#numberFactorTwo');
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');
    let defaultValues = [numberFactorOne.value, numberFactorTwo.value];

    btn.addEventListener('click', function () {

        let res = [];
        let resOne = [];
        let resTwo = [];

        if (numberFactorOne.value > 0) {
            for (let i = 0; i <= numberFactorOne.value; i++) {
                getAListsOfDivisors(resOne, i);
            }
        } else if (numberFactorOne.value < 0) {
            for (let i = +numberFactorOne.value; i <= 0; i++) {
                getAListsOfDivisors(resOne, i);
            }
        }

        if (numberFactorTwo.value > 0) {
            for (let i = 0; i <= numberFactorTwo.value; i++) {
                getAListsOfDivisors(resTwo, i);
            }
        } else if (numberFactorTwo.value < 0) {
            for (let i = +numberFactorTwo.value; i <= 0; i++) {
                getAListsOfDivisors(resTwo, i);
            }
        }
        // крч выношу этот код в функцию и получаю результат 2 раза пока не придумал как это пофиксить
        // function compareNumbersWithZero(inputs, res) {
        //     // console.log(inputs);
        //     for (let input of inputs) {
        //         console.log(input);
        //         if (input > 0) {
        //             for (let i = 0; i <= input; i++) {
        //                 getAListsOfDivisors(res, i);
        //             }
        //         } else if (input < 0) {
        //             for (let i = +input; i <= 0; i++) {
        //                 getAListsOfDivisors(res, i);
        //             }
        //         }
        //     }
        // }
        // compareNumbersWithZero(defaultValues, res);

        if (+numberFactorOne.value === 0 || +numberFactorTwo.value === 0) {
            alert('Введите больше или меньше 0');
            setDefaultValues(root, ...defaultValues);
            clearText(paragraph);
        }

        checkIsNaN(root, function () {
            clearText(paragraph);
        }, function () {
            setDefaultValues(root, ...defaultValues);
        });
    });


    // вспомогательная функция
    function getAListsOfDivisors(res, i) {
        if (numberFactorOne.value % i === 0 && numberFactorTwo.value % i === 0) {
            res.push(` ${i}`);
        }
        paragraph.textContent = `Список делителей этих чисел ${res}`;
    }


})('#listsOfNumberFactors');
