function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const boxWrapper = document.querySelector('#boxes');
const controller = document.querySelector('#controls');

controller.addEventListener('click', e => {
  const item = e.target;
  const input = document.querySelector('input');

  if (item.tagName !== 'BUTTON') {
    return;
  };

  if (item.hasAttribute('data-create')) {
    createBoxes(input.value);
    return;
  }

  destroyBoxes();
})

let width = 30;
let height = 30;

function createBoxes(amount) {


  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    const countOfBoxes = boxWrapper.childElementCount;

    if (countOfBoxes > 0) {
      width += 10;
      height += 10;
    };

    div.style.width = `${width}px`;
    div.style.height = `${height}px`;

    div.style.backgroundColor = getRandomHexColor();
    boxWrapper.insertAdjacentElement('beforeEnd', div);
  };
};

function destroyBoxes() {
  boxWrapper.innerHTML = '';
  width = 30;
  height = 30;
};
