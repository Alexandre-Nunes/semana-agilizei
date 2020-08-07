Feature: Cadastro

    Como usuário, desejo acessar a listagem
    Para que possa visualizar meus dados de cadastro.


Scenario: Listagem sem regisdtros
    Given  que o site não possui registros
    When acessar a listagem
    Then devo visualizar a listagem vazia
    
Scenario: Listagem com apenas um registro
    Given  que o site possui apenas um registro
    When acessar a listagem
    Then devo visualizar apenas um registro