class Client {
  name;
  cpf;
}

class ContaCorrente {
  agencia;
  // A convenção adota underline (_) à frente de um atributo, isso significa que ele é privado
  _saldo = 0;
  // #saldo = 0 https://github.com/tc39/proposal-class-fields#private-fields

  // Método sacar
  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  // Método depositar
  // depositar(valor) {
  //   if (valor > 0) {
  //     this._saldo += valor;
  //     console.log(this._saldo);
  //   }
  // }
  depositar(valor) {
    if (valor <= 0) return;

    this._saldo += valor;
  }
}

//Aqui eu crio um cliente
const client1 = new Client();

// Dados iniciais para abertura da conta
client1.name = "Pereira";
client1.cpf = 58788687090;

const contaCorrentePereira = new ContaCorrente();
contaCorrentePereira.agencia = 1001;

// Ações feitas na conta do Pereira
console.log(`Cliente: ${client1.name}`);

//Aqui eu chamei o método depositar na conta contaCorrentePereira
contaCorrentePereira.depositar(100);

contaCorrentePereira.depositar(200);
contaCorrentePereira.depositar(200);

const valorSacado = contaCorrentePereira.sacar(50);
console.log(`Saque: R$ ${valorSacado}`);

console.log(`Saldo: R$ ${contaCorrentePereira._saldo}`);

console.log(contaCorrentePereira);
