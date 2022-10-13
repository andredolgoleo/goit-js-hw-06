let counterValue = 0;

const valueElem = document.querySelector('#value');

const counterContainer = document.querySelector('#counter');

counterContainer.addEventListener('click', e => {
  const item = e.target;


  if (item.tagName !== 'BUTTON') {
    return;
  };

  if (item.innerHTML === '+1') {
    counterValue++;
    valueElem.innerHTML = counterValue;

    return;
  };

  counterValue--;
  valueElem.innerHTML = counterValue;
});

// i used delegation instead of adding two event listener
