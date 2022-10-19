

it('selecionar bucky por id', function(){
    //visitar uma pagina
    cy.visit('/select')
    //função select para selecionar o elemento
    cy.get("#avengerList").select('Bucky')
        .should('have.value', '2')


})
it('selecionar sem id', function(){
    //visitar uma pagina
    cy.visit('/select')
    
    cy.contains('option', 'Selecione um personagem')
    .parent().select('Tony Stark')
    .should('have.value', '3')


})