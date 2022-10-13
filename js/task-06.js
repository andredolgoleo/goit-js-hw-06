const input = document.querySelector('#validation-input');

input.addEventListener('blur', e => {
  const item = e.target;

  if (item.value.length < 6) {
    input.className = 'invalid';
    return;
  };

  input.className = 'valid';
});
