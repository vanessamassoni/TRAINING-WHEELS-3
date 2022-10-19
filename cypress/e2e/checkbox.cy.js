

it('deve marcar os top 5 filmes da marvel', function(){
    //visitar uma pagina
    cy.visit('/checkboxes')
    
    //constante do tipo array(lista de dados com 5 valores)
    const movies = [
        'avengers',
        'cap2',
        'guardians',
        'blackpanther',
        'thor3'
    ]
    //fazer um loop dentro da lista
    //forEach é uma função nativa do javascript para percorrer por uma 
    //lista de dados
    //função recebe a variavel de argumento m
    movies.forEach(function(m){
        cy.get(`input[name=${m}`).click()
        .should('be.checked')
    })
    

})