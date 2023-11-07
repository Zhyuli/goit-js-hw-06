function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

const btnChangeColor = document.querySelector('.change-color');
// console.log(btnChangeColor);

const colorEl = document.querySelector('.color');
// console.log(colorEl);

const body = document.body;

const changeColor = () => {
  colorEl.textContent = body.style.backgroundColor = getRandomHexColor();
};

btnChangeColor.addEventListener('click', changeColor);