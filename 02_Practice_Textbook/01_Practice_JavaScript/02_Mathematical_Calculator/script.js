// 01_Practice_JavaScript
// Практика JavaScript


// 2 Математические калькуляторы / Математические калькуляторы на JavaScript


// функции переиспользуется в калькуляторах
// оберни эти функ в модуль и как объект экспортируй в window, если надо в др файле юзать!

// функция сравнивает значения инпутов с нулем
function compareNumbersWithZero(root, res, getHelperFunction, defaultValues, paragraph) {
    let inputs = document.querySelectorAll(`${root} input`);
    for (let input of inputs) {
        if (input.value > 0) {
            for (let i = 0; i <= input.value; i++) {
                getHelperFunction(res, i);
            }
        } else if (input.value < 0) {
            for (let i = +input.value; i <= 0; i++) {
                getHelperFunction(res, i);
            }
        }
        if (+input.value === 0) {
            alert('Введите больше или меньше 0');
            setDefaultValues(root, ...defaultValues);
            return clearText(paragraph); // если инпута 2 нужен return
        }
    }
}

// функция проверяет инпуты на корректность введенных данных
// работает независимо от количества элементов
function checkIsNaN(root, ...rest) {
    let inputs = document.querySelectorAll(`${root} input`);
    let [clearText, setDefaultValues] = rest;
    for (let input of inputs) {
        let str = input.value.trim();
        if (isNaN(str) || str === '') {
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
    });

    // вспомогательная функция проверяет числа на тройку Пифагора
    function checkPythagoreanTriple(pythagoreanTriple) {
        paragraph.textContent = pythagoreanTriple ?
            'Числа являются тройкой Пифагора' : 'Числа НЕ являются тройкой Пифагора';
    }
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

        compareNumbersWithZero(root, res, getAListOfDivisors, defaultValues, paragraph);

        checkIsNaN(root, function () {
            clearText(paragraph);
        }, function () {
            setDefaultValues(root, ...defaultValues);
        });
    });

    // вспомогательная функция: получить спискок делителей числа
    function getAListOfDivisors(res, i) {
        if (numberFactor.value % i === 0) {
            res.push(i);
        }
        paragraph.textContent = `Список делителей этого числа ${res.join(', ')}`;
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

        compareNumbersWithZero(root, res, getAListOfCommonDivisors, defaultValues, paragraph);

        checkIsNaN(root, function () {
            clearText(paragraph);
        }, function () {
            setDefaultValues(root, ...defaultValues);
        });
    });

    // вспомогательная функция: получить спискок общих делителей чисел
    function getAListOfCommonDivisors(res, i) {
        // вынести отсюда в 1 функцию
        if (numberFactorOne.value % i === 0 && numberFactorTwo.value % i === 0) {
            res.push(i);
        }
        let uniqueArr = res.filter(function (item, index) {
            return res.indexOf(item) === index;
        });
        // let uniqueArr = res.filter((item, index) => res.indexOf(item) === index); // синтаксический сахар
        // вынести досюда в 1 функцию

        paragraph.textContent = `Список делителей этих чисел ${uniqueArr.join(', ')}`;
    }
})('#listsOfNumberFactors');


// 5 Даны 2 инпута и кнопка. В инпуты вводятся числа.
// По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.

;(function (root) {
    let parent = document.querySelector(root);
    let greatestNumberOne = parent.querySelector('#greatestNumberOne');
    let greatestNumberTwo = parent.querySelector('#greatestNumberTwo');
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');
    let defaultValues = [greatestNumberOne.value, greatestNumberTwo.value];

    btn.addEventListener('click', function () {
        let res = [];

        compareNumbersWithZero(root, res, getGreatestCommonDivisor, defaultValues, paragraph);

        checkIsNaN(root, function () {
            clearText(paragraph);
        }, function () {
            setDefaultValues(root, ...defaultValues);
        });
    });

    // вспомогательная функция: наибольший общий делитель чисел
    function getGreatestCommonDivisor(res, i) {
        // вынести отсюда в 1 функцию
        if (greatestNumberOne.value % i === 0 && greatestNumberTwo.value % i === 0) {
            res.push(i);
        }
        let uniqueArr = res.filter((item, index) => res.indexOf(item) === index);
        // вынести досюда в 1 функцию

        // вынести отсюда в 2 функцию
        let max = Math.max(...uniqueArr);
        // если число отрицательное надо сделать min
        max < 0 && (max = Math.min(...uniqueArr));
        // вынести досюда в 2 функцию

        paragraph.textContent = `Наибольший общий делитель ${max}`;
    }
})('#greatestCommonDivisorOfNumbers');


// 6 Даны 2 инпута и кнопка. В инпуты вводятся числа.
// По нажатию на кнопку выведите наименьшее число, которое делится и на одно, и на второе из введенных чисел.

;(function (root) {
    let parent = document.querySelector(root);
    let smallestNumberOne = parent.querySelector('#smallestNumberOne');
    let smallestNumberTwo = parent.querySelector('#smallestNumberTwo');
    let btn = parent.querySelector('button');
    let paragraph = parent.querySelector('p');
    let defaultValues = [smallestNumberOne.value, smallestNumberTwo.value];

    btn.addEventListener('click', function () {
        let res = [];

        compareNumbersWithZero(root, res, getTheSmallestNumberThatIsDivisible, defaultValues, paragraph);

        checkIsNaN(root, function () {
            clearText(paragraph);
        }, function () {
            setDefaultValues(root, ...defaultValues);
        });
    });

    // вспомогательная функция: наименьшее число, которое делится на введенные числа
    function getTheSmallestNumberThatIsDivisible(res, i) {
        // вынести отсюда в 1 функцию
        if (smallestNumberOne.value % i === 0 && smallestNumberTwo.value % i === 0) {
            res.push(i);
        }
        let uniqueArr = res.filter((item, index) => res.indexOf(item) === index);
        // вынести досюда в 1 функцию

        // вынести отсюда в 2 функцию
        let max = Math.max(...uniqueArr);
        // если число отрицательное надо сделать min
        max < 0 && (max = Math.min(...uniqueArr));
        // вынести досюда в 2 функцию

        // возможно вынести досюда в 3 функцию
        let smallestNumber = (smallestNumberOne.value * smallestNumberTwo.value) / max;
        // возможно вынести досюда в 2 функцию

        paragraph.textContent = `Наименьшее число, которое делится на введенные числа ${smallestNumber}`;
    }
})('#smallestNumberThatIsDivisible');
