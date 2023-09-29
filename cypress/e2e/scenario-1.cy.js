describe('Menggunakan command login pada before() hook saja', function(){
	
	let username = Cypress.env('username')
	let password = Cypress.env('password')

	before(function(){
		cy.log('before() running')
		cy.login(username, password) //hanya 1 command login
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

})