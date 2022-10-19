

it('deve selecionar uma unica opção', function(){
    //visitar uma pagina
    cy.visit('/apps/select2/index.html')

    cy.get('.select2-selection--single').click()

    cy.contains('.select2-results__option', 'Cypress').click()
    


})

it('deve selecionar multipla opções', function(){
    //visitar uma pagina
    cy.visit('/apps/select2/index.html')

    const frameworks = [
        'Cypress',
        'Robot Framework',
        'Protractor'
    ]

    frameworks.forEach(function(f){
        cy.get('.select2-selection--multiple').click()

        cy.contains('.select2-results__option', f).click()
    })

    


})