// 1) Wait until HTML is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // 2) Select elements
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // 3) Handle submit + prevent page reload
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // 4) Read & trim inputs
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // 5) Validation state
    let isValid = true;
    const messages = [];

    // 6) Username: min 3 chars
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // 7) Email must include '@' and '.'
    if (!(email.includes('@') && email.includes('.'))) {
      isValid = false;
      messages.push('Please enter a valid email that includes "@" and ".".');
    }

    // 8) Password: min 8 chars
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // 9) Show feedback
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745';     // green text
      feedbackDiv.style.backgroundColor = '#d4edda'; // soft green bg
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545';     // red text
      feedbackDiv.style.backgroundColor = '#ffbaba'; // soft red bg
    }
  });
});
