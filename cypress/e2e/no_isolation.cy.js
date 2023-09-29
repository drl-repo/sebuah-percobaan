/*
NOTE:
This scenario will work if you disable testIsolation on your config (by set it to false)
and don't forget to re-opening your test browser/test spec file

*/

describe('Disable isolation so we can Use cy.login() once in before hook for all test case', function(){
	
	let username = Cypress.env('username')
	let password = Cypress.env('password')

	before(function(){
		cy.log('before() running')
		cy.login(username, password)
		//action clear list favorite (butuh auth login)
		cy.iHaveLoggedIn()
		
	})

	beforeEach(function(){
		cy.log('beforeEach() running')
	})

	it('TC 1 - Add movie to favorite (butuh auth login)', function(){
		cy.log('TC 1 running')
		cy.iHaveLoggedIn()

	})

	it('TC 2 - Can add movie to favorite more than once (butuh auth login)', function(){
		cy.log('TC 2 running')
		cy.iHaveLoggedIn()
	})
	
	it('Need more test case to make sure this behavior? its okey ', function(){
		cy.log('TC 3 running')
		cy.iHaveLoggedIn()
	})

})
