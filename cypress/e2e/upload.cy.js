
it('deve fazer o upload da minha foto', function () {
    //visitar uma pagina
    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/cnh-digital.jpg'
    
    //selectFile é uma função que consegue clicar e escolher a imagem
    cy.get('input[name=file]').selectFile(imageFile, {force:true})

    cy.get('input[value=Upload]').click()

    cy.get('img[src="/uploads/papito.jpg"', {timeout:7000})
    .should('be.visible')



})