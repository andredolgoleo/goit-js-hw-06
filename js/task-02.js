const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const categories = document.querySelector('#ingredients');

const liArr = ingredients.map(item => {
  const wrapper = document.createElement('ul');
  const li = document.createElement('li');
  li.innerText = item;
  li.className = 'item';

  wrapper.append(li);

  return wrapper.innerHTML;
});

categories.insertAdjacentHTML('afterbegin', liArr.join(''));
