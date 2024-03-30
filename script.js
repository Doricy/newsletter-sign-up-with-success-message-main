const form = document.getElementById('signup-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!emailInput.value) {
        emailError.textContent = 'Email is required';
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        successMessage.textContent = `Thank you for signing up! Your email ${emailInput.value} has been added to our newsletter list.`;
        successMessage.style.display = 'block';
        emailError.textContent = '';
        emailInput.value = '';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
