const code = 'cavalodetroia';

const codeInput = document.getElementById('code-input');
const submitButton = document.getElementById('submit-button');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

submitButton.addEventListener('click', () => {
  if (codeInput.value === code) {
    codeInput.classList.remove('invalid');
    codeInput.classList.add('valid');
    errorMessage.innerText = '';
    successMessage.classList.remove('hidden');
    window.location.href = 'site.html';
  } else {
    codeInput.classList.remove('valid');
    codeInput.classList.add('invalid');
    errorMessage.innerText = 'Código inválido';
    successMessage.classList.add('hidden');
  }
});
