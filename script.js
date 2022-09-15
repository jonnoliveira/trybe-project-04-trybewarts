// SELETORES
const btnSend = document.getElementById('btn-enviar');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const validSend = document.getElementById('submit-btn');
const agreeCheck = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const resultCount = document.getElementById('counter');

// VERIFICAÇÃO BOTÃO ENTRAR FORM

function validEmailPassword() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnSend.addEventListener('click', validEmailPassword);

// VERIFICAÇÃO BOTÃO ENVIAR FORM

function validCheckbox() {
  if (agreeCheck.checked === false) {
    validSend.disabled = true;
  } else {
    validSend.disabled = false;
  }
}

agreeCheck.addEventListener('click', validCheckbox);

// VERIFICAÇÃO CONTADOR CARACTERES

function counterCaract() {
  const counter = textArea.value.length;
  const maxCount = textArea.maxLength;
  const count = maxCount - counter;

  if (counter < maxCount) {
    resultCount.innerText = `${count} ${'caracteres restantes.'}`;
  } else if (counter === maxCount) {
    resultCount.innerText = 'Limite de caracteres atingido!';
  }
  console.log(counter);
}
textArea.addEventListener('keyup', counterCaract);
