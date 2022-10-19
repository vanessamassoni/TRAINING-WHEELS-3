
it('deve marcar thor ragnarok', function(){
    //visitar uma pagina
    cy.visit('/radios')
    
    cy.get("input[value=thor3]").click()
        .should('be.checked')


})