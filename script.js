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

const btnSend = getById('submit-btn');
const checkBox = getById('agreement');

checkBox.addEventListener('change', (event) => {
  const clicked = event.target.checked;
  if (clicked) {
    btnSend.removeAttribute('disabled');
  } else {
    btnSend.disabled = true;
  }
});

const submitButton = document.querySelector('#submit-btn');
const agreementCheckbox = document.querySelector('#agreement');

agreementCheckbox.addEventListener('change', (event) => {
  const isChecked = event.target.checked;

  if (isChecked) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.disabled = true;
  }
});
