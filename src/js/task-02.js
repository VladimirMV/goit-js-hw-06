const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul');

const liEls = ingredients.map(item => {
  let liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = item;
  return liEl;
});

ulEl.append(...liEls);


