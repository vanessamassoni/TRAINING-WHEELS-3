
it('exemplo de timeout', function () {
    //visitar uma pagina
    cy.visit('/timeout')

    cy.contains('button', 'Habilita').click()
    //espera por 7 segundos
    //cy.wait(7000)

    //espera até 7 segundos ficar visivel
    
    cy.get('#firstname')
        .should('be.visible')
        .type('Fernando', { timeout: 7000 })


})