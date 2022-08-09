import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";


before('Acessar site', () => {
    cy.acessarSite(Cypress.env('email'), Cypress.env('senha'))
})

Given('Que sou cliente e desejo realizar busca de um produto', () => {
    cy.get('.icon-home').should('be.visible')
})

When('Quando estou na tela inicial faço a inclusão do produto {string}', (produto) => {
    cy.get('#search_query_top').type(produto)
})

And('Realizo o clique no botão buscar', () => {
    cy.get('#searchbox > .btn').click()
})

Then('Sou direcionado para a tela com sucesso', () => {
    cy.get('.lighter').should('contain', 'Printed Chiffon Dress')
    cy.get('#search_query_top').clear()    
})
