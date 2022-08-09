Feature: Incluir produtos no carrinho

    Feature Incluir produtos no carrinho

    Scenario: Incluir 1 item do produto no carrinho
    Given Que sou cliente e desejo incluir produto no carrinho "Printed Chiffon Dress"
    When Faço a escolha selecionando o produto que desejo
    And Faço a seleção do tamanho "L"
    And A seleção da cor Yellow
    And Clico em adicionar no carrinho
    Then É apresentado a tela com a mensagem de produto adicionado no carrinho com sucesso