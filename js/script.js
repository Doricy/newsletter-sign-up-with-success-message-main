const form = document.getElementById('signup-form');
const emailInput = document.querySelector('.email-input');
const errorText = document.querySelector('.error-message');
const successMessage = document.getElementById('success-message');
const errorColor = "hsl(4, 100%, 97%)";

form.addEventListener('submit',submitEventHandler);

function submitEventHandler (event) {
    event.preventDefault();
    if (!emailInput.value) {
        setErrorMessage("Email is required",emailInput,errorText);
    } else if (isValidEmail(emailInput.value) === false) {
        setErrorMessage("Valid email required",emailInput,errorText);
    } else {
        successMessage.textContent = `Thank you for signing up! Your email ${emailInput.value} has been added to our newsletter list.`;
        successMessage.style.display = 'block';
        errorText.textContent = '';
        emailInput.value = '';
    }
}

function setErrorMessage(errorMessage,element,errorElement){
    errorElement.textContent = errorMessage;
    element.style.backgroundColor = errorColor;
    element.style.border = `1px solid hsl(4, 100%, 67%)`;
    element.style.color = "hsl(4, 100%, 67%)";
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
