

it('deve logar com sucesso', function(){
    cy.visit('/login')
    //# o cypress vai buscar pelo ID
    cy.get('#nickId').type('papitorocks')
    cy.get('#passId').type('pwd123')

    cy.get('button[type=submit]').click()

    cy.get('h3[class^="title"]')
        .should('have.text', 'Olá Papito, bem-vindo ao Orkut')

})