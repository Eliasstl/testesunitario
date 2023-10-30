# Projeto de Testes Unitários

Este repositório contém testes unitários para duas classes principais: `CarrinhoDeCompras` e `ContaBancaria`. Esses testes foram desenvolvidos para garantir o funcionamento adequado das funcionalidades de cada classe.

## CarrinhoDeCompras

A classe `CarrinhoDeCompras` é responsável por gerenciar um carrinho de compras. Ela oferece as seguintes funcionalidades:

- Adicionar itens ao carrinho.
- Remover itens do carrinho.
- Calcular o valor total dos itens no carrinho.

### Testes

O projeto inclui uma suíte de testes para a classe `CarrinhoDeCompras` que verifica as seguintes funcionalidades:

- Adicionar itens ao carrinho.
- Remover itens do carrinho.
- Calcular o valor total do carrinho corretamente.
- Calcular o valor total do carrinho após a remoção de itens.

## ContaBancaria

A classe `ContaBancaria` é responsável por gerenciar contas bancárias. Ela oferece as seguintes funcionalidades:

- Criar uma conta com saldo inicial.
- Realizar depósitos na conta.
- Realizar saques da conta.

### Testes

O projeto também inclui uma suíte de testes para a classe `ContaBancaria` que verifica as seguintes funcionalidades:

- Criar uma conta com saldo inicial.
- Garantir que não seja possível criar uma conta com saldo inicial negativo.
- Realizar depósitos válidos na conta.
- Garantir que depósitos com valor zero ou negativo não sejam permitidos.
- Realizar saques válidos da conta.
- Garantir que saques com valor zero ou negativo não sejam permitidos.
- Garantir que saques não sejam permitidos se o saldo for insuficiente.
- Permitir saques até o limite do saldo.

Esses testes unitários são essenciais para assegurar a confiabilidade e o correto funcionamento das funcionalidades dessas classes em seu projeto.

Certifique-se de executar esses testes regularmente para garantir que seu código continue funcionando corretamente à medida que você faz modificações e melhorias em suas classes.
