import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

before('Acessar site', () => {
    cy.acessarSite(Cypress.env('email'), Cypress.env('senha'))
    cy.get('.icon-home').should('be.visible')
})


Given('Que sou cliente e desejo incluir produto no carrinho {string}', (produto) => {
    cy.get('#search_query_top').type(produto)
    cy.get('#searchbox > .btn').click()

})

When('Faço a escolha selecionando o produto que desejo', () => {
    cy.get(':nth-child(1) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
})

And('Faço a seleção do tamanho {string}', (tamanho) => {
    cy.get('#group_1').select(tamanho)
})

And('A seleção da cor Yellow', () => {
    cy.get('#color_16').click()
})

And('Clico em adicionar no carrinho', () => {
    cy.get('.exclusive > span').click()
})

Then('É apresentado a tela com a mensagem de produto adicionado no carrinho com sucesso', () => {
    cy.get('.layer_cart_product > h2').should('contain', 'Product successfully added to your shopping cart')
    
})
