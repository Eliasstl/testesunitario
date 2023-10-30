class CarrinhoDeCompras {
    constructor() {
      this.itens = [];
    }
  
    adicionarItem(item) {
      this.itens.push(item);
    }
  
    removerItem(item) {
      const index = this.itens.indexOf(item);
      if (index !== -1) {
        this.itens.splice(index, 1);
      }
    }
  
    calcularTotal() {
      return this.itens.reduce((total, item) => total + item.preco, 0);
    }
  
    obterItens() {
      return this.itens;
    }
  }
  
  module.exports = CarrinhoDeCompras; // Exporta a classe para ser usada nos testes
  