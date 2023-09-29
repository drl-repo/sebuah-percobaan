describe('How to solve 2 test case above?', function(){
	
	let username = Cypress.env('username')
	let password = Cypress.env('password')

	before(function(){
		cy.log('before() running')
		//sertakan login disini, dipakai untuk clear list favorite
		cy.login(username, password)

		//action clear list favorite (butuh auth login)
		cy.iHaveLoggedIn()
	})

	beforeEach(function(){
		cy.log('beforeEach() running')
		//sertakan login disini, dipakai untuk tiap-tiap test case (yg butuh auth)
		cy.login(username, password)
	})

	it('TC 1 - Add movie to favorite (butuh auth login)', function(){
		cy.log('TC 1 running')
		cy.iHaveLoggedIn()
	})

	it('TC 2 - Can add movie to favorite more than once (butuh auth login)', function(){
		cy.log('TC 2 running')
		cy.iHaveLoggedIn()
	})

})