// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.

// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputEl = document.getElementById('validation-input');
// console.log(inputEl);

inputEl.addEventListener('blur', onBlurBorder);

function onBlurBorder(event) {
    const inputDataLength = Number(inputEl.dataset.length);
    // console.log(inputDataLength);

    const inputLength = Number(inputEl.value.trim().length);
    // console.log(inputLength);

    if (inputLength === inputDataLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
    if (inputLength !== inputDataLength) {
         inputEl.classList.add('invalid');
     }
}