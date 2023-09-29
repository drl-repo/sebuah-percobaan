// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  
  cy.session('loginByUi', () => {
   		
		cy.visit('/login')

      cy.get('#onetrust-reject-all-handler', { timeout: 12000 }).click()  
      
    	cy.get('#username').type(username)
    	cy.get('#password').type(password)
    	cy.get('#login_button').click()
    	cy.url().should('contain', '/u/'+username)
  })

})

Cypress.Commands.add('iHaveLoggedIn', () => {
  
  cy.visit('/u/'+Cypress.env('username'))
  cy.get('.user > a > span')
    .invoke('attr','class')
    .should('contain','avatar')

  /* 
  biasanya untuk pengecekan login atau tidak 
  cukup menggunakan pengecekan cookie session exist
  cy.getCookie('my-session-cookie').should('exist')
  akan tetapi pada case tmdb, cookie tmdb.session selalu exist
  baik diakses sebagai user yg sedang login, atau diakses tanpa login (guest)
  mungkin login atau tidaknya ditentukan dari value cookie tadi, mungkin!
  
  sehingga kita memilih untuk assert user avatar sebagai pengecekan apakah 
  statusnya login atau tidak
  */
  
  
})