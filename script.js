const getById = (string) => document.getElementById(string);

const form = getById('formulario');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailFixed = getById('input-fixed-email').value;
  const password = getById('input-password').value;
  if (emailFixed === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
