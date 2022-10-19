
describe('Drag and Drop', function () {

    before(function () {
        cy.visit('/drag_and_drop')
    })

    it('deve arrastar o cypress para a caixinha do node', function () {

        //DataTransfer vai ajudar a arrastar o elemento
        const dataTransfer = new DataTransfer()

        //dragstart pegar o elemento
        cy.get('img[alt=Cypress]').trigger('dragstart', { dataTransfer })
        //drop seria o soltar
        cy.get('.nodejs figure[draggable=true]').trigger('drop', { dataTransfer })
    })

    it('deve arrastar o robot para a caixinha do pyton', function () {

        //DataTransfer vai ajudar a arrastar o elemento
        const dataTransfer = new DataTransfer()

        //dragstart pegar o elemento
        cy.get('img[alt="Robot Framework"]').trigger('dragstart', { dataTransfer })
        //drop seria o soltar
        cy.get('.python figure[draggable=true]').trigger('drop', { dataTransfer })
    })
})