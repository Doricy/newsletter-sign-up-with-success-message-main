describe('NewsLetter SignUp Testing', () => {
  it('passes', () => {
    cy.visit('https://doricy-newslettersignup.netlify.app')
    cy.get('.email-input').should('be.visible').and('be.enabled');
    cy.get('.form-group > .submit-btn').should('be.visible').and('be.enabled');

    cy.get('.email-input').type('doricyj@gmail.com');
    cy.get('.form-group > .submit-btn').click();

    cy.get('.popup').should('be.visible');

  })

})