const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit',submitEventHandler);

function submitEventHandler (event) {
    event.preventDefault();
    if (!emailInput.value) {
        emailError.textContent = 'Email is required';
    } else if (isValidEmail(emailInput.value) === false) {
        emailError.textContent = 'Valid email required';
    } else {
        successMessage.textContent = `Thank you for signing up! Your email ${emailInput.value} has been added to our newsletter list.`;
        successMessage.style.display = 'block';
        emailError.textContent = '';
        emailInput.value = '';
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
