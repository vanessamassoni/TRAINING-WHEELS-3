

it('deve exibir a home page', function(){
    //visitar uma pagina
    cy.visit('/')
    //assert do titulo
    cy.title().should('eq', 'Training Wheels | QAninja')

    //cy.get('img[src*=productNameIM]').should('be.visible')

})

