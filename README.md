### This project is a Newsletter Sign-Up Form with success message which contains HTML, CSS and JS.

### Overview
Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
- The field is left empty
- The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page.

### Screenshots
https://github.com/Doricy/newsletter-sign-up-with-success-message-main/tree/ffc5d09213fb73f97d49e6a3f0db218709ea4f7d/screenshots

### Links
-Live Site URL: https://doricy-newslettersignup.netlify.app/

### Built with
- CSS custom properties
- Flexbox
- CSS Grid

### Cypress Test on the Newsletter SignUp Form
Test Objective: Test the newsletter signup form functionality to ensure it works as expected.

### Steps:

Open the newsletter signup form page.
Check if the email input field and submit button are visible.
Attempt to submit the form without entering an email address.
Verify that an error message saying "Email is required" appears.
Clear the email input field and repeat the submission attempt to ensure the error message persists.
Enter a valid email address and submit the form.
Verify that a success popup appears.
Dismiss the popup and verify it disappears.
Check if the user is redirected back to the original page.

### Outcome:
The test ensures that the newsletter signup form functions correctly, 
displaying appropriate error messages, showing success popups, and redirecting users accordingly.




