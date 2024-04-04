describe('Newsletter Form Testing', () => {
  it('Should validate email input field and display error message on empty submission', () => {
    cy.visit('https://doricy-newslettersignup.netlify.app');
    cy.get('.email-input').should('be.visible');
    cy.get('.form-group > .submit-btn').should('be.visible');

    cy.get('.form-group > .submit-btn').click();
    cy.contains('Email is required').should('be.visible');

    cy.get('.email-input').clear();

    cy.get('.form-group > .submit-btn').click();
    cy.contains('Email is required').should('be.visible');

    cy.get('.email-input').clear().type('doricyj@gmail.com');
    cy.get('.form-group > .submit-btn').click();

    cy.get('.popup').should('be.visible');
    cy.get('.popup > .submit-btn').click();

    cy.get('.popup').should('not.be.visible');
    

    cy.url().should('eq', 'https://doricy-newslettersignup.netlify.app/');

    cy.get('.left > h1').should('be.visible');
  });
});
