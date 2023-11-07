const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');
// console.log(ingredientsEl);


const ingredientsList = ingredients.map((ingridient) => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingridient;
  itemEl.classList.add('itemEl');
  return itemEl;
});
ingredientsEl.append(...ingredientsList);
