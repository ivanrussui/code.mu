// 01_Practice_JavaScript
// Практика JavaScript


// 12 Спойлер / Спойлер на JavaScript

// Сейчас мы научимся делать спойлеры. Под спойлерами я понимаю блоки, которые можно развернуть,
// либо свернуть с помощью специальной ссылки.
//
// В следующем примере кода абзац с классом spoiler является спойлером,
// а ссылка с классом toggle должна по клику показывать или скрывать этот спойлер:
//
// <p>
// 	абзац с текстом
// 	<a href="" class="toggle">развернуть</a>
// </p>
// <p class="spoiler">
// 	скрытый спойлер
// </p>
// <p>
// 	абзац с текстом
// </p>
// В тексте, конечно же, может быть много спойлеров и у каждого должна быть своя ссылка:
//
// <p>
// 	абзац с текстом
// </p>
// <p>
// 	абзац с текстом
// 	<a href="" class="toggle">развернуть спойлер 1</a>
// </p>
// <p class="spoiler">
// 	скрытый спойлер 1
// </p>
// <p>
// 	абзац с текстом
// </p>
// <p>
// 	абзац с текстом
// 	<a href="" class="toggle">развернуть спойлер 2</a>
// </p>
// <p class="spoiler">
// 	скрытый спойлер 2
// </p>
// <p>
// 	абзац с текстом
// </p>
// Очевидно, что ссылку для разворачивания и сам спойлер надо как-то связать. Можно придумать различные варианты,
// но в данном случае я предлагаю сделать по местоположению: скажем, что ссылка с классом toggle открывает или
// закрывает элемент с классом spoiler, расположенный сразу под родителем этой ссылки.
//
// Пусть спойлер по умолчанию будет скрыт, а если мы хотим его показать - будем давать ему класс active.
// Напишем соответствующий CSS код:
//
// .spoiler:not(.active) {
// 	display: none;
// }


// 1 Скопируйте себе приведенный HTML и CSS коды. Реализуйте описанную работу спойлеров.

let links = document.querySelectorAll('.toggle');

// 1 вариант
// for (let link of links) {
//     link.setAttribute('href', '#');
//     link.addEventListener('click', function () {
//         let spoiler = this.parentElement.nextElementSibling;
//         if (spoiler.matches('.spoiler')) {
//             spoiler.classList.toggle('active');
//         }
//     });
// }

// 2 вариант
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        let spoiler = this.parentElement.nextElementSibling;
        if (spoiler.classList.contains('spoiler')) {
            spoiler.classList.toggle('active');
        }
    });
});

