const form = document.getElementById('signup-form');
const emailInput = document.querySelector('.email-input');
const errorText = document.querySelector('.error-message');
const successMessage = document.getElementById('success-message');
const errorColor = "hsl(4, 100%, 97%)";
const popUp= document.querySelector('.popup');
const container = document.querySelector('.container');



form.addEventListener('submit',submitEventHandler);

function submitEventHandler (event) {
    event.preventDefault();
    if (!emailInput.value) {
        setErrorMessage("Email is required",emailInput,errorText);
    } else if (isValidEmail(emailInput.value) === false) {
        setErrorMessage("Valid email required",emailInput,errorText);
    } else {
        console.log(popUp)
        successMessage.textContent = `A confirmation email has been sent to ${emailInput.value}. Please open it and click the button inside to confirm your subscription.`;
        errorText.textContent = '';
        emailInput.value = '';
        popUp.style.display ='unset';
        container.style.display ='none'; 
    }
}

function dismissPopup(){
    popUp.style.display = 'none';
    container.style.display = 'grid';
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
