Feature: Realizar busca de produtos

    Feature Realizar busca de produtos

    Scenario: Realizar busca de produtos
    Given Que sou cliente e desejo realizar busca de um produto
    When Quando estou na tela inicial faço a inclusão do produto "Printed Chiffon Dress"
    And Realizo o clique no botão buscar
    Then Sou direcionado para a tela com sucesso
