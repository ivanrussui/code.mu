// Псевдомассивы


// 44) Введение / Псевдомассивы в JavaScript
//
// Кроме массивов в JavaScript есть объекты, которые похожи на массивы, но не поддерживают все их возможности.
// Такие объекты называются псевдомассивами.
//
// Псевдомассивы чаще всего возникают при работе с DOM элементами. Давайте посмотрим на примере. Пусть у нас есть абзацы:
// <p></p>
// <p></p>
// <p></p>
// <p></p>
// <p></p>
//
// Давайте получим наши абзацы в переменную:
// let elems = document.querySelectorAll('p');
//
// В переменной elems будет содержаться псевдомассив:
// console.log(elems); // это псевдомассив
//
// В следующих уроках мы разберемся с особенностями псевдомассивов,
// рассмотрим в чем они похожи на обычные массивы, и в чем отличаются.


// 45) Сходство с массивами / Сходство с массивами в JavaScript
//
// Давайте посмотрим, в чем псевдомассивы схожи с обычными массивами.
//
// Индексы
// К элементам псевдомассива, как и к элементам обычного массива, можно обратиться по их номеру:
// console.log(elems[0]);
// console.log(elems[1]);
// console.log(elems[2]);
//
// Длина
// Можно также узнать количество элементов с помощью свойства length:
// console.log(elems.length);
//
// Цикл
// Можно перебрать элементы псевдомассива циклом:
// for (let elem of elems) {
// 	console.log(elem);
// }


// Практические задачи
//
// 1 Даны абзацы:
//
// let elems = document.querySelectorAll('p');
//
// Проверьте для переменной elems описанные возможности псевдомассивов.

// console.log(elems[0]);
// console.log(elems[1]);
// console.log(elems[2]);
//
// console.log(elems.length);
//
// let i = 0;
// for (const elem of elems) {
//     console.log(elem.textContent = 'text' + i++);
// }


// 46) Отличия / Отличия от массивов в JavaScript
//
// Хотя псевдомассивы и похожи на массивы, но все же это обычные объекты.
// У них нет методов массивов, таких как map, join, slice.
//
// К примеру, если попытаться взять срез из DOM элементов, то это так просто не получится:
// console.log(elems.slice(1, 3)); // будет ошибка

// 1 Даны абзацы:
// let elems = document.querySelectorAll('p');
//
// Проверьте, будут ли работать методы массивов для переменной elems.
// console.log(elems.push('h2'));
// console.log(elems.slice(1, 3));
// console.log(elems.join(''));


// 47) Проверка на массив / Проверка на массив в JavaScript
//
// Существует специальный метод Array.isArray, с помощью которого можно проверить переменную на то,
// содержит ли она настоящий массив или нет. Давайте проверим работу метода.
//
// Массив:
// let test = [1, 2, 3];
// let res  = Array.isArray(test);
// console.log(res); // выведет true
//
// Объект:
// let test = {a: 1, b: 2, c: 3};
// let res  = Array.isArray(test);
// console.log(res); // выведет false
//
// Примитив:
// let test = 'abcde';
// let res  = Array.isArray(test);
// console.log(res); // выведет false
//
// Псевдомассив:
// let test = document.querySelectorAll('p');
// let res  = Array.isArray(test);
// console.log(res); // выведет false

// 1 Дан двухмерный массив:
// let test = [
// 	[1, 2, 3],
// 	{a: 1, b: 2, c: 3},
// 	[3, 4, 5],
// 	{x: 1, y: 2, z: 3},
// ];
//
// Переберите этот массив циклом и для каждого элемента проверьте, массив он или нет.
//
// for (const testElement of test) {
//     console.log(Array.isArray(testElement));
// }


