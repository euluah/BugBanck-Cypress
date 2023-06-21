import { ELEMENTS } from "./elements"

var Chance = require('chance');
var chance = new Chance();
class Registrar {

    verificaBotaoRegistrar (){
        cy.get(ELEMENTS.botaoRegistrar).should('be.visible')
    }

    clicaBotaoRegistrar (){
        cy.get(ELEMENTS.botaoRegistrar).click()
    }

    insereCampoEmail (){
        cy.get(ELEMENTS.campoEmail).type(chance.email(), {force:true})
    }

    insereCampoNome (){
        cy.get(ELEMENTS.campoNome).type(chance.name_prefix(), {force:true})
    }
    insereCampoSenha (){
        cy.get(ELEMENTS.campoSenha).type('1234',  {force:true})
    }
    insereCampoConfirmaSenha (){
        cy.get(ELEMENTS.campoConfirmaSenha).type('1234',{force:true})
    }
    habilitaContaSaldo (){
        cy.get (ELEMENTS.botaoHabilitaSaldo).click({force:true})
    }
}

export default new Registrar()