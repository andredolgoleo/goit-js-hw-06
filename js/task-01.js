const categories = document.querySelector('#categories');

console.log(`Number of categories: ${categories.childElementCount}`);

const categoriesItemsArr = [...document.querySelectorAll('.item')];

categoriesItemsArr.forEach(item => (
  console.log(`
  Category: ${item.firstElementChild.innerText}
  Elements: ${item.lastElementChild.childElementCount}
  `
  )
));