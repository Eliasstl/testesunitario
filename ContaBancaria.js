class ContaBancaria {
  constructor(saldoInicial) {
    if (saldoInicial < 0) {
      throw new Error("O saldo inicial não pode ser negativo.");
    }
    this.saldo = saldoInicial || 0;
  }

  deposito(valor) {
    if (valor <= 0) {
      throw new Error("O valor do depósito deve ser maior que zero.");
    }
    this.saldo += valor;
  }

  saque(valor) {
    if (valor <= 0) {
      throw new Error("O valor do saque deve ser maior que zero.");
    }
    if (valor > this.saldo) {
      throw new Error("Saldo insuficiente para saque.");
    }
    this.saldo -= valor;
  }

  obterSaldo() {
    return this.saldo;
  }
}

module.exports = ContaBancaria; // Exporta a classe para ser usada nos testes
