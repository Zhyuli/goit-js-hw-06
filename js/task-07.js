// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputEl = document.getElementById('font-size-control');
// console.log(inputEl);
inputElEl.value = '10px';


const textEl = document.getElementById('text');
// console.log(textEl);



inputEl.addEventListener('input', changeFontSize);

function changeFontSize(evt) {
    // console.dir(evt.currentTarget.value);
    // console.dir(evt.target);
    textEl.style.fontSize = evt.currentTarget.value + 'px';
}