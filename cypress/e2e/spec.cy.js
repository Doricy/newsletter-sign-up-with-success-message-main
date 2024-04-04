describe('NewLetter Form Testing', () => {
  it('passes', () => {
    cy.visit('https://doricy-newslettersignup.netlify.app')

    cy.get('.email-input').should('be.visible');
    cy.get('.form-group > .submit-btn').should('be.visible');

    cy.get('.email-input').type('doricyj@gmail.com');
    cy.get('.form-group > .submit-btn').click();


  })
})