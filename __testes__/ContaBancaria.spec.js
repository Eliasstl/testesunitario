const ContaBancaria = require('../ContaBancaria');

describe('ContaBancaria', () => {
  let conta;

  beforeEach(() => {
    conta = new ContaBancaria(1000);
  });

  test('deve criar uma conta com saldo inicial', () => {
    expect(conta.obterSaldo()).toBe(1000);
  });

  test('não deve criar uma conta com saldo inicial negativo', () => {
    expect(() => new ContaBancaria(-500)).toThrow('O saldo inicial não pode ser negativo.');
  });

  test('deve permitir depósitos válidos', () => {
    conta.deposito(500);
    expect(conta.obterSaldo()).toBe(1500);
  });

  test('não deve permitir depósitos com valor zero ou negativo', () => {
    expect(() => conta.deposito(0)).toThrow('O valor do depósito deve ser maior que zero.');
    expect(() => conta.deposito(-200)).toThrow('O valor do depósito deve ser maior que zero.');
  });

  test('deve permitir saques válidos', () => {
    conta.saque(500);
    expect(conta.obterSaldo()).toBe(500);
  });

  test('não deve permitir saques com valor zero ou negativo', () => {
    expect(() => conta.saque(0)).toThrow('O valor do saque deve ser maior que zero.');
    expect(() => conta.saque(-200)).toThrow('O valor do saque deve ser maior que zero.');
  });

  test('não deve permitir saques maiores que o saldo', () => {
    expect(() => conta.saque(1500)).toThrow('Saldo insuficiente para saque.');
  });

  test('deve permitir saques até o limite do saldo', () => {
    conta.saque(1000);
    expect(conta.obterSaldo()).toBe(0);
  });
});
