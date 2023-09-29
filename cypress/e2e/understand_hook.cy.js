
describe('Mencoba memahami hook before() dan beforeEach()', function(){
	
	before(function(){
		cy.log('before() running')
	})

	beforeEach(function(){
		cy.log('beforeEach() running')
	})

	it('TC 1 - Add movie to favorite (butuh auth login)', function(){
		cy.log('TC 1 running')
		
	})

	it('TC 2 - Can add movie to favorite more than once (butuh auth login)', function(){
		cy.log('TC 2 running')
	
	})
	
})