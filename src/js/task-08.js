const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // zapobiegamy domyślnej akcji formularza

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // Sprawdzamy, czy pola są uzupełnione
  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Wypełnij wszystkie pola formularza!');
    return; // przerywamy działanie funkcji, jeśli pola nie są uzupełnione
  }

  // Tworzymy obiekt z danymi z formularza
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData); // wyświetlamy obiekt w konsoli

  loginForm.reset(); // czyszczenie formularza
});