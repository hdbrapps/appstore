const codeInput = document.getElementById('code-input');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

// Função para redirecionar para a página de login após 1 minuto
function redirectBackToLogin() {
  localStorage.removeItem('lastVisit');
  window.location.href = 'index.html';
}

// Verifica se a senha foi salva anteriormente
const savedCode = localStorage.getItem('savedCode');
if (savedCode) {
  codeInput.value = savedCode;
}

// Trata a submissão do formulário
function handleSubmit() {
  const code = codeInput.value.trim();
  if (code === '') {
    errorMessage.innerText = 'Campo vazio';
    codeInput.classList.add('invalid');
    return;
  }
  if (code !== 'cavalodetroia') {
    errorMessage.innerText = 'Código inválido';
    codeInput.classList.remove('valid');
    codeInput.classList.add('invalid');
    return;
  }

  // Salva a senha digitada pelo usuário
  localStorage.setItem('savedCode', code);

  // Limpa as mensagens de erro e sucesso
  errorMessage.innerText = '';
  successMessage.classList.remove('hidden');
  codeInput.classList.remove('invalid');
  codeInput.classList.add('valid');

  // Armazena a hora em que o usuário acessou a página principal
  localStorage.setItem('lastVisit', new Date().getTime());

  // Redireciona para a página principal
  window.location.href = 'site.html';
}

// Trata o clique no botão de submissão
submitButton.addEventListener('click', handleSubmit);

// Trata a tecla Enter no campo de senha
codeInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    handleSubmit();
  }
});

// Verifica se o usuário deve ser redirecionado para a página de login
const lastVisit = localStorage.getItem('lastVisit');
if (lastVisit) {
  const timeElapsed = new Date().getTime() - lastVisit;
  if (timeElapsed > 60000) {
    redirectBackToLogin();
  } else {
    setTimeout(redirectBackToLogin, 60000 - timeElapsed);
  }
}
