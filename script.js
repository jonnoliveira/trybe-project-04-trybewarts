// SELETORES
const btnEnviar = document.getElementById('btn-enviar');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');

// VERIFICAÇÃO BOTÃO ENTRAR FORM

function validacaoEmailSenha() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos');
  }
  console.log(inputEmail.value, inputSenha.value);
}
btnEnviar.addEventListener('click', validacaoEmailSenha);
