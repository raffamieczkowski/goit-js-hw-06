const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
  const value = event.target.value;
  const expectedLength = event.target.dataset.length;

  if (value.length === Number(expectedLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});