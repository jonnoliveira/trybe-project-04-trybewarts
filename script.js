// SELETORES
const btnEnviar = document.getElementById('btn-enviar');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');
const validEnviar = document.getElementById('submit-btn');
const agreeCheck = document.getElementById('agreement');

// VERIFICAÇÃO BOTÃO ENTRAR FORM

function validacaoEmailSenha() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
  console.log(inputEmail.value, inputSenha.value);
}

btnEnviar.addEventListener('click', validacaoEmailSenha);

function validarCheckbox() {
  if (agreeCheck.checked === false) {
    validEnviar.disabled = true;
  } else {
    validEnviar.disabled = false;
  }
}

agreeCheck.addEventListener('click', validarCheckbox);
