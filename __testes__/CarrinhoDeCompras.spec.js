const CarrinhoDeCompras = require('../CarrinhoDeCompras');

describe('CarrinhoDeCompras', () => {
  let carrinho;

  beforeEach(() => {
    carrinho = new CarrinhoDeCompras();
  });

  test('deve adicionar itens ao carrinho', () => {
    carrinho.adicionarItem({ nome: 'Produto 1', preco: 50 });
    carrinho.adicionarItem({ nome: 'Produto 2', preco: 30 });
    expect(carrinho.obterItens()).toHaveLength(2);
  });

  test('deve remover itens do carrinho', () => {
    const item1 = { nome: 'Produto 1', preco: 50 };
    const item2 = { nome: 'Produto 2', preco: 30 };
    carrinho.adicionarItem(item1);
    carrinho.adicionarItem(item2);
    carrinho.removerItem(item1);
    expect(carrinho.obterItens()).toEqual([item2]);
  });

  test('deve calcular o total do carrinho corretamente', () => {
    carrinho.adicionarItem({ nome: 'Produto 1', preco: 50 });
    carrinho.adicionarItem({ nome: 'Produto 2', preco: 30 });
    expect(carrinho.calcularTotal()).toBe(80);
  });

  test('deve calcular o total corretamente com itens removidos', () => {
    const item1 = { nome: 'Produto 1', preco: 50 };
    const item2 = { nome: 'Produto 2', preco: 30 };
    carrinho.adicionarItem(item1);
    carrinho.adicionarItem(item2);
    carrinho.removerItem(item1);
    expect(carrinho.calcularTotal()).toBe(30);
  });
});
