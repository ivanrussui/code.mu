// 1 Сделайте чеклист, представляющий собой список дел. Дела можно добавлять, изменять, удалять и помечать сделанными.

const input = document.getElementById('checklist');
const btn = document.querySelector('button');
const list = document.querySelector('ul');

// const data = JSON.parse(localStorage.getItem('checklist'));


// if (!data) {
//     console.log('arr', arr);
//
// }

// const li = document.createElement('li');
// const span = document.createElement('span');
// const button = document.createElement('button');
// const checkbox = document.createElement('input');
//
// span.textContent = input.value;
// button.textContent = 'Remove';
// checkbox.type = 'checkbox';


// const data = JSON.parse(localStorage.getItem('checklist'));


function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('checklist'));

    if (data) {
        // console.log(spans);
        for (const datum of data) {
            // console.log(datum.text);
            // todo пока так потом дулирование кода вынеси
            const li = document.createElement('li');
            const span = document.createElement('span');
            const button = document.createElement('button');
            const checkbox = document.createElement('input');

            button.textContent = 'Remove';
            checkbox.type = 'checkbox';

            li.append(span, button, checkbox);
            list.append(li);

            span.textContent = datum.text;

        }
        return data;
    } else {
        return [];
    }
}

let arr = loadFromLocalStorage();
console.log(arr);

function changeCheckboxStatus(checkbox) {
    console.log(checkbox.checked);
    // checkbox.checked = !checkbox.checked
    // const data = JSON.parse(localStorage.getItem('checklist'));
    //
    // // if (data) {
    // //     const checkboxs = document.querySelectorAll('input[type="checkbox"]')
    // //     console.log(checkboxs);
    // // }

}

const data = JSON.parse(localStorage.getItem('checklist'));
if (data) {
    // todo тут надо реализоваить при смене статуса чекбокса в локалстораж привнести изменения
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    console.log(data);

    for (const checkbox of checkboxes) {
        checkbox.addEventListener('click', function () {
            changeCheckboxStatus(checkbox)
        })
    }

}

function createItem() {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const checkbox = document.createElement('input');

    span.textContent = input.value;
    button.textContent = 'Remove';
    checkbox.type = 'checkbox';

    li.append(span, button, checkbox);
    list.append(li);

    // const status = checkbox.checked;
    return [span];
}


function addItem() {
    if (input.value) {
        const [span] = createItem();

        saveToLocaleStorage(span);
        input.value = '';
    }
}

function saveToLocaleStorage(span) {
    const obj = {id: crypto.randomUUID(), text: `${span.textContent}`, isDone: false};
    // arr.push(obj); // можно так
    arr = [...arr, obj]; // можно так
    console.log(arr);

    localStorage.setItem('checklist', JSON.stringify(arr));
}

btn.addEventListener('click', addItem);
input.addEventListener('keypress', function (e) {
    e.key === 'Enter' && addItem();
});


// const buttons = list.querySelectorAll('button');


