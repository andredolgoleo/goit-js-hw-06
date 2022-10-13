const form = document.querySelector('.login-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const {elements: { email, password } } = e.target;

  if (!email.value || !password.value) {
    alert('Fill every input');
    return;
  }

  const userInfo = {
    email: email.value,
    password: password.value,
  };

  console.log(userInfo);
  e.target.reset();
});
