// 01_Practice_JavaScript
// Практика JavaScript


// 2 Математические калькуляторы / Математические калькуляторы на JavaScript

// функции переиспользуется в калькуляторах // оберни эти 2 функ в модуль и как объект экспортируй в window!
//
// function checkIsNaN(parameterOne, parameterTwo, parameterThree, clearValueAndText) {
//     if (isNaN(parameterOne) || isNaN(parameterTwo) || isNaN(parameterThree)) {
//         alert('Вы ввели некорректное значение');
//         clearValueAndText();
//     }
// }

// function checkIsNaN(parameterOne, parameterTwo, parameterThree, clearText, setDefaultValues) {
function checkIsNaN(...rest) { // в перспективе надо попробовать сделать так чтобы было 2 параметра (инпута)
    let [parameterOne, parameterTwo, parameterThree, clearText, setDefaultValues] = rest
    if (isNaN(parameterOne) || isNaN(parameterTwo) || isNaN(parameterThree)) {
    // if (isNaN(rest)) {
        console.log(rest);
        alert('Вы ввели некорректное значение');
        // clearValueAndText();
        clearText();
        setDefaultValues();
    }
}

function clearValueAndText(parameterOne, parameterTwo, parameterThree, parameterFour) {
    // let defaultValues = ['1', '-6', '9'];
    // parameterOne.value = defaultValues[0];
    // parameterTwo && (parameterTwo.value = defaultValues[1]);
    // parameterThree && (parameterThree.value = defaultValues[2]);
    parameterFour.textContent = '';
    parameterOne.value = '';
    parameterTwo && (parameterTwo.value = '');
    parameterThree && (parameterThree.value = '');
    parameterFour.textContent = '';
}

// функция устанавливает значения по умолчанию для value
function setDefaultValues(root, ...rest) {
    let inputs = document.querySelectorAll(`${root} input`);
    for (let i = 0; i < rest.length; i++) {
        inputs[i].value = rest[i];
    }
}

function clearText(paragraph) {
    paragraph.textContent = ''
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
        // checkIsNaN(coefficientOne.value, coefficientTwo.value, coefficientThree.value, function () {
        //     clearValueAndText(coefficientOne, coefficientTwo, coefficientThree, paragraph);
        // });
        checkIsNaN(coefficientOne.value, coefficientTwo.value, coefficientThree.value, function () {
            clearText(paragraph);
            // clearValueAndText(numberOne, numberTwo, numberThree, paragraph);
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
    // let defaultValues = ['-2', '-4', '-9'];
    let defaultValues = [numberOne.value, numberTwo.value, numberThree.value];

    btn.addEventListener('click', function () {
        // напиши альтернативу используя Math.max
        let numberMax;
        if (numberOne.value > numberTwo.value && numberOne.value > numberThree.value) {
            numberMax = numberOne.value;
        } else if (numberTwo.value > numberOne.value && numberTwo.value > numberThree.value) {
            numberMax = numberTwo.value;
        } else if (numberThree.value > numberOne.value && numberThree.value > numberTwo.value) {
            numberMax = numberThree.value;
        }
        // console.log(numberMax);
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

        checkIsNaN(function () {
            clearText(paragraph);
            // clearValueAndText(numberOne, numberTwo, numberThree, paragraph);
        }, function () {
            setDefaultValues(root, ...defaultValues);
        }, ...defaultValues);
        // setDefaultValues(root, ...defaultValues)


        // вспомогательная функция
        function checkPythagoreanTriple(pythagoreanTriple) {
            paragraph.textContent = pythagoreanTriple ?
                'Числа являются тройкой Пифагора' : 'Числа НЕ являются тройкой Пифагора';
        }
    });
})('#pythagoreanTriple');