const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', e => {
  const item = e.target;

  if (!item.value) {
    output.innerHTML = 'Anonymous'
    return;
  };

  output.innerHTML = item.value;
});
