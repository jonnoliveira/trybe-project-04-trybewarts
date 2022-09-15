// SELETORES
const btnLogin = document.getElementById('btn-entrar');
const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnSend = document.getElementById('submit-btn');
const agreeCheck = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const resultCount = document.getElementById('counter');
const evalForms = document.getElementById('evaluation-form');

//
const formData = document.getElementById('form-data');
const nameData = document.getElementById('name-data');
const emailData = document.getElementById('email-data');
const houseData = document.getElementById('house-data');
const familylData = document.getElementById('family-data');
const subjectsData = document.getElementById('subjects-data');
const avalData = document.getElementById('aval-data');
const obsData = document.getElementById('obs-data');
//
const nameForms = document.getElementById('input-name');
const lastNameForms = document.getElementById('input-lastname');
const emailForms = document.getElementById('input-email');
const houseForms = document.getElementById('house');
const familyForms = document.getElementsByName('family');
const subjectsForms = document.getElementsByClassName('subject');
const avalForms = document.getElementsByName('rate');

// FUNÇÃO RESULTADO FORMS

// STACK
function stack() {
  for (let index = 0; index < familyForms.length; index += 1) {
    if (familyForms[index].checked === true) {
      familylData.innerHTML = `${'<strong>Família:</strong>'} ${familyForms[index].value}`;
    }
  }
  return familylData.innerHTML;
}

// AVALIAÇÃO
function avaliation() {
  for (let index = 0; index < avalForms.length; index += 1) {
    if (avalForms[index].checked === true) {
      avalData.innerHTML = `${'<strong>Avaliação:</strong>'} ${avalForms[index].value}`;
    }
  }
  return avalData.innerHTML;
}

// MATÉRIAS
function subjects() {
  let subjectsDataContent = [];
  for (let index = 0; index < subjectsForms.length; index += 1) {
    if (subjectsForms[index].checked === true) {
      subjectsDataContent += `${subjectsForms[index].value}, `;
    }
  }
  subjectsData.innerHTML = `${'<strong>Matérias:</strong>'} ${subjectsDataContent}`;
  return subjectsData.innerHTML;
}

function resultsForms() {
  nameData.innerHTML = `${'<strong>Nome:</strong>'} ${nameForms.value} ${lastNameForms.value}`;
  emailData.innerHTML = `${'<strong>Email:</strong>'} ${emailForms.value}`;
  houseData.innerHTML = `${'<strong>Casa:</strong>'} ${houseForms.value}`;
  obsData.innerHTML = `${'<strong>Observações:</strong>'} ${textArea.value}`;
  avaliation();
  stack();
  subjects();
  evalForms.style.display = 'none';
  formData.style.display = 'block';
}

btnSend.addEventListener('click', resultsForms);

// VERIFICAÇÃO BOTÃO ENTRAR FORM

function validEmailPassword() {
  if (inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', validEmailPassword);

// VERIFICAÇÃO BOTÃO ENVIAR FORM

function validCheckbox() {
  if (agreeCheck.checked === false) {
    btnSend.disabled = true;
  } else {
    btnSend.disabled = false;
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
}
textArea.addEventListener('keyup', counterCaract);

// PREVENT DEFAULT

function preventDef(event) {
  event.preventDefault();
}

btnSend.addEventListener('click', preventDef);
