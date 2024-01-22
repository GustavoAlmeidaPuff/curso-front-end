const form = document.getElementById('register-form');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordError = document.getElementById('password-error');

form.addEventListener('submit', function(event) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = 'As senhas não coincidem.' ;
    event.preventDefault();
  } else {
    passwordError.textContent = '';
  }
});