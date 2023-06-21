import registrar from "../support/pages/registrar"

describe('Registro', () => {

    it('Exibição do botão "Registrar" na tela inicial do site', () => {
        cy.visit('/')
        registrar.verificaBotaoRegistrar()
    })
    it('Registro bem-sucedido', () => {
        cy.visit('/')
        registrar.clicaBotaoRegistrar()
        registrar.insereCampoEmail()
        registrar.insereCampoNome()
        registrar.insereCampoSenha()
        registrar.insereCampoConfirmaSenha()
        cy.contains('Cadastrar').click({ force: true })
        cy.contains(/A conta \d+-\d+ foi criada com sucesso/)
    })

    it("Registro bem-sucedido conta com saldo", () => {
        cy.visit('/')
        registrar.clicaBotaoRegistrar()
        registrar.insereCampoEmail()
        registrar.insereCampoNome()
        registrar.insereCampoSenha()
        registrar.insereCampoConfirmaSenha()
        registrar.habilitaContaSaldo()
        cy.contains('Cadastrar').click({ force: true })
        cy.contains(/A conta \d+-\d+ foi criada com sucesso/)
    })
    it('Preenchimento do formulário com campo obrigatório vazio e-mail', () => {
        cy.visit('/')
        registrar.clicaBotaoRegistrar()
        registrar.insereCampoNome()
        registrar.insereCampoSenha()
        registrar.insereCampoConfirmaSenha()
        registrar.habilitaContaSaldo()
        cy.contains('Cadastrar').click({ force: true })
        cy.get('[class="card__register"] .kOeYBn .input__warging').contains('É campo obrigatório')
    });

    it('Preenchimento do formulário com campo obrigatório vazio senha', () => {
        cy.visit('/')
        registrar.clicaBotaoRegistrar()
        registrar.insereCampoEmail()
        registrar.insereCampoNome()
        registrar.insereCampoConfirmaSenha()
        registrar.habilitaContaSaldo()
        cy.contains('Cadastrar').click({ force: true })
        cy.get('[class="card__register"] .kOeYBn .input__warging').contains('É campo obrigatório')
    });
    it('Preenchimento do formulário com campo obrigatório vazio Confirmar Senha', () => {
        cy.visit('/')
        registrar.clicaBotaoRegistrar()
        registrar.insereCampoEmail()
        registrar.insereCampoNome()
        registrar.insereCampoSenha()
        registrar.habilitaContaSaldo()
        cy.contains('Cadastrar').click({ force: true })
        cy.get('[class="card__register"] .kOeYBn .input__warging').contains('É campo obrigatório')
    })

    it('Preenchimento do formulário com campo de senha e confirmação de senha diferentes', () => {
        cy.visit('/')
        registrar.clicaBotaoRegistrar()
        registrar.insereCampoEmail()
        registrar.insereCampoNome()
        cy.get('[class="card__register"] input[name=password]').type('123', {force:true})
        cy.get('[class="card__register"] input[name=passwordConfirmation]').type('1234', {force:true})
        cy.get('[class="card__register"] input[name=passwordConfirmation]').type("124", {force:true})
        cy.contains('Cadastrar').click({ force: true })
        cy.contains('As senhas não são iguais')
    })
})