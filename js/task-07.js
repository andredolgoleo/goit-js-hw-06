const input = document.querySelector('input');
const text = document.querySelector('#text');

input.addEventListener('input', e => {
  const item = e.target;

  text.style.fontSize = `${item.value}px`;
});