// 48) Преобразование к массиву / Преобразование к массиву в JavaScript
//
// Пусть у нас есть псевдомассив абзацев:
// let elems = document.querySelectorAll('p');
//
// Давайте преобразуем его в обычный массив.
//
// Способ первый
// Самое очевидное, что можно сделать, это перебрать наш псевдомассив циклом, формируя в этом цикле новый массив:
// let arr = [];
//
// for (let elem of elems) {
// 	arr.push(elem);
// }
//
// Способ второй
// Можно воспользоваться деструктуризацией:
// let arr = [...elems];
//
// Способ третий
// Можно воспользоваться методом Array.from:
// let arr = Array.from(elems);

// 1 Каким-нибудь способом получите псевдомассив элементов. Преобразуйте его в массив тремя описанными способами.
//
// let elems = document.querySelectorAll('p');
//
// let arr1 = [];
// for (const elem of elems) {
//     arr1.push(elem);
// }
//
// let arr2 = [...elems];
//
// let arr3 = Array.from(elems)
//
// console.log(Array.isArray(arr1));
// console.log(Array.isArray(arr2));
// console.log(Array.isArray(arr3));

// 2 Даны абзацы:
//
// let elems = document.querySelectorAll('p');
//
// С помощью метода slice получите все абзацы, кроме первого и последнего.
//
// let arr = [...elems].slice(1, -1);
// console.log(arr);


// 49) Типы псевдомассивов / Типы псевдомассивов в JavaScript
//
// Псевдомассивы бывают различных типов. Тип зависит от способа получения.
//
// В следующем примере мы получим коллекцию одного типа:
// let elems = document.querySelectorAll('p');
// console.log(elems); // NodeList
//
// А следующем примере - коллекцию другого типа:
// let elems = document.getElementsByTagName('p');
// console.log(elems); // HTMLCollection

// 1 Проверьте, какой тип коллекции будет в свойстве childNodes.
//
// console.log(document.querySelector('div').childNodes); // NodeList
// console.log(document.querySelector('.div').childNodes); // NodeList
// console.log(document.querySelector('#div').childNodes); // NodeList
// console.log(document.getElementById('div').childNodes); // NodeList

// 2 Проверьте, какой тип коллекции будет в свойстве children.
//
// console.log(document.querySelector('div').children); // HTMLCollection
// console.log(document.querySelector('.div').children); // HTMLCollection
// console.log(document.querySelector('#div').children); // HTMLCollection
// console.log(document.getElementById('div').children); // HTMLCollection

// 3 Проверьте, какой тип коллекции будет получен через метод getElementsByClassName.
//
// console.log(document.getElementsByClassName('p')); // HTMLCollection


// 50) Разница между типами / Разница между типами псевдомассивов в JavaScript
//
// Разница между двумя типами псевдомассивов в различном поведении при изменении DOM элементов.
// Пусть, к примеру, мы получили коллекцию абзацев в виде HTMLCollection и в виде NodeList.
// Затем мы создадим и добавим еще один абзац в наш DOM.
// В этом случае он автоматически появится в HTMLCollection, но коллекция NodeList останется без изменений.
//
// Давайте посмотрим на примере. Пусть у нас будет див, а в нём абзацы.
// Получим наш див и одни и те же абзацы в виде коллекций двух разных типов:
// let parent = document.querySelector('div');
// let elems1 = document.getElementsByTagName('p'); // HTMLCollection
// let elems2 = document.querySelectorAll('p');     // NodeList
//
// Добавим еще один абзац в наш див:
// let p = document.createElement('p');
// parent.append(p);
//
// В результате одна из коллекций изменится, а вторая - нет:
// console.log(elems1); // 4 абзаца - с новым
// console.log(elems2); // 3 начальных абзаца

// 1 Проверьте, как будет вести себя свойство children при добавлении нового элемента.
//
let div = document.querySelector('div');

let p = document.createElement('p');
div.append(p)

console.log(div.children); // 6 абзацев - с новым

// 2 Проверьте, как будет вести себя свойство childNodes при добавлении нового элемента.
//
console.log(div.childNodes); // 6 абзацев - с новым
