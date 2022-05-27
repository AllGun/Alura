class Client {
  name;
  cpf;
}

class ContaCorrente {
  agencia;
  saldo;

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log(this.saldo);
    } else {
      console.log("Saldo insuficiente.");
    }
  }
}

// let valorSadado = 200;

const client1 = new Client(),
  client2 = new Client(),
  client3 = new Client();

// Dados iniciais para abertura da conta
client1.name = "Pereira";
client1.cpf = 58788687090;

client2.name = "Júlia";
client2.cpf = 47860587009;

client3.name = "Ania";
client3.cpf = 92661493069;

const contaCorrentePereira = new ContaCorrente();
contaCorrentePereira.saldo = 0;
ContaCorrente.agencia = 1001;

console.log(contaCorrentePereira.saldo);

// Pereida depositou 100
contaCorrentePereira.saldo = 100;
console.log(contaCorrentePereira.saldo);
contaCorrentePereira.sacar(50);

console.log(client1);
console.log(client2);
console.log(client3);
