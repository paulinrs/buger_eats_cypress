import signup from '../pages/SignupPage'
  
describe('Página Home', ()=>{

    it('Devo ir para a tela de cadastro', ()=>{
        cy.visit('/')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    })
})    

describe('Tela de Cadastro', () => {

    beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    })

    it('Cadastro com Sucesso', function () {

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)

    })

    it('CPF incoreto', function () {

        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertErrorShouldBe('Oops! CPF inválido')

    })

    it('Email incorreto', function () {

        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()
        signup.alertErrorShouldBe('Oops! Email com formato inválido.')

    })

    it('CEP incorreto', function () {

        signup.go()
        signup.cepInv(this.deliver.cep_inv)  
        signup.alertErrorShouldBe('Informe um CEP válido')
        signup.submit()
       

    })

    it('Método de entrega não selecionado', function () {

        signup.go()
        signup.method_inv(this.deliver.metodo_entraga)
        signup.submit()
        signup.alertErrorShouldBe('Selecione o método de entrega')
    })

    context('Cadastro em branco', function () {

        const messages = [
            { field: 'Nome', output: 'É necessário informar o nome' },
            { field: 'CPF', output: 'É necessário informar o CPF' },
            { field: 'Email', output: 'É necessário informar o email' },
            { field: 'CEP', output: 'É necessário informar o CEP' },
            { field: 'Número', output: 'É necessário informar o número do endereço' },
            { field: 'Método de entrega', output: 'Selecione o método de entrega' },
            { field: 'CNH', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function(){
            signup.go()
            signup.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} em Branco`, function(){
                signup.alertErrorShouldBe(msg.output)
            })
        })
    })
})