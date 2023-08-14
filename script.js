const getById = (string) => document.getElementById(string);

const form = getById('formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = getById('input-email').value;
  const password = getById('input-password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
