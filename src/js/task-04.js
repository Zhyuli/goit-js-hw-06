const btnDecrement = document.querySelector('button[data-action="decrement"]');
// console.log(buttonDecrement);

const btnIncrement = document.querySelector('button[data-action="increment"]');
// console.log(buttonIncrement);

const valueEl = document.querySelector('#value');
// console.dir(valueEl);

let counterValue = 0;

// зменшення
btnDecrement.addEventListener('click', function () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

// збільшення
btnIncrement.addEventListener('click', function () {
    counterValue += 1;
    valueEl.textContent = counterValue;
});
