
describe('Suite de testes', function () {

    before(function () {
        cy.log('Aqui temos algo que roda antes de TODOS os testes')
    })
    beforeEach(function () {
        cy.log('Aqui temos algo que roda antes de CADA teste')
    })

    it('teste 1', function () {
        cy.log('testando o teste 1')

    })

    after(function () {
        cy.log('Aqui temos algo que roda depois de TODOS os testes')
    })
    afterEach(function () {
        cy.log('Aqui temos algo que roda depois de CADA teste')
    })
})